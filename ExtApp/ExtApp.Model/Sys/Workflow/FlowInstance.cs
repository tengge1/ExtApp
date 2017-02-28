using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    /// 工作流实例（对应某个工作流具体的一个实例）
    /// </summary>
    public class FlowInstance
    {
        /// <summary>
        /// 工作流实例Guid
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// 创建工作流实例
        /// </summary>
        public FlowInstance()
        {

        }

        /// <summary>
        /// 创建工作流实例
        /// </summary>
        /// <param name="guid">工作流实例Guid</param>
        public FlowInstance(string guid)
        {

        }

        /// <summary>
        /// 创建工作流实例
        /// </summary>
        /// <param name="model">工作流实例模型</param>
        public FlowInstance(FlowInstanceModel model)
        {

        }

        /// <summary>
        /// 审批同意
        /// </summary>
        /// <param name="model">审批数据模型</param>
        public void Approve(ApproveModel model)
        {

        }

        /// <summary>
        /// 审批拒绝
        /// </summary>
        /// <param name="model">审批数据模型</param>
        public void Reject(ApproveModel model)
        {

        }

        /// <summary>
        /// 返回某个用户所有
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public IList<string> GetApproveData(int userID)
        {
            return new List<string>();
        }
    }

    /// <summary>
    /// 工作流示例模型
    /// </summary>
    public class FlowInstanceModel
    {
        /// <summary>
        /// 工作流示例Guid
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// 工作流实例数据（可以一直往下传）
        /// </summary>
        public IList<IDictionary<string, object>> Data { get; set; }
    }

    /// <summary>
    /// 审批数据模型
    /// </summary>
    public class ApproveModel
    {
        /// <summary>
        /// 审批数据（可以一直往下传）
        /// </summary>
        public IList<IDictionary<string, object>> Data { get; set; }
    }
}
