function placeOrder(itemsToBuy, buyerDetail) {
  var data = JSON.stringify({
    "items": itemsToBuy,
    "paymentDetails": {
      "mode": 0,
      "status": 1,
      "transactionId": null,
      "onlinePaymentProvider": null
    },
    "buyerDetails": buyerDetail,
    "taxAmount": 0,
    "deliveryCharges": 0,
    "transactionCharges": 0
  });

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      debugger;
      window.open(JSON.parse(this.responseText).paymentUrl);
    }
  });

  xhr.open("POST", "https://pyxy.herokuapp.com/payments/api/v1/initiateOrder");
  xhr.setRequestHeader("Authorization", "5f54fb420275631f28aa698b");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(data);
}

function validate(data){
  return true;
}
  
function checkout() {
  const itemsInCart = cartify.getAllItems();
  const itemsToBuy = [];
  const buyerDetail = {};

  itemsInCart.map(function (e) {
    itemsToBuy.push({
      "id": e._id,
      "name": e.name,
      "price": e.price,
      "discount": e.discount,
      "imageUrl": e.image,
      "quantity": e.quantity
    })
  });

  let data = {
    gender: document.querySelector('input[name=id_gender]:checked'),
    firstName: document.querySelector('#checkout-personal-information-step input[name=firstname]').value,
    lastName: document.querySelector('#checkout-personal-information-step input[name=lastname]').value,
    mail: document.querySelector('#checkout-personal-information-step input[name=email]').value,
    phone: document.querySelector('#checkout-personal-information-step input[name=phone]').value,
    pincode: document.querySelector('#checkout-addresses-step input[name=pincode]').value,
    address: document.querySelector('#checkout-addresses-step input[name=address]').value,
    city: document.querySelector('#checkout-addresses-step input[name=city]').value,
    state: document.querySelector('#checkout-addresses-step input[name=state]').value
  }

  if(validate(data)){
    buyerDetail.buyerId = null;
    buyerDetail.fullName = data.firstName+ ' '+ data.lastName;
    buyerDetail.primaryContactNumber = data.phone;
    buyerDetail.secondaryContactNumber = null;
    buyerDetail.emailId = data.mail;
    buyerDetail.addressLine1 = data.address;
    buyerDetail.city = data.city;
    buyerDetail.state = data.state;
    buyerDetail.country = data.city;
    buyerDetail.pincode = data.pincode;

    placeOrder(itemsToBuy, buyerDetail);
  }
  
}

function populateCartDetail(){
  let productListTemplate = '';
  const allItemInCart = cartify.getAllItems();
  allItemInCart.forEach((e)=>{
    productListTemplate += `<li class="media">
    <div class="media-left d-flex">
        <img class="media-object"
          src="${e.image}"
          alt="${e.name.substr(0,20)}">
    </div>
    <div class="media-body d-lg-flex justify-content-lg-between">
      <div class="product-name">${e.name}</div>
      <div>
        <div class="product-price pull-xs-right">₹${e.price - e.discount}</div>
        <div class="product-quantity">x${e.quantity}</div>
      </div>
    </div>
  </li>`;
  })
  const cartSummary = `
  <div class="cart-summary-products">
    <div class="summary-label d-flex align-items-center">
      <span>There are 1 item in your cart</span>
      <span class="show-details ml-auto">
        <a href="#" data-toggle="collapse" data-target="#cart-summary-product-list">
        </a>
      </span>
    </div>
    <div class="collapse in" id="cart-summary-product-list">
      <ul class="media-list">
        ${productListTemplate}
      </ul>
    </div>
  </div>`;
  const priceTemplate = `<div class="group-price">
    <div class="cart-summary-line" id="cart-subtotal-products">
      <span class="label js-subtotal">
        Total products:
      </span>
      <span class="value">₹${cartify.getPayableAmount()}</span>
    </div>
    <div class="cart-summary-line" id="cart-subtotal-shipping">
      <span class="label">
        Total Shipping:
      </span>
      <span class="value">₹0.00</span>
      <div><small class="value"></small></div>
    </div>
    <div class="cart-summary-line cart-tax">
      <span class="label sub">Taxes:</span>
      <span class="value sub">₹0.00</span>
    </div>
  </div>`;

  const totalPrice = `
  <div class="cart-summary-totals">
    <div class="cart-summary-line cart-total has_border">
      <div class="d-flex">
        <span>
          <span class="label">Total</span>&nbsp;<span class="font-small">(tax
            excl.)</span>
        </span>
        <span class="value label ml-auto">₹${cartify.getPayableAmount()}</span>
      </div>
    </div>
    <button id="sportjam-checkout" class="btn btn-primary"
      style="font-size: 16px;padding: 14px 25px;width: 100%;">
      Continue
    </button>
  </div>`;

  cartDetailTemplate = cartSummary + priceTemplate + totalPrice;
  cartDetailTemplateContainer = document.getElementById('js-checkout-summary');
  cartDetailTemplateContainer.innerHTML = cartDetailTemplate;

  const checkoutBtn = document.getElementById('sportjam-checkout');
  checkoutBtn.addEventListener('click', checkout);
}


(function () {
  populateCartDetail();
})();