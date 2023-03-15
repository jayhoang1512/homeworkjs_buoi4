// function evenODD() {
//   var s1 = document.getElementById("s1").value * 1;
//   var s2 = document.getElementById("s2").value * 1;
//   var s3 = document.getElementById("s3").value * 1;
//   console.log(s1, s2, s3);
//   var result;

//   if (s1 % 2 == 0) {
//     result = "Có 1 số chẵn và 2 số lẻ";
//     if (s2 % 2 == 0) {
//       result = "Có 2 số chẵn và 1 số lẻ";
//       if (s3 % 2 == 0) {
//         result = "Có 3 số chẵn, khg có số lẻ";
//       }
//     }
//   } else if (s2 % 2 == 0) {
//     result = "Có 1 số chẵn và 2 số lẻ";
//     if (s3 % 2 == 0) {
//       result = "Có 2 số chẵn và 1 số lẻ";
//     }
//   } else if (s3 % 2 == 0) {
//     result = "Có 1 số chẵn và 2 số lẻ";
//   } else {
//     result = "3 số lẻ hoặc không hợp lệ vui lòng nhập lại..";
//   }

//   document.getElementById("result").innerHTML = result;
// }

function evenODD() {
  var s1 = document.getElementById("s1").value * 1;
  var s2 = document.getElementById("s2").value * 1;
  var s3 = document.getElementById("s3").value * 1;

  var even = 0;

  if (s1 % 2 == 0) {
    even++;
  }
  if (s2 % 2 == 0) {
    even++;
  }
  if (s3 % 2 == 0) {
    even++;
  }

  document.getElementById("result").innerHTML = `có ${even} số chẵn và ${
    3 - even
  } là số lẻ`;
}
