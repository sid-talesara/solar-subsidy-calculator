// // Variable declarations

// // logic

// // --------------------------------------------------------------------------------------------
// // alternative method by using switch case
// // switch (rangevalue) {
// //   case 1:
// //     subsidery = 1 * 14588;
// //     break;
// //   case 2:
// //     subsidery = 2 * 14588;
// //     break;
// //   case 3:
// //     subsidery = 3 * 14588;
// //     break;
// //   case 4:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 1 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 5:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 2 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 6:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 3 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 7:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 4 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 8:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 5 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 9:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 6 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 10:
// //     subsidery_first = 3 * 14588;
// //     subsidery_second = 7 * 7294;
// //     final_subsidery = subsidery_first + subsidery_second;
// //     break;
// //   case 11:
// //     final_subsidery = 94822;
// //     break;
// //   default:
// //   // code block
// // }
// let rangevalue;
// let new_rangevalue;

// // VARIABLES
// // ----------------------------------------------------------
// rangevalue = document.getElementById("kw");
// let solarCapacity = document.querySelector(".solar-capacity");
// // INIT BILL
// // ----------------------------------------------------------

// $(window).on("DOMContentLoaded", function () {
//   if (rangevalue <= 3) {
//     subsidery = rangevalue * 14588;
//   } else if (rangevalue > 3 && rangevalue <= 10) {
//     new_rangevalue = rangevalue - 3;
//     subsidery = new_rangevalue * 7294 + 43764;
//   } else if (rangevalue > 10) {
//     subsidery = 94822;
//   }
// });

// // RANGE FUNCTION
// // ----------------------------------------------------------

// rangevalue.on("change", function () {
//   solarCapacity.text(rangevalue.val() + "%");
//   calculatorResult.text(result.toFixed(2) + "$");
// });

var output = document.getElementById("solar-capacity-value");
var subsidyOutput = document.getElementById("overall-result");
var slider = (document.getElementById("solar-capacity-slider").oninput =
  function () {
    // var value = (this.value-this.min)/(this.max-this.min)*100;

    if (this.value <= 10) {
      output.innerHTML = "⚡" + this.value + "kW⚡";
    } else {
      output.innerHTML = "⚡ 10+ kW ⚡";
    }

    var rangevalue = this.value;
    if (rangevalue <= 3) {
      subsidery = rangevalue * 14588;
    } else if (rangevalue > 3 && rangevalue <= 10) {
      new_rangevalue = rangevalue - 3;
      subsidery = new_rangevalue * 7294 + 43764;
    } else if (rangevalue > 10) {
      subsidery = 94822;
    }
    subsidyOutput.innerHTML = subsidery;
  });
