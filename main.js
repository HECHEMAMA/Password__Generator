const alph = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz,.;:?¿¡!'Çç@$%&/º-_*0123456789";

function password_generator(length) {
    let password = ""
    for (let i = 0; i <= length; i++) {
        password += alph.charAt(Math.floor(Math.random() * alph.length))
    }
    return password;
}

// console.log(password_generator())

const range__length = document.getElementById("length")
const value__range = document.getElementById("value")
const generate = document.getElementById("generate")
const password__generate = document.querySelector("#password")


value__range.innerHTML = range__length.value;

range__length.oninput = function () {
    value__range.innerHTML = this.value
}

range__length.addEventListener("mousemove", function () {
    var x = range__length.value;
    var color = 'linear-gradient(90deg, rgba(135, 255, 135, 0.904)' + x + '%, rgb(244, 244, 244)' + ((.07 * x) * 50) + '%)';
    range__length.style.background = color;
})

generate.addEventListener("click", function () {
    let clave = password_generator(range__length.value);
    // console.log(clave)
    password__generate.value = clave;
})