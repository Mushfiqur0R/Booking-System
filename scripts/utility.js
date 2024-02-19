function scrollBuyTicketsBtn(){
    const buyTicketBtn = document.getElementById("select-seat");
    buyTicketBtn.scrollIntoView();
}

function seatSelected(elementId){
    const element = document.getElementById(elementId);
    // element.classList.add('bg-[#1DD100]');
    element.classList.add('bg-lime-500');
}

function deselectSeat(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-lime-500');
  }