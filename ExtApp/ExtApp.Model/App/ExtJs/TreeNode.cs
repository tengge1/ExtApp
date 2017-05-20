using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// ExtJs树节点接口
    /// </summary>
    public interface ITreeNode
    {
        /// <summary>
        /// 节点id
        /// </summary>
        int id { get; set; }

        /// <summary>
        /// 节点文本
        /// </summary>
        string text { get; set; }

        /// <summary>
        /// 是否是叶子节点
        /// </summary>
        bool? leaf { get; set; }

        /// <summary>
        /// 是否可以展开
        /// </summary>
        bool? expandable { get; set; }

        /// <summary>
        /// 是否已经展开
        /// </summary>
        bool? expanded { get; set; }

        /// <summary>
        /// 是否带checkbox（null-不带checkbox，true-带checkbox并选中，false-带checkbox但是没选中）
        /// </summary>
        bool? @checked { get; set; }

        /// <summary>
        /// 图标路径
        /// </summary>
        string icon { get; set; }

        /// <summary>
        /// css图标
        /// </summary>
        string iconCls { get; set; }

        /// <summary>
        /// 是否允许拖动
        /// </summary>
        bool? allowDrag { get; set; }

        /// <summary>
        /// 是否接受拖入
        /// </summary>
        bool? allowDrop { get; set; }

        /// <summary>
        /// 鼠标放入文字
        /// </summary>
        string qtip { get; set; }

        /// <summary>
        /// 子节点
        /// </summary>
        IList<ITreeNode> children { get; set; }
    }
}
