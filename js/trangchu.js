document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            var evnetList = confirm('Mời Bạn Đăng Nhập')
            if(evnetList){
                window.location.href  = 'login.html'
            }
        });
    });

    // Xử lý sự kiện nhập liệu và hiển thị nút Search
    const searchInput = document.querySelector('.timkiem');
    const searchBtn = document.querySelector('.search-btn');

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            searchBtn.style.display = 'none';
        } else {
            searchBtn.style.display = 'block';
        }
    });

    // Xử lý sự kiện gửi của biểu mẫu tìm kiếm
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();

            alert('Bạn muốn tìm gì: ' + searchTerm);

        });
    }
});
 
//Slide

class Slider {
    constructor(container) {
        this.container = container;
        this.slides = this.container.querySelectorAll('.slide');
        this.prevButton = this.container.querySelector('.prev');
        this.nextButton = this.container.querySelector('.next');
        this.currentSlideIndex = 0;//Khời đạo chỉ số slide hiện tại là 0 
        this.autoSlideInterval = 3000; // Thời gian chuyển đổi tự động (ms)

        this.showSlide(this.currentSlideIndex);

        this.prevButton.addEventListener('click', () => this.moveSlide(-1));
        this.nextButton.addEventListener('click', () => this.moveSlide(1));

        // Bắt đầu tự động chạy
        this.startAutoSlide();
    }

    showSlide(index) {
        //Nếu index lỡn hơn hoặc bàng slides quay lại slides đầu tiên
        if (index >= this.slides.length) {
            this.currentSlideIndex = 0;
            //Nếu index nhỏ hơn slide , thì chuyển đến slide cuối cùng
        } else if (index < 0) {
            this.currentSlideIndex = this.slides.length - 1; //Nếu ảnh lớn hơn thì slides sẽ chuyển xuống cuối
        } else {
            this.currentSlideIndex = index;
        }
        //ẩn tất cả slide 
        for (let slide of this.slides) {
            slide.style.display = 'none';
        }
        //Hiển thị slide hiện tại 
        this.slides[this.currentSlideIndex].style.display = 'block';
    }

    moveSlide(n) {
        this.showSlide(this.currentSlideIndex + n);
    }

    startAutoSlide() {
        this.autoSlideTimer = setInterval(() => {
            this.moveSlide(1);
        }, this.autoSlideInterval);
    }

    stopAutoSlide() {
        clearInterval(this.autoSlideTimer);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slide-container');
    const slider = new Slider(sliderContainer);

    // Tạm dừng khi di chuột qua slider và khởi động lại khi di chuột ra ngoài
    sliderContainer.addEventListener('mouseenter', () => slider.stopAutoSlide());
    sliderContainer.addEventListener('mouseleave', () => slider.startAutoSlide());
});
//Sản Phẩm
document.addEventListener('DOMContentLoaded', (event) => {
    // Dữ liệu sản phẩm
    const products = [
        {
            title: "Áo Thời Trang Nam",
            description: "Mẫu Được Ưa Chuộng Nhất . Mời Bạn xem rõ bên trang Sản phẩm",
            imageUrl: "./assets/css/img/sanphamao1.jpg"
        },
        {
            title: "Áo Thời Trang Nam",
            description: "Mẫu Được Ưa Chuộng Nhất . Mời Bạn xem rõ bên trang Sản phẩm",
            imageUrl: "./assets/css/img/sanphamao2.jpg"
        },
        {
            title: "Áo Thời Trang Nam",
            description: "Mẫu Được Ưa Chuộng Nhất . Mời Bạn xem rõ bên trang Sản phẩm",
            imageUrl: "./assets/css/img/sanphamao3.jpg"
        },
        {
            title: "Áo Thời Trang Nam",
            description: "Mẫu Được Ưa Chuộng Nhất . Mời Bạn xem rõ bên trang Sản phẩm",
            imageUrl: "./assets/css/img/sanphamao4.jpg" 
        },
        {
            title: "Babby Jeans",
            description: "Quần Được Yêu thích Nhất của Giới Trẻ",
            imageUrl: "./assets/css/img/sanphamquan1.jpg" 
        },
        {
            title: "Babby Jeans",
            description: "Quần Được Yêu thích Nhất của Giới Trẻ",
            imageUrl: "./assets/css/img/sanphamquan2.jpg" 
        },
        {
            title: "Babby Jeans",
            description: "Quần Được Yêu thích Nhất của Giới Trẻ",
            imageUrl: "./assets/css/img/sanphamquan3.jpg" 
        },
        {
            title: "Babby Jeans",
            description: "Quần Được Yêu thích Nhất của Giới Trẻ",
            imageUrl: "./assets/css/img/sanphamquan4.jpg" 
        },
        {
            title: "Vòng Cổ Nam",
            description: "Phụ Kiện ưa chuộng",
            imageUrl: "./assets/css/img/phukien1.jpg" 
        },
        {
            title: "BaLo ",
            description: "Phụ Kiện ưa chuộng",
            imageUrl: "./assets/css/img/phukien4.jpg" 
        }, 
        {
            title: "Vòng Đeo tay",
            description: "Phụ Kiện ưa chuộng",
            imageUrl: "./assets/css/img/phukien3.jpg" 
        },
        {
            title: "Cặp",
            description: "Phụ Kiện ưa chuộng",
            imageUrl: "./assets/css/img/phukien6.jpg" 
        }

        
    ];

    // Hàm để tạo sản phẩm
    function displayProducts(products) {
        const productContainer = document.getElementById('featured-products');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'item';
            productItem.innerHTML = `
                <a href="#"><img src="${product.imageUrl}" alt="${product.title}" class="thumb"></a>
                <div class="body">
                    <h3 class="title"><a href="#">${product.title}</a></h3>
                    <p class="desc">${product.description}</p>
                </div>
            `;
            productContainer.appendChild(productItem);
        });
    }

    // Gọi hàm để hiển thị sản phẩm
    displayProducts(products);
});

