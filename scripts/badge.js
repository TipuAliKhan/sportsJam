 $(document).ready(()=>{
 
    const updateCartBadge = ()=>{
      let $badge = document.querySelector(".cart-add-product");
      $badge.setAttribute("data-count", cartify.getUniqueQuantity());
    }
    cartify.subscribe(updateCartBadge);
    // $(".cart-add-product").html(cartify.getUniqueQuantity());
  });
  