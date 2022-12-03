// DOMS ELEMENTS  -------------------------------------------------------
const dom_view_product = document.querySelector("#product-dialog");
const dom_container = document.querySelector("#container");
const dom_store_product = document.querySelector("#store-products")
const dom_product_cart = document.querySelector("#store-cart-product");
const dom_buy_product = document.querySelector("#buy-product");
const dom_title_cart = document.querySelector("#product-title-cart")
const dom_navbar =document.querySelector("#nav-right")
const dom_search_input=document.querySelector(".nav-center")
const dom_no_cart=document.querySelector("#mesages-no-product")
const dom_hide_cart_box=document.querySelector("#dialog-cart")
let count_product=document.querySelector("#count-product")



//All list of products 
// let allProducts=[{
//   "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
//   "name":"BTS lightstick",
//   "price":"50",
//   "currency":"$",
//   "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. ",
//   "type":"BLACKPINK"

// },
// {
//   "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
//   "name":"BTS lightstick",
//   "price":"50",
//   "currency":"$",
//   "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. ",
//   "type":"BLACKPINK"

// },
// {
//   "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
//   "name":"BTS lightstick",
//   "price":"50",
//   "currency":"$",
//   "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. ",
//   "type":"BTS"

// },
// ];

// FUNCTIONS ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
// Save questions to local storage
function saveQuestions() {
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

// Load questions from local storage
// @return the global list of product
function loadProducts() {
  let storedProducts = JSON.parse(localStorage.getItem("allProducts"));
  if (storedProducts !== null) {
    allProducts = storedProducts;
  }
  return allProducts;
}

//
// render product card
function renderProducts(productsToRender) {

//create card container//
  let productCart = document.querySelector("#play-view");
  productCart.remove()
  productCart = document.createElement("div");
  productCart.id = "play-view"

  // loop for create product cart
  for (let index = 0; index < productsToRender.length; index++) {

    // xxxx
    let product = productsToRender[index];
    let card = document.createElement("div")
    card.className = "card";
  
    card.dataset.index = index;
    productCart.appendChild(card)

    // xxxxxxxxxxx
    let image = document.createElement("img")
    image.src = product.img;

    let cardFoot = document.createElement("div")
    cardFoot.className = "card-footer"

    let productName = document.createElement("span");
    productName.className = "name"
    productName.textContent = product.name;

    let rating = document.createElement("div")
    rating.className = "rate"

    let star = document.createElement("i")
    star.className = "material-icons"
    star.textContent = "star_border"

    let star1 = document.createElement("i")
    star1.className = "material-icons"
    star1.textContent = "star_border"

    let star2 = document.createElement("i")
    star2.className = "material-icons"
    star2.textContent = "star_border"

    let star3 = document.createElement("i")
    star3.className = "material-icons"
    star3.textContent = "star_border"

    let star4 = document.createElement("i")
    star4.className = "material-icons"
    star4.textContent = "star_border"


    let price = document.createElement("div")
    price.className = "price"

    let priceNumber = document.createElement("span")
    priceNumber.textContent = product.price;

    let Currency = document.createElement("span")
    Currency.textContent = product.currency;

    let cart = document.createElement("div")
    cart.className = "cart-item"

    let productDetail = document.createElement("button")
    productDetail.className = "view-button"
    productDetail.textContent = "View";
    productDetail.addEventListener("click", onViewProduct)

    let btnCart = document.createElement("button")
    btnCart.className = "add-cart"
    btnCart.textContent = "Add to cart"
    // btnCart.addEventListener("click", showCartAdd)

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
  }

  dom_store_product.appendChild(productCart)
}


function onViewProduct(event) {
  show(dom_view_product);
  let index = event.target.parentElement.parentElement.parentElement.dataset.index;

  let productName = document.querySelector("#product-name").firstElementChild;
  let productImg = document.querySelector("#picture").firstElementChild;
  let productPrice = document.querySelector("#number").firstElementChild;
  let productCurrency = document.querySelector("#currency").firstElementChild;
  let productDescription = document.querySelector("#description").firstElementChild;
  productImg.src = allProducts[index].img
  productName.textContent = allProducts[index].name
  productPrice.textContent = allProducts[index].price
  productCurrency.textContent = allProducts[index].currency
  productDescription.textContent = allProducts[index].description

}

function cartCancell(event) {
  hide(dom_view_product);
};

//serch products//
function searchProduct(event) {
  // 1- Get the search text
  let search = searchDataInput.value.toLowerCase()

  // 2- Loop on product name
  let searchData = document.querySelectorAll(".card");

  for (value of searchData) {

    let title_product = value.children[1].firstElementChild.textContent.toLowerCase()

    value.style.display = "none"
    if (title_product === search || title_product.includes(search)) {
      value.style.display = "block"
    };


  };
};


//add products to cart//

// function showCartAdd(event) {
  
//   //  hide(dom_no_cart)
//   //  show(dom_hide_cart_box)

  
//   let cart_data = document.querySelector("#store-product")
//   let index = event.target.parentElement.parentElement.parentElement.dataset.index;



  
//     number0fProduct+=1
//     let tr = document.createElement("tr")
//     cart_data.appendChild(tr)

//     let img_product_cart = document.createElement("td")
//     tr.appendChild(img_product_cart)

//     let product_img = document.createElement("img")
//     product_img.src = allProducts[index].img;
//     img_product_cart.appendChild(product_img)

//     let productPrice = document.createElement("td")
//     tr.appendChild(productPrice)

//     let span_price = document.createElement("span");
//     span_price.textContent = allProducts[index].price
//     productPrice.appendChild(span_price)

//     let span_Currency = document.createElement("span")
//     span_Currency.textContent = allProducts[index].currency
//     productPrice.appendChild(span_Currency)

   


//   }
  

//show products buyed//

function showProductBuyed(){

  // hide(dom_container)
  // hide(dom_search_input)
  // show(dom_product_cart)
  // show(dom_store_product)
  // show(dom_hide_cart_box)
  let a=document.createElement("a")
  a.href="../cart/cart.html"

}
//block cart container//
// function removeCartContainer(even){
//   hide(dom_product_cart)
//   show(dom_container)
//   show(dom_search_input)
//   window.location.reload()
// }


function onClickOnBrandFilter(element) {
  let newList = []
  
  for (let product of allProducts) {
      newList.push(product)
      console.log(newList)
    
  }
  
  renderProducts(newList)
}


let brandSelect = document.querySelectorAll("#brand")
brandSelect.forEach(element => {
  element.addEventListener('click', function () {onClickOnBrandFilter(element) })
});



function addCart(event) {
  hide(dom_view_product);
  show(dom_product_cart)

}
function cancellCart_dialog(event) {
  hide(dom_product_cart)
}

function cancell_in_buyPro(event) {
  hide(dom_buy_product)
}
function buyProduct(event) {
  hide(dom_product_cart)
  show(dom_buy_product)
}

function onClickOnSubmit(event) {
  hide(dom_buy_product);
}

let submitButton = dom_buy_product.querySelector("#submit-buy");
submitButton.addEventListener("click", onClickOnSubmit);

//click product icon show list of cart//
let productIcon=dom_navbar.querySelector("#product-icon");
productIcon.addEventListener("click",showProductBuyed)


//button go to shopping//
// let goToshoppingBtn=dom_no_cart.querySelector("#block-message")
// goToshoppingBtn.addEventListener("click",removeCartContainer)

let cancell = dom_view_product.querySelector("#cancel-cart");
cancell.addEventListener("click", cartCancell)

let cancelInCart = dom_product_cart.querySelector("#cancel")
cancelInCart.addEventListener("click", cancellCart_dialog)

// let buyPro = dom_product_cart.querySelector("#buy")
// buyPro.addEventListener("click", buyProduct)

// let cancelToBuy = dom_buy_product.querySelector("#cancel-buy")
// cancelToBuy.addEventListener("click", cancell_in_buyPro)

let addToCart = dom_view_product.querySelector("#add-cart");
addToCart.addEventListener("click", addCart);

//input sarch product//
let searchDataInput = document
  .getElementById("search-product")
  .querySelector("input");
searchDataInput.addEventListener("keyup", searchProduct);


loadProducts();

renderProducts(allProducts);
