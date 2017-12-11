// Guest object
var guestList = {
	guests: [
		{
			name: 'John',
			lastName: 'Doe',
			adults: 2,
			babies: 2,
			h: 0,
			intolerant: 1
		},
		{
			name: 'Jane',
			lastName: 'Doe',
			adults: 2,
			babies: 1,
			h: 0,
			intolerant: 0
		}
	],
	addGuest: function(name, lastName, adults, babies, h, intolerant) {
		this.guests.push({
			name: name,
			lastName: lastName,
			adults: adults,
			babies: babies,
			h: h,
			intolerant: intolerant
		});
	}
};

// Handlers for the guestList object
var handlers = {
	addGuest: function(){
		let addGuestNameInput = document.getElementById('input-name'),
			addGuestLastNameInput = document.getElementById('input-last-name'),
			addGuestAdultsInput = document.getElementById('input-adults'),
			addGuestBabiesInput = document.getElementById('input-babies'),
			addGuestHInput = document.getElementById('input-h'),
			addGuestIntolerantInput = document.getElementById('input-intolerant');
		
		// Add new guests
		guestList.addGuest(addGuestNameInput.value, addGuestLastNameInput.value, addGuestAdultsInput.value, addGuestBabiesInput.value, addGuestHInput.value, addGuestIntolerantInput.value);

		// Set input text values back to empty
		addGuestNameInput.value = '';
		addGuestLastNameInput.value = '';
		addGuestAdultsInput.value = '';
		addGuestBabiesInput.value = '';
		addGuestHInput.value = '';
		addGuestIntolerantInput.value = '';
		view.displayGuest();
	}
}
// View object to output changes
var view = {
	displayGuest: function() {
		var guestListEl = document.getElementById('guest-list');
		guestListEl.innerHTML = '';

		guestList.guests.forEach((guest, index) => {
			var	guessElement = document.createElement('div');
			guessElement.className = 'guest';
			guessElement.innerHTML = `<p id="family-name">${guest.name} ${guest.lastName}</p><p id="number-adults">${guest.adults}</p><p id="number-babies">${guest.babies}</p><p id="number-h">${guest.h}</p><p id="number-intolerant">${guest.intolerant}</p></div>`;
			guestListEl.appendChild(guessElement);
		});
	}	
};
// Fill Guest List with Example Object
view.displayGuest();

$('document').ready(() => {
	// Add Guest Button Function
	var guestModal = document.getElementById('guest-modal');
	// When the user clicks on the button, open the guestModal 
	$('.add-guest').click(()=>{
			guestModal.style.display = "block";
	});
	// When the user clicks on <span> (x), close the guestModal
	$('.close-btn').click(()=>{
			guestModal.style.display = "none";
	});

	// When the user clicks anywhere outside of the guestModal, close it
	$(window).on('click', event => {
				if (event.target == guestModal) {
					guestModal.style.display = "none";
			}
	})

	$('#submit-guest').click(event => {
		handlers.addGuest();
		e.preventDefault();
	});
});