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
        public string Name { get; set; }
        public int? TypeID { get; set; }
        public int? SourceID { get; set; }
        public int? LevelID { get; set; }
    }
}
