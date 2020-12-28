const renderCartList = () => {
    const cartListHeader = `<div class="group_title mb-30 hidden-sm-down">
    <div class="row">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-7">
            <div class="label label-product">Product</div>
          </div>
          <div class="col-md-5 d-flex">
            <div class="label label-price">Price</div>
            <div class="label label-qty ml-auto">Qty</div>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="label label-total">Total</div>
      </div>
    </div>
  </div>`;

  const cartItems = cartify.getAllItems();
  let cartList = '';
  cartItems.forEach(function(item){
    cartList += `<li class="cart-item">

    <div class="product-line-grid row">
      <!--  product left content: image-->
      <div class="product-line-grid-left col-md-10">
        <div class="row">
          <div class="col-md-7 d-flex align-items-center">
            <span class="product-image media-middle">
              <img class="img-fluid" src="${item.image}" alt="${item.name}">
            </span>
          </div>

          <div class="col-md-5 d-flex align-items-center">
            <div class="product-line-info product-price">
              <span class="title_price hidden-sm-up">Price</span>
              <span class="value">${item.currency}:${item.price - item.discount}</span>
            </div>
            <div class="qty ml-auto ">
              <div class="input-group bootstrap-touchspin">
              <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
              <input id="quantity_wanted" class="js-cart-line-product-quantity form-control" data-product-id="${item._id}" type="text" value="${item.quantity}" name="${item.name}" min="1" style="display: block;">
              <span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span>
              <span class="input-group-btn-vertical">
              <button class="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button"  onclick="updateQuantity('${item._id}','plus')">
              <i class="material-icons touchspin-up"></i>
              </button>
              <button class="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button"  onclick="updateQuantity('${item._id}','minus')">
              <i class="material-icons touchspin-down"></i>
              </button>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  product left body: description -->
      <div class="product-line-grid-right product-line-actions col-md-2 d-flex align-items-center">
        <div class="price">
          <div class="product-price total">
            <span class="title_total hidden-sm-up">Subtotal</span> ${item.currency}:${item.price - item.discount}
          </div>
        </div>
        <div class="mt-xs-10 remove ml-auto">
          <div class="cart-line-product-actions ">
            <div class="remove-from-cart" rel="nofollow" data-id-product="${item._id}">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>`
  });
  cartList = `<ul class="cart-items">${cartList}</ul>`;
  return cartList;
}

const updateTotalAmount = () => {
    const cartTotalAmountEl = document.querySelector('#cart-subtotal-products span.value');
    const cartTotalWithTaxAmountEl = document.querySelector('.value.ml-auto.label');
    
    cartTotalWithTaxAmountEl.innerText = cartTotalAmountEl.innerText = 'INR: '+ cartify.getPayableAmount();
}

const updateQuantity = (id, type) => {
    console.log(id, type);
}
$(document).ready(function(){
    
    if (cartify.getUniqueQuantity()) {
        _get('.cart-overview.js-cart').innerHTML = renderCartList();
        updateTotalAmount();
    } else {
        _get('.cart-overview.js-cart').innerHTML = '<span class="no-items">There are no more items in your cart</span>';
    }
    
    addListener("change", _getAll("#product-cart .quantity-input"), function(event){
        let productId = this.getAttribute("data-productId");
        cartify.updateQuantity(productId, parseInt(this.value));
        updateCartCardUI(productId);
    });
    
    addListener("click", _getAll(".remove.ml-auto .remove-from-cart"), function(){
      let productId = this.getAttribute("data-id-product");
      cartify.remove(productId);
      this.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      updateTotalAmount();
    });
    cartify.subscribe(updateTotalAmount);
    
});