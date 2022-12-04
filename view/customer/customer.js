// DOMS ELEMENTS  -------------------------------------------------------
const dom_view_product = document.querySelector("#product-dialog");
const dom_store_product=document.querySelector("#store-products")
const show_box_contain_cart=document.querySelector("#dialog-box")

let allProducts = JSON.parse(localStorage.getItem("allProducts"));
// FUNCTIONS ---------------------------------------------------------
//HIDE ELEMENT---------------------
function hide(element) {
  element.style.display = "none";
}
//show-------ELEMENT------------
function show(element) {
  element.style.display = "block";
}
// Save questions to local storage
function saveProducts() {
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

// Load questions from local storage
// @return the global list of product
function loadProducts() {
  let storedProducts = JSON.parse(localStorage.getItem("allProducts"));
  if (storedProducts !== null) {
    allProducts = storedProducts;
  }
  
}

//
// render product card
function renderProducts() {

//create card container//
  let productCart = document.querySelector("#play-view");
  productCart.remove()
  productCart = document.createElement("div");
  productCart.id = "play-view"

  // loop for create product cart
  for (let index = 0; index < allProducts.length; index++) {

    // xxxx
    let product = allProducts[index];
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
    btnCart.addEventListener("click", addproductsToCart)

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
//click view product detail
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
let newProductLists=[]
let count_carts=0
let count_product=document.querySelector("#count-product")
function addproductsToCart(event) {
  saveProducts()
  //show number of products add to 
  count_carts ++
  count_product.textContent=count_carts
  console.log(count_product)
  console.log(count_carts)
  let index=event.target.parentElement.parentElement.parentElement.dataset.index;
  let product=allProducts[index]
  newProductLists.push(product)
  localStorage.setItem("newProductLists", JSON.stringify(newProductLists));
}



//funtion cancell view product//------------------
function cancelViewProduct(event){
  hide(dom_view_product)

}
///button cancel when view product///---------------
let cancelBtn = dom_view_product.querySelector("#cancel-cart");
cancelBtn.addEventListener("click", cancelViewProduct)



//input sarch product//
let searchDataInput = document
  .getElementById("search-product")
  .querySelector("input");
searchDataInput.addEventListener("keyup", searchProduct);



loadProducts();
saveProducts()
renderProducts(allProducts);
