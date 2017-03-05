using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp
{
    /// <summary>
    /// 字符串帮助类
    /// </summary>
    public class StringHelper
    {
        /// <summary>
        /// 在字符串前填充0，使其达到length大小
        /// </summary>
        /// <param name="s"></param>
        /// <param name="length"></param>
        /// <returns></returns>
        public static string ZeroFill(string s, int length)
        {
            if (s.Length > length)
            {
                throw new Exception("字符串长度必须比length小");
            }
            var sb = new StringBuilder(length);
            for (var i = 0; i < length - s.Length; i++)
            {
                sb.Append("0");
            }
            sb.Append(s);
            return sb.ToString();
        }
    }
}
