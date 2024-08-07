// Hàm đối tượng 'Validator' để tạo và xử lý các quy tắc xác thực form
function Validator(options) {

    // Hàm kiểm tra và hiển thị thông báo lỗi cho từng trường input dựa trên quy tắc
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector); // Tìm phần tử hiển thị thông báo lỗi
        var errorMessage = rule.test(inputElement.value); // Thực thi hàm test của quy tắc và lấy thông báo lỗi nếu có
        
        if (errorMessage) {
            errorElement.innerText = errorMessage; // Hiển thị thông báo lỗi
            inputElement.parentElement.classList.add('invalid'); // Thêm lớp 'invalid' để làm nổi bật trường có lỗi
        } else {
            errorElement.innerText = ' '; // Xóa thông báo lỗi
            inputElement.parentElement.classList.remove('invalid'); // Xóa lớp 'invalid' nếu không còn lỗi
        }
        return !errorMessage; // Trả về true nếu không có lỗi (tức là form hợp lệ)
    }

    // Lấy phần tử form từ DOM theo selector đã cung cấp trong options
    var formElement = document.querySelector(options.form);

    if (formElement) {
        // Khi form được gửi (submit)
        formElement.onsubmit = function (e) {
            e.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)
            var isFormValid = true; // Biến để theo dõi trạng thái hợp lệ của form

            // Lặp qua từng quy tắc và kiểm tra tính hợp lệ
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector); // Tìm phần tử input theo selector của quy tắc
                var isValid = validate(inputElement, rule); // Kiểm tra và lấy kết quả hợp lệ của trường
                if (!isValid) {
                    isFormValid = false; // Nếu có bất kỳ lỗi nào, đặt biến trạng thái form thành không hợp lệ
                    
                }
            });

            // Nếu form hợp lệ và có hàm onSubmit, gọi hàm đó với các giá trị của form
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]'); // Lấy tất cả các input có thuộc tính name
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value; // Tạo đối tượng giá trị của form
                        return values;
                    }, {});

                    options.onSubmit(formValues); // Gọi hàm onSubmit với các giá trị của form
                    window.location.href = 'login.html';
                }
                
            }
        };

        // Lặp qua mỗi quy tắc để thiết lập các sự kiện xử lý cho từng trường input
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector); // Tìm phần tử input theo selector của quy tắc

            if (inputElement) {

                // Xử lý sự kiện blur (mất tiêu điểm) của trường input
                inputElement.onblur = function () {
                    validate(inputElement, rule); // Kiểm tra và hiển thị thông báo lỗi khi trường mất tiêu điểm
                };

                // Xử lý sự kiện input (khi người dùng nhập dữ liệu) của trường input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector); // Tìm phần tử hiển thị thông báo lỗi
                    errorElement.innerText = ' '; // Xóa thông báo lỗi
                    inputElement.parentElement.classList.remove('invalid'); // Xóa lớp 'invalid' nếu không còn lỗi
                };
            }
        });
    }
}

// Định nghĩa các quy tắc xác thực

// Quy tắc yêu cầu trường input không được để trống
Validator.isRequired = function (selector) {
    return {
        selector: selector, // Selector để tìm trường input
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'; // Trả về thông báo lỗi nếu trường input để trống
        }
    };
};

// Quy tắc kiểm tra định dạng email hợp lệ
Validator.isEmail = function (selector) {
    return {
        selector: selector, // Selector để tìm trường input
        test: function (value) {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'; // Trả về thông báo lỗi nếu định dạng email không hợp lệ
        }
    };
};

// Quy tắc kiểm tra độ dài tối thiểu của input
Validator.minLength = function (selector, min) {
    return {
        selector: selector, // Selector để tìm trường input
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`; // Trả về thông báo lỗi nếu độ dài của input nhỏ hơn min
        }
    };
};

// Quy tắc kiểm tra giá trị xác nhận (như mật khẩu và xác nhận mật khẩu)
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector, // Selector để tìm trường input
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'; // Trả về thông báo lỗi nếu giá trị không khớp với giá trị xác nhận
        }
    };
};
