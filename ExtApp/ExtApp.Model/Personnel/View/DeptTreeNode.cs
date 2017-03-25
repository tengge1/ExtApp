using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 机构树节点模型
    /// </summary>
    public class DeptTreeNode : Dept
    {
        public int id { get; set; }
        public string text { get; set; }
        public bool leaf { get; set; }
        public bool expandable { get; set; }
        public bool expanded { get; set; }
        public int? PID { get; set; }
        public string PName { get; set; }
    }
}
