using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 文件表
    /// </summary>
    [Class(Table = "AppFiles")]
    public class Files
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 模块
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "ModuleID", Lazy = Laziness.False)]
        public virtual DicItem Module { get; set; }

        /// <summary>
        /// 对应模块表的ID
        /// </summary>
        [Property]
        public virtual int PID { get; set; }

        /// <summary>
        /// 原始文件名
        /// </summary>
        [Property]
        public virtual string Name { get; set; }

        /// <summary>
        /// 文件类型
        /// </summary>
        [Property]
        public virtual string Type { get; set; }

        /// <summary>
        /// 文件Url
        /// </summary>
        [Property]
        public virtual string Url { get; set; }

        /// <summary>
        /// 文件大小
        /// </summary>
        [Property]
        public virtual long Size { get; set; }

        /// <summary>
        /// 文件后缀
        /// </summary>
        [Property]
        public virtual string Extension { get; set; }

        /// <summary>
        /// 缩略图（图片或mp4）
        /// </summary>
        [Property]
        public virtual string Picture { get; set; }

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
    }
}
