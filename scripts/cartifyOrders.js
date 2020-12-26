const cartifyOrder = (function () {

    const Buyer = function () {

    }

    Buyer.prototype.setBuyerName = function (buyerName) {
        this.buyerName = buyerName;
    };

    Buyer.prototype.setBuyerContactNumber = function (contactNumber) {
        this.buyerContactNumber = contactNumber;
    };

    Buyer.prototype.setBuyerEmailId = function (emailId) {
        this.buyerEmailId = emailId;
    };

    Buyer.prototype.setDeliveryAddress = function (addressLine1, addressLine2, city, state, country, zipcode) {
        this.deliveryAddress = {};
        this.deliveryAddress.addressLine1 = addressLine1;
        this.deliveryAddress.addressLine2 = addressLine2;
        this.deliveryAddress.city = city;
        this.deliveryAddress.state = state;
        this.deliveryAddress.country = country;
        this.deliveryAddress.zipcode = zipcode;
    };

    const OrderDetails = function () {
        this.deliveryMode = "OFFLINE";
        this.currencyCode = "INR";
    }

    OrderDetails.prototype = {
        ...Buyer.prototype
    };

    OrderDetails.prototype.setOrderItems = function (cartItems) {
        let items = [];
        cartItems.forEach(product => {
            items.push({
                "Type": product.type,
                "ProductOrOfferId": product._id,
                "ProductDetails": {
                    "_id": product._id,
                    "Name": product.name,
                    "CurrencyCode": product.currency,
                    "Description": product.remark,
                    "ImageUri": product.image,
                    "Price": product.price - product.discount,
                    "DiscountAmount": product.discount
                },
                "Quantity": product.quantity
            });
        });
        this.orderItems = items;
    };

    OrderDetails.prototype.setSellerId = function (sellerID) {
        this.sellerID = sellerID;
    };

    OrderDetails.prototype.setCurrencyCode = function (currencyCode="INR") {
        this.currencyCode = currencyCode;
    };

    OrderDetails.prototype.setIsOnlinePaymentMode = function (isOnline) {
        this.isOnlinePaymentMode = isOnline;
    };

    OrderDetails.prototype.setDeliveryMode = function (deliveryMode = "OFFLINE") {
        deliveryMode = deliveryMode.toUpperCase();
        if (!["OFFLINE", "ONLINE"].includes(deliveryMode)) {
            throw new Error("Invalid delivery mode");
        }
        this.deliveryMode = deliveryMode;
    };

    OrderDetails.prototype.getOrderData = function () {
        let data = {
            "SellerID": this.sellerID,
            "BuyerDetails": {
                "ContactDetails": {
                    "FullName": this.buyerName,
                    "PrimaryContactNumber": this.buyerContactNumber,
                    "EmailId": this.buyerEmailId
                },
                "Address": {
                    "AddressLine1": this.deliveryAddress.addressLine1,
                    "AddressLine2": this.deliveryAddress.addressLine2,
                    "City": this.deliveryAddress.city,
                    "Region": this.deliveryAddress.state,
                    "Country": this.deliveryAddress.country,
                    "Zipcode": this.deliveryAddress.zipcode
                },
            },
            "Mode": "DELIVERY",
            "ShippingDetails": {
                "ShippedBy": "SELLER",
                "DeliveryMode": this.deliveryMode,
                "ShippingCost": 0,
                "CurrencyCode": this.currencyCode,
            },
            "TransactionCharges": 0,
            "GstCharges": 0,
            "PaymentDetails": {
                "Method": this.isOnlinePaymentMode ? "ONLINEPAYMENT" : "COD"
            },
            "Items": this.orderItems
        };
        return data;
    };
    
    OrderDetails.prototype.initOrder = function (orderInitUrl) {
    
        let orderData = this.getOrderData();
        let headers = new Headers();
        headers.append("Access-Control-Allow-Headers", "*");
        headers.append("Content-Type", "application/json");
        let promise = fetch(orderInitUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(orderData)
        });
    
        let orderPromise = new Promise((resolve, reject) => {
            promise.then((responce) => {
                responce.json().then((result) => {
                    resolve(result);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return orderPromise;
    };
    
    return new OrderDetails();

})();
