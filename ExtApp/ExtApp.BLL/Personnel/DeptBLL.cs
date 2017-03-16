using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using ExtApp.DAL;

namespace ExtApp.BLL
{
    /// <summary>
    /// 机构BLL
    /// </summary>
    public class DeptBLL
    {
        /// <summary>
        /// DAL
        /// </summary>
        private DeptDAL dal;

        /// <summary>
        /// 获取所有
        /// </summary>
        /// <returns></returns>
        public IList<Dept> List()
        {
            return dal.List();
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        public Result Add(Dept dept)
        {
            return dal.Add(dept);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        public Result Edit(Dept dept)
        {
            return dal.Edit(dept);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Result Delete(int id)
        {
            return dal.Delete(id);
        }
    }
}
