$("#menuAssociados").on("click", function (e) {
  $("#iconAssociados").toggleClass("fa-chevron-right , fa-chevron-down");
});
$("#menuAgencias").on("click", function (e) {
  $("#iconAgencias").toggleClass("fa-chevron-right , fa-chevron-down");
});
$("#menuTransacoes").on("click", function (e) {
  $("#iconTransacoes").toggleClass("fa-chevron-right , fa-chevron-down");
});
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
