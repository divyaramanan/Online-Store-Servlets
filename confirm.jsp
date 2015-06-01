<%-- 
    Document   : confirm
    Created on : Apr 20, 2015, 11:09:56 AM
    Author     : Divya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script type="text/javascript" src="/jadrn028/proj3/carthandle.js"></script>
    <script type="text/javascript" src="/jadrn028/proj3/shopping_cart.js"></script>
    <script type="text/javascript" src="/jadrn028/proj3/ajax_get_lib.js"></script>
    <script type="text/javascript" src="/jadrn028/proj3/javaScriptStore.js"></script>
     <script type="text/javascript" src="/jadrn028/proj3/carthandle.js"></script>
      
    <link rel="stylesheet" type="text/css" href="/jadrn028/proj3/style.css" />
        <title>Order Confirmation</title>
    </head>
    <body id="conf">
        <div id="print"><h3>Order Confirmation</h3>
            <p>Dear Customer,<br/> Thanks for your Purchase. If you have any queries or feedback regarding our online store,Feel free to contact us 24 * 7</p>
            <h3>Purchase Summary</h3>
        </div>
        
        <% out.println(request.getParameter("custdet"));
           out.println(request.getAttribute("details"));
        %>
        <button id="more"><a href="http://jadran.sdsu.edu/jadrn028/proj3/product.html">Shop More</a></button>
    </body>
</html>
