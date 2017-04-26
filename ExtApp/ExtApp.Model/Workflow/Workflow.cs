using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 工作流
    /// </summary>
    [Class(Table = "Workflow")]
    public class Workflow
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property(1)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 版本
        /// </summary>
        [Property(2)]
        public virtual int Version { get; set; }

        /// <summary>
        /// 工作流数据
        /// </summary>
        [Property(3, Length = 10000)]
        public virtual string Data { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        [ManyToOne(4, ClassType = typeof(User), Column = "AddUserID", Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property(5)]
        public virtual DateTime AddTime { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(6)]
        public virtual string Comment { get; set; }
    }
}
