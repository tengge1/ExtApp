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
            criteria.Add(Expression.Eq(idProperty, ID));
            return criteria.UniqueResult<T>();
        }

        /// <summary>
        /// 获取列表
        /// </summary>
        /// <returns></returns>
        public virtual IList<T> List()
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（带排序）
        /// </summary>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
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
        /// 获取列表（带查询条件和排序）
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(List<ICriterion> query, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            foreach (var i in query) // 查询条件
            {
                criteria.Add(i);
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
        /// 获取列表（分页）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="fetchSize"></param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int fetchSize)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            criteria.SetFirstResult(firstResult);
            criteria.SetFetchSize(fetchSize);
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（分页和总数）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="fetchSize"></param>
        /// <param name="total"></param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int fetchSize, out int total)
        {
            var session = NHibernateHelper.GetCurrentSession();

            // 总数
            var criteria = session.CreateCriteria<T>();
            total = criteria.List<T>().Count();

            // 分页
            criteria = session.CreateCriteria<T>();
            criteria.SetFirstResult(firstResult);
            criteria.SetFetchSize(fetchSize);
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（带分页和排序）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="fetchSize"></param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int fetchSize, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            if (sort == Sort.Asc) // 正序
            {
                criteria.AddOrder(Order.Asc(sortProperty));
            }
            else // 逆序
            {
                criteria.AddOrder(Order.Desc(sortProperty));
            }
            criteria.SetFirstResult(firstResult);
            criteria.SetFetchSize(fetchSize);
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（带分页、排序和总数）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="fetchSize"></param>
        /// <param name="total">总数</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int fetchSize, out int total, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();

            // 总数
            var criteria = session.CreateCriteria<T>();
            total = criteria.List<T>().Count();

            // 分页
            criteria = session.CreateCriteria<T>();
            if (sort == Sort.Asc) // 正序
            {
                criteria.AddOrder(Order.Asc(sortProperty));
            }
            else // 逆序
            {
                criteria.AddOrder(Order.Desc(sortProperty));
            }
            criteria.SetFirstResult(firstResult);
            criteria.SetFetchSize(fetchSize);
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（带分页、查询条件和排序）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="fetchSize"></param>
        /// <param name="query">查询条件</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int fetchSize, List<ICriterion> query, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            foreach (var i in query) // 查询条件
            {
                criteria.Add(i);
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
            criteria.SetFetchSize(fetchSize);
            return criteria.List<T>();
        }

        /// <summary>
        /// 获取列表（带分页、查询条件、排序和总数）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="fetchSize"></param>
        /// <param name="query">查询条件</param>
        /// <param name="total">总数</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int fetchSize, List<ICriterion> query, out int total, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var session = NHibernateHelper.GetCurrentSession();

            // 总数
            var criteria = session.CreateCriteria<T>();
            total = criteria.List<T>().Count();

            // 分页
            criteria = session.CreateCriteria<T>();
            foreach (var i in query) // 查询条件
            {
                criteria.Add(i);
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
            criteria.SetFetchSize(fetchSize);
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
            criteria.Add(Expression.Eq("ID", ID));
            var model = criteria.UniqueResult<T>();
            if (model != null)
            {
                try
                {
                    session.Delete(model);
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
        /// 获取总数
        /// </summary>
        /// <returns></returns>
        public virtual int Count()
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            return criteria.List<T>().Count();
        }

        /// <summary>
        /// 获取数量（带查询条件）
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual int Count(IList<ICriterion> query)
        {
            var session = NHibernateHelper.GetCurrentSession();
            var criteria = session.CreateCriteria<T>();
            foreach (var i in query)
            {
                criteria.Add(i);
            }
            return criteria.List<T>().Count();
        }
    }
}
