if (localStorage.getItem("user") != null) {
    var id = localStorage.getItem("user");

    $.ajax({
        type: 'GET',
        url: 'http://localhost:17821/api/App/LoginTjek/' + id,
        success: function (data) {

            if (data === false) {
                localStorage.removeItem("user");
                localStorage.removeItem("level");
                window.location.assign("index.html");
            }
        }
    });
}