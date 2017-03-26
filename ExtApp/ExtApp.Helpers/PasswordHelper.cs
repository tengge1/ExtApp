using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;

namespace ExtApp
{
    /// <summary>
    /// 密码帮助类
    /// </summary>
    public class PasswordHelper
    {
        /// <summary>
        /// 加密
        /// </summary>
        /// <param name="password"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        public static string Crypt(string password, string salt = "ep_")
        {
            var md5 = new MD5CryptoServiceProvider();
            var bytes = Encoding.UTF8.GetBytes(salt + password);
            var bytes2 = md5.ComputeHash(bytes);
            return Convert.ToBase64String(bytes2);
        }
    }
}
