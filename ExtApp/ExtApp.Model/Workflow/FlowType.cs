using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    /// 工作流分类（根据所属模块分）
    /// </summary>
    public class FlowType
    {
        /// <summary>
        /// 添加工作流分类
        /// </summary>
        /// <param name="model">工作流分类模型</param>
        public void Add(FlowTypeModel model)
        {

        }

        /// <summary>
        /// 编辑工作流分类
        /// </summary>
        /// <param name="model">工作流分类模型</param>
        public void Edit(FlowTypeModel model)
        {

        }

        /// <summary>
        /// 删除工作流分类
        /// </summary>
        /// <param name="id">工作流分类id</param>
        public void Delete(int id)
        {

        }
    }

    /// <summary>
    /// 工作流分类模型
    /// </summary>
    public class FlowTypeModel
    {
        /// <summary>
        /// 编号
        /// </summary>
        public int ID { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Memo { get; set; }

        /// <summary>
        /// 状态（0-正常，-1-删除）
        /// </summary>
        public int Status { get; set; }
    }
}