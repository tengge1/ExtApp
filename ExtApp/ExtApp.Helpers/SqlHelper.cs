using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace ExtApp
{
    /// <summary>
    /// Sql帮助类
    /// </summary>
    public class SqlHelper : IDisposable
    {
        /// <summary>
        /// 连接字符串
        /// </summary>
        protected string connStr = "";

        /// <summary>
        /// 数据库连接
        /// </summary>
        protected SqlConnection conn = null;

        /// <summary>
        /// 构造函数
        /// </summary>
        public SqlHelper()
        {
            connStr = ConfigurationManager.ConnectionStrings["ExtApp"].ToString();
            conn = new SqlConnection(connStr);
            Open();
        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="connectionString">连接字符串</param>
        public SqlHelper(string connectionString)
        {
            connStr = connectionString;
            conn = new SqlConnection(connStr);
            Open();
        }

        /// <summary>
        /// 打开数据库连接
        /// </summary>
        public void Open()
        {
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }
        }

        /// <summary>
        /// 关闭数据库连接
        /// </summary>
        public void Close()
        {
            if (conn.State == ConnectionState.Open)
            {
                conn.Close();
            }
        }

        /// <summary>
        /// 获取数据集
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public DataSet GetDataSet(string sql)
        {
            var cmd = conn.CreateCommand();
            cmd.CommandText = sql;
            var adapter = new SqlDataAdapter(cmd);
            var dataset = new DataSet();
            adapter.Fill(dataset);
            return dataset;
        }

        /// <summary>
        /// 执行sql语句
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public int ExecuteSql(string sql)
        {
            var cmd = conn.CreateCommand();
            cmd.CommandText = sql;
            return cmd.ExecuteNonQuery();
        }

        /// <summary>
        /// 析构函数
        /// </summary>
        public void Dispose()
        {
            Close();
        }
    }
}
