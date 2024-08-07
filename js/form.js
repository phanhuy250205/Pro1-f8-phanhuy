
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        const username = document.getElementById('username').value; // Lấy giá trị tên đăng nhập
        const password = document.getElementById('password').value; // Lấy giá trị mật khẩu

        // Gửi yêu cầu fetch tới máy chủ với tên đăng nhập và mật khẩu
        fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
            .then(response => response.json()) // Chuyển đổi phản hồi thành JSON
            .then(data => {
                if (data.length > 0) {
                    // Đăng nhập thành công
                    document.getElementById('message').innerText = "Đăng nhập thành công!";
                    // Chuyển hướng đến trang Quanao.html
                    window.location.href = 'Quanao.html';
                } else {
                    // Đăng nhập thất bại
                    document.getElementById('message').innerText = "Đăng nhập thất bại!";
                }
            })
            .catch(error => {
                console.error('Lỗi:', error); // In lỗi ra console
                document.getElementById('message').innerText = "Đã xảy ra lỗi!"; // Hiển thị thông báo lỗi
            });
    });
//Hàm Đối Tượng valitor




   