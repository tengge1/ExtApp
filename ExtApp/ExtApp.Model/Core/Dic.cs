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
        [Id(0, Name = "ID"), Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 编号
        /// </summary>
        [Property(1)]
        public virtual string Code { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        [Property(2)]
        public virtual DicType Type { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(3)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(4)]
        public virtual int Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用，-1-删除）
        /// </summary>
        [Property(5)]
        public virtual int Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(6)]
        public virtual string Comment { get; set; }
    }
}
