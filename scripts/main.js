let modalElement = document.createElement('div');
modalElement.className = 'modal';
modalElement.id = "modal";

let addGuest = document.getElementById('add-guest');
let addTable = document.getElementById('add-table-btn');	
window.addEventListener('click', event => {
	// Add guest and table Button Function
	if(event.target == addGuest) {
		modalElement.innerHTML = '';
		modalElement.innerHTML = '<div class="modal-content"><form action=""><span class="close-btn">&times;</span><h3>Add Guest</h3><br><div id="message"></div><div class="form-input"><label class="label" for="input-name">Name</label><br><input id="input-name" required class="form-text" type="text"></div><br><div><label class="label" for="input-last-name">Last Name</label><br><input id="input-last-name" required class="form-text" type="text"></div><br><div class="numerical-textbox"><div class="form-input-numbers"><label class="label" for="input-adults">Adults</label><input id="input-adults" required class="form-text" type="number" value="1"></div><div class="form-input-numbers"><label class="label" for="input-babies">Babies</label><input id="input-babies" required class="form-text " type="number" value="0"></div><div class="form-input-numbers"><label class="label" for="input-highchair">Highchair</label><input id="input-highchair" required class="form-text" type="number" value="0"></div></div><div><label class="label" for="input-intolerant">Intolerant</label><br><input id="input-intolerant" required class="form-text" type="text"></div><input id="submit-guest" class="btn" type="submit" value="Submit"></form></div></div>';
		document.getElementById('modal-section').appendChild(modalElement);
		modalElement.style.display = 'block';

		// Submit new guest
		let submitGuest = document.getElementById('submit-guest');
		(submitGuest).onclick = event => {
			event.preventDefault();
			handlers.addGuest();
		};

	} else if(event.target == addTable) {
		modalElement.innerHTML = '';
		modalElement.innerHTML = '<div class="modal-content"><form action=""><span class="close-btn">&times;</span><h3>Add Table</h3><br><div id="message"></div><div class="form-input"><label class="label" for="input-table-name">Table Name</label><br><input id="input-table-name" required class="form-text" type="text"></div><input id="submit-table" class="btn" type="submit" value="Submit"></form></div>';
		document.getElementById('modal-section').appendChild(modalElement);
		modalElement.style.display = 'block';
	}
	// When the user clicks close span it removes modal
	let closeBtn = document.getElementsByClassName('close-btn')[0];
	let modalSection = document.getElementById('modal-section');
	closeBtn.addEventListener('click', () => {
		modalElement.style.display = 'none';
	});

	// When the user clicks anywhere outside of the modal element, close it
	window.addEventListener('click', event => {
		if (event.target == modalElement) {
			event.target.style.display = 'none';
		}
	});
});

// Guest object
var guestList = {
	guests: [
		{
			name: 'John',
			lastName: 'Doe',
			adults: 2,
			babies: 2,
			highchair: 0,
			intolerant: 'Lactose'
		},
		{
			name: 'Jane',
			lastName: 'Doe',
			adults: 2,
			babies: 1,
			highchair: 0,
			intolerant: 'None'
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
		let nameInput = document.getElementById('input-name'),
			lastNameInput = document.getElementById('input-last-name'),
			adultsInput = document.getElementById('input-adults'),
			babiesInput = document.getElementById('input-babies'),
			highchairInput = document.getElementById('input-highchair'),
			intolerantInput = document.getElementById('input-intolerant');
			messageElement = document.getElementById('message');

			// Output a message if user didn't input a number on any of the numerical fields
			let numbersRegex = /^[0-9]/;
			if(numbersRegex.test(adultsInput.value) == false) {
				adultsInput.style = '';
				babiesInput.style = '';
				highchairInput.style = '';
				messageElement.textContent = 'You need to input a number';
				adultsInput.style.border = '.2em solid red';
			} else if(numbersRegex.test(babiesInput.value) == false) {
				adultsInput.style = '';
				babiesInput.style = '';
				highchairInput.style = '';
				messageElement.textContent = 'You need to input a number';
				babiesInput.style.border = '.2em solid red';
			} else if (numbersRegex.test(highchairInput.value) == false) {
				adultsInput.style = '';
				babiesInput.style = '';
				highchairInput.style = '';
				messageElement.textContent = 'You need to input a number';
				highchairInput.style.border = '.2em solid red';
			} else {
				// Add new guests
				guestList.addGuest(nameInput.value, lastNameInput.value, Number(adultsInput.value), Number(babiesInput.value), Number(highchairInput.value),intolerantInput.value);

				//Remove any styles on the number fields
				adultsInput.style = '';
				babiesInput.style = '';
				highchairInput.style = '';
				// Remove any message left on the message section
				messageElement.innerHTML = '';

				// Set input text values back to empty
				nameInput.value = '';
				lastNameInput.value = '';
				adultsInput.value = 1;
				babiesInput.value = 0;
				highchairInput.value = 0;
				intolerantInput.value = '';
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
			var	guestElement = document.createElement('div');
			guestElement.className = 'guest';
			guestElement.innerHTML = `<p id="family-name">${guest.name} ${guest.lastName}</p><p id="number-adults">${guest.adults}</p><p id="number-babies">${guest.babies}</p><p id="number-h">${guest.highchair}</p><p id="number-intolerant">${guest.intolerant}</p></div>`;
			guestListEl.appendChild(guestElement);
		});
	}	
};
// Fill Guest List with Example Object
view.displayGuest();