function contieneSoloLetras(texto) {
    // Expresión Regular para letras, tildes, ñ y espacios
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/;
    return patron.test(texto);
}


function validarFormulario (){
const edadUsuario= document.getElementById("edad").value.trim();
const nombreUsuario = document.getElementById("nombre").value.trim();

    // 2. Validar que no esté vacío y contenga solo letras
if (nombreUsuario === "") {
        alert("El nombre no puede estar vacío. Intenta de nuevo.");
        console.error ("Error: El nombre no puede estar vacio.")
        return false
    } else if (!contieneSoloLetras(nombreUsuario)) {
        alert("El nombre solo puede contener letras separadas por espacios. Intenta de nuevo.");
        console.error ("Error: El nombre solo puede contener letras separadas por espacios")
        return false
    } else {

    }


if (isNaN(edadUsuario)) {
    console.error("Error: Por favor, ingresa una edad valida en números.");
        alert("La edad ingresada no es un número válido. Por favor, intenta de nuevo.");
        return false
    } else if (edadUsuario === "") { 
        console.error("Error: Por favor, ingresa una edad valida en números.");
        alert("La edad no puede estar vacía. Intenta de nuevo.");
        return false
    } else if (edadUsuario >= 18) {
        // Si la edad es 18 o mayor
        alert(`Hola ${nombreUsuario}, Eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programación!`);
        return true
    } else if (edadUsuario >= 0 && edadUsuario < 18) {
        // Si la edad es menor de 18 pero un número válido (mayor o igual a 0)
        alert(`Hola ${nombreUsuario}, Eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`);
        return true
    } else {
        // Si la edad es un número negativo (consideramos esto inválido para una edad)
        console.error("Error: La edad ingresada no es valida.")
        alert("La edad ingresada no es válida. Por favor, ingresa una edad positiva.");
        return false
    }

    
}





