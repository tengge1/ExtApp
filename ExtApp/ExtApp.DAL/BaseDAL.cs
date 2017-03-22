using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using NHibernate.Criterion;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ExtApp.DAL
{
    /// <summary>
    /// 数据层基类
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class BaseDAL<T>
        where T : class
    {
        /// <summary>
        /// 根据ID获取
        /// </summary>
        /// <param name="ID"></param>
        /// <param name="idProperty"></param>
        /// <returns></returns>
        public virtual T Get(int ID, string idProperty = "ID")
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            criteria.Add(Restrictions.Eq(idProperty, ID));
            return criteria.UniqueResult<T>();
        }

        /// <summary>
        /// 获取列表（带查询条件和排序）
        /// </summary>
        /// <param name="query">查询条件（无查询条件可为null）</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(ICriterion query = null, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            if (query != null)
            {
                criteria.Add(query); // 查询条件
            }
            if (sort == Sort.Asc) // 正序
            {
                criteria.AddOrder(Order.Asc(sortProperty));
            }
            else // 逆序
            {
                criteria.AddOrder(Order.Desc(sortProperty));
            }
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（带分页、查询条件、排序和总数）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="total">总数</param>
        /// <param name="query">查询条件（无查询条件可为null）</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int maxResults, out int total, ICriterion query = null, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();

            // 总数
            var criteria = session.CreateCriteria<T>();
            if (query != null)
            {
                criteria.Add(query);
            }
            total = criteria.List<T>().Count();

            // 分页
            criteria = session.CreateCriteria<T>();
            if (query != null)
            {
                criteria.Add(query);
            }
            if (sort == Sort.Asc) // 正序
            {
                criteria.AddOrder(Order.Asc(sortProperty));
            }
            else // 逆序
            {
                criteria.AddOrder(Order.Desc(sortProperty));
            }
            criteria.SetFirstResult(firstResult);
            criteria.SetMaxResults(maxResults);
            return criteria.List<T>();
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual bool Add(T model)
        {
            var session = NHibernateHelper.GetCurrentSession();
            try
            {
                session.Save(model);
            }
            catch (Exception e)
            {
                var log = FileLogHelper.GetLogger(this.GetType());
                log.Error(e.Message, e);
                return false;
            }
            return true;
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual bool Edit(T model)
        {
            var session = NHibernateHelper.GetCurrentSession();
            try
            {
                session.Update(model);
            }
            catch (Exception e)
            {
                var log = FileLogHelper.GetLogger(this.GetType());
                log.Error(e.Message, e);
                return false;
            }
            return true;
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public virtual bool Delete(int ID)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            criteria.Add(Restrictions.Eq("ID", ID));
            var model = criteria.UniqueResult<T>();
            if (model != null)
            {
                try
                {
                    session.Delete(model);
                    session.Flush();
                }
                catch (Exception e)
                {
                    var log = FileLogHelper.GetLogger(this.GetType());
                    log.Error(e.Message, e);
                    return false;
                }
            }
            return true;
        }

        /// <summary>
        /// 获取数量（带查询条件）
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual int Count(ICriterion query = null)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            if (query != null)
            {
                criteria.Add(query);
            }
            return criteria.List<T>().Count();
        }

        /// <summary>
        /// 获取一棵树（模型需要有ID、PID、Name字段）
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <param name="rootId">树根id</param>
        /// <param name="rootName">树根名称</param>
        /// <param name="idProperty">生成树节点id属性名称</param>
        /// <param name="nameProperty">生成树name节点名称</param>
        /// <returns></returns>
        public virtual JObject Tree(ICriterion query, int rootId = 0, string rootName = "root", string idProperty = "id", string nameProperty = "text", string childrenProperty = "children")
        {
            // 获取数据
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            criteria.Add(query);
            var data = criteria.List<T>();

            try
            {
                // 将data转换为JArray
                JArray list = JsonHelper.ToObject<JArray>(JsonHelper.ToJson(data));

                // 构建一棵树
                var tree = NewTree(rootId, rootName, idProperty, nameProperty, childrenProperty);
                if (HasChildren(tree, ref list))
                {
                    tree["leaf"] = false;
                }
                else
                {
                    tree["leaf"] = true;
                }
                BuildTree(ref tree, tree["ID"].Value<string>(), ref list);
                return tree;
            }
            catch (Exception e)
            {
                var log = FileLogHelper.GetLogger(this.GetType());
                log.Error(e.Message, e);
                return NewTree(rootId, rootName, idProperty, nameProperty, childrenProperty);
            }
        }

        /// <summary>
        /// 生成一棵新树
        /// </summary>
        /// <param name="rootId"></param>
        /// <param name="rootName"></param>
        /// <param name="idProperty"></param>
        /// <param name="nameProperty"></param>
        /// <param name="childrenProperty"></param>
        /// <returns></returns>
        private JObject NewTree(int rootId, string rootName, string idProperty = "id", string nameProperty = "text", string childrenProperty = "children")
        {
            var tree = new JObject();
            tree[idProperty] = rootId;
            tree[nameProperty] = rootName;
            tree[childrenProperty] = new JArray();
            return tree;
        }

        /// <summary>
        /// 判断是否有根节点
        /// </summary>
        /// <param name="node">节点</param>
        /// <param name="list">数据列表</param>
        /// <returns></returns>
        private bool HasChildren(JObject node, ref JArray list)
        {
            var ID = node["id"].Value<int>();
            var count = list.Where(o => o["PDept"] != null && JToken.Parse(o["PDept"].ToString())["ID"].Value<int>() == ID).Count();
            if (count > 0)
            {
                return true;
            }
            return false;
        }

        /// <summary>
        /// 使用递归创建一棵树
        /// </summary>
        /// <param name="pNode">父节点</param>
        /// <param name="nodeId">父节点Id</param>
        /// <param name="list">数据列表</param>
        /// <param name="idProperty"></param>
        /// <param name="nameProperty"></param>
        /// <param name="childrenProperty"></param>
        private void BuildTree(ref JObject pNode, string nodeId, ref JArray list, string idProperty = "id", string nameProperty = "text", string childrenProperty = "children")
        {
            var list1 = list.Where(o => o["PID"].ToString() == nodeId).ToList();
            foreach (var i in list1)
            {
                var node1 = new JObject();
                node1[idProperty] = i["ID"].Value<int>();
                node1[nameProperty] = i["Name"].Value<string>();
                if (HasChildren(node1, ref list))
                {
                    node1["leaf"] = false;
                }
                else
                {
                    node1["leaf"] = true;
                }
                BuildTree(ref node1, i["ID"].ToString(), ref list);
                (pNode[childrenProperty] as JArray).Add(node1);
            }
        }
    }
}
