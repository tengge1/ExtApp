using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 用户登录信息表
    /// </summary>
    [Class(Table = "AppLoginSession")]
    public class LoginSession
    {
        /// <summary>
        /// 登录Guid
        /// </summary>
        [Id(0, Name = "Guid")]
        public virtual string Guid { get; set; }

        /// <summary>
        /// 登录用户
        /// </summary>
        [ManyToOne(1, ClassType = typeof(User), Column = "UserID")]
        public virtual User LoginUser { get; set; }

        /// <summary>
        /// 登录时间
        /// </summary>
        [Property(2)]
        public virtual DateTime LoginTime { get; set; }

        /// <summary>
        /// 登录IP地址
        /// </summary>
        [Property(3)]
        public virtual string LoginIP { get; set; }

        /// <summary>
        /// 超时时间（秒数）
        /// </summary>
        [Property(4)]
        public virtual int Expire { get; set; }
    }
}
