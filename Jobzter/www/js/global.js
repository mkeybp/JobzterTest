function previewFile() {

    var preview = document.querySelector('img.profilPic');

    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
        
    };

    if (file) {
        reader.readAsDataURL(file);
    }

}


function navigate(loca, id) {
    //alert(loca + id);
    if (id > 0) {
        window.localStorage.setItem("id", id);
    }
    window.location.assign(loca + ".html");
}

function logud() {
    localStorage.removeItem("user");
    localStorage.removeItem("level");
    window.location.assign("index.html");
}


$(document).on('pageinit', function () {
    var input = $(".md-input");
    input.on("blur", function () {
        if ($(this).parent().hasClass("md-input-wrap")) {
            if ($(this).val() !== '') {
                $(this).addClass('md-hastext');
                $(this).parent(".md-input-wrap").addClass("md-hastext");
            } else {
                $(this).removeClass('md-hastext');
                $(this).parent(".md-input-wrap").removeClass("md-hastext");
            }
        }
    });
    input.on("focus", function () {
        if ($(this).parent().hasClass("md-input-wrap")) {
            $(this).parent(".md-input-wrap").addClass("md-hastext");
        }
    });
});



