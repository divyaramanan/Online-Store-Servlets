<%-- 
    Document   : information
    Created on : Apr 19, 2015, 10:34:53 PM
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
        <title>Customer Information</title>
    </head>
    <body>
      <ul class="navigation">
                <li class="heading"><a href="/jadrn028/proj3.html">Fashion & Me</a> </li>             
                <li><a id="special" href="/jadrn028/proj3/product.html">Products</a></li>
                 <li><a href="/jadrn028/proj3/cart.html">Cart:&nbsp;<span class="count"></span>&nbsp;items</a></li>
                <li><a href="/jadrn028/proj3.html#footer">Contact Us</a></li> 
            </ul>
        <h2 id="infohead">Please Fill up Billing,shipping and payment information</h2>
	<div id="vmsg"></div>
	<form method="post" action="/jadrn028/servlet/Confirm" id="form1"> 
	
	
   
    <table id="table1">
	   <tr>
	   <th colspan="2">BILLING ADDRESS</th>
	   </tr>
        <tr>
            <td class="right">First Name:</td>
            <td><input type="text" id="fname" size="20" /></td>
        </tr>
		<tr>
            <td class="right">Last Name:</td>
            <td><input type="text" id="lname" size="20" /></td>
        </tr>
        <tr>
            <td class="right">Address:</td>
            <td><Input type="text" id="address1" size="20" /></td>
        </tr>
		<tr>
            <td class="right hidden">Address Line 2:</td>
            <td><Input type="text" id="address2" size="20" /></td>
        </tr>
        <tr>
            <td class="right">City:</td>
            <td><Input type="text" id="city" size="20" /></td>
        </tr>
        <tr>
            <td class="right">State:</td>
            <td><Input type="text" id="state" size="2" /></td>
        </tr>
        <tr>
            <td class="right">Zip:</td>
            <td><Input type="text" id="zip" size="9" /></td>            
        </tr>  
        <tr>
            <td class="right">Phone:</td>
            <td><Input type="text" id="area" size="3" />&nbsp;<Input type="text" id="pre" size="3" />&nbsp;<Input type="text" id="post" size="4" /></td>            
        </tr>		
    </table> 
	
	
   
    <table id="table2">
	   <tr>
	   <th colspan="2">SHIPPING ADDRESS</th>
	   </tr>
	   <tr>
	    <td colspan="3" class="checkb"><input type="checkbox" name="same" value="samecheck">Same as billing address</td>
	   </tr>
        <tr>
            <td class="right">First Name:</td>
            <td><input type="text" id="sfname" size="20" /></td>
        </tr>
		<tr>
            <td class="right">Last Name:</td>
            <td><input type="text" id="slname" size="20" /></td>
        </tr>
        <tr>
            <td class="right">Address:</td>
            <td><Input type="text" id="saddress1" size="20" /></td>
        </tr>
		<tr>
            <td class="right hidden">Address Line 2:</td>
            <td><Input type="text" id="saddress2" size="20" /></td>
        </tr>
        <tr>
            <td class="right">City:</td>
            <td><Input type="text" id="scity" size="20" /></td>
        </tr>
        <tr>
            <td class="right">State:</td>
            <td><Input type="text" id="sstate" size="2" maxlength="2" /></td>
        </tr>
        <tr>
            <td class="right">Zip:</td>
            <td><Input type="text" id="szip" size="5" maxlength="5" /></td>            
        </tr>  
        <tr>
            <td class="right">Phone:</td>
            <td><Input type="text" id="sarea" size="3" maxlength="3" />&nbsp;
			<Input type="text" id="spre" size="3" maxlength="3" />&nbsp;
			<Input type="text" id="spost" size="4" maxlength="4" /></td>            
        </tr>		
    </table> 
	
	<table id="table3">
	 <tr>
	   <th colspan="2">PAYMENT INFORMATION</th>
	  </tr>
	  <tr>
	  <td class="right">Payment Type:</td>
      <td>
	  <select id="paytype">
	       <option value="sel">Select One</option>
          <option value="master">Master Card</option>
          <option value="visa">Visa Card</option>
          <option value="dis">Discover</option>
          <option value="ae">American Express</option>
      </select>
	  </td>
	  </tr>
	  <tr>
	  <td class="right">Card Number:</td>
	  <td><input type="password" id="psw1" size="4" maxlength="4"/>&nbsp;
	  <input type="password" id="psw2" size="4" maxlength="4"/>&nbsp;
	  <input type="password" id="psw3" size="4" maxlength="4"/>&nbsp;
	  <input type="text" id="psw4" size="4" maxlength="4"/>&nbsp;
	  </td>
	  </tr>
	  <tr>
	  <td class="right" id="exp">Expiration Date:</td>
	  <td>
	   <input type="text" id="mm" size="2" maxlength="2" value="MM">&nbsp;
	  <input type="text" id="yy" size="4" maxlength="4" value="YYYY">&nbsp;
	  </td>
	  </tr>
	 </table>
	 
	<div id="chkbuttons">
         <a href="http://jadran.sdsu.edu/jadrn028/proj3/cart.html"><button id="bk">Back to Cart</button></a>
	 <input type="submit" id="ord" value="Place order"/>
         <input type="reset" value="Reset" id="reset">
         </div>
            <input type="text"  name="pay" id="pay" hidden>
             <input type="text" name="custdet" id="custdet" hidden>
	</form>
         
	</body>
</html>
