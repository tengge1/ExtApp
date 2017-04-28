using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 消息
    /// </summary>
    [Class(Table = "Message")]
    public class Message
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        [ManyToOne(1, ClassType = typeof(DicItem), Column = "TypeID", Lazy = Laziness.False)]
        public DicItem Type { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [Property(2)]
        public virtual string Title { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [Property(3, Length = 10000)]
        public virtual string Content { get; set; }

        /// <summary>
        /// 添加人（null表示系统）
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
