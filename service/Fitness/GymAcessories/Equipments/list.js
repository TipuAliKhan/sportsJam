data = [
  {
    name: "VINEX AB-CLASSIC AB Exerciser Bench Style",
    description:
      "VINEX AB-CLASSIC AB Exerciser Bench Style, one of the fastest, easiest ways to get the flat, sexy and incredible Abs! It's amazing design brings you below parallel by as much as 200- degrees adding that extra range of motion to target your upper abs, middle abs, lower abs and obliques all at the same time for an exceptionally efficient workout. Buy VINEX AB-CLASSIC AB Exerciser Bench Style and see the great results at home. No need to waste money on gym. VINEX AB-CLASSIC AB Exerciser Bench Style is the great Exerciser for your Abs.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX AB-CLASSIC AB Exerciser Bench Style_1853.jpg",
    variants: [
      {
        productCode: "VAB-CLASSIC",
        otherDetails: "....",
      },
    ],
  },
  {
    name: "Vinex AB Wheel - ECOS",
    description:
      "Vinex AB Wheel gives you one of the best core and upper body sculpting and toning exercises you can get. The AB Wheel not only targets your abs but also shoulders, arms and back for a strength building workout. Has ultimate stability with dual wheel system.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX AB WHEEL - ECOS_1757.jpg",
    variants: [
      {
        productCode: "VAB-WHEC",
        otherDetails: "....",
      },
    ],
  },
  {
    name: "VINEX AB Exerciser Bench - ROCKET AB",
    description:
      "Vinex AB Rocket AB Exerciser Bench is made a series of cushions which support the back and the neck and move with the body when you work the abs. It helps you build stronger abs as it does workout on your abs. Rolling cushion delivers gentle massage while you workout.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX AB Exerciser Bench - ROCKET AB_1989.jpg",
    variants: [
      {
        productCode: "VAB-ROCKET",
        otherDetails: "....",
      },
    ],
  },
  {
    name: "VINEX SIT-UP Bench STYLUS",
    description:
      "Get into the best shape of your life with the Vinex Regular Sit-Up Bench. Vinex Regular Sit-Up Bench provides an increased load on the Abdominal Muscles. Great for Crunches, Sit-ups and Leg Raises. For a convenient, comfortable and efficient workout, add the Vinex Regular Sit-Up Bench to your home or office gym. Designed for efficient sit-ups, abdominal work and upper body workouts.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX SIT-UP Bench STYLUS_2016.jpg",
    variants: [
      {
        productCode: "VSUB-STYL01",
        otherDetails: "....",
      },
    ],
  },
];
for (i = 0; i < data.length; i++) {
  // ./product-details/prduct name.html
  var li = data[i];
  var title = li["name"];
  var image = li["image"];
  //   console.log(image);
  // var desc = li["postedIn"];
  // var price = li["sellingPrice"];
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
    data-id-product="3"
    data-id-product-attribute="13"
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
                >Price Not Availaible</span
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
      <!--  <form
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
        </form> -->
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
