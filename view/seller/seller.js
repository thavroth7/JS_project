// DOMS ELEMENTS  ---------------------------------------------------------
const dom_product_view = document.querySelector("#product-view");
const dom_questions_dialog = document.querySelector("#questions-dialog");
const dom_questions_view=document.querySelector("#questions-view")
const dom_createEditButton = document.getElementById("createEditButton");



// DATA  ---------------------------------------------------------
let allProducts=[{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. ",
  "type":"BLACKPINK"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. ",
  "type":"BLACKPINK"

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It's not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. ",
  "type":"BTS"

},
]

let productIpt = document.querySelector("#name-product")
let priceIpt = document.querySelector("#product-price")
let imgIpt = document.querySelector("#product-img")
let currencyIpt = document.querySelector("#product-currency")
let descriptionIpt = document.querySelector("#product-description")
let productToEdit = null;



// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveProducts() {
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

function loadProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("allProducts"));
  if (productsStorage!== null){
      allProducts =productsStorage;
  };
 
}
//  create product ---------------------------------------------------------
function createProduct(){
  loadProducts()
  let product_container = document.querySelector("#add-product");
  product_container.remove();
  product_container = document.createElement("tbody");
  product_container.id="add-product";
  dom_product_view.appendChild(product_container);
  for (let index = 0; index < allProducts.length; index++) {
    let product = allProducts[index];
    let addProduct = document.createElement('tr');
    addProduct.dataset.index =index ;
    product_container.appendChild(addProduct);

    let nameProduct = document.createElement('td');
    nameProduct.textContent=product.name;
    addProduct.appendChild(nameProduct)
   
    let imageProduct = document.createElement('td');
    imageProduct.className="images";
    addProduct.appendChild(imageProduct);
    
    let imgProduct=document.createElement('img');
    imgProduct.src=product.img;
    imageProduct.appendChild(imgProduct);

    let priceProduct = document.createElement('td');
    priceProduct.textContent=product.price;
    addProduct.appendChild(priceProduct);

    let Currency=document.createElement('td');
    Currency.textContent=product.currency;
    addProduct.appendChild(Currency);

    let productDetail=document.createElement('td');
    productDetail.className="text"
    productDetail.textContent=product.description;
    addProduct.appendChild(productDetail);


    let actions = document.createElement('td');
    actions.className = "actions";
    addProduct.appendChild(actions);
    
    let editAction = document.createElement("img");

    editAction.src = "../../images/edit.svg";
    editAction.addEventListener("click", editProduct);
   
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.className="trash"
    trashAction.src = "../../images/trash.png";
    trashAction.addEventListener("click", removeProduct);
    actions.appendChild(trashAction);
   
  };
};

function clearInt(){
  priceIpt.value ="";
  productIpt.value = "";
  imgIpt.value = "";
  currencyIpt.value = "";
  descriptionIpt.value = "";
}
function removeProduct(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;
  // Remove product
  allProducts.splice(index, 1);
  // Save to local storage
  saveProducts();
  // Update the view
  createProduct();
};

function onAddProduct() {
  // TODO : when clicking on ADD button, display the dialog
    show(dom_questions_dialog);
    productToEdit = null;
    clearInt();

}

function onCancel(e) {
  dom_createEditButton.textContent = "CREATE";
  hide(dom_questions_dialog);
}

function editProduct(event) {
  //  Get the question index
  productToEdit = event.target.parentElement.parentElement.dataset.index;

  // update the dialog with question informatin
  let product = allProducts[productToEdit];
  document.getElementById("name-product").value =product.name;
  document.getElementById("product-img").value = product.img;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-currency").value = product.currency;
  document.getElementById("product-description").value=product.description;
  document.getElementById("select").value=product.type
  // Show the dialog
  dom_createEditButton.textContent = "EDIT";
  show(dom_questions_dialog);
  
}

function onCreate() {
  hide(dom_questions_dialog);


  if (productToEdit !== null) {
    let editProduct = allProducts[productToEdit];
    editProduct.name = document.getElementById("name-product").value;
    editProduct.img = document.getElementById("product-img").value;
    editProduct.price = document.getElementById("product-price").value;
    editProduct.currency = document.getElementById("product-currency").value;
    editProduct.description = document.getElementById("product-description").value;
    editProduct.description= document.getElementById("select").value
    
  } else {
    let newProduct = {};
    newProduct.name = document.getElementById("name-product").value;
    newProduct.img = document.getElementById("product-img").value;
    newProduct.price = document.getElementById("product-price").value;
    newProduct.currency = document.getElementById("product-currency").value;
    newProduct.description = document.getElementById("product-description").value;
    newProduct.type= document.getElementById("select").value
    allProducts.push(newProduct);
  }
  
  // 2- Save question
  saveProducts();

  // 3 - Update the view
  createProduct();
}

// MAIN  ---------------------------------------------------------
createProduct();










 