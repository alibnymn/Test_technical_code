var http = require("http");

var port = 8080;
http
  .createServer(function (req, res) {
    console.log("aplikasi berjalan pada port : " + port);
    res.writeHead(200, { "contennt-type": "text/htm" });
    res.end("test technical");
  })
  .listen(port);
//Frontend validation
function validateInput(input) {
  return !isNaN(input) && input !== "";
}

//Backend validation
const validateInput = (input) => {
  return !isNaN(input) && input !== "";
};

$("#generateSegitiga").clik(function () {
  var input = $("#inputNumber").val();
  if (validateInput(input)) {
    //
    $.ajax({
      url: "/generateSegitiga",
      type: "POST",
      data: { input: input },
      success: function (result) {
        $(result).text(result);
      },
    });
  } else {
    alert("invalid input");
  }
});
$("#generateGanjil").click(function () {
  var input = $("#inputNumber").val();
  if (validateInput(input)) {
    //
    $.ajax({
      url: "/generateGanjil",
      type: "POST",
      data: { input: input },
      success: function (result) {
        $(result).text(result);
      },
    });
  } else {
    alert("invailid ");
  }
});
