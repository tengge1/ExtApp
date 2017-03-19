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
        /// 记录总数
        /// </summary>
        public int Total { get; set; }

        /// <summary>
        /// 当前页记录
        /// </summary>
        public IList<object> Items { get; set; }
    }
}
