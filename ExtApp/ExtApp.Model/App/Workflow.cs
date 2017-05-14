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
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [Property]
        public virtual string Name { get; set; }

        /// <summary>
        /// 版本
        /// </summary>
        [Property]
        public virtual int Version { get; set; }

        /// <summary>
        /// 工作流数据
        /// </summary>
        [Property(Length = 10000)]
        public virtual string Data { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        [ManyToOne(ClassType = typeof(User), Column = "AddUserID", Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property]
        public virtual DateTime AddTime { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property]
        public virtual string Comment { get; set; }
    }
}
