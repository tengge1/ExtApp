using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 数据结果模型
    /// </summary>
    public class DataResult : Result
    {
        /// <summary>
        /// 数据
        /// </summary>
        public object Data { get; set; }
    }
}
