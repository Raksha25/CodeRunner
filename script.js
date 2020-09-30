
$(".toggle-btn").click(function () {
  $(this).toggleClass("active");
  if ($(this).attr("id") == "output") {
    $("#outputDiv").toggle();
    $("#output-txt").toggle();
  } else {
    $("#" + $(this).attr("id") + "TA").toggle();
  }
});
$();
$("#runBtn").click(function () {
  var addCode =
    "<html><head><style type='text/css'>" +
    $("#cssTA").val() +
    "</style></head><body>" +
    $("#htmlTA").val() +
    "</body></html>";

  $("iframe").contents().find("html").html(addCode);
  document.getElementById("outputDiv").contentWindow.eval($("#jsTA").val());
});
// Added later..//
//************************************************//
$("#customSwitch1").change(function(){
  $(".panelH").toggleClass("dark-mode-panel");
  $(".panel").toggleClass("dark-mode-panel");
  $(".extra-cover").toggleClass("dark-mode-panel");
  $(".panelH").toggleClass("text-colors");
  $(".panel").toggleClass("text-colors");
  $(".extra-cover").toggleClass("text-colors");
});
//************************************************//
if ($("#htmlTA").is(":visible")) {
  $("#html").addClass("active");
}
