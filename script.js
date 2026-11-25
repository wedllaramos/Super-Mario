let formulario = document.querySelector(".form-contact")
    let mascara = document.querySelector(".mascara-form")

    function abrirFormulario() {
        formulario.style.left = "500px"
        mascara.style.visibility = "visible"
    }

    function fecharFormulario() {
        formulario.style.left = "-380px"
        mascara.style.visibility = "hidden"
    }