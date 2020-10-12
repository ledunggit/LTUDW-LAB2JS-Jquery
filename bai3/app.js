$(function() {
    var $registerForm = $("#form-register");
    if ($registerForm.length) {
        $registerForm.validate({
            rules: {
                username: {
                    required: true,
                }
            },
            messages: {
                username: {
                    required: 'Vui lòng nhập username'
                }
            }
        })
    }
})