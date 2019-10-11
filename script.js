const removeBuynow = document.getElementById("submit.buy-now")

removeBuynow.parentNode.removeChild(removeBuynow)

var phrases = ["Are you sure you need this?",
               "Wanna think about this?",
               "Perhaps add this to your wishlist?"
]

var counter = 2;
var random = Math.floor(Math.random()*phrases.length)

function mouseoverEvent (){
  if (counter > 0){
    Sweetalert2.fire({
      animation: false,
      position: 'top-end',
      type: 'warning',
      title: phrases[random],
      showConfirmButton: true,
      timer: 3000,
      imageUrl: "https://i.imgur.com/EHuPqnT.png",
      imageWidth: 300,
      imageHeight: 100,
      imageAlt: 'Budget image'
    })
    counter--;
    random++
    if (random > 1){
      random = 0
    }
  }
}

document.getElementById("submit.add-to-cart").addEventListener("mouseover", mouseoverEvent);
