function guess() {
  var a = document.getElementById("canhThu1").value * 1;
  var b = document.getElementById("canhThu2").value * 1;
  var c = document.getElementById("canhThu3").value * 1;

  var result;

  if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
      result = "Đây là tam giác đều";
    } else if (a == b || b == c || a == c) {
      result = "Đây là tam giác cân";
    } else if (
      Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ||
      Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2) ||
      Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2)
    ) {
      result = "Đây là tam giác vuông";
    } else {
      result = "Đây là tam giác thường";
    }
  }
  document.getElementById("result").innerHTML = result;
}
