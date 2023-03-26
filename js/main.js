$(function () {
  $("#form-total").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    autoFocus: true,
    transitionEffectSpeed: 500,
    titleTemplate: '<span class="title">#title#</span>',
    labels: {
      previous: "Wstecz",
      next: "Dalej",
      finish: "Potwierdzam rezerwację",
      current: "",
    },
    onStepChanging: function (event, currentIndex, newIndex) {
      var fullname = $("#first_name").val() + " " + $("#last_name").val();
      var phone = $("#phone").val();
      var email = $("#email").val();
      var ileosob = $("#ileosob").val();
      var date = $("#datepicker").val();
        var time = $("#time").val();
        var pay = $("#payment").val();
        var kwota = $("#kwota").val();
        
      

      $("#fullname-val").text(fullname);
      $("#phone-val").text(phone);
      $("#email-val").text(email);
      $("#ilosob-val").text(ileosob);
      $("#date-val").text(date);
        $("#time-val").text(time);
        $("#payment-val").text(pay);
        $("#kwota-val").text(ileosob * 25 + " zł");

      return true;
    },

    // ---------- datepicker -------------------//
  });
  $("#datepicker").datepicker({
    buttonText: "",
    changeMonth: true,
    changeYear: true,
  });
});





// ---------- wybór osób -------------------//

const selectElement1 = document.querySelector(".status");
selectElement1.addEventListener("change", (event) => {
  const result = document.querySelector(".aaa");
  const classToChange = document.querySelector("." + selectElement1.value);
  console.log(selectElement1.value);
  console.log(classToChange);

  classToChange.classList.replace("aaa", "red");
  classToChange.classList.replace("bbb", "red");
  classToChange.classList.replace("ccc", "red");
});
