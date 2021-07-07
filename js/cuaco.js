var data=[

    {"id":"a01",
    "brandId":"a",
    "Name":"A16019_XV0",
    "pic":"/hình/image-product/A16019-XV0_hot2.png",
    "Price":25,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"l01",
    "brandId":"l",
    "Name":"L18002-DV0",
    "pic":"/hình/image-product/L18002-1.png",
    "Price":25,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"l02",
    "brandId":"l",
    "Name":"L16019-XV0",
    "pic":"/hình/image-product/L16019-XV0.png",
    "Price":30,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"q01",
    "brandId":"q",
    "Name":"QS1001-SV0",
    "pic":"/hình/image-product/midea-fb40-9h-avata-300x300.jpg",
    "Price":50,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"q02",
    "brandId":"q",
    "Name":"QS1001-SV0",
    "pic":"/hình/image-product/QS1001-SV0.png",
    "Price":50,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"d01",
    "brandId":"d",
    "Name":"D18001-DV0",
    "pic":"/hình/image-product/D18001.png",
    "Price":26,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"d02",
    "brandId":"d",
    "Name":"D16028-XV0",
    "pic":"/hình/image-product/D16028.png",
    "Price":45,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"d03",
    "brandId":"d",
    "Name":"D18001-XV0",
    "pic":"/hình/image-product/D18001.png",
    "Price":26,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"d04",
    "brandId":"d",
    "Name":"D16028-XV0",
    "pic":"/hình/image-product/D16028.png",
    "Price":75,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    },
    {"id":"f01",
    "BrandId":"f",
    "Name":"F16001-XV1",
    "pic":"/hình/image-product/F16001-XV1.png",
    "Price":55,
    "Sizeofbladas":"40cm",
    "Power": "45W",
    "VoltageFrequency": "220V-50Hz",
    "Airflow": "77.5m3/min",
    "Eeratio": "1.80 (m3/min/W)",
    "Roundsperminute": 1200,
    "Numbeofspeeds": 3,
    "Switchtypes": "Rotation"
    }


];

var res = '';
var res1 = '';
//get page url id
function getPageUrlId()
{
    var urlID = window.location.href;
    res = urlID.slice(-3);
    res1 = urlID.slice(-1);
    if(res1!='a'&&res1!='c'&&res1!='e'&&res1!='f')
    {
        res1='a';
    }
}

