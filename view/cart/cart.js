let storedProducts = JSON.parse(localStorage.getItem("allProducts"));
console.log(storedProducts)
function showCartAdd(event) {
  
    //  hide(dom_no_cart)
    //  show(dom_hide_cart_box)
  
    
    let cart_data = document.querySelector("#store-product")
    let cart_title=document.querySelector("#product-title")
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
  
  
  
    //table store product//
      let tr_title=document.createElement("tr")
      cart_title.appendChild(tr_title)
        //product title//
      let product_title=document.createElement("th")
      product_title.textContent="Product"
      cart_title.appendChild(product_title)
      //product price//
      let product_price=createElement("th")
      cart_title.appendChild(product_price)
      //delete product//
      let delete_product=createElement("th")
      delete_product.textContent="Remove Product"
      cart_title.appendChild(delete_product)

      let tr = document.createElement("tr")
      cart_data.appendChild(tr)
  
      let img_product_cart = document.createElement("td")
      tr.appendChild(img_product_cart)
  
      let product_img = document.createElement("img")
      product_img.src = allProducts[index].img;
      img_product_cart.appendChild(product_img)
  
      let productPrice = document.createElement("td")
      tr.appendChild(productPrice)
  
      let span_price = document.createElement("span");
      span_price.textContent = allProducts[index].price
      productPrice.appendChild(span_price)
  
      let span_Currency = document.createElement("span")
      span_Currency.textContent = allProducts[index].currency
      productPrice.appendChild(span_Currency)
  
     
  
  
    }
    function removeCartContainer(even){
        hide(dom_product_cart)
        show(dom_container)
        show(dom_search_input)
        window.location.reload()
    }