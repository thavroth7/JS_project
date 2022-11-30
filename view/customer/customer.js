let products=[{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/ateez-world-tour-the-fellowship-break-the-wall-official-light-stick-ver2-body-accessory_abd4cc84-4428-43fa-826d-ccd829b2b6f2_360x.jpg?v=1666379063",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/ateez-world-tour-the-fellowship-break-the-wall-official-light-stick-ver2-body-accessory_abd4cc84-4428-43fa-826d-ccd829b2b6f2_360x.jpg?v=1666379063",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/KpopExchangeSeventeenLightstick_360x.jpg?v=1624751276",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/KpopExchangeMonstaXOfficialLightstick_360x.png?v=1625105017",
  "name":"BTS lightstick",
  "price":"50$",
  "currency":"$"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/pr-yg-select-md-blackpink-official-light-stick-ver-2-renewal-edition-30385549606992_2000x_792cb0f9-24b7-43ea-8bda-db2c0ff5f0de_360x.jpg?v=1665807770",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/ENHYPENOfficialLightStickKpopExchange_360x.jpg?v=1624761919",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/kpop-exchange-pre-order-loona-official-light-stick-15681234927696_908x_b9b55f67-5e95-4f2c-b770-f266dda7dd64_360x.png?v=1620254566",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

},{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/ateez-world-tour-the-fellowship-break-the-wall-official-light-stick-ver2-body-accessory_abd4cc84-4428-43fa-826d-ccd829b2b6f2_360x.jpg?v=1666379063",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$"

}

];
// FUNCTIONS ---------------------------------------------------------

// Save questions to local storage
function saveQuestions() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Load questions from local storage
function loadQuestions() {
  let storedQuestion = JSON.parse(localStorage.getItem("products"));
  if (storedQuestion !== null) {
    products = storedQuestion;
  }
}
function createProduct(){
  loadQuestions()
  let productContainer=document.querySelector("#play-view");
  for(let product of products){
    let card=document.createElement("div")
    card.className="card";
    productContainer.appendChild(card)

    let img=document.createElement("img")
    img.src=product.img

    let cardFoot=document.createElement("div")
    cardFoot.className="card-footer"
    

    let productName=document.createElement("span");
    productName.className="name"
    productName.textContent=product.name
    
    let rating=document.createElement("div")
    rating.className="rate"
    

    let star=document.createElement("i")
    star.className="material-icons"
    star.textContent="star_border"

    let star1=document.createElement("i")
    star1.className="material-icons"
    star1.textContent="star_border"

    let star2=document.createElement("i")
    star2.className="material-icons"
    star2.textContent="star_border"

    let star3=document.createElement("i")
    star3.className="material-icons"
    star3.textContent="star_border"

    let star4=document.createElement("i")
    star4.className="material-icons"
    star4.textContent="star_border"
   
    
    let price=document.createElement("div")
    price.className="price"

    let priceNumber=document.createElement("span")
    priceNumber.textContent=product.price
   

    let Currency=document.createElement("span")
    Currency.textContent=product.currency
  

    let cart=document.createElement("div")
    cart.className="cart-item"
    

    let productDetail=document.createElement("button")
   
    let a =document.createElement("a")
    a.href="../product/product.html"
    a.textContent="View"
    productDetail.appendChild(a)

    let btnCart=document.createElement("button")
    btnCart.textContent="Add to cart"
 
  


    card.appendChild(img)
    card.appendChild(cardFoot)
    cardFoot.appendChild(productName)
    cardFoot.appendChild(rating)
    rating.appendChild(star)
    rating.appendChild(star1)
    rating.appendChild(star2)
    rating.appendChild(star3)
    rating.appendChild(star4)
    cardFoot.appendChild(price)
    cardFoot.appendChild(cart)
    price.appendChild(priceNumber);
    price.appendChild(Currency);
    cart.appendChild(productDetail)
    cart.appendChild(btnCart)
    

};
};
createProduct();
loadQuestions();