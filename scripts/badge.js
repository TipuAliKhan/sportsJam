 $(document).ready(()=>{
 
    const updateCartBadge = ()=>{
      let $badge = document.querySelector(".cart-count");
      $badge.setAttribute("data-count", cartify.getUniqueQuantity());
    }
    cartify.subscribe(updateCartBadge);
    // $(".cart-count").html(cartify.getUniqueQuantity());
  });
  