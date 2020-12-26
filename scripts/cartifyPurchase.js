function CartifyPurchase(){
    this.gateway = "INSTAMOJO"
}
CartifyPurchase.prototype.setGateway = function(gateway="INSTAMOJO"){
    this.gateway = gateway;
};

CartifyPurchase.prototype.initKPayPayment = function(cartifyOrderObject, uniquePaymentId, payableAmount, merchantName, description){
    let order = cartifyOrderObject;
    let cart = [];

    order.orderItems.forEach(function (item) {
      cart.push({
        "ProductOrOfferId": item._id,
        "Type": "PRODUCT",
        "currency": "INR",
        "image": item.image,
        "name": item.name,
        "price": item.price,
        "discount": item.discount,
        "quantity": item.quantity
      });
    });
    
    let kpay_data = {
        amount: payableAmount,
        merchantName: merchantName,
        description: description,
        name: order.buyerName,
        pincode: order.zipcode,
        phone: order.buyerContactNumber,
        email: order.buyerEmailId,
        address: `${order.deliveryAddress.addressLine1}, ${order.deliveryAddress.addressLine2}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state}, ${order.deliveryAddress.country}, ${order.deliveryAddress.zipcode}`, 
        unique_payment_id: uniquePaymentId,
        seamless: true,
        details: {
          "InventoryDetails": {
            "Items": cart,
            "SellerID": order.sellerID
            }
        },
        gateway: order.isOnlinePaymentMode ? this.gateway : "OFFLINE"
      };
      kpay.open(kpay_data);
};