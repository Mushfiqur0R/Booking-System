function play(id){
    // seatSelected(id);
    const element = document.getElementById(id);
      if (element.classList.contains('bg-lime-500')) {
        // If already selected, deselect it
        deselectSeat(id);
      } else {
        // If not selected, select it
        seatSelected(id);
      }
}