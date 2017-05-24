var pb;
var email;
var adgangskode;
var loginModel;

function LoginVal() {
    pb = $("#Pb").val().replace(/\s/g, ''); //er den hurtigste måde at erstatte alle spaces.
    email = $("#Email").val().replace(/\s/g, "");
    adgangskode = $("#Adgangskode").val().replace(/\s/g, "");
    loginModel = [pb, email, adgangskode];
}