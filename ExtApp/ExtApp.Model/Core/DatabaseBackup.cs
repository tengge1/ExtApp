using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 数据库备份表
    /// </summary>
    [Class(Table = "AppDatabaseBackup")]
    public class DatabaseBackup
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
        /// 文件名
        /// </summary>
        [Property]
        public virtual string FileName { get; set; }

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
        /// 是否当前数据库
        /// </summary>
        [Property]
        public virtual bool IsCurrent { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property]
        public virtual string Comment { get; set; }
    }
}
