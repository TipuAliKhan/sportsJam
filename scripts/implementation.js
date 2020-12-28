let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
var count = 1;
addToCartBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let element = this;
        let pid = element.getAttribute('data-productId')+count;
        let product = {
            _id: pid,
            type: 'PRODUCT',
            remarks: '',
            name: element.getAttribute('data-productName'),
            image: element.getAttribute('data-productImage'),
            currency: element.getAttribute('data-currency'),
            price: parseInt(element.getAttribute('data-price')),
            discount: parseInt(element.getAttribute('data-discount')),
            quantity: 1,
            isCODAvailable: element.getAttribute('data-cod')
        };
        var k = document.getElementsByClassName("cart-add-product")[0];
        if(k.getAttribute("data-count") != null)
            k.innerHTML = parseInt(document.getElementsByClassName("cart-add-product")[0].getAttribute("data-count"))+parseInt(1);
        else
        {
            myStorage = window.localStorage;
            k.innerHTML = JSON.parse(myStorage["nf-cart"]).length;
        }
        count++;
        console.log(k);
        console.log(JSON.stringify(product, null, 2));
        if (!cartify.add(product)) {
            alert("Already added !!")
        }
    });
});

const _get = query=>document.querySelector(query);
const _getAll = query=>document.querySelectorAll(query);

const addListener = (eventName, elements, callback)=>{
  if(!NodeList.prototype.isPrototypeOf(elements)){
    elements.addEventListener(eventName, callback);
  }
  else{
    elements.forEach((element)=>{
        element.addEventListener(eventName, callback);
    });
  }
};
  
    
 const updateCartBadge = ()=>{
    let badge = _get("#myNavbar .cart a");
    badge.innerText = cartify.getQuantity();
 };
 cartify.subscribe(updateCartBadge);