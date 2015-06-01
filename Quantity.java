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

public class Quantity extends HttpServlet {

     public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        StringBuffer toReturn = new StringBuffer();
        String sku="";
        String[] tempqty;
        Vector<String []> q;

       
        String query = "SELECT sku from product";
        Vector<String []> v =DBHelper.doQuery(query);
          for(int i=0; i < v.size(); i++) {
          String [] tmp = v.elementAt(i);        
         for(int j=0; j < tmp.length; j++)
         { 
            sku = tmp[j];
            query = "SELECT quantity from on_hand WHERE sku = '"+sku+"'";
            q =DBHelper.doQuery(query);
            if(q.size() == 0)
                toReturn.append("soon"+"||");
            else
            {
            tempqty = q.elementAt(0); 
            if(Integer.parseInt(tempqty[0]) == 0)
            {
            toReturn.append("way"+"||");
            }
            else
            {
            toReturn.append(tempqty[0]+"||");
            }
            
            }
                        
        
         }
        
            
          }
          
          out.println(toReturn.toString());
        
        } 
         
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    { 
        doGet(request, response);
    }  

    
    
   

}
