//explicado mejor en readme
document.addEventListener("DOMContentLoaded", () => {
    function b64_to_utf8(str) {
      return decodeURIComponent(escape(window.atob(str)));
    }
    Array.from(document.querySelectorAll(".ofuscar")).forEach((element) => {
      element.addEventListener("click", () => {
        window.location.href = b64_to_utf8(element.dataset.estonoesunaurl);
      });
    });
  });