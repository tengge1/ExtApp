using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 角色菜单参数
    /// </summary>
    public class RoleMenuParam
    {
        public int RoleID { get; set; }
        public List<int> MenuIDs { get; set; }
    }
}
