using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 角色列表参数
    /// </summary>
    public class RoleListParam
    {
        public int firstResult { get; set; }
        public int maxResults { get; set; }
        public string Name { get; set; }
        public int? Status { get; set; }
    }
}
