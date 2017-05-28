using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ExtApp.Web
{
    public partial class Default : System.Web.UI.Page
    {
        protected string style = "";
        protected string theme = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (AdminHelper.Admin == null)
            {
                Response.Redirect("Login.aspx");
            }
            if (!IsPostBack)
            {
                init();
            }
        }

        private void init()
        {
            style = ConfigurationManager.AppSettings["Style"];
            theme = ConfigurationManager.AppSettings["Theme"];
        }
    }
}