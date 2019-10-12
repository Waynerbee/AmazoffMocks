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
      showConfirmButton: false,
      timer: 3000,
      imageUrl: "https://i.ibb.co/4my0R7M/Confirm.png",
      imageAlt: 'Budget image'
    }).then((result) => {
      Sweetalert2.fire({
        animation: true,
        showConfirmButton: false,
        timer: 8000,
        imageUrl: "https://i.ibb.co/b7rzY3b/Screen-Shot-2019-10-12-at-2-08-58-PM.png",
        imageAlt: 'Budget image'
      })
    })

    counter--;
    random++
    if (random > 1){
      random = 0
    }
  }
}

document.getElementById("submit.add-to-cart").addEventListener("mouseover", mouseoverEvent);
