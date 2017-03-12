using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie_Finder
{
    public class MovieLister
    {
        public IMovieFinder movieFinder { get; set; }

        public Movie[] MoviesDirectedBy(string director)
        {
            return movieFinder.FindMovie().Where(o => o.Director == director).ToArray();
        }
    }
}
