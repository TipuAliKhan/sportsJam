const cartify = (function(){

    function Cartify() {

        let cart = [];
        let requiredProperties = {
            "_id" : "string", 
            "name": "string",
            "price": "number", 
            "discount": "number",
            "type": "string", 
            "image": "string", 
            "isCODAvailable": "string", 
            "remarks": "string", 
            "currency": "string"
        };

        const cartName = "sj-cart";
        const listOfSubscribers = [];
    
        const getObjectFromLocalStorage = function (key) {
            return JSON.parse(window.localStorage.getItem(key));
        };
    
        const setObjectToLocalStorage = function (key, value) {
            window.localStorage.setItem(key, JSON.stringify(value));
            let cartArray = JSON.parse(JSON.stringify(cart));
            callAllSubscribers(cartArray);
        };
        
        const callAllSubscribers = function () {
            listOfSubscribers.forEach(function (subscriber) {
                subscriber();
            });
        };

        const validateCartItem = function(item){
            let itemPropertiesArray = Object.entries(item);
            let requiredPropertiesArray = Object.entries(requiredProperties);
            let validationFlag = false;
            requiredPropertiesArray.every((requiredProps)=>{
                validationFlag = false;
                let requiredKeyName = requiredProps[0], requiredValueType = requiredProps[1];
                itemPropertiesArray.every((props)=>{
                    let keyName = props[0], keyValueType = typeof props[1];
                    if(keyName == requiredKeyName && requiredValueType==keyValueType){
                        validationFlag = true;
                        return false;
                    }
                    return true;
                });
                return validationFlag;
            });
            return validationFlag;
        };
        
        this.add = function (cartObject) {
            if(!validateCartItem(cartObject)){
                throw new Error(`Invalid cart item, required properties: ${JSON.stringify(requiredProperties)}`);
            }
            else if(cartObject.quantity && typeof cartObject.quantity !== "number"){
                throw new Error("quantity should be number type and greater than 0");
            }
            
            let objIndex = this.findIndex(cartObject._id);
            if (objIndex < 0) {
                cartObject.quantity = cartObject.quantity || 1;
                cart.push(cartObject);
                setObjectToLocalStorage(cartName, cart);
                return true;
            }
            return false
        };
    
        this.updateQuantity = function(objectId, quantity){
            let objIndex = this.findIndex(objectId);
            if(!(typeof quantity == "number" && quantity > 0)){
                throw new Error("quantity should be number type and greater than 0");
            }
            else if(objIndex < 0){
                throw new Error("Cannot find item to update quantity");
            }
            cart[objIndex].quantity = quantity;
            setObjectToLocalStorage(cartName, cart);
        };

        this.remove = function (objectId) {
            cart = cart.filter(function (cartObject) {
                return cartObject._id !== objectId;
            });
            setObjectToLocalStorage(cartName, cart);
        };
    
        this.getQuantity = function () {
            return cart.reduce(function(sum, item){
                sum = sum + item.quantity;
                return sum;
            }, 0);
        };

        this.getQuantityById = function (objectId) {
            return cart.reduce(function(sum, item){
                if(item._id == objectId){
                    sum = sum + item.quantity;
                }
                return sum;
            }, 0);
        };

        this.getUniqueQuantity = function () {
            return cart.length;
        };
    
        this.getAmount = function(){
            return cart.reduce(function(sum, item){
                return sum + (item.price * item.quantity);
            }, 0);
        };

        this.getPayableAmount = function(){
            return cart.reduce(function(sum, item){
                return sum + (item.price - item.discount) * item.quantity;
            }, 0);
        };

        this.getTotalDiscount = function(){
            return this.getAmount() - this.getPayableAmount();
        };

        this.getAmountById = function(objectId){
            let item = this.getItem(objectId);
            return item.price;
        };

        this.getPayableAmountById = function(objectId){
            let item = this.getItem(objectId);
            return (item.price - item.discount) * item.quantity;
        };
        
        this.getDiscountById = function(objectId){
            let item = this.getItem(objectId);
            return item.discount * item.quantity;;
        };
        
        this.getAllItems = function () {
            return JSON.parse(JSON.stringify(cart));
        };

        this.getItem = function(objectId){
            let itemIndex = this.findIndex(objectId);
            return {...cart[itemIndex]}
        }
    
        this.findIndex = function(objectId){
            return cart.findIndex(function (obj) { return obj._id === objectId; });
        };

        this.clearCart = function () {
            cart = [];
            setObjectToLocalStorage(cartName, []);
        };
    
        this.subscribe = function (subscriberFunction) {
            subscriberFunction([...cart]);
            listOfSubscribers.push(subscriberFunction);
        };
    
        this.unsubscribe = function (functionName) {
            listOfSubscribers = listOfSubscribers.filter(function (fn) {
                return fn.name !== functionName;
            });
        };
    
        this.init = function(){
            let cartArray = getObjectFromLocalStorage(cartName);
            cartArray = Array.isArray(cartArray) === true ? cartArray : [];
            cart = [...cartArray];
            setObjectToLocalStorage(cartName, cartArray);
            console.log("Cartify Initialized");
        };

        window.addEventListener("storage", function (storageObject) {
            if(storageObject.key!==cartName) return;
            setObjectToLocalStorage(cartName, JSON.parse(storageObject.oldValue));
            console.error(`Change in ${cartName} is not allowed !!`);
        }, false);
        
    };
    
    let cartObject = new Cartify();    
    cartObject.init();
    return cartObject;
})();

