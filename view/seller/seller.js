// DOMS ELEMENTS  ---------------------------------------------------------
const dom_product_view = document.querySelector("#product-view");
const dom_questions_dialog = document.querySelector("#questions-dialog");
const dom_questions_view=document.querySelector("#questions-view")

// DATA  ---------------------------------------------------------
let products=[{
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

},
{
  "img":"https://cdn.shopify.com/s/files/1/0325/4101/6201/products/product-image-1467786798_360x.jpg?v=1596432994",
  "name":"BTS lightstick",
  "price":"50",
  "currency":"$",
  "description":"It’s not just about the unique style that caught your eye (and the fact you’ll never find it in a USA department store). This BTS Permission To Dance Zip-Up Hoodie is made of super-soft and ultra-comfortable material. "

}
];
let btnEdit = document.querySelector("#create")
let productIpt = document.querySelector("#name-product")
let priceIpt = document.querySelector("#product-price")
let imgIpt = document.querySelector("#product-img")
let currencyIpt = document.querySelector("#product-currency")
let descriptionIpt = document.querySelector("#product-description")
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() {
  localStorage.setItem("products", JSON.stringify(products));
}

function loadQuestions() {
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  if (productsStorage!== null){
      products =productsStorage;
  };
 
}
//  EDIT ---------------------------------------------------------
function createProduct(){
  loadQuestions()
  let product_container = document.querySelector("#add-product");
  product_container.remove();
  product_container = document.createElement("tbody");
  product_container.id="add-product";
  dom_product_view.appendChild(product_container);

  for (let index = 0; index < products.length; index++) {
    let product = products[index];
    let addProduct = document.createElement('tr');
    addProduct.dataset.index = index;
    product_container.appendChild(addProduct);

    let nameProduct = document.createElement('td');
    nameProduct.className="span"
    nameProduct.textContent=product.name
    addProduct.appendChild(nameProduct)
   
    let imageProduct = document.createElement('td');
    imageProduct.className="images";
    imageProduct.src=product.img;

    addProduct.appendChild(imageProduct);
    let imgProduct=document.createElement('img');
    imgProduct.src=product.img;
    imageProduct.appendChild(imgProduct);

    let priceProduct = document.createElement('td');
    priceProduct.className="span";
    priceProduct.textContent=product.price;
    addProduct.appendChild(priceProduct);

    let Currency=document.createElement('td');
    Currency.className="span";
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
    editAction.addEventListener("click", editQuestion);
   
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.className="trash"
    trashAction.src = "../../images/trash.png";
    trashAction.addEventListener("click", removeQuestion);
    actions.appendChild(trashAction);
    console.log(product_container);
}
};
function editQuestion(event) {
  let index = event.target.parentElement.parentElement.dataset.index;
  let product=products[index];
  //TODO update the new dialog//
  
  document.querySelector("#name-product").value=product.name;
  document.querySelector("#product-img").value=product.img;
  document.querySelector("#product-price").value=product.price;
  document.querySelector("#product-currency").value=product.currency;
  document.querySelector("#product-description").value=product.description;
  
  //TO SHOW DIALOG
  show(dom_questions_dialog);
  btnEdit.textContent = "Edit"
  products.splice(index,1)

};
function clearInt(){
  priceIpt.value ="";
  productIpt.value = "";
  imgIpt.value = "";
  currencyIpt.value = "";
  descriptionIpt.value = "";
}
function removeQuestion(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;
  // Remove question
  products.splice(index, 1);
  // Save to local storage
  saveQuestions();
  // Update the view
  createProduct();
}

function onAddQuestion() {
  // TODO : when clicking on ADD button, display the dialog
  show(dom_questions_dialog)
  clearInt()
  btnEdit.textContent = "Create"
}

function onCancel(e) {

  hide(dom_questions_dialog)
}

function onCreate(event) {
 
  // 1- Hide the dialog
  hide(dom_questions_dialog);
 
  let newProducts ={};
  newProducts.name= dom_questions_dialog.querySelector("#name-product").value;
  newProducts.img= dom_questions_dialog.querySelector("#product-img").value;
  newProducts.price= dom_questions_dialog.querySelector("#product-price").value;
  newProducts.currency= dom_questions_dialog.querySelector("#product-currency").value;
  newProducts.description= dom_questions_dialog.querySelector("#product-description").value;
  clearInt()
 
  // // 3- Update the list of question, save question on local sotrage, update the view
  products.push(newProducts);
  saveQuestions();
  createProduct();
}
// MAIN  ---------------------------------------------------------

// saveQuestions();

createProduct();

let questioButton=dom_questions_view.querySelector("button")
questioButton.addEventListener("click",onAddQuestion);

let groupBtn=dom_questions_dialog.querySelectorAll("button")
let cancelBtn=groupBtn[0]
let createBtn=groupBtn[1]

createBtn.addEventListener("click",onCreate);
cancelBtn.addEventListener("click",onCancel);
 