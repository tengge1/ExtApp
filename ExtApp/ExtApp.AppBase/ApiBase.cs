using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json.Linq;

using ExtApp.Model;

namespace ExtApp
{
    /// <summary>
    /// 所有API控制器的基类
    /// </summary>
    [ApiAuth]
    public class ApiBase : ApiController
    {
        /// <summary>
        /// 返回JSON执行结果
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public JsonResult Json(object obj)
        {
            var json = JsonHelper.ToJson(obj);
            return new JsonResult(json);
        }

        /// <summary>
        /// 返回一个成功消息
        /// </summary>
        /// <param name="msg"></param>
        /// <returns></returns>
        public JsonResult Success(string msg)
        {
            var result = new Result
            {
                Code = 200,
                Msg = msg
            };
            return Json(result);
        }

        /// <summary>
        /// 返回一个成功消息
        /// </summary>
        /// <param name="msg"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public JsonResult Success(string msg, object data)
        {
            var result = new DataResult
            {
                Code = 200,
                Msg = msg,
                Data = data
            };
            return Json(result);
        }

        /// <summary>
        /// 返回一个错误消息
        /// </summary>
        /// <param name="msg"></param>
        /// <returns></returns>
        public JsonResult Error(string msg)
        {
            var result = new Result
            {
                Code = 300,
                Msg = msg
            };
            return Json(result);
        }

        /// <summary>
        /// 返回一个列表消息
        /// </summary>
        /// <param name="total"></param>
        /// <param name="items"></param>
        /// <returns></returns>
        public JsonResult List<T>(int total, IList<T> items)
        {
            var result = new ListResult<T>
            {
                Code = 200,
                Msg = "获取成功",
                Total = total,
                Items = items
            };
            return Json(result);
        }

        /// <summary>
        /// 返回一棵树
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public JsonResult Tree(JObject obj)
        {
            var result = new DataResult
            {
                Code = 200,
                Msg = "获取成功",
                Data = obj
            };
            return Json(result);
        }
    }
}
