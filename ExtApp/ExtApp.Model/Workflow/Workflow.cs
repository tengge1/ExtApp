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
    }
}
