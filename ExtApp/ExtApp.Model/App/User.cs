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
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 用户名（登录名）
        /// </summary>
        [Property]
        public virtual string Username { get; set; }

        /// <summary>
        /// 密码（登录密码）
        /// </summary>
        [Property]
        public virtual string Password { get; set; }

        /// <summary>
        /// 姓名
        /// </summary>
        [Property]
        public virtual string Name { get; set; }

        /// <summary>
        /// 性别
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "Sex", Lazy = Laziness.False)]
        public virtual DicItem Sex { get; set; }

        /// <summary>
        /// 机构
        /// </summary>
        [ManyToOne(ClassType = typeof(Dept), Column = "DeptID", Lazy = Laziness.False)]
        public virtual Dept Dept { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        [ManyToOne(ClassType = typeof(Role), Column = "RoleID", Lazy = Laziness.False)]
        public virtual Role Role { get; set; }

        /// <summary>
        /// 职务
        /// </summary>
        [Property]
        public virtual string Duty { get; set; }

        /// <summary>
        /// 电话号码
        /// </summary>
        [Property]
        public virtual string Phone { get; set; }

        /// <summary>
        /// 电子邮箱
        /// </summary>
        [Property]
        public virtual string Email { get; set; }

        /// <summary>
        /// 出生日期
        /// </summary>
        [Property]
        public virtual DateTime? Birthday { get; set; }

        /// <summary>
        /// 地址
        /// </summary>
        [Property]
        public virtual string Address { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        [Property]
        public virtual string FaceUrl { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property]
        public virtual DateTime? AddTime { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property]
        public virtual int? Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用）
        /// </summary>
        [Property]
        public virtual int? Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property]
        public virtual string Comment { get; set; }

        /// <summary>
        /// 是否是超级管理员
        /// </summary>
        [Property]
        public virtual bool isAdmin { get; set; }
    }
}
