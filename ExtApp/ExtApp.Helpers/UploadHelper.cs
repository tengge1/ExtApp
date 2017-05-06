using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.IO;

using ExtApp.Model;

namespace ExtApp
{
    /// <summary>
    /// 上传帮助类
    /// </summary>
    public class UploadHelper
    {
        /// <summary>
        /// 上传
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public static Files Upload(HttpPostedFile file)
        {
            // 文件保存路径
            var dir = string.Format("/uploads/{0}/", DateTime.Now.ToString("yyyyMMdd"));
            var path = HttpContext.Current.Server.MapPath(dir);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            // 文件名
            var now = DateTime.Now;
            var timestamp = now.ToFileTime();

            //保存
            var savePath = string.Format("{0}{1}{2}", path, timestamp, Path.GetExtension(file.FileName)); // 物理路径
            file.SaveAs(savePath);
            var fileUrl = string.Format("{0}{1}{2}", dir, timestamp, Path.GetExtension(file.FileName)); // url
            var extension = Path.GetExtension(file.FileName);

            // 文件信息
            var files = new Files();
            files.AddTime = now;
            files.AddUser = AdminHelper.Admin;
            files.Extension = extension;
            files.ID = 0;
            files.Name = Path.GetFileName(file.FileName);
            files.Size = file.ContentLength;
            files.Type = file.ContentType;
            files.Url = fileUrl;

            return files;
        }
    }
}
