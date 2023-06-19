const hostels2 = [];
const arrayString2 = JSON.stringify(hostels2);
localStorage.setItem('ActiveHostel', arrayString2)



const arraystring1 = localStorage.getItem('myArray');
const hostels1 = JSON.parse(arraystring1);

let i = -1
let html1 = '';
hostels1.forEach((item) => {
  i++
  html1 += ` 
      <div id="she" onclick="puller(${i})">
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
       let hostelContainer = document.getElementById("hostel-display");
       hostelContainer.innerHTML = html1
});


const arraystring2 = localStorage.getItem('myArray');
const hostels3 = JSON.parse(arraystring1);
hostels3.sort(() => Math.random() - 0.5);

let e = -1
let html2 = '';
hostels3.forEach((item) => {
  e++
  html2 += ` 
      <div id="she" onclick="puller(${e})">
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
      let hostelContainer2 = document.getElementById("hostel-display2");
  hostelContainer2.innerHTML += html2
});


  


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
      <div class="hostel-inner ">
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
  document.getElementById("work").innerHTML = html
});

function puller(index) {
console.log(storedArray[index]);

console.log(storedArray[index]);
localStorage.setItem("viewedhostel",JSON.stringify(storedArray[index]));
window.location.href = "payment.html"
  

     
};



