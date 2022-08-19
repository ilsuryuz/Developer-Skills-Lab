// console.log("it works")

$("button").on("click", function () {
  let $input = $("#input").value;
    $("#list").append(`<li><button id="delete-btn>">X</button>${$("#input").val()}<li>`);
    console.log(this);
  })