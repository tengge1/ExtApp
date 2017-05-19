using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 角色菜单模型
    /// </summary>
    public class RoleMenuModel
    {
        /// <summary>
        /// 角色ID
        /// </summary>
        public int RoleID { get; set; }

        /// <summary>
        /// 菜单IDs
        /// </summary>
        public List<int> MenuIDs { get; set; }
    }
}
