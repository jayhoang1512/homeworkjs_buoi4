function changes() {
  var soNguyen = document.getElementById("soNguyen").value * 1;

  switch (soNguyen) {
    case 1:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 1");
      break;
    case 2:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 2");
      break;

    case 3:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 3");
      break;

    case 4:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 4");
      break;

    case 5:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 5");
      break;

    case 6:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 6");
      break;

    case 7:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 7");
      break;

    case 8:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 8");
      break;

    case 9:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 9");
      break;

    case 10:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 10");
      break;

    case 11:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 11");
      break;

    case 12:
      var result = (document.getElementById("result").innerHTML =
        "Bạn chọn tháng 12");
      break;
    default:
      var result = (document.getElementById("result").innerHTML =
        "Bạn hãy chọn lại 1 trong 12 tháng.");
  }
}
