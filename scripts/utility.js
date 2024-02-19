function scrollBuyTicketsBtn(){
    const buyTicketBtn = document.getElementById("select-seat");
    buyTicketBtn.scrollIntoView();
}
// seat selected and unselected
// function seatSelected(elementId){
//     const element = document.getElementById(elementId);
//     // element.classList.add('bg-[#1DD100]');
//     element.classList.add('bg-lime-500');
// }

// function deselectSeat(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-lime-500');
//   }

// another way............................
var selectedSeats = [];

    function seatSelected(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('bg-lime-500');
      selectedSeats.push(elementId);
    }

    function deselectSeat(elementId) {
      const element = document.getElementById(elementId);
      element.classList.remove('bg-lime-500');
      selectedSeats = selectedSeats.filter(seat => seat !== elementId);
      document.getElementById('errorMessage').style.display = 'none';
    }
// seat count and left
    const allSelectedSeat = document.getElementsByClassName("kbd");
    let seat = 0;
    let totalSeat = 40;
    let totalPrice = 0;
    for(const selectedSeat of allSelectedSeat){
        selectedSeat.addEventListener("click",function(){
            seat = seat + 1;
            totalSeat = totalSeat - 1;
            totalPrice = totalPrice + 550;
            document.getElementById("selected-seat").innerText = seat;
            document.getElementById("selected-seat-left").innerText = totalSeat;
            document.getElementById("total-price").innerText = totalPrice;
        });
    }

    // next button
     // Get the input fields and the NEXT button
     const nameInput = document.getElementById('name');
     const phoneInput = document.getElementById('phone');
     const nextBtn = document.getElementById('nextBtn');
 
     // Add event listeners to input fields
     nameInput.addEventListener('input', checkInputs);
     phoneInput.addEventListener('input', checkInputs);
 
     // Function to check if both input fields are filled
     function checkInputs() {
       if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '') {
         nextBtn.removeAttribute('disabled');
       } else {
         nextBtn.setAttribute('disabled', 'disabled');
       }
     }
 
    //  function showSuccessModal() {
    //     const modal = document.getElementById('successModal');
    //     modal.style.display = 'block';
    // }


    function hideElementById(elementID){
        const element = document.getElementById(elementID);
        element.classList.add('hidden');
    }
    function showElementById(elementID){
        const element = document.getElementById(elementID);
        element.classList.remove('hidden');
    }


   