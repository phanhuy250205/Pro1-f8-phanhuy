// Lấy các phần tử HTML từ DOM
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    const productDetailSection = document.getElementById('product-detail');
    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const productImages = document.getElementById('product-images');
    const backToProductsButton = document.getElementById('back-to-products');
    const buyProductButton = document.getElementById('buy-product');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    const products = [
        {
            id: 1,
            name: "Áo POLO NAM",
            price: 9.99,
            description: "Áo polo nam Đẹp Thịnh Hành Yêu Thích Nhất, chất liệu cotton thoáng mát, thích hợp cho mọi hoàn cảnh. Áo polo này có thiết kế đơn giản nhưng tinh tế, với các đường may chắc chắn và chất liệu cotton cao cấp. Màu sắc của áo được lựa chọn kỹ lưỡng để dễ dàng phối đồ với nhiều trang phục khác nhau. Đây là sự lựa chọn hoàn hảo cho những ngày hè nóng bức, khi bạn cần một chiếc áo vừa thoáng mát vừa phong cách. Áo cũng rất dễ giặt và không bị nhăn, giúp bạn luôn cảm thấy tự tin và thoải mái.",
            imageUrl: "./assets/css/img/sanpham1(ao).jpg"
        },
        {
            id: 2,
            name: "Áo POLO NAM",
            price: 19.99,
            description: "Áo polo nam phối túi thêu chữ Mã: HT32, thiết kế trẻ trung, hiện đại với màu sắc phong phú.",
            imageUrl: "./assets/css/img/ao1.jpg"
        },
        {
            id: 3,
            name: "ÁO SƠ MI TH1",
            price: 29.99,
            description: "Áo sơ mi nam phối túi thêu chữ Mã: HT33, vải cao cấp, chống nhăn, dễ ủi.",
            imageUrl: "./assets/css/img/sanpham2(ao).jpg"
        },
        {
            id: 4,
            name: "ÁO SƠ MI",
            price: 39.99,
            description: "Áo sơ mi nam, thiết kế cổ điển với chất liệu thoáng mát, dễ chịu.",
            imageUrl: "./assets/css/img/sanpham3(ao).jpg"
        },
        {
            id: 5,
            name: "ÁO SƠ MI",
            price: 49.99,
            description: "Sản phẩm được yêu thích nhất, áo sơ mi nam phong cách lịch lãm, phù hợp cho công sở.",
            imageUrl: "./assets/css/img/sanpham4(ao).jpg"
        },
        {
            id: 6,
            name: "Quần Tây Mã Nam TH1",
            price: 29.99,
            description: "Quần Nam Được yêu thích nhất hiện nay, chất liệu cao cấp, phù hợp cho cả công sở và dạo phố.",
            imageUrl: "./assets/css/img/sanpham5(quan).jpg"
        },
        {
            id: 7,
            name: "Quần Tây Mã Nam TH2",
            price: 59.99,
            description: "Quần tây nam chất liệu cao cấp, thiết kế sang trọng, thích hợp cho các sự kiện quan trọng.",
            imageUrl: "./assets/css/img/sanpham6(Quan).jpg"
        },
        {
            id: 8,
            name: "Quần Tây Mã Nam TH3",
            price: 79.99,
            description: "Quần tây nam thiết kế hiện đại, đường may chắc chắn, chất liệu mềm mại.",
            imageUrl: "./assets/css/img/sanpham7(quan).jpg"
        },
        {
            id: 9,
            name: "Quần Tây Mã Nam TH4",
            price: 109.99,
            description: "Quần tây nam cao cấp, thiết kế đẳng cấp, chất liệu thoáng mát, dễ chịu.",
            imageUrl: "./assets/css/img/sanpham8(quan).jpg"
        },
        {
            id: 10,
            name: "Quần Tây Mã Nam TH5",
            price: 119.99,
            description: "Quần tây nam phong cách lịch lãm, thích hợp cho mọi lứa tuổi, dễ dàng phối đồ.",
            imageUrl: "./assets/css/img/sanpham9(quan).jpg"
        },
        {
            id: 11,
            name: "Nước Hoa Ultra Male CHIC PERFUME",
            price: 119.99,
            description: "Phong cách nam tính, cuốn hút, mùi hương đặc trưng, bền lâu suốt cả ngày.",
            imageUrl: "./assets/css/img/sanpham10(nuochoa).jpg"
        },
        {
            id: 12,
            name: "Nước Hoa Nam Dior SAUVAGE",
            price: 119.99,
            description: "Chuẩn Auth - Hương Thơm Cực Cuốn, Nam Tính, thích hợp cho mọi sự kiện.",
            imageUrl: "./assets/css/img/sanpham11(nuochoa).jpg"
        },
        {
            id: 13,
            name: "Nước Hoa Nam Gucci Guilty Pour Homme",
            price: 119.99,
            description: "Chuẩn Auth - Mạnh Mẽ, Gợi Cảm, Lãng Mạn, mang lại sự tự tin cho phái mạnh.",
            imageUrl: "./assets/css/img/sanpham12(nuochoa).jpg"
        },
        {
            id: 14,
            name: "Nước Hoa Nam Chính Hãng Sexy Men",
            price: 119.99,
            description: "Hương Thơm Nam Tính, Sang Trọng - Lua Perfume, sự lựa chọn hoàn hảo cho quý ông.",
            imageUrl: "./assets/css/img/sanpham13(nuochoa).jpg"
        },
        {
            id: 15,
            name: "Nước Hoa Nam Valentino uomo intense CHIC PERFUME",
            price: 119.99,
            description: "Nước Hoa Nam chính hãng Valentino uomo intense CHIC PERFUME phong cách ấm áp, hiện đại, thích hợp cho mùa đông.",
            imageUrl: "./assets/css/img/sanpham14(nuochoa)5.jpg"
        },
        {
            id: 16,
            name: "Thắt Lưng Nam",
            price: 119.99,
            description: "Thắt Lưng Dây Nịt Nam Da Bò Thật Khóa Tự Động Cao Cấp Thương Hiệu Y2010 Full Box Bảo Hành 12 Tháng D14 19857 |YaMe|.",
            imageUrl: "./assets/css/img/sanpham15(thatlung).jpg"
        },
        {
            id: 17,
            name: "Thắt lưng nam HARDENPOLO",
            price: 119.99,
            description: "Thắt lưng nam HARDENPOLO chữ H da bò cao cấp EL14, thiết kế đẳng cấp, bền bỉ.",
            imageUrl: "./assets/css/img/sanpham16(thatlung).jpg"
        },
        {
            id: 18,
            name: "Thắt lưng nam Faiaoepolo",
            price: 119.99,
            description: "Thắt lưng nam , dây nịt nam cao cấp Faiaoepolo Full hộp đựng V100, thiết kế sang trọng, phù hợp cho mọi dịp.",
            imageUrl: "./assets/css/img/sanpham17(thatlung).jpg"
        },
        {
            id: 19,
            name: "Thắt lưng nam cao cấp WilliamPOLO",
            price: 119.99,
            description: "Thắt lưng nam cao cấp WilliamPOLO , dây nịt nam cao cấp ROYAL.ARTDUCDO, mang lại vẻ đẹp quý phái.",
            imageUrl: "./assets/css/img/sanpham18(thatlung).jpg"
        },
        {
            id: 20,
            name: "Thắt lưng nam GUSKI",
            price: 119.99,
            description: "Thắt lưng nam cao cấp GUSKI chất liệu da bò thật chính hãng sang trọng G5, thiết kế tinh tế, hiện đại.",
            imageUrl: "./assets/css/img/sanpham19(thatlung)f.jpg"
        }
        // Thêm các sản phẩm khác vào đây...
    ];

   // Khôi phục giỏ hàng từ localStorage hoặc khởi tạo giỏ hàng rỗng
   let cart = JSON.parse(localStorage.getItem('cart')) || [];

  

   // Hàm hiển thị danh sách sản phẩm
   function renderProducts() {
       products.forEach(product => {
           // Tạo phần tử card cho từng sản phẩm
           const productCard = document.createElement('div');
           productCard.classList.add('product-card');
           productCard.innerHTML = `
               <img src="${product.imageUrl}" alt="${product.name}">
               <h2>${product.name}</h2>
               <p class="price">$${product.price.toFixed(2)}</p>
               <p class="description">${product.description}</p>
               <a href="#" class="btn" data-id="${product.id}">Xem Sản Phẩm</a>
           `;
           productGrid.appendChild(productCard);
           
           // Thêm sự kiện click cho nút xem sản phẩm
           productCard.querySelector('.btn').addEventListener('click', function(e) {
               e.preventDefault();
               showProductDetail(product.id); // Hiển thị chi tiết sản phẩm khi nút được nhấn
           });
       });
   }

    // Hàm hiển thị chi tiết sản phẩm
    function showProductDetail(productId) {
        const product = products.find(p => p.id === productId); // Tìm sản phẩm theo id
        productTitle.textContent = product.name; // Cập nhật tiêu đề sản phẩm
        productPrice.textContent = `$${product.price.toFixed(2)}`; // Cập nhật giá sản phẩm
        productDescription.textContent = product.description; // Cập nhật mô tả sản phẩm
        productImages.innerHTML = ''; // Xóa các hình ảnh hiện tại
        const img = document.createElement('img'); // Tạo phần tử img cho hình ảnh sản phẩm
        img.src = product.imageUrl;
        productImages.appendChild(img); // Thêm hình ảnh vào phần tử hiển thị hình ảnh sản phẩm

        productDetailSection.style.display = 'block'; // Hiển thị phần chi tiết sản phẩm
        productGrid.style.display = 'none'; // Ẩn lưới sản phẩm
        buyProductButton.setAttribute('data-id', product.id); // Cập nhật id sản phẩm cho nút mua
    }

    // Sự kiện click để quay lại danh sách sản phẩm
    backToProductsButton.addEventListener('click', function() {
        productDetailSection.style.display = 'none'; // Ẩn phần chi tiết sản phẩm
        productGrid.style.display = 'flex'; // Hiển thị lưới sản phẩm
    });

    // Sự kiện click để thêm sản phẩm vào giỏ hàng
    buyProductButton.addEventListener('click', function() {
        const productId = parseInt(buyProductButton.getAttribute('data-id')); // Lấy id sản phẩm từ nút
        const product = products.find(p => p.id === productId); // Tìm sản phẩm theo id
        const existingProductIndex = cart.findIndex(p => p.id === productId); // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1; // Nếu có, tăng số lượng sản phẩm
        } else {
            product.quantity = 1; // Nếu không, thêm sản phẩm mới vào giỏ hàng với số lượng 1
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
        updateCart(); // Cập nhật số lượng và danh sách sản phẩm trong giỏ hàng
        window.location.href = 'cart.html'; // Điều hướng đến trang giỏ hàng
    });

    // Hàm cập nhật thông tin giỏ hàng
    function updateCart() {
        cartCount.textContent = cart.reduce((total, product) => total + product.quantity, 0); // Cập nhật số lượng sản phẩm trong giỏ hàng
        cartItems.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại trong giỏ hàng
        cart.forEach(product => {
            // Tạo phần tử cho từng sản phẩm trong giỏ hàng
            const cartItem = document.createElement('div');
            cartItem.textContent = `${product.name} - $${product.price.toFixed(2)} (x${product.quantity})`;
            cartItems.appendChild(cartItem);
        });
        cartItems.style.display = 'none'; // Ẩn danh sách sản phẩm trong giỏ hàng ban đầu
        cartCount.addEventListener('click', function() {
            // Hiển thị hoặc ẩn danh sách sản phẩm trong giỏ hàng khi số lượng được nhấn
            cartItems.style.display = cartItems.style.display === 'none' ? 'block' : 'none';
        });
    }
    

    renderProducts(); // Hiển thị danh sách sản phẩm khi trang được tải
    updateCart(); // Cập nhật thông tin giỏ hàng khi trang được tải
});