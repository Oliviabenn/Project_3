// //how to apply this to one button?
// window.addEventListener("beforeunload", function (e) {
//     var confirmationMessage = 'It looks like you have been editing something. '
//                             + 'If you leave before saving, your changes will be lost.';
//
//     (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//     return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
// });

//randomly cycle through images
window.onload = choosePic;

var theAd = 0;
var adImages = new Array("https://ibb.co/cT86yNq","https://ibb.co/TwPKcJq", "https://ibb.co/n7Hb1tD", "https://ibb.co/jrkyy7H", "https://ibb.co/v15tSsF");

function choosePic() {
     theAd = Math.floor(Math.random() * adImages.length);
     document.getElementById("adBanner").src = adImages[theAd];

     rotate();
}

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 3 * 1000);
}

// //scroll by 200px when h1 is onclick
// function scrollWin() {
//   window.scrollBy(0, 600);//changed 200px to 600px
// }
