data = [
  {
    name: "Vinex Gym Foam Rectangle",
    description:
      "Foam rectangle made of PVC coated fabric with 3 sides zipper for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM RECTANGLE_4158.jpg",
    variants: [
      {
        productCode: "VGF-CB123030",
        otherDetails: "120 cm x 30 cm x 30 cm",
      },
      {
        productCode: "VGF-CB602525",
        otherDetails: "60 cm x 25 cm x 25 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Cylinder",
    description:
      "Foam cylinder made of PVC coated fabric with full zipper for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM CYLINDER_4307.jpg",
    variants: [
      {
        productCode: "VGF-CL6030",
        otherDetails: "60 cm x 30 cm",
      },
      {
        productCode: "VGF-CL8030",
        otherDetails: "80 cm x 30 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Square Bridge",
    description:
      "Foam square bridge made of PVC coated fabric with 3 sides zipper for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM SQUARE BRIDGE_4338.jpg",
    variants: [
      {
        productCode: "VGF-SB603060",
        otherDetails: "60 cm x 30 cm x 60 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Cylinder Sofa",
    description:
      "Foam cylinder sofa made of PVC coated fabric with 3 sides zipper for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM CYLINDER SOFA_7015.jpg",
    variants: [
      {
        productCode: "VGF-CS3060",
        otherDetails: "30 cm x 60 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Doughnut",
    description:
      "Foam doughnut made of PVC coated fabric with complete zipper on one side for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM DOUGHNUT_7067.jpg",
    variants: [
      {
        productCode: "VGF-DO1230",
        otherDetails: "120 cm x 30 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Hexagon",
    description:
      "Foam hexagon made of PVC coated fabric with 3 sides zipper for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM HEXAGON_7094.jpg",
    variants: [
      {
        productCode: "VGF-SB1230",
        otherDetails: "120 cm x 30 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Semi - Cylinder",
    description:
      "Foam semi-cylinder made of PVC coated fabric with 3 sides zipper at bottom for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM SEMI - CYLINDER_7152.jpg",
    variants: [
      {
        productCode: "VGF-CL603015",
        otherDetails: "60 cm x 30 cm x 15 cm",
      },
      {
        productCode: "VGF-CL803015",
        otherDetails: "80 cm x 30 cm x 15 cm",
      },
    ],
  },
  {
    name: "Vinex Gym Foam Round Bridge",
    description:
      "Foam round bridge made of PVC coated fabric with 3 sides zipper for easy insertion of foam. Comes with EP foam. Customized sizes can also be made on request.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX GYM FOAM ROUND BRIDGE_7175.jpg",
    variants: [
      {
        productCode: "VGF-RB603030",
        otherDetails: "60 cm x 30 cm x 30 cm",
      },
    ],
  },
  {
    name: "Vinex Incline Mat 2 in 1 - Foam",
    description:
      "Vinex Incline mat made of PVC coated fabric with 3 sides zipper on bottom for easy insertion or removal of foam. Mat also folds into a cube shape using Velcro. Comes with P.E. foam. Size: 122 cm x 60 cm x 60 cm",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX INCLINE MAT 2 in 1 - FOAM_7213.jpg",
    variants: [
      {
        productCode: "VIM-FO2N11226060",
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
