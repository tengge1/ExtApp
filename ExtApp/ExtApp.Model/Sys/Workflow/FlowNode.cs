using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    /// 工作流节点
    /// </summary>
    public class FlowNode
    {
        /// <summary>
        /// 节点名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 节点类型
        /// </summary>
        public FlowNodeType Type { get; set; }

        /// <summary>
        /// 节点固态数据
        /// </summary>
        public IList<IDictionary<string, object>> Data { get; set; }
    }

    /// <summary>
    /// 工作流节点类型
    /// </summary>
    public enum FlowNodeType
    {
        /// <summary>
        /// 开始节点
        /// </summary>
        Start,

        /// <summary>
        /// 结束节点
        /// </summary>
        End,

        /// <summary>
        /// 普通节点
        /// </summary>
        Normal,

        /// <summary>
        /// 根据条件选择一个分支的节点
        /// </summary>
        Condition,

        /// <summary>
        /// 同时走多个分支的节点
        /// </summary>
        Split
    }

    /// <summary>
    /// 节点数据模型
    /// </summary>
    public class FlowNodeData
    {
        /// <summary>
        /// 配置在该节点的数据
        /// </summary>
        public IList<IDictionary<string, object>> ConfigData { get; set; }

        /// <summary>
        /// 从上层节点传递下来的数据
        /// </summary>
        public IList<IDictionary<string, object>> FlowData { get; set; }
    }
}
