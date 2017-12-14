// Guest object
var guestList = {
	guests: [
		{
			name: 'John',
			lastName: 'Doe',
			adults: 2,
			babies: 2,
			highchair: 0,
			intolerant: '*'
		},
		{
			name: 'Jane',
			lastName: 'Doe',
			adults: 2,
			babies: 1,
			highchair: 0,
			intolerant: '-'
		}
	],
	addGuest: function(name, lastName, adults, babies, highchair, intolerant) {
		this.guests.push({
			name: name,
			lastName: lastName,
			adults: adults,
			babies: babies,
			highchair: highchair,
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
			addGuestHighchairInput = document.getElementById('input-highchair'),
			addGuestIntolerantInput = document.getElementsByName('input-intolerant'),
			addGuestIntolerantInputChecked;

			// Check if intolerant is checked and output the element
			addGuestIntolerantInput.forEach(function test(element) {
				if(element.checked) {
					addGuestIntolerantInputChecked = element;
				}
			});

			let numbersRegex = /^[0-9]/;

			if(numbersRegex.test(addGuestAdultsInput.value) == false) {
				addGuestAdultsInput.style.border = '.2em solid red';
			} else if(numbersRegex.test(addGuestBabiesInput.value) == false) {
				addGuestBabiesInput.style.border = '.2em solid red';
			} else if (numbersRegex.test(addGuestHighchairInput.value) == false) {
				addGuestHighchairInput.style.border = '.2em solid red';
			} else {
				// Add new guests
				guestList.addGuest(addGuestNameInput.value, addGuestLastNameInput.value, Number(addGuestAdultsInput.value), Number(addGuestBabiesInput.value), Number(addGuestHighchairInput.value),addGuestIntolerantInputChecked.value);

				addGuestAdultsInput.style = '';

				// Set input text values back to empty
				addGuestNameInput.value = '';
				addGuestLastNameInput.value = '';
				addGuestAdultsInput.value = 1;
				addGuestBabiesInput.value = 0;
				addGuestHighchairInput.value = 0;
				addGuestIntolerantInput[0].checked = true;
				view.displayGuest();
				document.getElementById('guest-modal').style.display = "none";

			}
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
			guessElement.innerHTML = `<p id="family-name">${guest.name} ${guest.lastName}</p><p id="number-adults">${guest.adults}</p><p id="number-babies">${guest.babies}</p><p id="number-h">${guest.highchair}</p><p id="number-intolerant">${guest.intolerant}</p></div>`;
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
	// Submit new guest
	$('#submit-guest').click(event => {
		event.preventDefault();
		handlers.addGuest();
	});
});