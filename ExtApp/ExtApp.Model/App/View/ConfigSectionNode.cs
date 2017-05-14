using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 配置节节点
    /// </summary>
    public class ConfigSectionNode : TreeNode
    {
        public int ID { get; set; }
        public int PID { get; set; }
        public string Name { get; set; }
        public int? Sort { get; set; }
        public string Comment { get; set; }
    }
}
