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
        /// <param name="p"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult List([FromUri]DatabaseBackupListParam p)
        {
            var result = bll.List(p);
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
    }
}
