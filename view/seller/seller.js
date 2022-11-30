// DOMS ELEMENTS  ---------------------------------------------------------
const dom_product_view = document.querySelector("#product-view");
const dom_questions_dialog = document.querySelector("#questions-dialog");
const dom_questions_view=document.querySelector("#questions-view")

// DATA  ---------------------------------------------------------
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
let btnEdit = document.querySelector("#create")
let productIpt = document.querySelector("#choiceA")
let priceIpt = document.querySelector("#choiceB")
let imgIpt = document.querySelector("#choiceC")
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
    imageProduct.className="images"
    imageProduct.src=product.img

    addProduct.appendChild(imageProduct)
    let imgProduct=document.createElement('img')
    imgProduct.src=product.img
    imageProduct.appendChild(imgProduct)

    let priceProduct = document.createElement('td');
    priceProduct.className="span"
    priceProduct.textContent=product.price
    addProduct.appendChild(priceProduct)

    let Currency=document.createElement('td')
    Currency.className="span"
    Currency.textContent=product.currency
    addProduct.appendChild(Currency)

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
  
  document.querySelector("#choiceA").value=product.name;
  document.querySelector("#choiceB").value=product.img;
  document.querySelector("#choiceC").value=product.price;
  document.querySelector("#choiceD").value=product.currency;
  
  //TO SHOW DIALOG
  show(dom_questions_dialog);
  products.splice(index,1)
  btnEdit.textContent = "Edit"

};
function clearInt(){
  priceIpt.value ="";
  productIpt.value = "";
  imgIpt.value = "";
  currencyIpt.value = "";
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
  // TODO : when clicking on ADD button, hide the dialog
  hide(dom_questions_dialog)
}

function onCreate() {
 
  // 1- Hide the dialog
  hide(dom_questions_dialog);

  let newProducts ={};
  newProducts.name= dom_questions_dialog.querySelector("#choiceA").value;
  newProducts.img= dom_questions_dialog.querySelector("#choiceB").value;
  newProducts.price= dom_questions_dialog.querySelector("#choiceC").value;
  newProducts.currency= dom_questions_dialog.querySelector("#choiceD").value;
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
