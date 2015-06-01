import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;




public class Order extends HttpServlet {
        

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        int flag = 0;
    if (request.getParameterMap().isEmpty()) { 
        Cookie[] cookie = request.getCookies();
        for (int i = 0; i < cookie.length; i++) {
            String name = cookie[i].getName().trim();
            if("jadrn028".equals(name))
            {
                flag = 1;
                RequestDispatcher reqDisp = request.getRequestDispatcher("/WEB-INF/jsp/error.jsp");
                reqDisp.forward(request, response);       
            }           
                       
            
           }
        if(flag == 0)
        {
         response.sendRedirect("/jadrn028/proj3/cart.html");
        }
             
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
    
}
