function CartifyPurchase() {
  this.gateway = "INSTAMOJO"
}
CartifyPurchase.prototype.setGateway = function (gateway = "INSTAMOJO") {
  this.gateway = gateway;
};

CartifyPurchase.prototype.initPayment = function (cartifyOrderObject, uniquePaymentId, payableAmount, merchantName, description) {
  let order = cartifyOrderObject;
  let cart = [];

  order.orderItems.forEach(function (item) {
    cart.push({
      "ProductOrOfferId": item._id,
      "Type": "PRODUCT",
      "currency": item.currency,
      "image": item.image,
      "name": item.name,
      "price": item.price,
      "discount": item.discount,
      "quantity": item.quantity
    });
  });
};

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
      window.open(this.responseText.paymentUrl);
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
(function () {
  const checkoutBtn = document.getElementById('sportjam-checkout');
  checkoutBtn.addEventListener('click', checkout);
})();