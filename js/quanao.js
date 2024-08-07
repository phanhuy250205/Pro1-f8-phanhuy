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
        // Dữ liệu sản phẩm như trước
        {
            id: 1,
            name: "Loose Fit Printed T-shirt",
            price: 8.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed motif and a generous but not oversized silhouette. Ribbed crew neck and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao1.jpg",
            title : "ao"
        },
        {
            id: 2,
            name: "Loose Fit Printed T-shirt",
            price: 8.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed motif and a generous but not oversized silhouette. Ribbed crew neck and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao2.jpg",
             title : "ao"

        },
        {
            id: 3,
            name: "Loose Fit Printed T-shirt",
            price: 9.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao3.jpg",
             title : "ao"

        },
        {
            id: 4,
            name: "Loose Fit Printed T-shirt",
            price: 17.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao5.jpg",
            title : "ao"
        },
        {
            id: 5,
            name: "Slim Fit Cable-knit Polo Shirt",
            price: 49.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao7.jpg",
            title : "ao"
        },
        {
            id: 6,
            name: "Loose Fit T-shirt",
            price: 19.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao8.jpg",
            title : "ao"
        },
        {
            id: 7,
            name: "Loose Fit T-shirt",
            price: 19.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao9.jpg",
            title : "ao"
        },
        {
            id: 8,
            name: "Slim Fit Textured-knit Polo Shirt",
            price: 79.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao10.jpg",
            title : "ao"
        },
        {
            id: 9,
            name: "Loose Fit Printed T-shirt",
            price: 19.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao11.jpg",
            title : "ao"            
        },
        {
            id: 10,
            name: "Regular Fit Long-Sleeved Waffled Shirt",
            price: 24.99,
            description: "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
            imageUrl: "./assets/css/img/sanphamao12.jpg",
            title : "ao"                
        },
        {
            id: 11,
            name: "Baggy Jeans",
            price: 39.99,
            description: "5-pocket jeans in rigid cotton denim. Baggy fit from seat to hem with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Rounded legs, stacked at ankle. It's denim perfection.",
            imageUrl: "./assets/css/img/sanphamquan1.jpg",
            title : 'quan'
        },
        {
            id: 12,
            name: "Baggy Jeans",
            price: 39.99,
            description: "5-pocket jeans in rigid cotton denim. Baggy fit from seat to hem with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Rounded legs, stacked at ankle. It's denim perfection.",
            imageUrl: "./assets/css/img/sanphamquan2.jpg",
            title : 'quan'
        },
        {
            id: 13,
            name: "Baggy Jeans",
            price: 39.99,
            description: "5-pocket jeans in rigid cotton denim. Baggy fit from seat to hem with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Rounded legs, stacked at ankle. It's denim perfection.",
            imageUrl: "./assets/css/img/sanphamquan3.jpg",
            title : 'quan'
        },
        {
            id: 14,
            name: "Baggy Cargo Jeans",
            price: 119.99,
            description: "Cargo jeans in rigid cotton denim. Baggy fit from seat to hems with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Diagonal side pockets, open back pockets, and leg pockets with flap. Rounded legs, stacked at ankle. Designed for everyday wear.",
            imageUrl: "./assets/css/img/sanphamquan4.jpg",
            title : 'quan'
        },
        {
            id: 15,
            name: "Baggy Cargo Jeans",
            price: 119.99,
            description: "Cargo jeans in rigid cotton denim. Baggy fit from seat to hems with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Diagonal side pockets, open back pockets, and leg pockets with flap. Rounded legs, stacked at ankle. Designed for everyday wear.",
            imageUrl: "./assets/css/img/sanphamquan5.jpg"
        },
        {
            id: 16,
            name: "Slim Jeans",
            price: 119.99,
            description: "Straight-leg, 5-pocket jeans in cotton denim with gentle stretch for added comfort. Slim fit from waist through thighs. Regular waist and zip fly. Easily styled for a sleek or sporty look.",
            imageUrl: "./assets/css/img/sanphamquan6.jpg",
            title : 'quan'
        },
        {
            id: 17,
            name: "Straight Regular Jeans",
            price: 119.99,
            description: "5-pocket, straight-leg jeans in durable cotton denim with gentle stretch for added comfort. Regular waist and zip fly. Regular fit with a comfortable, looser feel around legs.",
            imageUrl: "./assets/css/img/sanphamquan7.jpg",
            title : 'quan'
        },
        {
            id: 18,
            name: "Wide Jeans",
            price: 119.99,
            description: "5-pocket jeans in rigid cotton denim. Loose fit from seat to hem and wide legs with extra room. Regular waist, zip fly, and a narrow, removable tie belt. Dropped gusset. This is denim that lasts.",
            imageUrl: "./assets/css/img/sanphamquan8.jpg",
            title : 'quan'
        },
        {
            id: 19,
            name: "Baggy Jeans",
            price: 119.99,
            description: "5-pocket jeans in rigid cotton denim. Baggy fit from seat to hem with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Rounded legs, stacked at ankle. It's denim perfection.",
            imageUrl: "./assets/css/img/sanphamquan9.jpg",
            title : 'quan'
        },
        {
            id: 20,
            name: "Baggy Jeans",
            price: 119.99,
            description: "5-pocket jeans in rigid cotton denim. Loose fit from seat to hem and wide legs with extra room. Regular waist, zip fly, and a narrow, removable tie belt. Dropped gusset. This is denim that lasts.",
            imageUrl: "./assets/css/img/sanphamquan10.jpg",
            title : 'quan'
        },
        {
            id: 21,
            name: "3-pack Necklaces",
            price: 9.99,
            description: "Metal necklaces in various designs. Trigger clasp.",
            imageUrl: "./assets/css/img/phukien1.jpg",
            title:"phukien"
        },
        {
            id: 22,
            name: "Elasticized Fabric Belt",
            price: 19.99,
            description: "Braided, elasticized fabric belt with faux leather details and metal buckle. Width approx. 1 1/2 in.",
            imageUrl: "./assets/css/img/phukien2.jpg",
            title:"phukien"
        },
        {
            id: 23,
            name: "3-pack Bracelets",
            price: 29.99,
            description: "Leather belt with a metal buckle. Width 1 in.",
            imageUrl: "./assets/css/img/phukien3.jpg",
            title:"phukien"
        },
        {
            id: 24,
            name: "Backpack",
            price: 39.99,
            description: "Backpack in woven fabric. Padded, adjustable shoulder straps, handle and drawstring closure at top, and flap with adjustable straps, each with a plastic snap lock. Upper pocket with zipper, open side pockets, outer compartment at front with zipper, and an inner compartment at back for laptop storage. Padded backplate. Lined.",
            imageUrl: "./assets/css/img/phukien4.jpg",
            title:"phukien"
        },
        {
            id: 25,
            name: "2-pack Necklaces",
            price: 49.99,
            description: "Sản phẩm được yêu thích nhất, áo sơ mi nam phong cách lịch lãm, phù hợp cho công sở.",
            imageUrl: "./assets/css/img/phukien5.jpg",
            title:"phukien"
        },
        {
            id: 26,
            name: "Backpack",
            price: 19.99,
            description: "Backpack in woven fabric with padded, adjustable shoulder straps. Handle and zipper at top, outer compartment with zipper, and an open inner compartment with space for a laptop. Padded backplate. Lined. Width 12 1/4 in. Height 17 in. Depth 3 1/4 in.",
            imageUrl: "./assets/css/img/phukien6.jpg",
            title:"phukien"
        },
        {
            id: 27,
            name: "Small Shoulder Bag",
            price: 59.99,
            description: "Small shoulder bag in woven fabric. Adjustable shoulder strap with slider buckle. Zipper at top, three outer compartments with flap and hook-loop closure, and an inner compartment. Width 6 3/4 in. Height 7 1/2 in. Depth 2 in. Lined.",
            imageUrl: "./assets/css/img/phukien7.jpg"
        },
        {
            id: 28,
            name: "Cotton Cap",
            price: 79.99,
            description: "Cap in cotton canvas with a sweatband in cotton. Adjustable hook-loop tab at back.",
            imageUrl: "./assets/css/img/phukien8.jpg",
            title:"phukien"
        },
        {
            id: 29,
            name: "2-pack Ties",
            price: 109.99,
            description: "Satin ties. Width 2 1/4 in.",
            imageUrl: "./assets/css/img/phukien9.jpg",
            title:"phukien"
        },
        {
            id: 30,
            name: "Fleece Top for Dog",
            price: 119.99,
            description: "Turtleneck dog sweater in soft, warm fleece. Small opening for leash at top and openings for front legs underneath.",
            imageUrl: "./assets/css/img/phukien10.jpg",
            title:"phukien"
        },
       
    ];

    // Khôi phục giỏ hàng từ localStorage hoặc khởi tạo giỏ hàng rỗng
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hàm hiển thị danh sách sản phẩm
    function renderProducts() {
        productGrid.innerHTML = ''; // Clear the grid before rendering
        products.forEach(product => {
            // Tạo phần tử card cho từng sản phẩm
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <a href="#" class="btn" data-id="${product.id}">View Product</a>
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
        productDetailSection.childNodes[1].style.display = 'flex';
        productGrid.style.display = 'none'; // Ẩn lưới sản phẩm
        buyProductButton.setAttribute('data-id', product.id); // Cập nhật id sản phẩm cho nút mua
    }

    // Sự kiện click để quay lại danh sách sản phẩm
    backToProductsButton.addEventListener('click', function() {
        location.reload();
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
