using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie_Finder
{
    public interface IMovieFinder
    {
        Movie[] FindMovie();
    }
}
