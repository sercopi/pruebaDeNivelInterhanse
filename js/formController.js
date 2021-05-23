 //ésta es la función que mockea el envío
 function sendMockForm() {
    const random = Math.floor(Math.random() * 2); //devuelve 1 (boolean true) (éxito) o 0 (boolean false) (fallo)
    document.querySelector(".form-loading").style.display = "none";
    document.querySelector("form").style.display = "flex";
    if (random) {
      document.querySelector(".form-error").style.display = "none";
      document.querySelector(".form-success").style.display = "block";
      document.querySelector(".form-submit").disabled = true;
      return true;
    }
    setError("error con el servidor");
  }
  //ésta sería la función que usaríamos
  //si dispusiéramos de un servidor al que enviar los datos
  function sendFormRequest(form) {
    form.style.display = "none";
    const loading = document.querySelector(".form-loading");
    loading.style.display = "block";
    fetch("dummyURL", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((response) => {
        //código de éxito
        formContainer.style.display = "block";
        loading.style.display = "none";
      })
      .catch(() => {
        //código para el error
        formContainer.style.display = "block";
        loading.style.display = "none";
      });
  }
  function setError(errorText) {
    const errorElement = document.querySelector(".form-error");
    errorElement.style.display = "block";
    const successElement = document.querySelector(".form-success");
    successElement.style.display = "none";
    errorElement.innerHTML = errorText;
  }

  function validateForm(event) {
    //objeto global de la API de captcha de google,
    //guarda un token de respuesta si google ha determinado que
    //el usuario no es un robot.
    //Sin token (sin haber pulsado el boton),
    //no se puede enviar el formulario.
    event.preventDefault();

    if (grecaptcha.getResponse().length === 0) {
      setError("confirme que es humano");
      return false;
    }
    const form = new FormData(document.querySelector("form"));
    //validación de campos
    const emailRegexp = /\S+@\S+\.\S+/;
    const phoneRegexp = /^\d{9}$/;
    if (!form.get("name")) {
      setError("rellene el campo de nombre");
      return false;
    }
    if (!form.get("email") || !emailRegexp.test(form.get("email"))) {
      setError("introduzca un email válido");
      return false;
    }
    //envío del formulario con servidor
    //sendFormRequest(form);
    //función para mockear el envio:
    document.querySelector(".form-loading").style.display = "flex";
    document.querySelector("form").style.display = "none";
    setTimeout(() => sendMockForm(), 2000);
  }

  function onloadForm() {
    const element = document.querySelector(".form-submit");
    element.onclick = validateForm;
  }
  document.addEventListener("DOMContentLoaded", () => onloadForm());