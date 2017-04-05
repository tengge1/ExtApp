using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.IO;
using NHibernate.Criterion;

using ExtApp.Model;

namespace ExtApp.BLL
{
    /// <summary>
    /// 数据库备份BLL
    /// </summary>
    public class DatabaseBackupBLL : BaseBLL<DatabaseBackup>
    {
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public ListResult<DatabaseBackup> List(DatabaseBackupListParam p)
        {
            ICriterion query = null;
            if (!string.IsNullOrEmpty(p.Name))
            {
                query = Restrictions.Like("Name", p.Name, MatchMode.Anywhere);
            }
            var total = 0;
            var list = dal.List(p.firstResult, p.maxResults, out total, query);
            return new ListResult<DatabaseBackup>(200, "获取成功！", total, list);
        }

        /// <summary>
        /// 删除数据库备份
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public override Result Delete(int ID)
        {
            var backup = dal.Get(ID);
            if (backup == null)
            {
                return new Result(300, "数据不存在！");
            }
            var path = HttpContext.Current.Server.MapPath("/App_Data/Backup");
            path = path + "\\" + backup.FileName;

            // 删除文件
            try
            {
                File.Delete(path);
            }
            catch (Exception e)
            {
                var logger = FileLogHelper.GetLogger(this.GetType());
                logger.Error(e.Message, e);
                return new Result(300, "文件删除失败！");
            }

            return base.Delete(ID);
        }

        /// <summary>
        /// 数据库备份
        /// </summary>
        /// <returns></returns>
        public Result Backup()
        {
            var now = DateTime.Now;
            var dbName = ConfigHelper.Get("DatabaseName");
            dbName = dbName == null ? "ExtApp" : dbName;
            var fileName = string.Format("ExtApp{0}.bak", now.ToString("yyyyMMddHHmmss"));
            var path = HttpContext.Current.Server.MapPath("/App_Data/Backup");
            var sql = string.Format(@"backup database [{0}] to disk='{1}\{2}'", dbName, path, fileName);
            var helper = new SqlHelper();
            helper.ExecuteSql(sql);

            var model = new DatabaseBackup
            {
                ID = 0,
                Name = "数据库" + now.ToString("yyyy-MM-dd") + "备份",
                FileName = fileName,
                AddUser = AdminHelper.Admin,
                AddTime = now,
                IsCurrent = false
            };
            var result = dal.Add(model);
            if (result)
            {
                return new Result(200, "备份成功！");
            }
            else
            {
                return new Result(300, "备份失败！");
            }
        }
    }
}
