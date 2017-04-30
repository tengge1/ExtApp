using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;
using Newtonsoft.Json;

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
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "TypeID", Lazy = Laziness.False)]
        public virtual DicItem Type { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [Property]
        public virtual string Title { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [Property(Length = 10000)]
        public virtual string Content { get; set; }

        /// <summary>
        /// 添加人（null表示系统）
        /// </summary>
        [ManyToOne(ClassType = typeof(User), Column = "AddUserID", Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        [Property]
        public virtual DateTime AddTime { get; set; }

        /// <summary>
        /// 发送时间
        /// </summary>
        [Property]
        public virtual DateTime? SendTime { get; set; }

        /// <summary>
        /// 消息发送状态
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Column = "Status", Lazy = Laziness.False)]
        public virtual DicItem Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property]
        public virtual string Comment { get; set; }

        [Bag(Table = "MessageReceive", Lazy = CollectionLazy.True, Cascade = "ALL")]
        [Key(Column = "MessageID")]
        [OneToMany(ClassType = typeof(MessageReceive))]
        public virtual IList<MessageReceive> Receives { get; set; }
    }
}
