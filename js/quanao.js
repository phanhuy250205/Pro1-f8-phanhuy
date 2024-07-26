document.addEventListener('DOMContentLoaded', function(){
    const productCards = document.querySelectorAll('.product-card'); 
    const productDetailSection = document.getElementById('product-detail'); // Phần chi tiết sản phẩm
    const productTitle = document.getElementById('product-title'); 
    const productPrice = document.getElementById('product-price'); 
    const productDescription = document.getElementById('product-description'); 
    const productImages = document.getElementById('product-images'); 
    const backToProductsButton = document.getElementById('back-to-products'); 
    const buyProductButton = document.getElementById('buy-product'); // Nút mua sản phẩm
    const cartCount = document.getElementById('cart-count'); // Số lượng sản phẩm trong giỏ hàng
    const cartItems = document.getElementById('cart-items'); // Danh sách sản phẩm trong giỏ hàng

    //Mảng Chứa Sản Phẩm
    const products = [];
    //Mảng Chứa các sản phẩm trong giỏ hàng
    let cart = [];

    productCards.forEach(card =>{
        const image = card.querySelector('img').src; // Lấy đường dẫn ảnh của sản phẩm
        const name = card.querySelector('h2').textContent; // Lấy tên sản phẩm
        const price = card.querySelector('.price').textContent; // Lấy giá sản phẩm
        const description = card.querySelector('.description').textContent; // Lấy mô tả sản phẩm
        const id = card.querySelector('.btn').getAttribute('data-id'); // Lấy ID sản phẩm từ thuộc tính data-id của nút

        products.push({
            id:id,
            name:name,
            price:price,
            description:description,
            image:[image]
        });
        //đăng kí sự kiện  cho nút click
        card.querySelector('.btn').addEventListener('click',function(e){
            e.preventDefault();
            showProductDetail(id);
        });
    });
    //Hàm hiển thị chi tiết sản phẩm
    function showProductDetail(productId){
        //Tìm Sp theo id
        const product = products.find(p => p.id === productId);
        productTitle.textContent = product.name;
        productPrice.textContent = product.price;
        productDescription.textContent = product.description;
        productImages.innerHTML = ' ';
        //Hiển thị hình Ảnh sản phầm
        product.image.forEach(image => {

            const img = document.createElement('img');
            img.src = image;
            productImages.appendChild(img);
        });
        productDetailSection.style.display = 'block';
        document.querySelector('.products').style.display = 'none';

        buyProductButton.setAttribute('data-id',product.id);
    }
    //sử kiện click cho nút quay lại danh sách sản phầm

    backToProductsButton.addEventListener('click', function(){
        productDetailSection.style.display = 'none';
        document.querySelector('.products').style.display='flex';

    });
    //sự kiên  cho nút mua sản phầm
    buyProductButton.addEventListener('click',function(){
        //lấy id sảm phầm từ thuộc tính data-id của nút mua
        const productId  = buyProductButton.getAttribute('data-id')
        //tìm sản phẩm theo id
        const product = products.find(p => p.id === productId);

        //thêm sản phẩm vào giỏ hàng 
        cart.push(product);
        updatecart();

    });
    function updatecart(){
        //cập nhật số lượng sản phầm trong giỏ hàng 
        cartCount.textContent = cart.length;

        //cập nhật danh sách sản phầm trong giỏ hàng

        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
        cart.forEach(product => {
            const cartItem = document.createElement('div')
            cartItem.textContent = `${product.name} - ${product.price}`;

            cartItems.appendChild(cartItem);
        });
       cartItems.style.display = 'none';
       cartCount.addEventListener('click', function(){
        cartItems.style.display = cartItems.style.display === 'none' ? 'block':'none';
        
       });
    }
});

