using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 用户列表参数
    /// </summary>
    public class UserListParam
    {
        public int firstResult { get; set; }
        public int maxResults { get; set; }
        public string name { get; set; }
        public int? DeptID { get; set; }
        public int? RoleID { get; set; }
        public int? Status { get; set; }
    }
}
