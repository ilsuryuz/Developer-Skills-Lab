// adds the skill user typed
$("#addSkill").on("click", function () {
  $("ul").append(`<li><button class="inner" id="delete-btn">X</button>${$("input").val()}</li>`);
  $("input").val("");
});
// added button removes skill when pressed
$("ul").on("click", "#delete-btn", function () {
  $(this).closest("li").remove();
})
