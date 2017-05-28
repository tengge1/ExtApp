using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace ExtApp.Web
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                init();
            }
        }

        private void init()
        {
            var path = ConfigurationManager.AppSettings["Theme"];
            var control = new HtmlGenericControl();
            control.TagName = "link";
            control.Attributes.Add("rel", "stylesheet");
            control.Attributes.Add("href", ResolveUrl(Page.ResolveClientUrl(path)));
            Page.Header.Controls.AddAt(0, control);
        }
    }
}