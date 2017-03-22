using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 系统日志表
    /// </summary>
    [Class(Table = "AppLog")]
    public class Log
    {
        /// <summary>
        /// 日志ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        [Property(1)]
        public virtual LogType Type { get; set; }

        /// <summary>
        /// 来源
        /// </summary>
        [Property(2)]
        public virtual LogSource Source { get; set; }

        /// <summary>
        /// 严重程度
        /// </summary>
        [Property(3)]
        public virtual LogLevel Level { get; set; }

        /// <summary>
        /// 责任人（类型为用户时有效）
        /// </summary>
        [ManyToOne(4, ClassType = typeof(User), Column = "UserID", Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 发生时间
        /// </summary>
        [Property(5)]
        public virtual DateTime AddTime { get; set; }

        /// <summary>
        /// IP地址
        /// </summary>
        [Property(6)]
        public virtual string IP { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [Property(7)]
        public virtual string Title { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [Property(8)]
        public virtual string Content { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [Property(9)]
        public virtual int? Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(10)]
        public virtual string Comment { get; set; }
    }
}
