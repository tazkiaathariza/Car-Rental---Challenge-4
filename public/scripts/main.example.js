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
app.loadButton.onclick = app.loadFilter(app.jumlahPenumpang.value);
console.log(app.loadButton);
console.log(app.jumlahPenumpang.value);
const btn_load = app.loadButton;
btn_load.addEventListener ('click', function(e) {
    e.preventDefault();
    console.log(app.jumlahPenumpang.value);
    app.loadFilter(app.jumlahPenumpang.value).then(app.run);
})
const btn_clear = app.clearButton;
btn_clear.addEventListener ('click', function(){
    location.reload()
})
// app.init().then(app.run);
