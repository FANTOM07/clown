// Function to play audio
function playAudio() {
    var audio = document.getElementById("clown");
    audio.play();
}

// Modal and button elements
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const newModal = document.getElementById('newModal');
const newModal1 = document.getElementById('newModal1');
const newModal2 = document.getElementById('newModal2');
const newModal3 = document.getElementById('newModal3');
const newModal4 = document.getElementById('newModal4');
const newModal5 = document.getElementById('newModal5');

const closeModalButton = document.getElementById('closeModalButton');
const continueModalButton = document.getElementById('continueModalButton');
const closeNewModalButton = document.getElementById('closeNewModalButton');
const continueNewModalButton = document.getElementById('continueNewModalButton');
const closeNewModalButton1 = document.getElementById('closeNewModalButton1');
const continueNewModalButton1 = document.getElementById('continueNewModalButton1');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const closeNewModalButton3 = document.getElementById('closeNewModalButton3');
const continueNewModalButton3 = document.getElementById('continueNewModalButton3');
const closeNewModalButton4 = document.getElementById('closeNewModalButton4');
const continueNewModalButton4Alt = document.getElementById('continueNewModalButton4Alt');
const closeNewModalButton5 = document.getElementById('closeNewModalButton5');
const continueNewModalButton5 = document.getElementById('continueNewModalButton5');

// Open initial modal
openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Hide modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        hideAllModals();
    }
});

// Hide all modals
function hideAllModals() {
    modal.style.display = 'none';
    newModal.style.display = 'none';
    newModal1.style.display = 'none';
    newModal2.style.display = 'none';
    newModal3.style.display = 'none';
    newModal4.style.display = 'none';
    newModal5.style.display = 'none';
}

// Close and continue button functionality
closeModalButton.addEventListener('click', hideAllModals);
continueModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    newModal.style.display = 'block';
});

closeNewModalButton.addEventListener('click', hideAllModals);
continueNewModalButton.addEventListener('click', function() {
    newModal.style.display = 'none';
    newModal1.style.display = 'block';
});

closeNewModalButton1.addEventListener('click', hideAllModals);
continueNewModalButton1.addEventListener('click', function() {
    newModal1.style.display = 'none';
    newModal2.style.display = 'block';
});

yesButton.addEventListener('click', function() {
    newModal2.style.display = 'none';
    newModal3.style.display = 'block';
});

noButton.addEventListener('click', function() {
    newModal2.style.display = 'none';
    newModal3.style.display = 'block';
});

closeNewModalButton3.addEventListener('click', hideAllModals);
continueNewModalButton3.addEventListener('click', function() {
    newModal3.style.display = 'none';
    newModal4.style.display = 'block';
});

closeNewModalButton4.addEventListener('click', function() {
	newModal4.style.display = 'none';
});

continueNewModalButton4Alt.addEventListener('click', function() {
    newModal4.style.display = 'none';
    newModal5.style.display = 'block';
});

closeNewModalButton5.addEventListener('click', hideAllModals);
continueNewModalButton5.addEventListener('click', function() {
    newModal5.style.display = 'none';
    // Add further action for continue button if needed
});
