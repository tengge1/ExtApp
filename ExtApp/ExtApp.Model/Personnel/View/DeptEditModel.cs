using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 编辑机构模型
    /// </summary>
    public class DeptEditModel
    {
        public int ID { get; set; }
        public int PID { get; set; }
        public string Name { get; set; }
        public int? Type { get; set; }
        public int? HeadID { get; set; }
        public int? Sort { get; set; }
        public int? Status { get; set; }
        public string Comment { get; set; }
    }
}
