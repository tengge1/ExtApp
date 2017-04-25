using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.IO;

namespace ExtApp.Helper
{
    /// <summary>
    /// 上传帮助类
    /// </summary>
    public class UploadHelper
    {
        public string Upload(HttpPostedFile file)
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
            var fileName = string.Format("{0}{1}{2}", dir, timestamp, Path.GetExtension(file.FileName)); // url
            var extension = Path.GetExtension(file.FileName);
            return fileName;
        }
    }

    /// <summary>
    /// 文件上传信息
    /// </summary>
    public class FileUploadInfo
    {
        /// <summary>
        /// 文件名称
        /// </summary>
        public string FileName { get; set; }

        /// <summary>
        /// 文件类型
        /// </summary>
        public string ContentType { get; set; }

        /// <summary>
        /// 文件大小
        /// </summary>
        public int ContentLength { get; set; }

        /// <summary>
        /// 文件扩展名
        /// </summary>
        public string FileExtension { get; set; }

        /// <summary>
        /// 下载Url
        /// </summary>
        public string FileUrl { get; set; }

        /// <summary>
        /// 物理路径
        /// </summary>
        public string FilePath { get; set; }

        /// <summary>
        /// 上传时间
        /// </summary>
        public DateTime AddTime { get; set; }
    }
}
