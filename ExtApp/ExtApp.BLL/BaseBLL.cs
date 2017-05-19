using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using ExtApp.DAL;
using NHibernate.Criterion;
using Newtonsoft.Json.Linq;

namespace ExtApp.BLL
{
    /// <summary>
    /// BLL基类
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
        public virtual DataResult<T> Get(int ID, string idProperty = "ID")
        {
            var data = dal.Get(ID, idProperty);
            if (data == null)
            {
                return new DataResult<T>(300, "数据获取失败！", null);
            }
            return new DataResult<T>(200, "数据获取成功！", data);
        }

        /// <summary>
        /// 获取数据
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual DataResult<T> Get(ICriterion query = null)
        {
            var data = dal.Get(query);
            if (data == null)
            {
                return new DataResult<T>(300, "数据获取失败！", null);
            }
            return new DataResult<T>(200, "数据获取成功！", data);
        }

        /// <summary>
        /// 获取列表
        /// </summary>
        /// <param name="query">查询条件（可为null）</param>
        /// <param name="sortProperty">排序字段</param>
        /// <param name="sort">排序类型</param>
        /// <returns></returns>
        public virtual ListResult<T> List(ICriterion query = null, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var list = dal.List(query, sortProperty, sort);
            return new ListResult<T>(200, "数据获取成功！", list.Count(), list);
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
        public virtual ListResult<T> List(int firstResult, int maxResults, out int total, ICriterion query = null, string sortProperty = "ID", Sort sort = Sort.Desc)
        {
            var list = dal.List(firstResult, maxResults, out total, query, sortProperty, sort);
            return new ListResult<T>(200, "数据获取成功！", total, list);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual Result Add(T model)
        {
            var result = dal.Save(model);
            if (result)
            {
                return new Result(200, "添加成功！");
            }
            return new Result(300, "添加失败！");
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public virtual Result Edit(T model)
        {
            var result = dal.Update(model);
            if (result)
            {
                return new Result(200, "编辑成功！");
            }
            return new Result(300, "编辑失败！");
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public virtual Result Delete(int ID)
        {
            var result = dal.Delete(ID);
            if (result)
            {
                return new Result(200, "删除成功！");
            }
            return new Result(300, "删除失败！");
        }

        public virtual Result Delete(ICriterion query = null)
        {
            var result = dal.Delete(query);
            if (result)
            {
                return new Result(200, "删除成功！");
            }
            return new Result(300, "删除失败！");
        }

        /// <summary>
        /// 获取数量
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual DataResult<int> Count(ICriterion query = null)
        {
            var data = dal.Count(query);
            return new DataResult<int>(200, "数据获取成功！", data);
        }
    }
}
