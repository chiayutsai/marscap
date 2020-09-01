<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using com.ifxbroker.tkdemo;
using System.Data;
public class Handler : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        string action = context.Request.Params["action"];
        switch (action)
        {
            case "GetWebQuotes":
                GetWebQuotes(context); break;
        }
    }
    /// <summary>
    /// Get Web Quote 
    /// </summary>
    /// <param name="context"></param>
    private void GetWebQuotes(HttpContext context)
    {
        string jsonpCallback = context.Request.Params["jsonpCallback"];//客户端请求参数    
        WebMarketData wm = new WebMarketData();
        Config.ConfigInfo configInfo = Config.GetConfigInfo();
        if (configInfo != null)
        {
            if (configInfo.sDealerUsername != "" && configInfo.sPassword != "")
            {
                DataTable dt = wm.GetWebQuotes(configInfo.sDealerUsername, configInfo.sPassword);
                if (dt != null)
                {

                    DataTable dtNew = dt.Clone();
                    if (configInfo.productNames != "")
                    {
                        DataRow[] drArr = dt.Select("ProductName in(" + configInfo.productNames + ")");//模糊查询
                        for (int i = 0; i < drArr.Length; i++)
                        {
                            dtNew.ImportRow(drArr[i]);
                        }
                    }
                    string json = DataTableConvertJson.DataTableToJson("Products", dtNew);
                    context.Response.Write(jsonpCallback + "(" + json + ")");
                }
            }
        }
    }
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}