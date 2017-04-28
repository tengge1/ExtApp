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
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 模块
        /// </summary>
        [ManyToOne(1, ClassType = typeof(DicItem), Column = "ModuleID", Lazy = Laziness.False)]
        public virtual DicItem Module { get; set; }

        /// <summary>
        /// 对应模块表的ID
        /// </summary>
        [Property(2)]
        public virtual int PID { get; set; }

        /// <summary>
        /// 原始文件名
        /// </summary>
        [Property(3)]
        public virtual string Name { get; set; }

        /// <summary>
        /// 文件类型
        /// </summary>
        [Property(4)]
        public virtual string Type { get; set; }

        /// <summary>
        /// 文件Url
        /// </summary>
        [Property(5)]
        public virtual string Url { get; set; }

        /// <summary>
        /// 文件大小
        /// </summary>
        [Property(6)]
        public virtual long Size { get; set; }

        /// <summary>
        /// 文件后缀
        /// </summary>
        [Property(7)]
        public virtual string Extension { get; set; }

        /// <summary>
        /// 缩略图（图片或mp4）
        /// </summary>
        [Property(8)]
        public virtual string Picture { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        [ManyToOne(9, ClassType = typeof(User), Column = "AddUserID", Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property(10)]
        public virtual DateTime AddTime { get; set; }
    }
}
