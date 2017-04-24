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
        public int? UrlType { get; set; }
        public int? OpenType { get; set; }
        public string Url { get; set; }
        public int? IconType { get; set; }
        public string Icon { get; set; }
        public int? Sort { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
