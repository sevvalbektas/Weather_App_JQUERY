const formJS = document.querySelectorAll("form")[0];

// const formJquery = jQuery("form").eq(0); 
// const formJquery = jQuery("form")[0]; 
//* ilk form ile ilgilenmek için 0. indeks alındı
//* ama jquery objesi olarak değil js objesi olarak ulaşırız. Bu sebeple indisleme ile yapamayız. get(index) veya eq(index) kullanarak yapabiliriz.
//* jQERY === $
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);


// console.log(formJS);
// console.log(formJquery);
// console.log(inputJQ);
// console.log(msgJQ);
// console.log(listJQ);

//* get(index) ==> toArray(get()), eq(index) 

//* load VS DOMContentLoaded
//* DOMContentLoaded dom tree oluşur ve sayfanın render edildiği anlamına gelir

//* load VS DOMContentLoaded
//* DOMContentLoaded ==> means page rendered, DOM is ready
//* window load ==> (all content (e.g. images, styles etc) also loaded)

//* window.onload = () => {}  ===> JS
//* addEventListener ===> on

$(window).on("load", () => {
    console.log("window.load");
});

//* document.addEventListener("DOMContentLoaded", ()=>{})  ===> JS
// $(document).on(() => {
//     console.log("DOMContentLoaded");  //* window.load'dan önce çalışır.
// });
$(document).ready(() => {
    console.log("DOMContentLoaded");  //* window.load'dan önce çalışır.
});

// formJquery.on("submit", (e) => {
//     e.preventDefault();
//     getWeatherDataFromApi();
// });

formJquery.submit((e) => {
    e.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
    console.log("AJAX Func. is called");
}

//* XMLHTTPREQUEST(xhr) vs. fetch() vs. axios vs. $.ajax