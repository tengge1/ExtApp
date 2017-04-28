using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 消息接收
    /// </summary>
    [Class(Table = "MessageReceive")]
    public class MessageReceive
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(0, Name = "ID"), Generator(0, Class = "identity")]
        public virtual int ID { get; set; }

        [ManyToOne(1, ClassType = typeof(Message), Column = "MessageID", Lazy = Laziness.False)]
        public Message Message { get; set; }

        /// <summary>
        /// 接收人
        /// </summary>
        [ManyToOne(2, ClassType = typeof(User), Column = "AddUserID", Lazy = Laziness.False)]
        public virtual User User { get; set; }

        /// <summary>
        /// 阅读时间（null表示未读）
        /// </summary>
        [Property(3)]
        public virtual DateTime? ReadTime { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property(4)]
        public virtual string Comment { get; set; }
    }
}
