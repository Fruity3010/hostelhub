let viewinghostels = JSON.parse(localStorage.getItem("viewedhostel"));
console.log(viewinghostels);
let caro1 = document.getElementById("caro1");
let caro2 = document.getElementById("caro2");
caro1.src = viewinghostels.sourceImageSrc;
caro2.src = viewinghostels.sourceImageSrc;
let contentsdisplay = document.getElementById("contents");
contentsdisplay.innerHTML = `
<div class="colour py-5 font px-5">
<p class="text-danger">please verify the hostel details below and book an inspection date</p>
<h1 id="town" class="text-light">Hostel Details</h1>
<br>
<h6 class="text-light">${viewinghostels.hostname}</h6>

<h6 class="text-light">${viewinghostels.agent2}</h6>

<h6  class="text-light">${viewinghostels.city}</h6>
<h6 class="text-light">${viewinghostels.hostdetails}</h6>
<br>
<br>
<h3 class="text-light">Utilities</h3>
<div class= "flexer ">
<h5 class="size"><i class="fa-solid fa-broom " style="color: #ffff;"></i> ${viewinghostels.cleaner2}</h5>
<h5 class="size"><i class="fa-solid fa-jug-detergent" style="color:#ffff;"></i> ${viewinghostels.laundary2}</h5>
<h5 class="size"><i class="fa-solid fa-bolt-lightning " style="color: #ffff;"></i> ${viewinghostels.solar2}</h5>
</div>
<h3 class="text-light">${viewinghostels.price}</h3>
<br>
<br>
<button onclick="payment()" class ="py-3 px-3 btn btn-success"> Pay </button>
</div>

`;

let pricer = viewinghostels.price;
const newString = viewinghostels.price.slice(6);
console.log(newString);
document.getElementById("amount").value = "₦" + newString

function payment() {
    document.getElementById("block").style.display = "block"
    document.getElementById("town").scrollIntoView();
    document.body.style.overflow = 'hidden';
}

function colser() {
    document.getElementById("block").style.display = "none"
    document.body.style.overflow = 'auto';
}





 
  
   
      
      
        
            const paymentForm = document.getElementById('paymentForm');
            paymentForm.addEventListener("submit", payWithPaystack, false);
            function payWithPaystack(e) {
              e.preventDefault();
            
              let handler = PaystackPop.setup({
                key: 'pk_test_53099b386ea9bf412acd10e53db456316dbc9ccf', // Replace with your public key
                email: document.getElementById("email-address").value,
                amount: newString * 100,
                ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                // label: "Optional string that replaces customer email"
                onClose: function(){
                  alert('Window closed.');
                },
                callback: function(response){
                  let message = 'Payment complete! Reference: ' + response.reference;
                  alert(message);
                }
              });
            
              handler.openIframe();
            }