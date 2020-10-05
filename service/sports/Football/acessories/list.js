data = [
  {
    name: "Adidas Corner Flags (Set Of 4)",
    desc: "Adidas Corner Flags (Set of 4) ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADSP11520.jpg",
    currency: "INR ",
    mrp: "1199",
    sellingPrice: "799",
    discount: "33% off",
  },
  {
    name: "Adidas Vertical Jump Trainer",
    desc: "Adidas Vertical Jump Trainer ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADSP11512.jpg",
    currency: "INR ",
    mrp: "5999",
    sellingPrice: "3899",
    discount: "35% off",
  },
  {
    name: "Adidas Equipment Bag",
    desc: "Adidas Equipment Bag ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADAC11605.jpg",
    currency: "INR ",
    mrp: "2999",
    sellingPrice: "1999",
    discount: "33% off",
  },
  {
    name: "Adidas Soccer Trainer",
    desc: "Adidas Soccer Trainer ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADFB10130.jpg",
    currency: "INR ",
    mrp: "1599",
    sellingPrice: "1099",
    discount: "31% off",
  },
  {
    name: "Adidas 6ft Pop Up Goal",
    desc: "Adidas 6ft Pop Up Goal ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADFB10121.jpg",
    currency: "INR ",
    mrp: "6999",
    sellingPrice: "4599",
    discount: "34% off",
  },
  {
    name: "Adidas 4ft Pop Up Goal",
    desc: "Adidas 4ft Pop Up Goal ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADFB10120.jpg",
    currency: "INR ",
    mrp: "5999",
    sellingPrice: "3899",
    discount: "35% off",
  },
  {
    name: "Adidas Training Net",
    desc: "Adidas Training Net ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADFB10140.jpg",
    currency: "INR ",
    mrp: "6299",
    sellingPrice: "4099",
    discount: "35% off",
  },
  {
    name: "Sklz Soccer Training System",
    desc:
      "Sklz Soccer Training System: Leave your opponents behind by developing fast feet, first-step quickness, leg drive and 360-degree speed. This kit includes tools for each aspect of a soccer player's game. Use them individually or in endless training combinations and drills. ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/SZSAQSCTK02.jpg",
    currency: "INR ",
    mrp: "10490",
    sellingPrice: "8392",
    discount: "20% off",
  },
  {
    name: "Nike Ball Pump",
    desc:
      "\nNike Ball Pump provides efficient air compression in an easy-to-use design ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NKFBACBPL1.jpg",
    currency: "INR ",
    mrp: "790",
    sellingPrice: "789",
    discount: "0% off",
  },
  {
    name: "Nivia Ball Pump",
    desc:
      "Nivia Ball Pump: This small pocket pump features a double action 'pull and push' technology which reduces the inflation time of the ball as it pumps air on both upstroke and downstroke. ",
    img:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NVFTBP213.jpg",
    currency: "INR ",
    mrp: "280",
    sellingPrice: "203.89",
    discount: "27% off",
  },
];
for (i = 0; i < data.length; i++) {
  // ./product-details/prduct name.html
  var li = data[i];
  var title = li["name"];
  // var image = li.image.split(",")[0].split(" ")[0];
  var image = li["img"];
  //   console.log(image);
  var desc = li["postedIn"];
  var price = li["sellingPrice"];
  var un = title.split(" ").join("-");
  un = un.replace(/\//g, "-") + "-" + i;
  var url = "./product-details/" + un + ".html";
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
                >₹ ` +
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
