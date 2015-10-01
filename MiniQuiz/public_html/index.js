/* 
 * Author Thet Su Thinn
 */

$(function(){
    
    var loading = "<img src ='images/loading.gif' width=100px height=70px>";
    $("#loadingLogo").append(loading);
    
 var url="https://api.tack.is/product/super-mario?frontend=true&shop_id=1&view=frontend";  
    
   $.getJSON(url).done(function(result)
   {
       var name,description,image,price,quantity;
       
       name = "<br> Product Name: <b>"+result.name+"</b>";
       description="<br><br><u>Description</u> <i> "+result.description+"</i>";
       image="<br><img src="+result.images[0].image[2].cdn+" width=150px;height=200px>";
       price="<br><br> Price: $ <i>"+result.price+"</i>";
       quantity="<br> Quantity : <i>"+result.quantity+"</i>";
      
      var productInfo = name+description+image+price+quantity;
      
       $("#productInfo").append(productInfo);
       $("#loadingLogo").hide();
       
       
   }).fail(function(result)
   {
      alert("fail to retrieve product information");
      $("#loadingLogo").hide();
   });
});



