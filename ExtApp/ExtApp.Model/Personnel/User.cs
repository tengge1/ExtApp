using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 用户表
    /// </summary>
    [Class(Table = "AppUser")]
    public class User
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 用户名（登录名）
        /// </summary>
        [Property(1)]
        public virtual string Username { get; set; }

        /// <summary>
        /// 密码（登录密码）
        /// </summary>
        [Property(2)]
        public virtual string Password { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        [Property(3)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 性别（0-男，1-女，其他-未设置）
        /// </summary>
        [Property(4)]
        public virtual int? Sex { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        [ManyToOne(5, ClassType = typeof(Role), Column = "RoleID", Lazy = Laziness.False)]
        public virtual Role UserRole { get; set; }

        /// <summary>
        /// 机构
        /// </summary>
        [ManyToOne(6, ClassType = typeof(Dept), Column = "DeptID", Lazy = Laziness.False)]
        public virtual Dept UserDept { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(7)]
        public virtual int Layer { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [Property(8)]
        public virtual int Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(9)]
        public virtual string Memo { get; set; }
    }
}
