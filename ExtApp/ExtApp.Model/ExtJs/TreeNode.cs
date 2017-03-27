using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// ExtJs树上的一个节点
    /// </summary>
    public class TreeNode
    {
        /// <summary>
        /// 节点id
        /// </summary>
        public int id { get; set; }

        /// <summary>
        /// 节点文本
        /// </summary>
        public string text { get; set; }

        /// <summary>
        /// 是否是叶子节点
        /// </summary>
        public bool leaf { get; set; }

        /// <summary>
        /// 是否可以展开
        /// </summary>
        public bool expandable { get; set; }

        /// <summary>
        /// 是否已经展开
        /// </summary>
        public bool expanded { get; set; }

        /// <summary>
        /// 是否带checkbox（null-不带checkbox，true-带checkbox并选中，false-带checkbox但是没选中）
        /// </summary>
        public bool? @checked { get; set; }

        /// <summary>
        /// 图标路径
        /// </summary>
        public string icon { get; set; }

        /// <summary>
        /// css图标
        /// </summary>
        public string iconCls { get; set; }

        /// <summary>
        /// 是否允许拖动
        /// </summary>
        public bool allowDrag { get; set; }

        /// <summary>
        /// 是否接受拖入
        /// </summary>
        public bool allowDrop { get; set; }

        /// <summary>
        /// 鼠标放入文字
        /// </summary>
        public string qtip { get; set; }

        /// <summary>
        /// 子节点
        /// </summary>
        public IList<TreeNode> children { get; set; }
    }
}
