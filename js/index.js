var valEmail = {
    input   : $('input[name="email"]'),
    pesan : {
        fields  : $('.msg'),
        success : $('.success'),
        error   : $('.error')
    }
},
    regex  = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

valEmail.input.blur(function () {
    valEmail.pesan.fields.hide();
    regex.test(valEmail.input.val()) ? valEmail.pesan.success.show() : valEmail.pesan.error.show();
});

var valPostcode = {
    input   : $('input[name="postcode"]'),
    pesan : {
        fields  : $('.msg'),
        success : $('.success'),
        error   : $('.error')
    }
},
    rege = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;

valPostcode.input.blur(function () {
    valPostcode.pesan.fields.hide();
    rege.test(valPostcode.input.val()) ? valPostcode.pesan.success.show() : valPostcode.pesan.error.show();
});