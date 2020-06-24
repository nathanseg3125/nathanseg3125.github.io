function validatePhone(telephone) {
  var a = document.getElementById(telephone).value;
  var filter = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  $("#telephone").on("change", function () {
    if (!validatePhone("telephone")) {
      alert("Re-check inputted phone number. ");
      $("#telephone").val("(xxxx)");
      $("#telephone").addClass("error");
    } else {
      $("#telephone").removeClass("error");
    }
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function validateCredit(creditcard) {
  var a = document.getElementById(creditcard).value;
  if (isNaN(a)) {
    return false;
  } else {
    return true;
  }
}

$(document).ready(function () {
  $("#creditcard").on("change", function () {
    if (!validateCredit("creditcard")) {
      alert("Re-check inputted phone number. ");
      $("#creditcard").val("(xxxx)");
      $("#creditcard").addClass("error");
    } else {
      $("#creditcard").removeClass("error");
    }
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
