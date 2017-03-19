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
        /// 性别（0-未设置，1-男，2-女）
        /// </summary>
        [Property(4)]
        public virtual int Sex { get; set; }

        /// <summary>
        /// 机构
        /// </summary>
        [ManyToOne(5, ClassType = typeof(Dept), Column = "DeptID", Lazy = Laziness.False)]
        public virtual Dept Dept { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        [ManyToOne(6, ClassType = typeof(Role), Column = "RoleID", Lazy = Laziness.False)]
        public virtual Role Role { get; set; }

        /// <summary>
        /// 职务
        /// </summary>
        [Property(7)]
        public virtual string Duty { get; set; }

        /// <summary>
        /// 电话号码
        /// </summary>
        [Property(8)]
        public virtual string Phone { get; set; }

        /// <summary>
        /// 电子邮箱
        /// </summary>
        [Property(9)]
        public virtual string Email { get; set; }

        /// <summary>
        /// 出生日期
        /// </summary>
        [Property(10)]
        public virtual DateTime? Birthday { get; set; }

        /// <summary>
        /// 地址
        /// </summary>
        [Property(11)]
        public virtual string Address { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        [Property(12)]
        public virtual string FaceUrl { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property(13)]
        public virtual DateTime? AddTime { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(14)]
        public virtual int Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用，-1-删除）
        /// </summary>
        [Property(15)]
        public virtual int Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(16)]
        public virtual string Comment { get; set; }
    }
}
