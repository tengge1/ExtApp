using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace ExtApp
{
    /// <summary>
    /// HttpPost发送Json数据时绑定
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Parameter, AllowMultiple = false, Inherited = true)]
    public sealed class JsonBodyAttribute : ParameterBindingAttribute
    {
        /// <summary>
        /// 数据绑定
        /// </summary>
        /// <param name="parameter"></param>
        /// <returns></returns>
        public override HttpParameterBinding GetBinding(HttpParameterDescriptor parameter)
        {
            if (parameter == null)
                throw new ArgumentException("无效参数");
            return new HttpJsonBodyBinding(parameter);
        }
    }
}