// All product 
var s = '';

    for (var v of data) {

        s += '<div class="col-sm-6 col-md-4 divImage">' +'<a href="detail.html?key1='+v.id+'"><img src="'+ v.pic + '" alt="" class="Image"></a>' +
        '<p>' + 
            'Name:' + v.Name +  '<br>' +
            'Price:' + v.Price +  '<br>' +
        '</p>' +
        '<a href="#" data-name="'+v.Name+'" data-price="'+v.Price+'" class="add-to-cart btn btn-primary">Add to cart</a>'+
    '</div> ';
    }
   
    $("#products").html(s);


    var shoppingCart = (function() {
        // =============================
        // Private methods and propeties
        // =============================
        cart = [];
        
        // Constructor
        function Item(name, price, count) {
          this.name = name;
          this.price = price;
          this.count = count;
        }
        
        // Save cart
        function saveCart() {
          sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
        }
        
          // Load cart
        function loadCart() {
          cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
        }
        if (sessionStorage.getItem("shoppingCart") != null) {
          loadCart();
        }
        
      
        // this is cart modal
        var obj = {};
        
        // Add to cart
        obj.addItemToCart = function(name, price, count) {
          for(var item in cart) {
            if(cart[item].name === name) {
              cart[item].count ++;
              saveCart();
              return;
            }
          }
          var item = new Item(name, price, count);
          cart.push(item);
          saveCart();
        }
        // Set count from item
        obj.setCountForItem = function(name, count) {
          for(var i in cart) {
            if (cart[i].name === name) {
              cart[i].count = count;
              break;
            }
          }
        };
        // Remove item from cart
        obj.removeItemFromCart = function(name) {
            for(var item in cart) {
              if(cart[item].name === name) {
                cart[item].count --;
                if(cart[item].count === 0) {
                  cart.splice(item, 1);
                }
                break;
              }
          }
          saveCart();
        }
      
        // Remove all items from cart
        obj.removeItemFromCartAll = function(name) {
          for(var item in cart) {
            if(cart[item].name === name) {
              cart.splice(item, 1);
              break;
            }
          }
          saveCart();
        }
      
        // Clear cart
        obj.clearCart = function() {
          cart = [];
          saveCart();
        }
      
        // Count cart 
        obj.totalCount = function() {
          var totalCount = 0;
          for(var item in cart) {
            totalCount += cart[item].count;
          }
          return totalCount;
        }
      
        // Total cart
        obj.totalCart = function() {
          var totalCart = 0;
          for(var item in cart) {
            totalCart += cart[item].price * cart[item].count;
          }
          return Number(totalCart.toFixed(2));
        }
      
        // List cart
        obj.listCart = function() {
          var cartCopy = [];
          for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
              itemCopy[p] = item[p];
      
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
          }
          return cartCopy;
        }
      
        // cart : Array
        // Item : Object/Class
        // addItemToCart : Function
        // removeItemFromCart : Function
        // removeItemFromCartAll : Function
        // clearCart : Function
        // countCart : Function
        // totalCart : Function
        // listCart : Function
        // saveCart : Function
        // loadCart : Function
        return obj;
      })();
      
      
      // *****************************************
      // Triggers / Events
      // ***************************************** 
      // Add item
      $('.add-to-cart').click(function(event) {
        event.preventDefault();
        var name = $(this).data('name');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
      });
      
      // Clear items
      $('.clear-cart').click(function() {
        shoppingCart.clearCart();
        displayCart();
      });
      
      
      function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        for(var i in cartArray) {
          output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>" 
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = " 
            + "<td>" + cartArray[i].total + "</td>" 
            +  "</tr>";
        }
        $('.show-cart').html(output);
        $('.total-cart').html(shoppingCart.totalCart());
        $('.total-count').html(shoppingCart.totalCount());
      }
      
      // Delete item button
      
      $('.show-cart').on("click", ".delete-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.removeItemFromCartAll(name);
        displayCart();
      })
      
      
      // -1
      $('.show-cart').on("click", ".minus-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.removeItemFromCart(name);
        displayCart();
      })
      // +1
      $('.show-cart').on("click", ".plus-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.addItemToCart(name);
        displayCart();
      })
      
      // Item count input
      $('.show-cart').on("change", ".item-count", function(event) {
         var name = $(this).data('name');
         var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
      });
      
      displayCart();
      


