data = [
  {
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNBDAC141L.jpg",
    title: "Yonex Badminton Net 143 PRO",
    desc: "Yonex Badminton Net 143 PRO: Size - 6.10m x 0.76m x 1.9 cm ",
    price: "1,605",
    mrp: "1,290",
    discount: "20%",
  },
  {
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNBDAC141L.jpg",
    title: "Yonex Badminton Net 152C PRO",
    desc: "Yonex Badminton Net 152C PRO ",
    price: "2,020",
    mrp: "1,625",
    discount: "20%",
  },
];
for (i = 0; i < data.length; i++) {
  var li = data[i];
  var title = li["title"];
  var image = li["img"];
  var desc = li["desc"];
  var price = li["price"];
  var mrp = li["mrp"];
  var sp = li["sp"];
  // console.log(title, image);
  var ele = document.getElementsByClassName("products product_list grid row");
  var html =
    ` <div class="item col-lg-4 col-md-6 col-sm-6 text-center"
>
<div
class="product-miniature js-product-miniature item-one"
data-id-product="3"
data-id-product-attribute="13"
itemscope
itemtype="http://schema.org/Product"
>
<div class="thumbnail-container">
    <a
    href="./` +
    title +
    `.html"
    class="thumbnail product-thumbnail one-image"
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
        href="art/3-the-best-is-yet-to-come-framed-poster.html"
        >` +
    title +
    `</a
        >
    </div>

    <div class="product-title" itemprop="name">
        <a href="./` +
    title +
    `.html"
        >` +
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
    mrp +
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
