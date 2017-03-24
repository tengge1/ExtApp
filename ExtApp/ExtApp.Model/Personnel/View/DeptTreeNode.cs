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
        public string leaf { get; set; }
        public string expandable { get; set; }
        public string expanded { get; set; }
    }
}
