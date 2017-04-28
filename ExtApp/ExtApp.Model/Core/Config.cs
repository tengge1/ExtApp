using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 系统配置表
    /// </summary>
    [Class(Table = "AppConfig")]
    public class Config
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 所属节点
        /// </summary>
        [ManyToOne(1, ClassType = typeof(ConfigSection), Column = "SectionID", Lazy = Laziness.False)]
        public virtual ConfigSection Section { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(2)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 配置Key
        /// </summary>
        [Property(3, Column = "ConfigKey")]
        public virtual string Key { get; set; }

        /// <summary>
        /// 配置Value
        /// </summary>
        [Property(4, Column = "ConfigValue")]
        public virtual string Value { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(5)]
        public virtual int? Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用）
        /// </summary>
        [Property(6)]
        public virtual int? Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(7)]
        public virtual string Comment { get; set; }
    }
}
