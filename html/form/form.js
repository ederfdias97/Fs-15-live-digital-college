const reg = new RegExp("\\D", "g")
document
    .getElementById("user_cpf")
    .addEventListener("input", function(event) {
        this.value = event.value.replace( reg,"") .slice(0,11)
    })