using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 字典树节点
    /// </summary>
    public class DicNode : TreeNode
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public int? TypeID { get; set; }
        public string TypeName { get; set; }
        public string Name { get; set; }
        public int? Sort { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
