using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 修改密码模型
    /// </summary>
    public class ChangePwdModel
    {
        public string OldPwd { get; set; }
        public string NewPwd { get; set; }
        public string ConfirmPwd { get; set; }
    }
}
