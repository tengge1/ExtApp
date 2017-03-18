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
    public class DeptBLL : BaseBLL<Dept>
    {
        /// <summary>
        /// DAL
        /// </summary>
        private DeptDAL dal;

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        public new Result Add(Dept dept)
        {
            return dal.Add(dept);
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        public new Result Edit(Dept dept)
        {
            return dal.Edit(dept);
        }
    }
}
