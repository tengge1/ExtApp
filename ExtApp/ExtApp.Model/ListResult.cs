using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 返回分页结果
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
}
