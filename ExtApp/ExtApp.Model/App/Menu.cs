using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 系统菜单表
    /// </summary>
    [Class(Table = "AppMenu")]
    public class Menu
    {
        /// <summary>
        /// 菜单ID
        /// </summary>
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 父节点编码
        /// </summary>
        [ManyToOne(ClassType = typeof(Menu), Column = "PID", Lazy = Laziness.False)]
        public virtual Menu PMenu { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        [Property(NotNull = true)]
        public virtual string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(NotNull = true)]
        public virtual string Name { get; set; }

        /// <summary>
        /// Url类型
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "UrlType", Lazy = Laziness.False)]
        public virtual DicItem UrlType { get; set; }

        /// <summary>
        /// 模块地址或url
        /// </summary>
        [Property]
        public virtual string Url { get; set; }

        /// <summary>
        /// 打开方式
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "OpenType", Lazy = Laziness.False)]
        public virtual DicItem OpenType { get; set; }

        /// <summary>
        /// 图标类型
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "IconType", Lazy = Laziness.False)]
        public virtual DicItem IconType { get; set; }

        /// <summary>
        /// 图标
        /// </summary>
        [Property]
        public virtual string Icon { get; set; }

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
