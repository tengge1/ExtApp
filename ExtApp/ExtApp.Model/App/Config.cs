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
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 父节点
        /// </summary>
        [ManyToOne(ClassType = typeof(ConfigSection), Column = "SectionID", Lazy = Laziness.False)]
        public virtual ConfigSection Section { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property]
        public virtual string Name { get; set; }

        /// <summary>
        /// Key
        /// </summary>
        [Property(Column = "ConfigKey")]
        public virtual string Key { get; set; }

        /// <summary>
        /// Value
        /// </summary>
        [Property(Column = "ConfigValue")]
        public virtual string Value { get; set; }

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
    }
}
