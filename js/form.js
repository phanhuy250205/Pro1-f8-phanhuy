
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
function Validator(options){
    function validate(inputElment , rule){
        var errorElemnt = inputElment.parentElement.querySelector(options)
        var errorMessage = rule.test(inputElment.value);
        if(errorMessage){
            errorElemnt.innerText = errorMessage;
            inputElment.parentElement.classList.add('invalid');
        }else{
            errorElemnt.innerText='';
            inputElment.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }
    //Lấy Element Của From validate
    var formElement = document.querySelector(options.form)

    if(formElement){
        formElement.onsubmit = function(e){
            e.preventDefault(); //Ngăn Chặn Hành Vi Mặt Định

            var isFormValid = true;
            options.rules.array.forEach(function(rele)  {
                var inputElment = formElement.querySelector(rule.selector);
                var  isValid = validate(inputElment , rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            if(isFormValid){
                if(typeof options.onSubmit === 'function'){
                    var enableInputs  = formElement.querySelectorAll('[name]');
                    var fromValues = Array.from(enableInputs).reduce(function(values,input){
                     values[input.name] = input.value
                    return  values;
                },{});
                options.onSubmit(fromValues);
                }
            }
        }
        options.rules.forEach(function(rule){
            var inputElment = formElement.querySelector(rule.selector);
            if(inputElment){
                inputElment.onblur = function(){
                    validate(inputElment, rule)
                }
                inputElment.oninput = function(){
                    var errorElemnt = inputElment.parentElement.querySelector('form-message');
                    errorElemnt.innerText =' ';
                    inputElment.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}

Validator.isRequired = function(selector){
    return {
        selector:selector,
        test:function(value){
            return value.trim() ? undefined : 'Vui Lòng Nhập Trường Này'
        }
    }
}
Validator.isEmail = function(selector){
    return{
        selector : selector, 
        test : function(value){
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Trường Này là Email'
        }
    };
}
Validator.minLength = function (selector , min){
    return {
        selector : selector,
        test : function(value){
            return value.length >= min ? undefined  : 'Vui Lòng Nhập tối thiểu 6 Kí tự'
        }
    }
}


   