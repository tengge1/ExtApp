using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Metadata;

namespace ExtApp
{
    /// <summary>
    /// Api Controller通过HttpPost传送JSON数据时进行参数绑定
    /// </summary>
    /// <see cref="http://www.tuicool.com/articles/YJBjA3y"/>
    public class HttpJsonBodyBinding : HttpParameterBinding
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="descriptor"></param>
        public HttpJsonBodyBinding(HttpParameterDescriptor descriptor)
            : base(descriptor)
        {

        }

        /// <summary>
        /// 参数绑定任务
        /// </summary>
        /// <param name="metadataProvider"></param>
        /// <param name="actionContext"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public override Task ExecuteBindingAsync(ModelMetadataProvider metadataProvider, HttpActionContext actionContext, CancellationToken cancellationToken)
        {
            var binding = actionContext.ActionDescriptor.ActionBinding;
            if (binding.ParameterBindings.Length > 1 || actionContext.Request.Method == HttpMethod.Get) // 参数个数大于0， 或者是Get请求，执行一个空任务
            {
                return EmptyTask.Start();
            }

            var type = binding.ParameterBindings[0].Descriptor.ParameterType; // 获取参数类型
            if (type == typeof(string)) // 参数是字符串
            {
                return actionContext.Request.Content.ReadAsStringAsync().ContinueWith((task) =>
                {
                    var stringResult = task.Result;
                    SetValue(actionContext, stringResult);
                });
            }
            else if (type == typeof(byte[])) // 参数是byte[]类型
            {
                return actionContext.Request.Content.ReadAsByteArrayAsync().ContinueWith((task) =>
                {
                    byte[] result = task.Result;
                    SetValue(actionContext, result);
                });
            }
            throw new InvalidOperationException("只有字符串和byte[]类型可以作为[CustomParameterBinding]的参数！");
        }

        /// <summary>
        /// 是否从Body中读取数据
        /// </summary>
        public override bool WillReadBody
        {
            get
            {
                return true;
            }
        }
    }
}
