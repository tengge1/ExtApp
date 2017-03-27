using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.DAL;
using ExtApp.Model;
using NHibernate.Criterion;
using Newtonsoft.Json.Linq;

namespace ExtApp.BLL
{
    /// <summary>
    /// 业务层基类
    /// </summary>
    public class BaseBLL<T>
        where T : class
    {
        /// <summary>
        /// 数据层
        /// </summary>
        protected BaseDAL<T> dal;

        /// <summary>
        /// 根据ID获取
        /// </summary>
        /// <param name="ID"></param>
        /// <param name="idProperty"></param>
        /// <returns></returns>
        public virtual T Get(int ID, string idProperty = "ID")
        {
            return dal.Get(ID, idProperty);
        }

        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="query">查询条件（可为null）</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(ICriterion query = null, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            return dal.List(query, sortProperty, sort);
        }

        /// <summary>
        /// 获取列表（带分页、查询条件、排序和总数）
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="total">总数</param>
        /// <param name="query">查询条件（可为null）</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual IList<T> List(int firstResult, int maxResults, out int total, ICriterion query = null, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            return dal.List(firstResult, maxResults, out total, query, sortProperty, sort);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual bool Add(T model)
        {
            return dal.Add(model);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual bool Edit(T model)
        {
            return dal.Add(model);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public virtual Result Delete(int ID)
        {
            var result = dal.Delete(ID);
            if (result == true)
            {
                return new Result
                {
                    Code = 200,
                    Msg = "删除成功！"
                };
            }
            else
            {
                return new Result
                {
                    Code = 300,
                    Msg = "删除失败！"
                };
            }
        }

        /// <summary>
        /// 获取数量
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual int Count(ICriterion query = null)
        {
            return dal.Count(query);
        }
    }
}
