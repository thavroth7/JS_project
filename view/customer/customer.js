// DOMS ELEMENTS  -------------------------------------------------------
const dom_view_product=document.querySelector("#product-dialog");
const dom_container=document.querySelector("#container");

const dom_product_cart=document.querySelector("#product-cart");
const dom_buy_product=document.querySelector("#buy-product");
const dom_title_cart=document.querySelector("#product-title-cart")

// DATA  ---------------------------------------------------------
let products=[{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. "

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It’s not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. "

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It’s not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. "

}
];
// FUNCTIONS ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
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
  for (let index = 0; index < products.length; index++) {
    let product = products[index];
    
    let card=document.createElement("div")
    card.className="card";
    card.dataset.index=index;
  
    productContainer.appendChild(card)
    
    let image=document.createElement("img")
    image.src=product.img;

    let cardFoot=document.createElement("div")
    cardFoot.className="card-footer"
    

    let productName=document.createElement("span");
    productName.className="name"
    productName.textContent=product.name;
    
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
    priceNumber.textContent=product.price;
   

    let Currency=document.createElement("span")
    Currency.textContent=product.currency;
  

    let cart=document.createElement("div")
    cart.className="cart-item"
    

    let productDetail=document.createElement("button")
    productDetail.className="view-button"
    productDetail.textContent="View";
    productDetail.addEventListener("click",onViewProduct)


    let btnCart=document.createElement("button")
    btnCart.className="add-cart"
    btnCart.textContent="Add to cart"
    btnCart.addEventListener("click",showCartAdd)
  

    card.appendChild(image)
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
//product detil dailog//
function onViewProduct(event){
  show(dom_view_product);
  let index = event.target.parentElement.parentElement.parentElement.dataset.index;

  let productName=document.querySelector("#product-name").firstElementChild;
  let productImg=document.querySelector("#picture").firstElementChild;
  let productPrice=document.querySelector("#number").firstElementChild;
  let productCurrency=document.querySelector("#currency").firstElementChild;
  let productDescription=document.querySelector("#description").firstElementChild;
  productImg.src=products[index].img
  productName.textContent=products[index].name
  productPrice.textContent=products[index].price
  productCurrency.textContent=products[index].currency
  productDescription.textContent=products[index].description
 
};

function cartCancell(event){
  hide(dom_view_product);

};

//serch data//
function searchProduct(event) {
  // 1- Get the search text
  let search=searchDataInput.value.toLowerCase()
  
  // 2- Loop on product name
  let searchData = document.querySelectorAll(".card");

  for (value of searchData){
  
    let title_product = value.children[1].firstElementChild.textContent.toLowerCase()
    
    value.style.display="none"
    if(title_product===search|| title_product.includes(search)){
      value.style.display="block"
    };
    
   
  };
};
let searchDataInput = document
  .getElementById("search-product")
  .querySelector("input");
searchDataInput.addEventListener("keyup", searchProduct);

//add to cart//

function showCartAdd(event){
  show(dom_product_cart)
  
  let cart_data=document.querySelector("#store-product")
  let index = event.target.parentElement.parentElement.parentElement.dataset.index;
  let number=0;
  let i=0
  
  if( i !=index){
        let i=index
        let tr=document.createElement("tr")
        cart_data.appendChild(tr)

        let img_product_cart=document.createElement("td")
        tr.appendChild(img_product_cart)

        let product_img=document.createElement("img")
        product_img.src=products[index].img;
        img_product_cart.appendChild(product_img)

        let productPrice=document.createElement("td")
        tr.appendChild(productPrice)

        let span_price=document.createElement("span");
        span_price.textContent=products[index].price
        productPrice.appendChild(span_price)
        
        let span_Currency=document.createElement("span")
        span_Currency.textContent=products[index].currency
        productPrice.appendChild(span_Currency)
        
        // console.log(i)
        // console.log(index)
        
        
      }
      else{
        number+=1
       
      }
  };
    

  
    // let tr=document.createElement("tr")
    // cart_data.appendChild(tr)

    // let img_product_cart=document.createElement("td")
    // tr.appendChild(img_product_cart)

    // let product_img=document.createElement("img")
    // product_img.src=products[index].img
    // img_product_cart.appendChild(product_img)

    // let productPrice=document.createElement("td")
    // tr.appendChild(productPrice)

    // let span_price=document.createElement("span");
    // span_price.textContent=products[index].price
    // productPrice.appendChild(span_price)
    
    // let span_Currency=document.createElement("span")
    // span_Currency.textContent=products[index].currency
    // productPrice.appendChild(span_Currency)



 



function addCart(event){
  hide(dom_view_product);
  show(dom_product_cart)
  
}
function cancellCart_dialog(event){
  hide(dom_product_cart)
}

function cancell_in_buyPro(event){
  hide(dom_buy_product)
}
function buyProduct(event){
  hide(dom_product_cart)
  show(dom_buy_product)
}

function submit_buy_pro(event){
  hide(dom_buy_product);
}

let submit=dom_buy_product.querySelector("#submit-buy");
submit.addEventListener("click",submit_buy_pro);



let cancell=dom_view_product.querySelector("#cancel-cart");
cancell.addEventListener("click",cartCancell)

let cancelInCart=dom_product_cart.querySelector("#cancel")
cancelInCart.addEventListener("click",cancellCart_dialog)

let buyPro=dom_product_cart.querySelector("#buy")
buyPro.addEventListener("click",buyProduct)

let cancelToBuy=dom_buy_product.querySelector("#cancel-buy")
cancelToBuy.addEventListener("click",cancell_in_buyPro)

let addToCart=dom_view_product.querySelector("#add-cart");
addToCart.addEventListener("click",addCart);


createProduct();
loadQuestions();