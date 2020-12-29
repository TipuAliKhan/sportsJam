data = [
  {
    "name": "Nike Essential Ball Pump (Volt/Black)",
    "desc": "Nike Essential Ball Pump (Volt/Black) ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NKAC4354-753.jpg",
    "currency": "INR ",
    "mrp": "950",
    "sellingPrice": "950",
    "discount": "0% off"
  },
  {
    "name": "Nike Essential Ball Pump (Black/White)",
    "desc": "Nike Essential Ball Pump (Black/White) ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NKAC4354-027.jpg",
    "currency": "INR ",
    "mrp": "950",
    "sellingPrice": "950",
    "discount": "0% off"
  },
  {
    "name": "Stag Solid Steel Basketball Ring (18 Mm)",
    "desc": "Stag Solid Steel Basketball Ring (18 mm) ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/STABBRSS18.jpg",
    "currency": "INR ",
    "mrp": "1500",
    "sellingPrice": "1350",
    "discount": "10% off"
  },
  {
    "name": "Stag Hobby Solid Steel Basketball Ring (9mm)",
    "desc": "Stag Hobby Solid Steel Basketball Ring (9mm) ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/STABBRHB9.jpg",
    "currency": "INR ",
    "mrp": "750",
    "sellingPrice": "750",
    "discount": "0% off"
  },
  {
    "name": "Sklz Rapid Fire",
    "desc": "The most convenient and effective basketball return system available gives players the ability to practice shooting repetitively from anywhere on the courtâ€”without chasing a ball. Return netting provides optimal height and flexible position for perfect ball returns to stay in rhythm. Like having your own rebounder, even for baseline shots. ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/SZBBRF000.jpg",
    "currency": "INR ",
    "mrp": "13999",
    "sellingPrice": "11199",
    "discount": "20% off"
  },
  {
    "name": "Sklz Rain Maker",
    "desc": "The Rain-Maker basketball shot trainer improves shooting accuracy and confidence by turning an 18â€ rim into a 15â€ rim. The tighter target forces the shooter to find the center of the hoop and find the perfect the arc on their shot. Includes a detachable â€œrejectorâ€ to allow for rebounding practice. ",
    "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/SZBBRM00002.jpg",
    "currency": "INR ",
    "mrp": "3099",
    "sellingPrice": "2479",
    "discount": "20% off"
  },
  {
    "name": "Stag Double Spring Basketball Ring With Net",
    "desc": "Stag Double Spring Basketball Ring With Net ",
    "img": "https://martjackassets.blob.core.windows.net/css/storeui/images/show_loader.gif",
    "currency": "INR ",
    "mrp": "3200",
    "sellingPrice": "2880",
    "discount": "10% off"
  },
  {
    "name": "Stag Solid Steel Basketball Ring (20 Mm)",
    "desc": "Stag Solid Steel Basketball Ring (20 mm) ",
    "img": "https://martjackassets.blob.core.windows.net/css/storeui/images/show_loader.gif",
    "currency": "INR ",
    "mrp": "2400",
    "sellingPrice": "2160",
    "discount": "10% off"
  }
];
for (i = 0; i < data.length; i++) {
    var li = data[i];
    var title = li["name"];
    var image = li["img"];
    var desc = li["desc"];
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
        
            <a 
            class="add-to-cart show_popup has-text align-self-center"
            href="#"
            data-button-action="add-to-cart"
            ><span class="loading"
                ><i
                class="fa fa-spinner fa-spin"
                aria-hidden="true"
                ></i></span
            ><span data-productId=" ` +
            title +
            `"
            data-productName="` +
            title +
            `" 
            data-productImage="` +
            image +
            `" 
            data-currency="INR" 
            data-price="` +
            price +
            `" 
            data-discount="0" 
            data-cod="true" 
            class="add-to-cart-btn">Add To Cart</span
            ><i class="fa fa-cart-plus"></i
            ></a>
       
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
