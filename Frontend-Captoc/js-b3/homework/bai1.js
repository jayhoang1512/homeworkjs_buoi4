// function btn() {
//   var so1 = document.getElementById("so1").value * 1;
//   var so2 = document.getElementById("so2").value * 1;
//   var so3 = document.getElementById("so3").value * 1;

//   if (so1 > so2 && so2 > so3) {
//     var result = (document.getElementById("result").innerHTML =
//       so3 + " , " + so2 + " , " + so1);
//     console.log(result);
//   } else if (so1 > so3 && so3 > so2) {
//     var result = (document.getElementById("result").innerHTML =
//       so2 + " , " + so3 + " , " + so1);
//     console.log(result);
//   } else if (so2 > so1 && so1 > so3) {
//     var result = (document.getElementById("result").innerHTML =
//       so3 + " , " + so1 + " , " + so2);
//     console.log(result);
//   } else if (so2 > so3 && so3 > so1) {
//     var result = (document.getElementById("result").innerHTML =
//       so1 + " , " + so3 + " , " + so2);
//     console.log(result);
//   } else if (so3 > so1 && so1 > so2) {
//     var result = (document.getElementById("result").innerHTML =
//       so2 + " , " + so1 + " , " + so3);
//     console.log(result);
//   } else if (so3 > so2 && so2 > so1) {
//     var result = (document.getElementById("result").innerHTML =
//       so1 + " , " + so2 + " , " + so3);
//     console.log(result);
//   } else {
//     var warn = (document.getElementById("result").innerHTML =
//       "Yêu cầu nhập lại..");
//     console.log(result);
//   }
// }

// function btn() {
//   var so1 = document.getElementById("so1").value * 1;
//   var so2 = document.getElementById("so2").value * 1;
//   var so3 = document.getElementById("so3").value * 1;

//   var soLonNhat;

//   if (so1 > so2) {
//     document.getElementById("vitri1").innerText = so2;
//     document.getElementById("vitri2").innerText = so1;

//     if (so1 > so3) {
//       soLonNhat = so1;
//     } else {
//       soLonNhat = so3;
//     }
//   } else {
//     document.getElementById("vitri1").innerText = so2;
//     document.getElementById("vitri2").innerText = so1;

//     soLonNhat = so2;
//   }

//   document.getElementById("vitri3").innerText = soLonNhat;
// }
