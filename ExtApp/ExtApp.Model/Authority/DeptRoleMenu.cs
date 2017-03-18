using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 机构角色菜单表
    /// </summary>
    [Class(Table = "AppDeptRoleMenu")]
    public class DeptRoleMenu
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 机构
        /// </summary>
        [ManyToOne(1, ClassType = typeof(Dept), Column = "DeptID")]
        public virtual Dept Dept { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        [ManyToOne(2, ClassType = typeof(Role), Column = "RoleID")]
        public virtual Role Role { get; set; }

        /// <summary>
        /// 菜单
        /// </summary>
        [ManyToOne(3, ClassType = typeof(Menu), Column = "MenuID")]
        public virtual Menu Menu { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [Property(4)]
        public virtual int Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(5)]
        public virtual string Comment { get; set; }
    }
}
