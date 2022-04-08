/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();
app.loadButton.onclick = app.loadFilter(app.penumpang.value);
console.log(app.loadButton);
console.log(app.penumpang.value);
const btn_load = app.loadButton;
btn_load.addEventListener ('click', function(e) {
    e.preventDefault();
    console.log(app.penumpang);
    app.loadFilter(app.penumpang).then(app.run);
})
// app.init().then(app.run);
