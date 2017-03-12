using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Spring.Context;
using Spring.Context.Support;
using log4net;
using log4net.Config;

namespace Movie_Finder
{
    public class MovieApp
    {
        private static readonly ILog LOG = LogManager.GetLogger(typeof(MovieApp));

        public static void Main(string[] args)
        {
            // 初始化日志系统
            XmlConfigurator.Configure();

            // 注入容器
            IApplicationContext ctx = ContextRegistry.GetContext();
            MovieLister lister = (MovieLister)ctx.GetObject("MyMovieLister");
            Movie[] movies = lister.MoviesDirectedBy("Roberto Benigni");
            LOG.Info("\nSearching for movie...\n");
            foreach (Movie movie in movies)
            {
                LOG.Info(string.Format("Movie Title = '{0}', Director = '{1}'.", movie.Title, movie.Director));
            }
            LOG.Info("\nMovieApp Done.\n\n");
        }
    }
}
