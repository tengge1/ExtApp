using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 组织机构表
    /// </summary>
    [Class(Table = "AppDept")]
    public class Dept
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 父机构
        /// </summary>
        [ManyToOne(1, ClassType = typeof(Dept), Column = "PID", Lazy = Laziness.False)]
        public virtual Dept PDept { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        [Property(2)]
        public virtual string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(3)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 类型（1-机构，2-区域）
        /// </summary>
        [Property(4)]
        public virtual int Type { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        [ManyToOne(6, ClassType = typeof(User), Column = "AddUserID", Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property(7)]
        public virtual DateTime? AddTime { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(8)]
        public virtual int? Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用）
        /// </summary>
        [Property(9)]
        public virtual int? Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(10)]
        public virtual string Comment { get; set; }
    }
}
