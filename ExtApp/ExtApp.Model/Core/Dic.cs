using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 字典表
    /// </summary>
    [Class(Table = "AppDic")]
    public class Dic
    {
        /// <summary>
        /// 字典ID
        /// </summary>
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 编号
        /// </summary>
        [Property]
        public virtual string Code { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "Type", Lazy = Laziness.False)]
        public virtual DicItem Type { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property]
        public virtual string Name { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property]
        public virtual int? Sort { get; set; }

        /// <summary>
        /// 状态
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
