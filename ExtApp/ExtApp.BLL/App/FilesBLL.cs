using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

using ExtApp.Model;

namespace ExtApp.BLL
{
    /// <summary>
    /// 文件BLL
    /// </summary>
    public class FilesBLL : BaseBLL<Files>
    {
        /// <summary>
        /// 上传
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public DataResult<Files> Upload(HttpPostedFile file)
        {
            var files = UploadHelper.Upload(file);
            return new DataResult<Files>(200, "上传成功！", files);
        }

        /// <summary>
        /// 下载
        /// </summary>
        /// <param name="url"></param>
        /// <param name="name"></param>
        /// <param name="type"></param>
        public void Download(string url, string name, string type)
        {
            var path = HttpContext.Current.Server.MapPath(url);
            DownloadHelper.Download(path, name, type);
        }
    }
}
