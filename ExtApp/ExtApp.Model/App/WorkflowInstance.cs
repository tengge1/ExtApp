using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 工作流实例
    /// </summary>
    [Class(Table = "WorkflowInstance")]
    public class WorkflowInstance
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
    }
}
