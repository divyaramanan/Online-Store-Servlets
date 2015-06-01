<%-- 
    Document   : login
    Created on : Mar 16, 2015, 6:46:45 AM
    Author     : Divya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="/jadrn028/proj2/mystyles.css" type="text/css">
          <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
         <script type="text/javascript" src="/jadrn028/proj2/jsfile.js"></script>
         <script type="text/javascript" src="/jadrn028/proj2/login.js"></script>
        <title>JSP Page</title>
    </head>
    <body class="home">
        <div class="container">
        <div class ="heading">
            <h5>Stone  Appeal Jewelers...</h5>     
        </div>
        <div class="login">
            <h4>Seller's Login</h4>
            <form action="/jadrn028/servlet/Login" method="post">
                 <table class="logintable">
                  <tr>
                      <td class="left"> Username:</td><td class="right"><input type="text" name="user" id="user"/></td>
                  </tr>
                   <tr>
                      <td class="left">  Password:</td><td class="right"><input type="password" name="pass" id="pass"/></td>
                  </tr>
                   
              </table>
            
              <input type="submit" value="Submit" class="press"/>
              <input type="reset" value="Reset" class="press"/><br />
            </form>
         <div class="loginstatus">Incorrect Username and password</div>
        </div>
        </div>
    </body>
</html>

