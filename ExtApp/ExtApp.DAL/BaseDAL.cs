using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Criterion;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using ExtApp.Model;

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
        /// 根据条件获取
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual T Get(ICriterion query = null)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            if (query != null)
            {
                criteria.Add(query);
            }
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
                session.Flush();
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
        /// 删除（根据ID）
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
        /// 删除（根据条件）
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual bool Delete(ICriterion query = null)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            if (query == null) // 删除所有
            {
                var hql = string.Format("from {0}", typeof(T).Name);
                var num = session.Delete(hql);
                session.Flush();
                if (num > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else // 按条件删除
            {
                criteria.Add(query);
            }
            var list = criteria.List();
            foreach (var i in list)
            {
                try
                {
                    session.Delete(i);
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
    }
}
