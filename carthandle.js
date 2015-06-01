$(document).ready( function() {
  
  $('#emptycart').hide();
  
   $.get('http://jadran.sdsu.edu/jadrn028/servlet/GetJewels',prodInfo);
   var cart = new shopping_cart("jadrn028");
   var cartarr = [];
   var totalproducts,toDisplay,qty;
   var proj3_data = [],innerArray = [],tempArray=[],incart = [];
   var sum = 0;
   var k = 0;
   var value;
   var num;
   
       
   
   var idarr=[$('#fname'),$('#lname'),$('#address1'),$('#city'),$('#state'),$('#zip'),$('#area'),$('#pre'),$('#post'),
           $('#sfname'),$('#slname'),$('#saddress1'),$('#scity'),$('#sstate'),$('#szip'),$('#sarea'),$('#spre'),$('#spost'),
		   $('#psw1'),$('#psw2'),$('#psw3'),$('#psw4'),$('#mm'),$('#yy')];
var zipid = [$('#zip'),$('#szip')];
var phone3 = [$('#area'),$('#pre'),$('#sarea'),$('#spre')];
var phone4 = [$('#post'),$('#spost')];
var card = [ $('#psw1'),$('#psw2'),$('#psw3'),$('#psw4')];

   
    function prodInfo(response){
         
          var tmpArray = response.split(";");
          totalproducts = tmpArray.length-1;
          
          for(var i=0; i < tmpArray.length; i++) 
          {
              
              innerArray = tmpArray[i].split("||");
              proj3_data[i] = innerArray;                      
              
          }
            for(var i = 0; i<cart.getCartArray().length;i++)
           {
       incart= cart.getCartArray();
       cartarr.push(cart.getCartArray()[i][0]);
       qty = cart.getCartArray()[i][1];
       
       for(var j=0;j<totalproducts;j++){
           if(cart.getCartArray()[i][0] === proj3_data[j][0])
           {
               $('#emptycart').hide();
              sum += CartDisplay(qty,j);
           }
       }
           
        
          }
          if(cart.getCartArray().length > 0)
          {
           DisplayTotal(sum);
           $('#cartbuttons').show();
          }
          else
          {
               $('#emptycart').show();
               $('#cartbuttons').hide();
          }
            	    
     }
     
   
     
     function CartDisplay(qty,j){
         k++;
        var imgname = proj3_data[j][4].toLowerCase();
        toDisplay = "<table><col width=\"100\"><col width=\"120\"><col width=\"60\"><col width=\"60\"><tr>";
        toDisplay+= "<td><img src= \"/~jadrn028/proj1/clickz/"+imgname+"\" width=\"100px\" height= \"100px\"></td>";
        toDisplay+= "<td><span>"+proj3_data[j][3]+"</span><br/><br/>Vendor:&nbsp;&nbsp"+proj3_data[j][2]+"<br/><br/>Category:&nbsp;&nbsp"+proj3_data[j][1]+"</td>";
        toDisplay+="<td>Quantity:&nbsp;&nbsp<input type=\"text\" class=\"qty\" id=\"q"+k+"\" value = \""+qty+"\"><br/><br/><button class=\"remove\" id=\"cb"+k+"\">Remove Item</button><button class=\"update\" id=\"ub"+k+"\">Update Quantity</button><br/><br/><span class=\"stockerror\" id=\"error"+k+"\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>";       
         toDisplay+="<td>$"+(qty*proj3_data[j][7]).toFixed(2)+"</td></tr></table>";        
         $('#addedproducts').append(toDisplay);
         return qty*proj3_data[j][7];
     }
     
     
     function explodeArray(item,delimiter) {
      tempArray=new Array(1);
      var Count=0;
      var tempString=new String(item);

           while (tempString.indexOf(delimiter)>0) {
          tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
          tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
         Count=Count+1;
          }

          tempArray[Count]=tempString;
         return tempArray;
        }
 
        
    if($.trim($('.stockerror').val()) == "")
    {
        $('#checkout').prop('disabled', false);
       
    }
        
    $('#checkout').on('click', function() {       
       window.location.href = "http://jadran.sdsu.edu/jadrn028/servlet/Order";
        });                
        
   
        
        function DisplayTotal(sum){
            var tax = sum*(8/100);
            toDisplay = "<div id=\"final\">Total:&nbsp;&nbsp;$"+sum.toFixed(2)+"<br/><br/>";
            toDisplay += "Tax:&nbsp;&nbsp;$"+tax.toFixed(2)+"<br/><br/>";
            toDisplay += "<span>Final Amount:&nbsp;&nbsp;$"+(sum+tax).toFixed(2)+"</span></div>";
            $('#addedproducts').append(toDisplay);
            
        }
        
      /*  $('#addedproducts').on('change',function(event){
                 alert("changes");
                 var qtyid = event.target.id;
                  var subq = qtyid.substring(0,1);
                  num = qtyid.substring(1);
                 
                 if(subq == "q")
                   {
                 value = $('#'+qtyid).val();
               
                 var sku = cartarr[num-1];
                 $.get('http://jadran.sdsu.edu/jadrn028/servlet/SKUQuantity?sku='+sku,qhandler);
                 
                 }
            
        });
        */
        
        function qhandler(response)
        {
          response = $.trim(response);
          response = response.substring(0,response.length-2);
          response = Number(response);
          value = Number(value);
          if(value <= response)
          {
            cart.setQuantity(cartarr[num-1],value);
            location.reload(false);
           
          }
          else
          {
              $('#error'+num).html("Only "+response+" Available in Stock");
              $('#checkout').prop('disabled', true);
             
          }
        }
        
        $('#addedproducts').on('click',function(event){
            var rbid = event.target.id;
            var subrb = rbid.substring(0,2);
            num = rbid.substring(2);
            if(subrb == "cb")
            {
               cart.delete(cartarr[num-1]);
              location.reload(false);
            }
             if(subrb == "ub")
            {
               var qtyid = event.target.id;
               num = qtyid.substring(2);
               var qid = "q"+num;
               value = $('#'+qid).val();              
               var sku = cartarr[num-1];
               $.get('http://jadran.sdsu.edu/jadrn028/servlet/SKUQuantity?sku='+sku,qhandler);
               
            }
        });
        
$('input[name=same]').on('click',function(){
var boxes = $('input[name=same]:checked').val();
if(boxes == "samecheck")
{

for(var j=0;j<=8;j++)
{
var value = idarr[j].val();
idarr[j+9].val(value);
}
var valadd = $('#address2').val();
$('#saddress2').val(valadd);
}
});


function isvalid(){
var msg="";
var mm = $.trim($('#mm').val());
var yy = $.trim($('#yy').val());
for(var i=0;i<idarr.length;i++)
{
idarr[i].css("border-color","black");
$('#paytype').css("border-color","black");
var idval = $.trim(idarr[i].val());
if(idval.length == 0)
{
idarr[i].focus();
idarr[i].css("border-color","red");
$('#vmsg').html("*All fields are required and cannot be empty. Second Line of Address is optional");
return false;
}}


if($('#paytype').val()==='sel')
{
$('#paytype').focus();
$('#paytype').css("border-color","red");
$('#vmsg').html("*Select one of payment type");
return false;
} 


if(($.isNumeric(mm) == false)|| (mm>12) || (mm<0) || ($.isNumeric(yy) == false) || (yy<2014))
{
$("#yy").css("border-color","red");
$("#mm").css("border-color","red");
$('#vmsg').html("*Enter valid Expiration date");
return false;
}


for(var j=0;j<zipid.length;j++)
{
var zipval = $.trim(zipid[j].val());
if(($.isNumeric(zipval) == false)||(zipval.length != 5))
{
zipid[j].focus();
zipid[j].css("border-color","red");
$('#vmsg').html("ZipCode must be 5 digits and numeric");
return false;
}
}


for(var j=0;j<phone3.length;j++)
{
var phval = $.trim(phone3[j].val());
if(($.isNumeric(phval) == false)||(phval.length != 3))
{
phone3[j].focus();
phone3[j].css("border-color","red");
$('#vmsg').html("Area and Prefix code  must be 3 digits and numeric");
return false;
}  
}


for(var j=0;j<phone4.length;j++)
{
var phval = $.trim(phone4[j].val());
if(($.isNumeric(phval) == false)||(phval.length != 4))
{
phone4[j].focus();
phone4[j].css("border-color","red");
$('#vmsg').html("Phone code  must be 4 digits and numeric");
return false;
}  
}


for(var j=0;j<card.length;j++)
{
var cval = $.trim(card[j].val());
if(($.isNumeric(cval) == false)||(cval.length != 4))
{
card[j].focus();
card[j].css("border-color","red");
$('#vmsg').html("Card Number must be numeric and Contain 4 digits in each field");
return false;
}  
}
return true;
}


$('#form1').on('submit',function(e){
     
         if(isvalid() == true)
         {
          shipping="";
	  billing="";
          var paid="Yes";
          
      var sfname = $('#sfname').val();
	  var slname = $('#slname').val();
	  var sa1 = $('#saddress1').val();
	  var sa2 = $('#saddress2').val();
	  var scity = $('#scity').val();
	  var sst = $('#sstate').val();
	  var sz = $('#szip').val();
	  var sphone = "("+$('#sarea').val()+")"+$('#spre').val()+"-"+$('#spost').val();
	  shipping = "<div id=\"ship\">"+sfname+"&nbsp;"+slname+"</br>";
	  shipping+=sa1+"</br>";
	  if($.trim(sa2) != "")
	  shipping+=sa2+"</br>";
	  shipping+=scity+"&nbsp;"+sst+"&nbsp"+sz+"</div>";
	  shipping+="Phone:&nbsp;"+sphone;
	  
      var fname = $('#fname').val();
	  var lname = $('#lname').val();
	  var a1 = $('#address1').val();
	  var a2 = $('#address2').val();
	  var city = $('#city').val();
	  var st = $('#state').val();
	  var z = $('#zip').val();
	   var phone = "("+$('#area').val()+")"+$('#pre').val()+"-"+$('#post').val();
	  
	  billing = "<div id=\"bill\">"+fname+"&nbsp;"+lname+"</br>";
	  billing+=a1+"</br>";
	  if($.trim(a2) != "")
	  billing+=a2+"</br>";
	  billing+=city+"&nbsp;"+st+"&nbsp"+z+"</div>";
	  billing+="Phone:&nbsp;"+phone;
	  var d = new Date();
    var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
	
	  str="";
	  str="<table id=\"useinfo\"><tr><th>OrderDate</th><th>Billing Information</th><th>Shipping information</th></tr>";
	  str+="<tr><td>"+strDate+"</td><td>"+billing+"</td><td>"+shipping+"</td></tr></table>";
         
          
          $('#pay').val(paid);
          $('#custdet').val(str);
          
           
         
          return true;
         
      }
      
     return false;
         
                   
    });
 
 $('#more').on('click',function(){
     window.location.href = "http://jadran.sdsu.edu/jadrn028/proj3/product.html";
 });
 
 
  
    
    });
