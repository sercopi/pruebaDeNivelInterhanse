//realizamos la animación hasta el elemento formulario,
//menos la altura del header, que es sticky
$(document).ready(function () {
  document
    .querySelector("#contact-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $("#contact-form").offset().top - $("header").height(),
        },
        2000
      );
    });
});
