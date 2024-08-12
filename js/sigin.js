
function Validator(options) {
    // Hàm kiểm tra và hiển thị thông báo lỗi cho từng trường input dựa trên quy tắc
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector); 
        var errorMessage = rule.test(inputElement.value); 
        
        if (errorMessage) {
            errorElement.innerText = errorMessage; 
            inputElement.parentElement.classList.add('invalid'); 
        } else {
            errorElement.innerText = ' '; 
            inputElement.parentElement.classList.remove('invalid'); 
        }
        return !errorMessage; 
    }

    // Lấy phần tử form từ DOM theo selector đã cung cấp trong options
    var formElement = document.querySelector(options.form);

    if (formElement) {
        // Khi form được gửi (submit)
        formElement.onsubmit = function (e) {
            e.preventDefault(); 
            var isFormValid = true; 

            // Lặp qua từng quy tắc và kiểm tra tính hợp lệ
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector); 
                var isValid = validate(inputElement, rule); 
                if (!isValid) {
                    isFormValid = false; 
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

                    options.onSubmit(formValues); 
                    registerUser(formValues);
                }
            }
        };

        // Lặp qua mỗi quy tắc để thiết lập các sự kiện xử lý cho từng trường input
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector); // Tìm phần tử input theo selector của quy tắc

            if (inputElement) {
                // Xử lý sự kiện blur (mất tiêu điểm) của trường input
                inputElement.onblur = function () {
                    validate(inputElement, rule); 
                };

                // Xử lý sự kiện input (khi người dùng nhập dữ liệu) của trường input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector); 
                    errorElement.innerText = ' '; // Xóa thông báo lỗi
                    inputElement.parentElement.classList.remove('invalid'); // Xóa lớp 'invalid' nếu không còn lỗi
                };
            }
        });
    }
}

// Hàm gửi dữ liệu đăng ký người dùng tới server
function registerUser(userData) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('User registered successfully:', JSON.parse(xhr.responseText));
            window.location.href = 'login.html';
        } else {
            console.error('Error registering user:', xhr.statusText);
        }
    };
    
    xhr.onerror = function () {
        console.error('Request failed');
    };
    
    xhr.send(JSON.stringify(userData));
}



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
        selector: selector, 
        test: function (value) {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'; 
        }
    };
};

// Quy tắc kiểm tra độ dài tối thiểu của input
Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`; 
        }
    };
};

// Quy tắc kiểm tra giá trị xác nhận (như mật khẩu và xác nhận mật khẩu)
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector, 
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'; 
        }
    };
};
