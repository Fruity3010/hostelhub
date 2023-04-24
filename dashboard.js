const hostels = [
    { imageSrc: "test1.jpg", price: 19.99 , name:"gloryville", details:"2 bedroom",space:"8"},
    { imageSrc: "test 2.jpg", price: 29.99 ,name:"Lords Marvelous",details:"1 bedroom",space:"8"},
    { imageSrc: "test 3.jpg", price: 39.99 , name:"Eagle line",details:"3 bedroom",space:"8"},
    { imageSrc: "test1.jpg", price: 19.99 , name:"gloryville", details:"2 bedroom",space:"8"},
    { imageSrc: "test 2.jpg", price: 29.99 ,name:"Lords Marvelous",details:"1 bedroom",space:"8"},
    { imageSrc: "test 3.jpg", price: 39.99 , name:"Eagle line",details:"3 bedroom",space:"8"},
    { imageSrc: "test1.jpg", price: 19.99 , name:"gloryville", details:"2 bedroom",space:"8"},
    { imageSrc: "test 2.jpg", price: 29.99 ,name:"Lords Marvelous",details:"1 bedroom",space:"8"},
    { imageSrc: "test 3.jpg", price: 39.99 , name:"Eagle line",details:"3 bedroom",space:"8"},
    { imageSrc: "test1.jpg", price: 19.99 , name:"gloryville", details:"2 bedroom,",space:"8"},
    { imageSrc: "test 2.jpg", price: 29.99 ,name:"Lords Marvelous",details:"1 bedroom",space:"8"},
    { imageSrc: "test 3.jpg", price: 39.99 , name:"Eagle line",details:"3 bedroom",space:"8"},
  ];
   let hostelContainer = document.getElementById("hostel-display");
for (let i = 0; i < hostels.length; i++) {
  hostelContainer.innerHTML += `
    <div onclick="hosteldtls(index)" class="hostel-inner">
    
      <img class="hostel-image" src="${hostels[i].imageSrc}" alt="Product Image">
      <p class="hostel-absolute1">Hostel: ${hostels[i].name}</p>
      <p class="hostel-absolute2">Price:₦ ${hostels[i].price}</p>
      <p class="hostel-details">Details: ${hostels[i].details}</p>
    <p>Hostel Rooms:  ${hostels[i].space}</p>
    </div>
  `;
  console.log(localStorage);
}
// function hosteldtls() {
//     let detailsContainer = document.getElementById("second-display")

//     let clickedObject = hostels[index];
//         let detailsString = `
//           <p>Name: ${clickedObject.name}</p>
//           <p>Price: ₦ ${clickedObject.price}</p>
//           <p>Details: ${clickedObject.details}</p>
//           <p>Rooms: ${clickedObject.space}</p>
//         `;
//         detailsContainer.innerHTML = detailsString;
//       }

    
    






