using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    /// 工作流实体
    /// </summary>
    public class Flow
    {
        /// <summary>
        /// 添加工作流
        /// </summary>
        /// <param name="model">工作流实体模型</param>
        public void Add(FlowModel model)
        {

        }

        /// <summary>
        /// 编辑工作流
        /// </summary>
        /// <param name="model">工作流实体模型</param>
        public void Edit(FlowModel model)
        {

        }

        /// <summary>
        /// 删除工作流
        /// </summary>
        /// <param name="model">工作流实体id</param>
        public void Delete(int id)
        {

        }
    }

    /// <summary>
    /// 工作流实体模型
    /// </summary>
    public class FlowModel
    {
        /// <summary>
        /// 编号
        /// </summary>
        public int ID { get; set; }

        /// <summary>
        /// 工作流数据
        /// </summary>
        public string Data { get; set; }

        /// <summary>
        /// 备案
        /// </summary>
        public string Memo { get; set; }

        /// <summary>
        /// 状态（0-正常，-1-删除）
        /// </summary>
        public int Status { get; set; }
    }
}
