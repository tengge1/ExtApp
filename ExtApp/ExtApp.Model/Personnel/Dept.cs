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
        /// 机构ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 父机构
        /// </summary>
        [ManyToOne(1, ClassType = typeof(Dept), Column = "PID")]
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
        /// 排序
        /// </summary>
        [Property(4)]
        public virtual int Layer { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [Property(5)]
        public virtual int Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(6)]
        public virtual string Memo { get; set; }
    }
}
