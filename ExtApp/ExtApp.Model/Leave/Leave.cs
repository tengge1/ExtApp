using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NHibernate.Mapping.Attributes;

namespace ExtApp.Model
{
    /// <summary>
    /// 请假表
    /// </summary>
    [Class(Table = "Leave")]
    public class Leave
    {
        /// <summary>
        /// ID
        /// </summary>
        [Id(Name = "ID")]
        [Generator(Class = "identity")]
        public virtual int ID { get; set; }

        /// <summary>
        /// 请假类型
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Lazy = Laziness.False)]
        public virtual DicItem Type { get; set; }

        /// <summary>
        /// 请假人
        /// </summary>
        [Bag(Table = "LeaveUser", Lazy = CollectionLazy.False, Cascade = "ALL")]
        [Key(Column = "UserID")]
        [OneToMany(ClassType = typeof(User))]
        public virtual IList<User> Users { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [Property]
        public virtual string Title { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [Property(Length = 1000)]
        public virtual string Content { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        [Property]
        public DateTime StartTime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        [Property]
        public DateTime EndTime { get; set; }

        /// <summary>
        /// 请假天数
        /// </summary>
        [Property]
        public int Days { get; set; }

        /// <summary>
        /// 申请人（自己不一定请假）
        /// </summary>
        [ManyToOne(ClassType = typeof(User), Lazy = Laziness.False)]
        public virtual User AddUser { get; set; }

        /// <summary>
        /// 申请时间
        /// </summary>
        [Property]
        public virtual DateTime AddTime { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [Property]
        public virtual string Comment { get; set; }

        /// <summary>
        /// 工作流实例ID
        /// </summary>
        [Property]
        public virtual int WorkInstanceID { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        [ManyToOne(ClassType = typeof(DicItem), Lazy = Laziness.False)]
        public virtual DicItem Status { get; set; }
    }
}
