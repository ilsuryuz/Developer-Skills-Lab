// adds the skill user typed
$("#add").on("click", function () {
  $("ul").append(`<li><button id="delete-btn">X</button>${$("input").val()}</li>`);
  $("input").val("");
});
// added button removes skill when pressed
$("ul").on("click", "#delete-btn", function () {
  $(this).closest("li").remove();
})
