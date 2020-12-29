data = [
    {
      "name": "Reebok Long Foam Roller",
      "desc": "Reebok Long Foam Roller ",
      "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/RBRSYG11007.jpg",
      "currency": "INR ",
      "mrp": "4999",
      "sellingPrice": "3299",
      "discount": "34% off"
    },
    {
      "name": "Everlast Epe Fitness Foam Roller (12in, Black/Yellow)",
      "desc": "Everlast Epe Fitness Foam Roller (12in, Black/Yellow) ",
      "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/EVFR41012.jpg",
      "currency": "INR ",
      "mrp": "899",
      "sellingPrice": "899",
      "discount": "0% off"
    },
    {
      "name": "Everlast Epe Fitness Foam Roller (24in, Black/Yellow)",
      "desc": "Everlast Epe Fitness Foam Roller (24in, Black/Yellow) ",
      "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/EVFR41024.jpg",
      "currency": "INR ",
      "mrp": "1299",
      "sellingPrice": "1299",
      "discount": "0% off"
    },
    {
      "name": "Nike Textured Foam Roller (Pink)",
      "desc": "Nike Textured Foam Roller (Pink) ",
      "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NKFTJRNER1569513L.jpg",
      "currency": "INR ",
      "mrp": "3890",
      "sellingPrice": "3501",
      "discount": "10% off"
    },
    {
      "name": "Perfect Fitness Foot Roller (Blue/Grey)",
      "desc": "Perfect Fitness Foot Roller (Blue/Grey) ",
      "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/PFFRLBLG.jpg",
      "currency": "INR ",
      "mrp": "1599",
      "sellingPrice": "1439",
      "discount": "10% off"
    },
    {
      "name": "Perfect Fitness Foam Roller (Blue)",
      "desc": "Perfect Fitness Foam Roller (Blue) ",
      "img": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/PFFRLBLGBL.jpg",
      "currency": "INR ",
      "mrp": "2299",
      "sellingPrice": "1839",
      "discount": "20% off"
    },
    {
      "name": "Blackroll Standard Textured Foam Roller (Black)",
      "desc": "The BLACKROLLÂ® GROOVE Standard\nWith its grooved surface, the roll will start to slightly vibrate which improves blood circulation.\nâ€¢ rutted surface for new stimuli\nâ€¢ standard version\nâ€¢ for more intensive practice and activation\nâ€¢ appropriate for all exercises on the ground\nâ€¢ strong massage-effect ",
      "img": "https://martjackassets.blob.core.windows.net/css/storeui/images/show_loader.gif",
      "currency": "INR ",
      "mrp": "2430",
      "sellingPrice": "2300",
      "discount": "5% off"
    },
    {
      "name": "Blackroll Groove Pro Textured Foam Roller (Blue)",
      "desc": "The BLACKROLLÂ® GROOVE PRO\nWith its grooved surface, the roll will start to slightly vibrate which improves blood circulation. Warning: the roll is extremely hard and therefore recommended to professionals only. ",
      "img": "https://martjackassets.blob.core.windows.net/css/storeui/images/show_loader.gif",
      "currency": "INR ",
      "mrp": "3240",
      "sellingPrice": "3075",
      "discount": "5% off"
    },
    {
      "name": "Everlast Epe Fitness Foam Roller (36in, Black/Yellow)",
      "desc": "Everlast Epe Fitness Foam Roller (36in, Black/Yellow) ",
      "img": "https://martjackassets.blob.core.windows.net/css/storeui/images/show_loader.gif",
      "currency": "INR ",
      "mrp": "1699",
      "sellingPrice": "1699",
      "discount": "0% off"
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
                > ₹` +
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
  