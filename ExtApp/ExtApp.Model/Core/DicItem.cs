using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 字典项目表
    /// </summary>
    [Class(Table = "AppDicItem")]
    public class DicItem
    {
        /// <summary>
        /// 项目ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 所属字典
        /// </summary>
        [ManyToOne(1, ClassType = typeof(Dic), Column = "DicID", Lazy = Laziness.False)]
        public virtual Dic Dic { get; set; }

        /// <summary>
        /// 编号
        /// </summary>
        [Property(2)]
        public virtual string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(3)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(4)]
        public virtual int? Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用）
        /// </summary>
        [Property(5)]
        public virtual int? Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(6)]
        public virtual string Comment { get; set; }
    }
}
