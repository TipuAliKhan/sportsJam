data = [
  {
    name: "Vinex Boxing Ring - Competition",
    description:
      "Made of Heavy Duty steel for extra stability and durability of the ring. Corner posts made of Heavy Duty steel (4\" diameter) with screw loops for tightening the ring ropes. Ropes are fully adjustable and are covered with the finest quality fabric. Corner Cushions' covers are made of PVC coated fabric and filled with extra durable dense foam for better protection. Floor Cushions are made of 10 mm closed cell high density E.P. for shock reduction. Floor is covered with PVC coated fabric for non-slippery surface. Platform made of seasoned hard wood. Also includes 2 stools, 2 spit bins and 3 stairs.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/Boxing_Ring_Competition_776021.jpg",
    variants: [
      {
        productCode: "VBXR-C2420",
        otherDetails:
          "IABF Approved, Official Size : 24'  x  24' (Platform) 20'  x  20' (Rope to Rope)",
      },
    ],
  },
  {
    name: "Vinex Boxing Ring - Practice",
    description: "Vinex Boxing Ring - Practice",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/Boxing_Ring_Competition_776022.jpg",
    variants: [
      {
        productCode: "VBXR-P2000",
        otherDetails: "....",
      },
    ],
  },
  {
    name: "Vinex Boxing Head Guards",
    description: "Made of soft leather.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX BOXING HEAD GUARDS_776023.jpg",
    variants: [
      {
        productCode: "VBHG-100R",
        otherDetails: "1 pc. Red.",
      },
      {
        productCode: "VBHG-100B",
        otherDetails: "1 pc. Blue.",
      },
    ],
  },
  {
    name: "Vinex Coacher Pad",
    description: "Made of soft leather.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX COACHER PAD_776024.jpg",
    variants: [
      {
        productCode: "VBCP-100R",
        otherDetails: "1 pc. Red.",
      },
      {
        productCode: "VBCP-100B",
        otherDetails: "1 pc. Blue.",
      },
    ],
  },
  {
    name: "Vinex Boxing Gloves",
    description: "Made of soft leather. Sold in pairs.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX BOXING GLOVES_776025.jpg",
    variants: [
      {
        productCode: "VBG-10B",
        otherDetails: "10 oz. BLUE",
      },
      {
        productCode: "VBG-12B",
        otherDetails: "12 oz. BLUE",
      },
      {
        productCode: "VBG-14B",
        otherDetails: "14 oz. BLUE",
      },
      {
        productCode: "VBG-16B",
        otherDetails: "16 oz. BLUE",
      },
      {
        productCode: "VBG-10R",
        otherDetails: "10 oz. RED",
      },
      {
        productCode: "VBG-12R",
        otherDetails: "12 oz. RED",
      },
      {
        productCode: "VBG-14R",
        otherDetails: "14 oz. RED",
      },
      {
        productCode: "VBG-16R",
        otherDetails: "16 oz. RED",
      },
      {
        productCode: "VBG-M10B",
        otherDetails: "10 oz, Moulded Foam, Blue",
      },
      {
        productCode: "VBG-M12B",
        otherDetails: "12 oz, Moulded Foam, Blue",
      },
      {
        productCode: "VBG-M14B",
        otherDetails: "14 oz, Moulded Foam, Blue",
      },
      {
        productCode: "VBG-M16B",
        otherDetails: "16 oz, Moulded Foam, Blue",
      },
      {
        productCode: "VBG-M10R",
        otherDetails: "10 oz, Moulded Foam, Red",
      },
      {
        productCode: "VBG-M12R",
        otherDetails: "12 oz, Moulded Foam, Red",
      },
      {
        productCode: "VBG-M14R",
        otherDetails: "14 oz, Moulded Foam, Red",
      },
      {
        productCode: "VBG-M16R",
        otherDetails: "16 oz, Moulded Foam, Red",
      },
    ],
  },
  {
    name: "Vinex Boxing Punching Bag",
    description:
      "Made of soft leather, complete with galvanized heavy metal chains.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX BOXING PUNCHING BAG_776026.jpg",
    variants: [
      {
        productCode: "VBPB-100",
        otherDetails: "....",
      },
      {
        productCode: "VBPB-P100",
        otherDetails:
          "Made of PVC Coated fabric, complete with galvanized heavy metal chain",
      },
    ],
  },
  {
    name: "Vinex Boxing Punching Bag - Canvas",
    description: "Made of canvas, complete with galvanized heavy metal chains.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/Vinex Boxing Punching Bag - Canvas_776127.jpg",
    variants: [
      {
        productCode: "VBPS-C100S",
        otherDetails: "Small",
      },
      {
        productCode: "VBPS-C100M",
        otherDetails: "Medium",
      },
      {
        productCode: "VBPB-C100L",
        otherDetails: "Large",
      },
    ],
  },
  {
    name: "Vinex Speed Ball",
    description: "Made of leather.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX SPEED BALL_776128.jpg",
    variants: [
      {
        productCode: "LSB-100",
        otherDetails: "Without steel bracket.",
      },
      {
        productCode: "LSB-100SB",
        otherDetails: "With revolving steel bracket.",
      },
    ],
  },
  {
    name: "Vinex Junior Boxing Kit",
    description:
      "Made of PVC coated fabric. Each set consists of 1 punching bag , 1 Head guard and a pair of boxing gloves.",
    image:
      "http://www.vinex.in/Uploaded_Images/mm_bigger/VINEX JUNIOR BOXING KIT_776129.jpg",
    variants: [
      {
        productCode: "VBK-300",
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
                >......</span
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
