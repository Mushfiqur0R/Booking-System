// fill color function..
// function play(id){
//     // seatSelected(id);
//     const element = document.getElementById(id);
//       if (element.classList.contains('bg-lime-500')) {
//         // If already selected, deselect it
//         deselectSeat(id);
//       } else {
//         // If not selected, select it
//         seatSelected(id);
//       }
// }

// another way..............
function play(id){
    const element = document.getElementById(id);
    if (element.classList.contains('bg-lime-500')) {
      // If already selected, deselect it
      deselectSeat(id);
    } else {
      // If not selected and less than 4 seats selected, select it
      if (selectedSeats.length < 4) {
        seatSelected(id);
      } else {
        // Otherwise, display error message on modal
        document.getElementById('errorMessage').style.display = 'block';
        my_modal_3.showModal();
      }
    }
  }

  function lastSection(){
    hideElementById('play-ground');
    showElementById('last-section');
  }