var brand='';
// show PRODUCTS detail
function productsDetail()
{
    var d='';
    var i=0;
    for (var v of data)
    {
        if(v.id==res)
        {
            i++;
            $("#title").html(v.Name);
    //         d+='<div class="row">'+
    //             '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">'+
    //             '<div class="product-gallery">'+
    //             '<div class="product-gallery-thumbnails">'+
    //             '</div>'+
    //             '<div class="product-gallery-featured">'+
    //             '<img src="'+v.pic+'" id="mainImg">'+'</div></div></div>'+
    //             '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-7">'+ '<span class="name">Name: </span>'+
    //             '<span class="small_name">'+v.Name+'</span><br>'+
    //             '<div class="price">Price:<span>$'+v.Price+'</span></div><br>'+
    //             '<h2>Infomation</h2>'+
    //             '<ul>'+
    //             ' <li>Size of blades: '+ v.Sizeofbladas+'</li>'+
    //            '  <li>power: '+ v.Power+'</li>'+
    //             ' <li>Voltage-Frequency: '+ v.VoltageFrequency+'</li>'+
    //            '  <li>Air flow: '+ v.Airflow+'</li>'+
    //           ' <li>E ration: '+ v.Eeratio+'</li>'+
    //            ' <li>Round per minute: '+ v.Roundsperminute+'</li>'+
    //             '<li>Number speeds: '+ v.Numbeofspeeds+'</li>'+
    //             ' <li>Switch types: '+ v.Switchtypes+'</li>'+
    //             '</ul>'+
    //             '<a href="#" data-name="'+v.Name+'" data-price="'+v.Price+'" class="add-to-cart btn btn-primary">Add to cart</a>'
    //         +
    // '</div></div></div>';  

  d+=  ' <div class="hero">\n'+
    '        <div class="row pic1">\n'+
    '            <div class="col pic2">\n'+
    '\n'+
    '                <div class="slider">\n'+
    '                    <div class="product">\n'+
    '\n'+
    '                        <img src="/hình/image-product/A16009-DV1.png" alt="" onclick="clickme(this)">\n'+
    '                        <img src="/hình/image-product/F16001-XV1.png" alt="" onclick="clickme(this)">\n'+
    '                        <img src="/hình/image-product/D16028.png" alt="" onclick="clickme(this)">\n'+
    '                       '+'\n'+
    '                    </div>\n'+
    '                    <div class="preview">\n'+
                        '<img src="'+v.pic+'" id="imagebox" alt="">'+'\n'+
    '                    </div>\n'+
    '                </div>\n'+
    '\n'+
    '            </div>'+
  
    '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-7">'+ '<span class="name">Name: </span>'+
    '<span class="small_name">'+v.Name+'</span><br>'+
    '<div class="price">Price:<span>$'+v.Price+'</span></div><br>'+
    '<h2>Infomation</h2>'+
    '<ul>'+
    ' <li>Size of blades: '+ v.Sizeofbladas+'</li>'+
   '  <li>power: '+ v.Power+'</li>'+
    ' <li>Voltage-Frequency: '+ v.VoltageFrequency+'</li>'+
   '  <li>Air flow: '+ v.Airflow+'</li>'+
  ' <li>E ration: '+ v.Eeratio+'</li>'+
   ' <li>Round per minute: '+ v.Roundsperminute+'</li>'+
    '<li>Number speeds: '+ v.Numbeofspeeds+'</li>'+
    ' <li>Switch types: '+ v.Switchtypes+'</li>'+
    '</ul>'+
    '<a href="checkout.html"  class="add-to-cart btn btn-primary">Buy now</a>'
+
'</div></div></div>' +

'  <ul class="nav nav-tabs">\n'+
'        <li class="nav-item">\n'+
'          <a class="nav-link active" data-toggle="tab" href="#home">Rating</a>\n'+
'        </li>\n'+
'        <li class="nav-item">\n'+
'          <a class="nav-link" data-toggle="tab" href="#menu1">Reviews</a>\n'+
'        </li>\n'+
'      </ul>\n'+
'      \n'+
'      <!-- Tab panes -->\n'+
'      <div class="tab-content">\n'+
'        <div id="home" class="container tab-pane active"><br>\n'+
'          <h3>Rating star product</h3>\n'+
'          <iframe src="rating.html" frameborder="0"></iframe>\n'+
'        </div>\n'+
'        <div id="menu1" class="container tab-pane fade"><br>\n'+
 
'          <h3>comment</h3>\n'+

'          <textarea name="" id="" cols="50" rows="10"></textarea>\n'+
'          \n'+

       '<div><button type="submit" class="btn btn-primary"> send</button></div>'+
'        </div>\n'+
'        \n'+
'      </div>\n'+
'    </div>\n'+
'    \n'+
'   \n'+
'  </div>\n'+
'\n'+
'\n'+
'</div>';
// '  <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n'+
// '        <div class="modal-dialog modal-lg" role="document">\n'+
// '          <div class="modal-content">\n'+
// '            <div class="modal-header">\n'+
// '              <h5 class="modal-title" id="exampleModalLabel">Cart</h5>\n'+
// '              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n'+
// '                <span aria-hidden="true">&times;</span>\n'+
// '              </button>\n'+
// '            </div>\n'+
// '            <div class="modal-body">\n'+
// '              <table class="show-cart table">\n'+
// '                \n'+
// '              </table>\n'+
// '              <div>Total price: $<span class="total-cart"></span></div>\n'+
// '            </div>\n'+
// '            <div class="modal-footer">\n'+
// '              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n'+
// '              <a href="checkout.html"><button type="button" class="btn btn-primary">Order now</button></a>\n'+
// '              <button class="clear-cart btn btn-danger">Clear Cart</button>\n'+
// '            </div>\n'+
// '          </div>\n'+
// '        </div>\n'+
// '      </div> ';
    brand = v.BrandId;     
        }                        
    }
    if(i==0)
    {
        d+='<h1 width="500px" height="500px" >Sorry ! Product not found <br><br><a href="brand.html">Click here to return to Brand page</a></h1>';
        $("#title").html("404 NOT FOUND");
    }
$("#get_data").html(d);
}
