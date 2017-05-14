using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;

using ExtApp.Model;
using ExtApp.BLL;

namespace ExtApp.Controller
{
    /// <summary>
    /// 文件控制器
    /// </summary>
    public class FilesController : ApiBase
    {
        private FilesBLL bll;

        /// <summary>
        /// 上传
        /// </summary>
        /// <returns></returns>
        public JsonResult Upload()
        {
            var file = HttpContext.Current.Request.Files[0];
            var result = bll.Upload(file);
            return Json(result);
        }

        /// <summary>
        /// 下载
        /// </summary>
        /// <param name="url"></param>
        /// <param name="name"></param>
        /// <param name="type"></param>
        [HttpGet]
        public void Download(string url, string name, string type)
        {
            bll.Download(url, name, type);
        }
    }
}
