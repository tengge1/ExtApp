using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 分页结果模型（泛型）
    /// </summary>
    public class ListResult<T> : Result
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public ListResult()
        {

        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="Code"></param>
        /// <param name="Msg"></param>
        /// <param name="Total"></param>
        /// <param name="Items"></param>
        public ListResult(int Code, string Msg, int Total = 0, IList<T> Items = null)
        {
            this.Code = Code;
            this.Msg = Msg;
            this.Total = Total;
            this.Items = Items;
        }

        /// <summary>
        /// 记录总数
        /// </summary>
        public int Total { get; set; }

        /// <summary>
        /// 当前页记录
        /// </summary>
        public IList<T> Items { get; set; }
    }

    /// <summary>
    /// 分页结果模型（非泛型）
    /// </summary>
    public class ListResult : Result
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public ListResult()
        {

        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="Code"></param>
        /// <param name="Msg"></param>
        /// <param name="Total"></param>
        /// <param name="Items"></param>
        public ListResult(int Code, string Msg, int Total = 0, IList<object> Items = null)
        {
            this.Code = Code;
            this.Msg = Msg;
            this.Total = Total;
            this.Items = Items;
        }

        /// <summary>
        /// 记录总数
        /// </summary>
        public int Total { get; set; }

        /// <summary>
        /// 当前页记录
        /// </summary>
        public IList<object> Items { get; set; }
    }
}
