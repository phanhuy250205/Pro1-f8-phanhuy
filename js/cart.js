document.addEventListener('DOMContentLoaded', function() {
    // Chọn các phần tử từ DOM
    const cartItemsContainer = document.getElementById('cart-items'); 
    const checkoutButton = document.getElementById('checkout-button'); // Nút thanh toán
    const totalPriceContainer = document.getElementById('total-price'); // Container hiển thị tổng giá
    const summaryContainer = document.createElement('section'); 
    summaryContainer.id = 'summary-container'; 
    document.querySelector('main').appendChild(summaryContainer); 

    // Khởi tạo giỏ hàng từ localStorage, hoặc sử dụng một mảng rỗng nếu không có dữ liệu
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hàm để hiển thị các mục trong giỏ hàng
    function renderCart() {
        cartItemsContainer.innerHTML = ''; // Xóa nội dung hiện tại của container

        cart.forEach((item, index) => {
            const isPerfumeOrBelt = item.name.includes('Nước Hoa') || item.name.includes('Thắt Lưng'); 
            const cartItem = document.createElement('div'); 
            cartItem.classList.add('cart-item'); 
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.imageUrl}" alt="${item.name}"> <!-- Ảnh sản phẩm -->
                    <div>
                        <h2>${item.name}</h2> <!-- Tên sản phẩm -->
                        <p>$${item.price.toFixed(2)}</p> <!-- Giá sản phẩm -->
                        ${isPerfumeOrBelt ? '' : ` <!-- Nếu sản phẩm không phải là nước hoa hoặc thắt lưng thì hiển thị tùy chọn size, màu và số lượng -->
                        <div class="cart-item-options">
                            <label for="size-${index}">Size:</label>
                            <select id="size-${index}" class="size-select" data-index="${index}">
                                <option value="">Chọn Size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <label for="color-${index}">Màu:</label>
                            <select id="color-${index}" class="color-select" data-index="${index}">
                                <option value="">Chọn Màu</option>
                                <option value="Đỏ">Đỏ</option>
                                <option value="Xanh">Xanh</option>
                                <option value="Đen">Đen</option>
                                <option value="Trắng">Trắng</option>
                            </select>
                            <label for="quantity-${index}">Số lượng:</label>
                            <select id="quantity-${index}" class="quantity-select" data-index="${index}">
                                ${Array.from({ length: 10 }, (_, i) => i + 1).map(num => 
                                    `<option value="${num}" ${item.quantity === num ? 'selected' : ''}>${num}</option>`
                                ).join('')}
                            </select>
                        </div>`}
                    </div>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div> <!-- Hiển thị tổng giá của sản phẩm -->
                <button class="cart-item-remove" data-index="${index}"><i class="fa-solid fa-circle-minus"></i></button> <!-- Nút xóa sản phẩm khỏi giỏ hàng -->
            `;
            cartItemsContainer.appendChild(cartItem); // Thêm mục giỏ hàng vào container

            if (!isPerfumeOrBelt) {
                // Cập nhật size, màu sắc, và số lượng khi thay đổi
                cartItem.querySelector('.size-select').addEventListener('change', function() {
                    const selectedIndex = this.getAttribute('data-index');
                    cart[selectedIndex].size = this.value;//Cập nhật kích thước các mục trong giỏ hàng
                    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
                    updateSummary(); // Cập nhật thông tin đơn hàng
                });

                cartItem.querySelector('.color-select').addEventListener('change', function() {
                    const selectedIndex = this.getAttribute('data-index');
                    cart[selectedIndex].color = this.value;
                    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
                    updateSummary(); // Cập nhật thông tin đơn hàng
                });

                cartItem.querySelector('.quantity-select').addEventListener('change', function() {
                    const selectedIndex = this.getAttribute('data-index');
                    cart[selectedIndex].quantity = parseInt(this.value, 10);
                    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
                    renderCart(); // Cập nhật giỏ hàng
                });
            }

            // Xóa mục khỏi giỏ hàng
            cartItem.querySelector('.cart-item-remove').addEventListener('click', function() {
                removeItem(index);
            });
        });

        updateSummary(); // Cập nhật thông tin đơn hàng và tổng giá
    }

    // Hàm xóa một mục khỏi giỏ hàng
    function removeItem(index) {
        cart.splice(index, 1); // Xóa mục tại vị trí index
        localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
        renderCart(); // Cập nhật giỏ hàng
    }

    // Hàm cập nhật thông tin đơn hàng và tổng giá
    function updateSummary() {
        let totalPrice = 0;
        let summaryHtml = `
            <h2>Thông tin đơn hàng</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Size</th>
                        <th>Màu</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
        `;

        cart.forEach(item => {
            summaryHtml += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.size || (item.name.includes('Nước Hoa') || item.name.includes('Thắt Lưng') ? '❤️' : 'Chưa Chọn ')}</td>
                    <td>${item.color || (item.name.includes('Nước Hoa') || item.name.includes('Thắt Lưng') ? '❤️' : 'Chưa Chọn')}</td>
                    <td>${item.quantity || 1}</td>
                    <td>$${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                </tr>
            `;
            totalPrice += item.price * (item.quantity || 1); // Tính tổng giá
        });

        summaryHtml += `
                </tbody>
            </table>
        `;

        summaryContainer.innerHTML = summaryHtml; // Hiển thị thông tin đơn hàng
        totalPriceContainer.innerHTML = `Tổng giá: $${totalPrice.toFixed(2)}`; // Hiển thị tổng giá
    }

    // Hàm kiểm tra tính hợp lệ của giỏ hàng
    function validateCart() {
        return cart.every(item => 
            (item.size || item.name.includes('Nước Hoa') || item.name.includes('Thắt Lưng'))
            && (item.color || item.name.includes('Nước Hoa') || item.name.includes('Thắt Lưng'))
            && item.quantity
        );
    }

    // Xử lý sự kiện khi nhấn nút thanh toán
    checkoutButton.addEventListener('click', function() {
        if (validateCart()) {
            localStorage.removeItem('cart'); // Xóa dữ liệu giỏ hàng khỏi localStorage
            cart = []; // Xóa dữ liệu giỏ hàng trong biến cart
            renderCart(); // Cập nhật giao diện người dùng
            alert('Thanh toán thành công!'); // Hiển thị thông báo thanh toán thành công
        } else {
            alert('Vui lòng kiểm tra lại giỏ hàng của bạn.'); // Thông báo nếu giỏ hàng không hợp lệ
            removeItem(index);
                }
    });

    renderCart(); // Gọi hàm để hiển thị giỏ hàng khi trang được tải
});
