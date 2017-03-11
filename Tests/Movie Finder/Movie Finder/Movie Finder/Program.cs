using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SpringNet;

namespace Movie_Finder
{
    /// <summary>
    /// 电影应用
    /// </summary>
    public class MovieApp
    {
        public static void Main(string[] args)
        {
            IApplicationContext ctx = ContextRegistry.GetContext();
        }
    }
}
