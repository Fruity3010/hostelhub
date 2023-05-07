
const arraystring = localStorage.getItem('myArray');
const storedArray = JSON.parse(arraystring);
storedArray.reverse();
console.log(storedArray);

let index = -1
let html = '';
storedArray.forEach((item) => {
  index++
  html += ` 
      <div id="she" onclick="puller(${index})">
      <div class="hostel-inner">
        <img class="hostel-image" src="${item.sourceImageSrc}" alt="Product Image">
       <p class="hostel-absolute1">${item.hostname}</p>
       <div class="contentshost">
       <p class="hostel-absolute2"> ${item.price}</p>
       <p> ${item.agent2}</p>
       <p> ${item.city}</p>
       <p> ${item.hostdetails}</p>
       </div>
       <h6 class="ms-3">Utilities</h6>
       <div class="flexer colour">
       <h6><i class="fa-solid fa-broom " style="color: #ffff;"></i> ${item.cleaner2}</h6>
       <h6><i class="fa-solid fa-jug-detergent" style="color:#ffff;"></i> ${item.laundary2}</h6>
       <h6><i class="fa-solid fa-bolt-lightning " style="color: #ffff;"></i> ${item.solar2}</h6>
       </div>
       </div>
       </div>`;
  document.getElementById("hostel-display").innerHTML = html
});



  function closee() {
    document.getElementById("holder").style.display = "none"
    document.getElementById("previewdis").innerHTML =" ";
    location.reload()
    // document.getElementById("previeww").disabled = false;

}
function puller(index) {
  console.log(storedArray[index]);
  
  console.log(storedArray[index]);
  localStorage.setItem("viewedhostel",JSON.stringify(storedArray[index]));
  window.location.href = "payment.html"
    
  
       
  };
  
function poster() {
    document.getElementById("holder").style.display = "block"
}

function preview() {
  const agent =  document.getElementById("name").value
    const imagesInput1 = document.getElementById("image");
    const imagesInput2 = document.getElementById("imagee");
    const hostelname = document.getElementById("hname").value;
    const city = document.getElementById("town").value;
    const details = document.getElementById("hdetail").value;
    const price = document.getElementById("price").value;
    const Solar = document.getElementById("solar");
    const laundary = document.getElementById("laundary");
    const cleaner = document.getElementById("cleaner");

    const imageInput = document.getElementById('imageInput');
    
    if (imagesInput1.files && imagesInput1.files[0]) {
      const file = imagesInput1.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const dataUrl = event.target.result;
       const image = dataUrl;
      
      
        
    // images.push({ image: image }); 
    const post = {
        hostelname,
        city,
        price,
        Solar:Solar.checked,
        Laundary:laundary.checked,
        Cleaner:cleaner.checked,
        image,
       
        details
    };
    console.log(image);
let displayer = document.getElementById("previewdis");

displayer.innerHTML += `
<div class="display">

<img id="image1" class="image-pre" src ="${post.image}">

<div class=" flexer">
<p id="hostname">Hostel:${post.hostelname}</p>
<p id="hostdetails">Details:${post.details}</p>
</div>
<div class=" flexer">
<p id="city">Town:${post.city}</p>
<p id="price2">Price:${post.price}</p>
</div>
<h5>Utilities</h5>
<div class=" size flexer">
<p id="solar2">Solar:${post.Solar},</p>
<p id="laundary2">laundary:${post.Laundary},</p>
<p id="cleaner2">Cleaner:${post.Cleaner},</p

</div>
<p id="agent2">Agent:${agent}</p>
</div>
<button class="btn btn-success" onclick="submit()">Submit</button>

`

 document.getElementById("previeww").disabled = true; };

      reader.readAsDataURL(file); 
    }
    
}






const finder = localStorage.getItem("currentUserName")
console.log(finder);
let find = JSON.parse(localStorage.getItem("users"))
const name = find.find((u) => finder === u.name);
console.log(name);
document.getElementById("name").value += name.name;
document.getElementById("email").value += name.email;


if (name.checkbox != true) {
    document.getElementById("Realator").value += "Customer";

}
else {
    document.getElementById("Realator").value += "Realator";
    document.getElementById("real").style.display = "block";
}

function submit() {
let images1 = document.getElementById("image1");
const sourceImageSrc = images1.getAttribute('src');
 
let hostname = document.getElementById("hostname").innerHTML;
let hostdetails = document.getElementById("hostdetails").innerHTML;
let city = document.getElementById("city").innerHTML;
let prize = document.getElementById("price2").innerHTML;
let solar2 = document.getElementById("solar2").innerHTML;
let laundary2 = document.getElementById("laundary2").innerHTML;
let cleaner2 = document.getElementById("cleaner2").innerHTML;
let agent2 = document.getElementById("agent2").innerHTML;
let price = prize;



let posted = {
    sourceImageSrc,
    hostname,
    hostdetails,
    city,
    price,
    solar2,
    laundary2,
    cleaner2,
    agent2,
  

};

const arrayString2 = localStorage.getItem('myArray');
const myArray = JSON.parse(arrayString2) || []; 
const Arraystring = JSON.parse(arrayString2);
myArray.push(posted);
const newArrayString = JSON.stringify(myArray);
localStorage.setItem('myArray', newArrayString);

   console.log(localStorage);
   alert("Post Successfully published");
   location.reload()
}
  