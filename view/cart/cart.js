
//call local storage//
let customerProducts = JSON.parse(localStorage.getItem("newProductLists"));
let cart_title=document.querySelector(".dialog-cart")

let list_card=document.querySelector("#store-cart-product")


//FUNTION-----------------------------------//
function saveCustomerProducts() {
  localStorage.setItem("customerProducts", JSON.stringify(customerProducts));
}
//loaud products//
function loadCostomerProducts() {
  let storedProducts = JSON.parse(localStorage.getItem("customerProducts"));
  if (storedProducts !== null) {
    customerProducts = storedProducts;
  }
}
//Add costomer card//
let numberOfPrices=[]
let totalOfPriceProduct=0
function renderCustomerProduct() {
  let cart_data = document.querySelector("#store-product")
  let totalPrice = document.querySelector("#total")
  for (let index = 0; index < customerProducts.length; index++) {
    // find index of customer product//----
      let customerProduct = customerProducts[index];
      numberOfPrices.push(customerProduct.price)
      console.log(numberOfPrices)
      //container store carts//
      let tr = document.createElement("tr")
      tr.classList="store-customer-product"
      cart_data.appendChild(tr)
      tr.dataset.index = index;
  
      let img_product_cart = document.createElement("td")
      tr.appendChild(img_product_cart)
  
      let product_img = document.createElement("img")
      product_img.className="product-pictures"
      product_img.src = customerProduct.img;
      img_product_cart.appendChild(product_img)
  
      let productPrice = document.createElement("td")
      tr.appendChild(productPrice)
  
      let span_price = document.createElement("span");
      span_price.textContent = customerProduct.price
      productPrice.appendChild(span_price)
  
      let span_Currency = document.createElement("span")
      span_Currency.textContent = customerProduct.currency
      productPrice.appendChild(span_Currency)
      //count total prices//---------------
      totalOfPriceProduct +=parseInt(customerProduct.price)
      ///show total price//---
      totalPrice.textContent=totalOfPriceProduct

      
      //remove cart//------------------
      let remove = document.createElement('td');
     
      tr.appendChild(remove);

      let trashAction = document.createElement("img");
      trashAction.className="trash"
      trashAction.src = "../../images/trash.png";
      trashAction.addEventListener("click", removeProduct);
      remove.appendChild(trashAction);

  
  }
}

//funtion remove product//
let removeList=[];
function removeProduct(event) {
  let removeData=document.querySelector(".store-customer-product")
  let totalPrice = document.querySelector("#total")
  // console.log(moveProduct)
  removeData.remove()
  let index = event.target.parentElement.parentElement.dataset.index;
  let moveProduct=customerProducts[index]
  removeList.push(moveProduct)
  totalOfPriceProduct -= moveProduct.price
  totalPrice.textContent=totalOfPriceProduct
}
  



//  
//call funtion//----

renderCustomerProduct();