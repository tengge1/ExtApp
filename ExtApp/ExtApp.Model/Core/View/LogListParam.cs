using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 日志列表参数
    /// </summary>
    public class LogListParam
    {
        public int firstResult { get; set; }
        public int maxResults { get; set; }
        public string name { get; set; }
        public int? type { get; set; }
        public int? source { get; set; }
        public int? level { get; set; }
    }
}
