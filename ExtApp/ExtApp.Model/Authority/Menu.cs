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
        [Id(0, Name = "ID"), Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 父节点编码
        /// </summary>
        [ManyToOne(1, ClassType = typeof(Menu), Column = "PID", Lazy = Laziness.False)]
        public virtual Menu PMenu { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        [Property(2, NotNull = true)]
        public virtual string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(3, NotNull = true)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 类型（1-模块，2-url）
        /// </summary>
        [Property(4)]
        public virtual int? UrlType { get; set; }

        /// <summary>
        /// 模块地址或url
        /// </summary>
        [Property(5)]
        public virtual string Url { get; set; }

        /// <summary>
        /// 图标类型（1-样式表类名，2-图片路径）
        /// </summary>
        [Property(6)]
        public virtual int? IconType { get; set; }

        /// <summary>
        /// 图标
        /// </summary>
        [Property(6)]
        public virtual string Icon { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(7)]
        public virtual int? Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用）
        /// </summary>
        [Property(8)]
        public virtual int? Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(9)]
        public virtual string Comment { get; set; }
    }
}
