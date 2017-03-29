using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 机构角色菜单单项
    /// </summary>
    public class DeptRoleMenuItem
    {
        public int ID { get; set; }
        public int? DeptID { get; set; }
        public int? RoleID { get; set; }
        public int? MenuID { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
