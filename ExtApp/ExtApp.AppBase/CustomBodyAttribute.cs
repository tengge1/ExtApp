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
    /// 自定义绑定属性
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Parameter, AllowMultiple = false, Inherited = true)]
    public sealed class CustomBodyAttribute : ParameterBindingAttribute
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
            return new CustomParameterBinding(parameter);
        }
    }
}
