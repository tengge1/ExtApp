using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// 数据结果模型
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class DataResult<T> : Result
    {
        /// <summary>
        /// 数据
        /// </summary>
        public T Data { get; set; }

        /// <summary>
        /// 空构造函数
        /// </summary>
        public DataResult()
        {

        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="Data"></param>
        /// <param name="Code"></param>
        /// <param name="Msg"></param>
        public DataResult(T Data, int Code = 200, string Msg = "数据获取成功！")
        {
            this.Data = Data;
            this.Code = Code;
            this.Msg = Msg;
        }
    }

    /// <summary>
    /// 数据结果模型
    /// </summary>
    public class DataResult : Result
    {
        /// <summary>
        /// 数据
        /// </summary>
        public object Data { get; set; }

        /// <summary>
        /// 空构造函数
        /// </summary>
        public DataResult()
        {

        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="Data"></param>
        /// <param name="Code"></param>
        /// <param name="Msg"></param>
        public DataResult(object Data, int Code = 200, string Msg = "数据获取成功！")
        {
            this.Data = Data;
            this.Code = Code;
            this.Msg = Msg;
        }
    }
}
