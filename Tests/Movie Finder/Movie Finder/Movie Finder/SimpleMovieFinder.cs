using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie_Finder
{
    public class SimpleMovieFinder : IMovieFinder
    {
        public Movie[] FindMovie()
        {
            return new Movie[]
            {
                new Movie { Title = "Movie 1", Director = "Roberto Benigni" },
                new Movie { Title = "Movie 2", Director = "Roberto Benigni" },
                new Movie { Title = "Movie 3", Director = "Donald Trump" },
                new Movie { Title = "Movie 4", Director = "Donald Trump" },
                new Movie { Title = "Movie 5", Director = "Roberto Benigni" }
            };
        }
    }
}
