using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 菜单树一个节点
    /// </summary>
    public class MenuNode : TreeNode
    {
        public int ID { get; set; }
        public int PID { get; set; }
        public string PName { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
    }
}
