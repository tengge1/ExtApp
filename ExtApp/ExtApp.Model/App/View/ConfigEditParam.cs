using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 配置编辑参数
    /// </summary>
    public class ConfigEditParam
    {
        public int ID { get; set; }
        public int PID { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
        public int? Sort { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
