var data=[

    {"id":"a01",
    "brandId":"a",
    "Name":"A16019_XV0",
    "pic":"/test - search/images/image-product/A16019-XV0_hot2.png",
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
    "pic":"/test - search/images/image-product/L18002-1.png",
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
    "pic":"/test - search/images/image-product/L16019-XV0.png",
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
    "pic":"/test - search/images/image-product/midea-fb40-9h-avata-300x300.jpg",
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
    "pic":"/test - search/images/image-product/QS1001-SV0.png",
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
    "pic":"/test - search/images/image-product/D18001.png",
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
    "pic":"/test - search/images/image-product/D16028.png",
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
    "pic":"/test - search/images/image-product/D18001.png",
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
    "pic":"/test - search/images/image-product/D16028.png",
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
    "pic":"/test - search/images/image-product/F16001-XV1.png",
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
    '                        <img src="/test - search/images/image-product/A16009-DV1.png" alt="" onclick="clickme(this)">\n'+
    '                        <img src="/test - search/images/image-product/F16001-XV1.png" alt="" onclick="clickme(this)">\n'+
    '                        <img src="/test - search/images/image-product/D16028.png" alt="" onclick="clickme(this)">\n'+
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
    '<a href="#" data-name="'+v.Name+'" data-price="'+v.Price+'" class="add-to-cart btn btn-primary">Add to cart</a>'
+
'</div></div></div>';  


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
