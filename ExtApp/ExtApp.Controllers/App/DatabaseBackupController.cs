using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

using ExtApp.Model;
using ExtApp.BLL;

namespace ExtApp.Controller
{
    /// <summary>
    /// 数据库备份控制器
    /// </summary>
    public class DatabaseBackupController : ApiBase
    {
        /// <summary>
        /// bll
        /// </summary>
        private DatabaseBackupBLL bll;

        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="firstResult"></param>
        /// <param name="maxResults"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List(int firstResult, int maxResults, string name = null)
        {
            var result = bll.List(firstResult, maxResults, name);
            return Json(result);
        }

        /// <summary>
        /// 删除数据库
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Delete(int ID)
        {
            var result = bll.Delete(ID);
            return Json(result);
        }

        /// <summary>
        /// 备份
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Backup()
        {
            var result = bll.Backup();
            return Json(result);
        }

        /// <summary>
        /// 还原
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Restore(int ID)
        {
            var result = bll.Restore(ID);
            return Json(result);
        }
    }
}
