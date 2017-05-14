using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 角色编辑参数
    /// </summary>
    public class RoleEditParam
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? Sort { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
