using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 添加用户参数
    /// </summary>
    public class UserAddModel
    {
        public int PID { get; set; }
        public string Name { get; set; }
        public int? TypeID { get; set; }
        public int? HeadID { get; set; }
        public int? Sort { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
