
function checkPhone(phoneNumber) {
    var regularExpression = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return phoneNumber.match(regularExpression);
}

function checkEmail(emailValue) {
    var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValue.match(regularExpression);
}

var isValid;
$("#btnSubmit").click(function(e) {
    isValid = true; // Giả sử dữ liệu là hợp lệ
    //validate start
    if ($("#username").val().length == 0) {
        isValid = false;
        $("#error-username").css("display", "block");
        $("#error-username").html("Vui lòng nhập username!");
    } else if ($("#username").val().length <= 4) {
        isValid = false;
        $("#error-username").css("display", "block");
        $("#error-username").html("Username phải lớn hơn 4 kí tự!");
    } else {
        $("#error-username").css("display", "none");
    }
    if ($("#phone").val().length == 0) {
        isValid = false;
        $("#error-phone").css("display", "block");
        $("#error-phone").html("Vui lòng nhập số điện thoại!");
    } else if (!checkPhone($("#phone").val())) {
        isValid = false;
        $("#error-phone").css("display", "block");
        $("#error-phone").html("Số điện thoại không hợp lệ!");
    } else {
        $("#error-phone").css("display", "none");
    }
    if ($("#email").val().length == 0) {
        isValid = false;
        $("#error-email").css("display", "block");
        $("#error-email").html("Vui lòng nhập email!");
    } else if (!checkEmail($("#email").val())) {
        isValid = false;
        $("#error-email").css("display", "block");
        $("#error-email").html("Vui lòng nhập email hợp lệ!");
    } else {
        $("#error-email").css("display", "none");
    }
    if ($("#password").val().length == 0) {
        isValid = false;
        $("#error-password").css("display", "block");
        $("#error-password").html("Vui lòng nhập password!");
    } else if ($("#password").val().length < 5) {
        isValid = false;
        $("#error-password").css("display", "block");
        $("#error-password").html("Vui lòng nhập ít nhất 5 kí tự!");
    } else {
        $("#error-password").css("display", "none");
    }
    if ($("#re-password").val() != $("#password").val()) {
        isValid = false;
        $("#error-re-password").css("display", "block");
        $("#error-re-password").html("Mật khẩu không trùng!");
    } else {
        $("#error-re-password").css("display", "none");
    }
    //validate end
    if (isValid) {
        $("#form-register").submit();
    }
    e.preventDefault();
})