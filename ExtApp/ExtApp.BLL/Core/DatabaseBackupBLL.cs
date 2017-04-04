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
    /// 数据库备份BLL
    /// </summary>
    public class DatabaseBackupBLL : BaseBLL<DatabaseBackup>
    {
        /// <summary>
        /// 数据库备份
        /// </summary>
        /// <returns></returns>
        public Result Backup()
        {
            var now = DateTime.Now;
            var fileName = string.Format("ExtApp{0}.bak", now.ToString("yyyyMMdd"));
            var path = HttpContext.Current.Server.MapPath("/App_Data/Backup");
            var sql = string.Format(@"use master;backup database ExtApp.mdf to disk='{0}\{1}'", path, fileName);

            var session = NHibernateHelper.GetCurrentSession();
            var query = session.CreateSQLQuery(sql);
            var count = query.ExecuteUpdate();
            var model = new DatabaseBackup
            {
                ID = 0,
                Name = "数据库" + now.ToString("yyyy-MM-dd") + "备份",
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
