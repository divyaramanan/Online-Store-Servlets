/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import helpers.*;
import java.util.Vector;

public class SKUQuantity extends HttpServlet {

     public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
       
        String sku= request.getParameter("sku");
        

       
        
           String query = "SELECT quantity from on_hand WHERE sku = '"+sku+"'";
           String answer = DBHelper.getQueryResultTable(DBHelper.doQuery(query));
          
             out.print(answer);
                            
            
          }
          
               
         
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    { 
        doGet(request, response);
    }  

    
    
   

}
