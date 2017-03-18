using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 角色表
    /// </summary>
    [Class(Table = "AppRole")]
    public class Role
    {
        /// <summary>
        /// 角色ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        [Property(1, NotNull = true)]
        public virtual string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(2)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Property(3)]
        public virtual int Sort { get; set; }

        /// <summary>
        /// 状态（1-启用，0-禁用，-1-删除）
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
