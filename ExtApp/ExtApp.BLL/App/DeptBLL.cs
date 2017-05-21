using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using NHibernate.Criterion;

namespace ExtApp.BLL
{
    /// <summary>
    /// 机构BLL
    /// </summary>
    public class DeptBLL : BaseBLL<Dept>
    {
        /// <summary>
        /// 获取子部门
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public ListResult<DeptTreeNode> GetChildNodes(int PID)
        {
            // 先获取所有数据
            var list = dal.List(null, "Sort", Sort.Asc);

            List<Dept> list1 = null;
            if (PID == 0) // 根节点
            {
                list1 = list.Where(o => o.PDept == null).ToList();

            }
            else // 不是根节点
            {
                list1 = list.Where(o => o.PDept != null && o.PDept.ID == PID).ToList();
            }

            // 添加节点
            var nodes = new List<DeptTreeNode>();
            foreach (var i in list1)
            {
                var node = new DeptTreeNode
                {
                    AddTime = i.AddTime,
                    AddUser = i.AddUser,
                    Code = i.Code,
                    Comment = i.Comment,
                    expandable = false,
                    expanded = i.PDept == null ? true : false,
                    id = i.ID,
                    ID = i.ID,
                    leaf = true,
                    Name = i.Name,
                    PDept = i.PDept,
                    Sort = i.Sort,
                    Status = i.Status,
                    text = i.Name,
                    Type = i.Type
                };
                if (list.Where(o => o.PDept != null && o.PDept.ID == i.ID).Count() > 0) // 有子部门
                {
                    node.expandable = true;
                    node.expanded = i.PDept == null ? true : false;
                    node.leaf = false;
                }
                nodes.Add(node);
            }
            return new ListResult<DeptTreeNode>(200, "数据获取成功！", nodes.Count, nodes);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Add(Dept model)
        {
            // 判断机构名称是否重复
            var query1 = Restrictions.Eq("Name", model.Name);
            ICriterion query2 = null;
            if (model.PDept == null) // 顶级机构
            {
                query2 = Restrictions.Eq("PDept", null);
            }
            else // 不是顶级机构
            {
                query2 = Restrictions.Eq("PDept", new Dept { ID = model.PDept.ID });
            }
            var query = Restrictions.And(query1, query2);
            var count = dal.Count(query);
            if (count > 0)
            {
                return new Result(300, "该机构已经存在！");
            }

            // 查找父节点的Code
            var PCode = "";
            if (model.PDept != null) // 不是顶级机构
            {
                var pdept = dal.Get(model.PDept.ID);
                if (pdept != null)
                {
                    PCode = pdept.Code;
                }
            }

            // 为当前结点生成Code
            var Code = "";
            if (model.PDept == null) // 顶级机构
            {
                var query3 = Restrictions.Eq("PDept", null);
                var dept1 = dal.List(query3, "Code", Sort.Desc).FirstOrDefault();
                if (dept1 == null) // 第一个
                {
                    Code = "001";
                }
                else // 不是第一个
                {
                    Code = StringHelper.ZeroFill((int.Parse(dept1.Code.TrimStart('0')) + 1).ToString(), 3);
                }
            }
            else // 不是顶级机构
            {
                var query3 = Restrictions.Eq("PDept", model.PDept);
                var dept1 = dal.List(query3, "Code", Sort.Desc).FirstOrDefault();
                if (dept1 == null) // 第一个
                {
                    Code = "001";
                }
                else // 不是第一个
                {
                    Code = PCode + StringHelper.ZeroFill((int.Parse(dept1.Code.Substring(PCode.Length, 3).TrimStart('0')) + 1).ToString(), 3);
                }
            }

            // 添加
            model.AddTime = DateTime.Now;
            model.AddUser = AdminHelper.Admin;
            model.Code = Code;
            model.ID = 0;
            return base.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public override Result Edit(Dept model)
        {
            // 判断机构名称是否重复
            var query1 = Restrictions.Eq("Name", model.Name);
            ICriterion query2 = null;
            if (model.PDept == null) // 顶级机构
            {
                query2 = Restrictions.Eq("PDept", null);
            }
            else // 不是顶级机构
            {
                query2 = Restrictions.Eq("PDept", new Dept { ID = model.PDept.ID });
            }
            var query3 = Restrictions.Not(Restrictions.Eq("ID", model.ID));
            var query = Restrictions.And(query1, query2);
            query = Restrictions.And(query, query3);

            var dept1 = dal.Get(query);
            if (dept1 != null)
            {
                return new Result(300, "该机构已经存在！");
            }

            // 保存机构
            var dept = dal.Get(model.ID);
            if (dept == null)
            {
                return new Result(300, "数据不存在！");
            }
            dept.Comment = model.Comment;
            dept.Name = model.Name;
            dept.Sort = model.Sort;
            dept.Status = model.Status;
            dept.Type = model.Type;
            return base.Edit(dept);
        }
    }
}
