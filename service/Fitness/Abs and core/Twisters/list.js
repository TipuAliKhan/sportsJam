data =[
  {
    "name": "Body Sculpture Massage FigureTwister",
    "desc": "Body Sculpture Massage FigureTwister ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/BB-920-BL.jpg",
    "currency": "INR ",
    "mrp": "899",
    "sellingPrice": "809",
    "discount": "10% off"
  },
  {
    "name": "TUNTURI Double Exercise Wheel",
    "desc": "TUNTURI Double Exercise Wheel ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/FTACTNDEWH.jpg",
    "currency": "INR ",
    "mrp": "690",
    "sellingPrice": "557.65",
    "discount": "19% off"
  }
];

for (i = 0; i < data.length; i++) {
  // ./product-details/prduct name.html
  var li = data[i];
  var title = li["name"];
  var image = li["img"];
  var desc = li["desc"];
  var price = li["sellingPrice"];
  var un = title.split(" ").join("-");
  un = un.replace(/\//g, "-") + "-" + i;
  var url = "./product-details/" + un + ".html";
  console.log(url);
  var ele = document.getElementsByClassName("products product_list grid row");
  var html =
    ` <div class="item col-lg-4 col-md-6 col-sm-6 text-center"
  >
  <div
  class="product-miniature js-product-miniature item-one"
  data-product-name = "" data-product-product-id ="" data-product-product-price="" data-product-product-discount="" data-product-product-brand="" data-product-product-image=""
  itemscope
  itemtype="http://schema.org/Product"
  >
  <div class="thumbnail-container">
      <a
      href="` +
    url +
    `" class="thumbnail product-thumbnail one-image"
      >
      <img
          class="img-fluid image-cover"
          src="` +
    image +
    `"
          alt="` +
    title +
    `"
          data-full-size-image-url="` +
    image +
    `"
          width="450"
          height="268"
      />
      </a>
  </div>
  <div class="product-groups">
      <div class="product-description">
      <div class="category-title">
          <a
          href="` +
    url +
    `"
          ></a
          >
      </div>
  
      <div class="product-title" itemprop="name">
          <a href="` +
    url +
    `">` +
    title +
    `</a
          >
      </div>
  
      <div
          class="group-price d-flex align-items-center justify-content-between"
      >
          <div class="product-comments">
          <div class="star_content">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
          </div>
          <span>0 review</span>
          </div>
          <div class="product-group-price">
          <div class="product-price-and-shipping">
              <span itemprop="price" class="price"
              >₹` +
    price +
    `</span
              >
          </div>
          </div>
      </div>
      <div class="product-desc">
      ` +
    title +
    `
      </div>
      </div>
      <div
      class="product-buttons d-flex justify-content-center"
      itemprop="offers"
      itemscope
      itemtype="http://schema.org/Offer"
      >
      <a
          class="addToWishlist"
          href="#"
          data-rel="3"
          onclick="WishlistCart('wishlist_block_list', 'add', '3', false, 1, '', '` +
    title +
    `', '` +
    title +
    `.html', '` +
    image +
    `'); return false;"
      >
          <i class="fa fa-heart-o"></i>
          <span>Add to Wishlist</span>
      </a>
      <form
          action="http://localhost/sportsjam/en/cart"
          method="post"
      >
          <input
          type="hidden"
          name="token"
          value="380c4d7aea12c17aa9fc669ea4cf2be3"
          />
          <input
          type="hidden"
          name="id_product"
          value="3"
          />
          <input type="hidden" name="qty" value="1" />
          <a
          class="add-to-cart show_popup has-text align-self-center"
          href="#"
          data-button-action="add-to-cart"
          ><span class="loading"
              ><i
              class="fa fa-spinner fa-spin"
              aria-hidden="true"
              ></i></span
          ><span>Add To Cart</span
          ><i class="fa fa-cart-plus"></i
          ></a>
      </form>
      <a
          href="#"
          class="quick-view hidden-sm-down"
          data-link-action="quickview"
      >
          <i class="fa fa-search"></i
          ><span> Quick view</span>
      </a>
      </div>
  </div>
  </div>
  </div>`;
  ele[0].insertAdjacentHTML("afterbegin", html);
}
