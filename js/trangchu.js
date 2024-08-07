document.addEventListener('DOMContentLoaded', (event) => {
    // Lắng nghe sự kiện click trên các nút có lớp 'actions'
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // alert('Mời Bạn Đăng Nhập !');

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
        this.currentSlideIndex = 0;
        this.autoSlideInterval = 3000; // Thời gian chuyển đổi tự động (ms)

        this.showSlide(this.currentSlideIndex);

        this.prevButton.addEventListener('click', () => this.moveSlide(-1));
        this.nextButton.addEventListener('click', () => this.moveSlide(1));

        // Bắt đầu tự động chạy
        this.startAutoSlide();
    }

    showSlide(index) {
        if (index >= this.slides.length) {
            this.currentSlideIndex = 0;
        } else if (index < 0) {
            this.currentSlideIndex = this.slides.length - 1; //Nếu ảnh lớn hơn thì slides sẽ chuyển xuống cuối
        } else {
            this.currentSlideIndex = index;
        }

        for (let slide of this.slides) {
            slide.style.display = 'none';
        }

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

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slide-container');
    const slider = new Slider(sliderContainer);

    // Tạm dừng khi di chuột qua slider và khởi động lại khi di chuột ra ngoài
    sliderContainer.addEventListener('mouseenter', () => slider.stopAutoSlide());
    sliderContainer.addEventListener('mouseleave', () => slider.startAutoSlide());
});
//Sản Phẩm
