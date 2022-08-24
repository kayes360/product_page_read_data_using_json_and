  var data = {
    "products": [
        {
            "imgPath": "asset/img/item_(1).png",
            "productID": "Wallpaper_1",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        },
        {
            "imgPath": "asset/img/item_(2).png",
            "productID": "Wallpaper_2",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(3).png",
            "productID": "Wallpaper_3",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(4).png",
            "productID": "Wallpaper_4",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(5).png",
            "productID": "Wallpaper_5",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(6).png",
            "productID": "Wallpaper_6",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(7).png",
            "productID": "Wallpaper_7",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(8).png",
            "productID": "Wallpaper_8",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(9).png",
            "productID": "Wallpaper_9",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(10).png",
            "productID": "Wallpaper_10",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(11).png",
            "productID": "Wallpaper_11",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(12).png",
            "productID": "Wallpaper_12",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(13).png",
            "productID": "Wallpaper_13",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(14).png",
            "productID": "Wallpaper_14",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(15).png",
            "productID": "Wallpaper_15",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(16).png",
            "productID": "Wallpaper_16",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(17).png",
            "productID": "Wallpaper_17",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(18).png",
            "productID": "Wallpaper_18",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(19).png",
            "productID": "Wallpaper_19",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(20).png",
            "productID": "Wallpaper_20",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(21).png",
            "productID": "Wallpaper_21",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(22).png",
            "productID": "Wallpaper_22",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(23).png",
            "productID": "Wallpaper_23",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(24).png",
            "productID": "Wallpaper_24",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(25).png",
            "productID": "Wallpaper_25",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(26).png",
            "productID": "Wallpaper_26",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(27).png",
            "productID": "Wallpaper_27",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(28).png",
            "productID": "Wallpaper_28",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        ,
        {
            "imgPath": "asset/img/item_(29).png",
            "productID": "Wallpaper_29",
            "composition": "Lorem ipsum dolor sit amet",
            "price": 120
        }
        
    ]
   

 }

var product_row = document.querySelector('.product_row'); 
var productList = data.products; 
 
var layout = ``;
 

for (var product in productList) {

    var imgPath = productList[product].imgPath;
    var composition =  productList[product].composition;
    var price =  productList[product].price;
    var productID =  productList[product].productID;

    console.log(imgPath);
    console.log(composition);
    

    layout +=  ` 
    <div class="col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
        <div class="animated-box in"> 
            <div class="overlay_container">
            <img loading="eager" src="${imgPath}" alt="Avatar" class="image img-fluid"> 

                <div class="overlay">
                    <h4>${productID}</h4>
                    <p class="m-0">Composition : <span>${composition}</span></p>
                    <p> Price : <span>${price}</span></p>
                </div>

            </div>
        </div>
    </div>  
    ` 
    
  } 
  product_row.innerHTML = layout;
 


 