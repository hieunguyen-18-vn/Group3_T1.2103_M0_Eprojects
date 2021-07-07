var data = [
   
    {"id":"p01","name":"D16028-XV0", "pic":"/hình/hinh quat/D16028.png","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"L18002-DV0", "pic":"/hình/hinh quat/L18002-1.png","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"L16019-XV0", "pic":"/hình/hinh quat/DTB1601-DV0.webp","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"QS1001-SV0", "pic":"/hình/hinh quat/QS1001-SV0.webp","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"D18001-DV0", "pic":"/hình/hinh quat/D18001.webp","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"A16019_XV0", "pic":"/hình/hinh quat/DTB1601-XV0_hot1.webp","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"F16001-XV1", "pic":"/hình/hinh quat/A16019-XV0_hot2.webp","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"QS1001-SV0", "pic":"/hình/hinh quat/F16001-XV1.webp","price":100+"$","button" : "add cart"},
    {"id":"p01","name":"D18001-XV0", "pic":"/hình/hinh quat/H10001-1.webp" ,"price":100+"$","button" : "add cart"},
];


var s = '';

    for (var v of data) {
            s+= '   <div class="col-md-4">\n'+
            '      <div class="details" style="width: 100%;">\n'+
            '        <a href="#"><img src="'+ v.pic + '" class="card-img-top img-thumbnail" alt="image"></a>\n'+
            '        \n'+
            '        <h5 class="card-title">'+v.name+'\n'+
            '        </h5>\n'+
            '        <p class="card-text">'+v.price+'</p>\n'+
            '        <a href="#">Add cart</a>\n'+
            '      </div>\n'+
            '    </div>';
           
    }

    $("#products").html(s);