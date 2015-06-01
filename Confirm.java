import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import helpers.*;





public class Confirm extends HttpServlet {
        

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
       String isPayed = request.getParameter("pay");
       String custdet = request.getParameter("custdet");
       int flag = 0;
       String purchase = "";
       Cookie[] cookie = request.getCookies();
        for(int i = 0; i < cookie.length; i++) {
            String name = cookie[i].getName().trim();
            if("jadrn028".equals(name))
            {
                flag = 1;
                purchase = cookie[i].getValue().trim();
                response.setContentType("text/html");
                   
                if("Yes".equals(isPayed))
                 {
                  
                  cookie[i].setMaxAge(0);
                  cookie[i].setPath("/");
                  response.addCookie(cookie[i]);
                  String details = updateDatabase(purchase);
                  request.setAttribute("custdet",custdet);
                  request.setAttribute("details",details);
                  RequestDispatcher reqDisp = request.getRequestDispatcher("/WEB-INF/jsp/confirm.jsp");
                  reqDisp.forward(request, response);
                  
       
                 }
                else{
                    PrintWriter out = response.getWriter();
                    out.println("<H1>There seems to be Error in Your Payment</H1><h2>Please Ensure that,valid card number is entered</h2>");
                }
                        
            }           
                       
            
           }
        if(flag == 0)
        {
         response.sendRedirect("/jadrn028/proj3/cart.html");
        }
        
       
       
       }
    
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        processRequest(request,response);
    }
    
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        processRequest(request,response);
    }
    
    public String updateDatabase(String purchase){
      
        
      String delims1 = "[|]{2}";
      String delims2 = "[|]{1}";
      String[] tokens = purchase.split(delims1);
      String out_query = "";
      String update_query = "";
      String select_query = "";
      String prodinfo = "<table id=\"prodinfo\"><tr><th>Product Id</th><th>Quantity</th></tr>";
        for (String token : tokens) {
            String[] eachitem = token.split(delims2);
            String sku = eachitem[0];
            int quantity = Integer.parseInt(eachitem[1]);
           String getManu_id = "SELECT vendorModel FROM product WHERE sku= '"+sku+"'";
           String id = DBHelper.getQueryResultTable(DBHelper.doQuery(getManu_id));
            id = id.substring(0, id.length()-2);
           
             Date date = new Date();
             Calendar now = Calendar.getInstance();
            String formattedDate = now.get(Calendar.YEAR)+"-"+(now.get(Calendar.MONTH) + 1)+"-"+now.get(Calendar.DATE);
    
             out_query = "INSERT INTO merchandise_out VALUES('"+sku+"','"+formattedDate+"',"+quantity+")";
             select_query = "SELECT quantity from on_hand WHERE sku ='"+sku+"'";
             String qty = DBHelper.getQueryResultTable(DBHelper.doQuery(select_query));
             qty = qty.substring(0, qty.length()-2);
              prodinfo+="<tr><td>"+id+"</td><td>"+quantity+"</td></tr>";
              
             int old_qty = Integer.parseInt(qty);
             int new_qty = old_qty - quantity;
             update_query = "UPDATE on_hand SET quantity ='"+new_qty+"' , date='"+formattedDate+"' WHERE sku = '"+sku+"'";
             DBHelper.doUpdate(out_query);
             DBHelper.doUpdate(update_query);
        }
         
        prodinfo+="</table>";
        return prodinfo;

    
    }
    
}
