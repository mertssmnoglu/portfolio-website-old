$(document).ready(function () {
    document.title = $("h2").text() ? `${$("h1").text()} - ${$("h2").text()}` : $("h1").text()
});