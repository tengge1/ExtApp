using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using NHibernate.Criterion;

namespace ExtApp.DAL
{
    /// <summary>
    /// 机构DAL
    /// </summary>
    public class DeptDAL : BaseDAL<Dept>
    {
        /// <summary>
        /// 获取子部门
        /// </summary>
        /// <param name="PID"></param>
        /// <returns></returns>
        public IList<DeptTreeNode> GetChildNodes(int PID)
        {
            // 先获取所有数据
            var list = base.List(null, "Sort", Sort.Asc);
            var nodes = new List<DeptTreeNode>();

            if (PID == 0) // 根节点
            {
                var list1 = list.Where(o => o.PDept == null).ToList();
                foreach (var i in list1)
                {
                    var node = new DeptTreeNode
                    {
                        AddTime = i.AddTime,
                        AddUser = i.AddUser,
                        Code = i.Code,
                        Comment = i.Comment,
                        expandable = false,
                        expanded = false,
                        Head = i.Head,
                        id = i.ID,
                        ID = i.ID,
                        leaf = true,
                        Name = i.Name,
                        PDept = i.PDept,
                        PID = i.PDept == null ? 0 : i.PDept.ID,
                        Sort = i.Sort,
                        Status = i.Status,
                        text = i.Name,
                        Type = i.Type
                    };
                    if (list.Where(o => o.PDept != null && o.PDept.ID == i.ID).Count() > 0) // 有子部门
                    {
                        node.expandable = true;
                        node.expanded = true;
                        node.leaf = false;
                    }
                    nodes.Add(node);
                }
            }
            else // 不是根节点
            {
                var list1 = list.Where(o => o.PDept != null && o.PDept.ID == PID).ToList();
                foreach (var i in list1)
                {
                    var node = new DeptTreeNode
                    {
                        AddTime = i.AddTime,
                        AddUser = i.AddUser,
                        Code = i.Code,
                        Comment = i.Comment,
                        expandable = false,
                        expanded = false,
                        Head = i.Head,
                        id = i.ID,
                        ID = i.ID,
                        leaf = true,
                        Name = i.Name,
                        PDept = i.PDept,
                        PID = i.PDept == null ? 0 : i.PDept.ID,
                        Sort = i.Sort,
                        Status = i.Status,
                        text = i.Name,
                        Type = i.Type
                    };
                    if (list.Where(o => o.PDept != null && o.PDept.ID == i.ID).Count() > 0) // 有子部门
                    {
                        node.expandable = true;
                        node.expanded = false;
                        node.leaf = false;
                    }
                    nodes.Add(node);
                }
            }
            return nodes;
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        public new Result Add(Dept dept)
        {
            var session = NHibernateHelper.GetCurrentSession();

            // 判断名称是否重复
            if (dept.PDept == null) // 顶级机构
            {
                var dept1 = session.QueryOver<Dept>().Where(o => o.Name == dept.Name && o.PDept == null).SingleOrDefault();
                if (dept1 != null)
                {
                    return new Result
                    {
                        Code = 300,
                        Msg = "该机构已经存在！"
                    };
                }
            }
            else // 不是顶级机构
            {
                var dept1 = session.QueryOver<Dept>().Where(o => o.Name == dept.Name && o.PDept != null).JoinQueryOver(o => o.PDept).Where(o => o.ID == dept.PDept.ID).SingleOrDefault();
                if (dept1 != null)
                {
                    return new Result
                    {
                        Code = 300,
                        Msg = "该机构已经存在！"
                    };
                }
            }

            // 查找父节点的Code
            var PCode = "";
            if (dept.PDept != null) // 不是顶级机构
            {
                var pDept = session.QueryOver<Dept>().Where(o => o.ID == dept.PDept.ID).SingleOrDefault();
                if (pDept != null)
                {
                    PCode = pDept.Code;
                }
            }

            // 为当前结点生成Code
            var Code = "";
            var list = new List<Dept>();
            if (dept.PDept == null) // 顶级机构
            {
                var dept1 = session.QueryOver<Dept>().Where(o => o.PDept == null).OrderBy(o => o.Code).Desc.Take(1).SingleOrDefault();
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
                var dept1 = session.QueryOver<Dept>().Where(o => o.PDept != null).OrderBy(o => o.Code).Desc.JoinQueryOver(o => o.PDept).Where(o => o.Code == PCode).Take(1).SingleOrDefault();
                if (dept1 == null) // 第一个
                {
                    Code = PCode + "001";
                }
                else // 不是第一个
                {
                    Code = PCode + StringHelper.ZeroFill((int.Parse(dept1.Code.Substring(PCode.Length, 3).TrimStart('0')) + 1).ToString(), 3);
                }
            }

            // 添加
            dept.Code = Code;
            session.Save(dept);
            return new Result
            {
                Code = 200,
                Msg = "添加成功！"
            };
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        public new Result Edit(Dept dept)
        {
            var session = NHibernateHelper.GetCurrentSession();

            // 判断是否重复
            if (dept.PDept == null) // 顶级机构
            {
                var dept1 = session.QueryOver<Dept>().Where(o => o.Name == dept.Name && o.ID != dept.ID && o.PDept == null).SingleOrDefault();
                if (dept1 != null)
                {
                    return new Result
                    {
                        Code = 300,
                        Msg = "该机构已经存在！"
                    };
                }
            }
            else // 不是顶级机构
            {
                var dept1 = session.QueryOver<Dept>().Where(o => o.Name == dept.Name && o.ID != dept.ID && o.PDept != null).JoinQueryOver(o => o.PDept).Where(o => o.ID == dept.PDept.ID).SingleOrDefault();
                if (dept1 != null)
                {
                    return new Result
                    {
                        Code = 300,
                        Msg = "该机构已经存在！"
                    };
                }
            }

            session.Update(dept);
            session.Flush();
            return new Result
            {
                Code = 200,
                Msg = "修改成功！"
            };
        }
    }
}
