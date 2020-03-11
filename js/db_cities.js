'use strict';

const data = {
	"RU": [
		{
			"country": "Россия",
			"count": "144500000",
			"cities": [
				{
					"name": "Рязань",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Москва",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "Санкт-Петербург",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Краснодар",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Екатеринбург",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Ростов-на-Дону",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Воронеж",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Германия",
			"count": 82175684,
			"cities": [
				{
					"name": "Берлин",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "Мюнхен",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "Франкфурт-на-Майне",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Кёльн",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "Англия",
			"count": 53012456,
			"cities": [
				{
					"name": "Лондон",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Манчестер",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Эдинбург",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Бристоль",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	],
	"EN": [
		{
			"country": "Russia",
			"count": "144500000",
			"cities": [
				{
					"name": "Ryazan",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Moscow",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "St Petersburg",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Krasnodar",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Yekaterinburg",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Rostov-on-Don",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Voronezh",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Germany",
			"count": 82175684,
			"cities": [
				{
					"name": "Berlin",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "Munich",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "frankfurt",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Cologne",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "United Kingdom",
			"count": 53012456,
			"cities": [
				{
					"name": "London",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Manchester",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Edinburgh",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Bristol",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	],
	"DE": [
		{
			"country": "Russland",
			"count": "144500000",
			"cities": [
				{
					"name": "Ryazan",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Moskau",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "Saint Petersburg",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Krasnodar",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Jekaterinburg",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Rostow",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Woronesch",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Deutschland",
			"count": 82175684,
			"cities": [
				{
					"name": "Berlin",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "München",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "Frankfurt",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Köln",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "England",
			"count": 53012456,
			"cities": [
				{
					"name": "London",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Manchester",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Edinburgh",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Bristol",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	]
};

for (let i = 0; i < 3; i++) {
	data['RU'][i].cities.sort((a, b) => a.count - b.count).reverse();
	data['EN'][i].cities.sort((a, b) => a.count - b.count).reverse();
	data['DE'][i].cities.sort((a, b) => a.count - b.count).reverse();
}

const main = document.querySelector('.main');
const ourInput = document.getElementById('select-cities');
const ourDropdown = document.querySelector('.dropdown');
const ourDropdownLists = document.querySelector('.dropdown-lists');
const ourLabel = document.querySelector('.label');
const closeBtn = document.querySelector('.close-button');

const choosenLang = 'RU';

const ourCountryRU = [];
for (const key of data[choosenLang]) {
	ourCountryRU.push(key.country);
}
const ourCountryCountRU = [];
for (const key of data[choosenLang]) {
	ourCountryCountRU.push(key.count);
}
const ourCitiesRU = [];
for (const key of data[choosenLang]) {
	ourCitiesRU.push(key.cities);
}
const allRuCities = [];
for (let i = 0; i < ourCitiesRU.length; i++) {
	let ourLength = ourCitiesRU[i].length;
	for (let j = 0; j < ourLength; j++) {
		allRuCities.push(ourCitiesRU[i][j]);
	}
}

const ourCountryEN = data['EN'][0].country;
const ourCountryCountEN = data['EN'][0].count;

const ourCountryDE = data['DE'][0].country;
const ourCountryCountDE = data['DE'][0].count;

const dorpdownListTotalLine = `
<div class="dropdown-lists__total-line">
	<div class="dropdown-lists__country">Росся</div>
	<div class="dropdown-lists__count">14450</div>
</div>
`;

const dorpdownListLineElementActive = `
<div class="dropdown-lists__line">
	<div class="dropdown-lists__city dropdown-lists__city--ip">Москва122222</div>
	<div class="dropdown-lists__count">1261500012</div>
</div>
`;

const dorpdownListLineElement = `
<div class="dropdown-lists__line">
	<div class="dropdown-lists__city">Москва122222</div>
	<div class="dropdown-lists__count">1261500012</div>
</div>
`;

const dropdownListCountryBlocks = `
<div class="dropdown-lists__countryBlock">
	${dorpdownListTotalLine}
	${dorpdownListLineElementActive}
	${dorpdownListLineElement}
	${dorpdownListLineElement}
</div>
`;

const returnToDeafult = () => {
	let targ = event.target;

	if (targ.classList.contains('dropdown-lists__country')) {
		targ = targ.closest('.dropdown-lists__total-line');
	} else {
		targ = event.target;
	}

	ourDropdown.style.display = 'flex';
	if (ourDropdownLists.children.length === 0) {

		const deafult = document.createElement('div');

		deafult.classList.add('dropdown-lists__list');
		deafult.classList.add('dropdown-lists__list--default');

		deafult.innerHTML = `
			<div class="dropdown-lists__col">
				${dropdownListCountryBlocks}
				${dropdownListCountryBlocks}
				${dropdownListCountryBlocks}
			</div>
		`;

		ourDropdownLists.insertAdjacentElement('afterbegin', deafult);

		const dropdownListTotalLine = document.querySelectorAll('.dropdown-lists__total-line');
		const dropdownListsCol = document.querySelector('.dropdown-lists__col');
		dropdownListTotalLine.forEach((item, i) => {
			item.firstElementChild.textContent = ourCountryRU[i];
			item.lastElementChild.textContent = ourCountryCountRU[i];
		});

		for (let i = 0; i < dropdownListsCol.children.length; i++) {
			const ourItChilds = dropdownListsCol.children[i].children;

			for (let j = 1; j < 4; j++) {
				ourItChilds[j].firstElementChild.textContent = ourCitiesRU[i][j - 1].name;
				ourItChilds[j].lastElementChild.textContent = ourCitiesRU[i][j - 1].count;
			}
		}
	}
};

const makeSelected = () => {
	let targ = event.target;

	if (targ.classList.contains('dropdown-lists__country')) {
		targ = targ.closest('.dropdown-lists__total-line');
	} else {
		targ = event.target;
	}

	const selected = document.createElement('div');

	selected.classList.add('dropdown-lists__list');
	selected.classList.add('dropdown-lists__list--select');

	let ourSelElems = [];

	if (targ.firstElementChild.textContent === "Россия") {
		for (let i = 0; i < data['RU'][0].cities.length; i++) {
			ourSelElems.push(dorpdownListLineElement);
		}
	} else if (targ.firstElementChild.textContent === "Германия") {
		for (let i = 0; i < data['RU'][1].cities.length; i++) {
			ourSelElems.push(dorpdownListLineElement);
		}
	} else if (targ.firstElementChild.textContent === "Англия") {
		for (let i = 0; i < data['RU'][2].cities.length; i++) {
			ourSelElems.push(dorpdownListLineElement);
		}
	}

	ourSelElems = [...ourSelElems].toString().replace(/,/g, '');
	selected.innerHTML = `
		<div class="dropdown-lists__col">
			<div class="dropdown-lists__countryBlock">
				${ourSelElems}
			</div>
		</div>
	`;

	ourDropdownLists.insertAdjacentElement('afterbegin', selected);

	ourDropdownLists.firstChild.style.display = 'block';
	ourDropdownLists.lastElementChild.remove();

	const dropdownListsCol = document.querySelector('.dropdown-lists__col');

	if (targ.firstElementChild.textContent === "Россия") {

		for (let i = 0; i < dropdownListsCol.children.length; i++) {
			const ourItChilds = dropdownListsCol.children[i].children;

			for (let j = 0; j < ourCitiesRU[0].length; j++) {
				ourItChilds[j].firstElementChild.textContent = ourCitiesRU[0][j].name;
				ourItChilds[j].lastElementChild.textContent = ourCitiesRU[0][j].count;
			}
		}
		dropdownListsCol.insertAdjacentElement('afterbegin', targ);
	}

	if (targ.firstElementChild.textContent === "Германия") {

		for (let i = 0; i < dropdownListsCol.children.length; i++) {
			const ourItChilds = dropdownListsCol.children[i].children;

			for (let j = 0; j < ourCitiesRU[1].length; j++) {
				ourItChilds[j].firstElementChild.textContent = ourCitiesRU[1][j].name;
				ourItChilds[j].lastElementChild.textContent = ourCitiesRU[1][j].count;
			}
		}
		dropdownListsCol.insertAdjacentElement('afterbegin', targ);
	}

	if (targ.firstElementChild.textContent === "Англия") {

		for (let i = 0; i < dropdownListsCol.children.length; i++) {
			const ourItChilds = dropdownListsCol.children[i].children;

			for (let j = 0; j < ourCitiesRU[2].length; j++) {
				ourItChilds[j].firstElementChild.textContent = ourCitiesRU[2][j].name;
				ourItChilds[j].lastElementChild.textContent = ourCitiesRU[2][j].count;
			}
		}
		dropdownListsCol.insertAdjacentElement('afterbegin', targ);
	}
};

const makeAutoComplete = () => {
	let targ = event.target;

	if (targ.classList.contains('dropdown-lists__country')) {
		targ = targ.closest('.dropdown-lists__total-line');
	} else {
		targ = event.target;
	}

	closeBtn.style.display = 'block';

	const autoComp = document.createElement('div');

	autoComp.classList.add('dropdown-lists__list');
	autoComp.classList.add('dropdown-lists__list--select');

	let inputSearchValues = [];
	for (let i = 0; i < allRuCities.length; i++) {
		inputSearchValues.push(dorpdownListLineElement);
	}
	inputSearchValues = [...inputSearchValues].toString().replace(/,/g, '');
	autoComp.innerHTML = `
		<div class="dropdown-lists__col">
			<div class="dropdown-lists__countryBlock">
				${inputSearchValues}
			</div>
		</div>
	`;

	ourDropdownLists.insertAdjacentElement('beforeend', autoComp);

	const dropdownListsCol = document.querySelector('.dropdown-lists__col');
	for (let i = 0; i < dropdownListsCol.children.length; i++) {
		const ourItChilds = dropdownListsCol.children[i].children;
		for (let j = 0; j < allRuCities.length; j++) {
			ourItChilds[j].firstElementChild.textContent = allRuCities[j].name;
			ourItChilds[j].lastElementChild.textContent = allRuCities[j].count;
		}
	}

	const dropDowListLine = document.querySelectorAll('.dropdown-lists__line');
	if (dropDowListLine) {
		for (let i = 0; i < dropDowListLine.length; i++) {
			dropDowListLine[i].style.display = 'none';
		}
		if (ourInput.value !== '') {
			for (let j = 0; j < allRuCities.length; j++) {

				let inpLength = ourInput.value.length;

				let substrLetters = allRuCities[j].name.substring(0, inpLength);
				substrLetters = substrLetters.toLowerCase();
				let searchLetter = ourInput.value.toLowerCase().search(substrLetters);
				if (searchLetter === 0) {

					const listSelected = document.querySelector('.dropdown-lists__list--select');
					listSelected.style.display = 'block';
					dropDowListLine[j].style.display = 'flex';

				} else {
					dropDowListLine[j].style.display = 'none';
				}
			}
		}
	}

};

const checkOurInpValue = () => {
	let targ = event.target;

	if (targ.classList.contains('dropdown-lists__country')) {
		targ = targ.closest('.dropdown-lists__total-line');
	} else {
		targ = event.target;
	}
	const ourBtn = document.querySelector('.button');

	const btnLinkUpdateFunc = () => {
		for (let j = 0; j < allRuCities.length; j++) {
			let inpLength = ourInput.value.length;

			let substrLetters = allRuCities[j].name.substring(0, inpLength);
			substrLetters = substrLetters.toLowerCase();
			let searchLetter = ourInput.value.toLowerCase().search(substrLetters);

			if (searchLetter === 0) {
				let getterLink = allRuCities[j].link;
				ourBtn.setAttribute('href', getterLink);
			}

		}
	};

	if (targ.classList.contains('dropdown-lists__line')) {
		ourInput.value = targ.firstElementChild.textContent;
		ourLabel.textContent = '';
		closeBtn.style.display = 'block';

		btnLinkUpdateFunc();

	} else if (ourInput.value === '') {
		ourLabel.textContent = 'Страна или город';
	}

	if (targ.classList.contains('dropdown-lists__city')) {
		ourInput.value = targ.textContent;
		ourLabel.textContent = '';
		closeBtn.style.display = 'block';

		btnLinkUpdateFunc();

	} else if (ourInput.value === '') {
		ourLabel.textContent = 'Страна или город';
	}

	if (targ.classList.contains('close-button')) {
		targ.style.display = 'none';
		ourInput.value = '';
		ourBtn.removeAttribute('href');
	}

	if (ourInput.value !== '') {
		ourLabel.textContent = '';
		closeBtn.style.display = 'block';
	} else if (ourInput.value === '') {
		ourLabel.textContent = 'Страна или город';
	}
};


main.addEventListener('click', event => {
	let targ = event.target;

	if (targ.classList.contains('dropdown-lists__country')) {
		targ = targ.closest('.dropdown-lists__total-line');
	} else {
		targ = event.target;
	}

	if (targ === ourInput && targ.value === '') {
		targ.addEventListener('input', event => {
			ourDropdown.firstElementChild.firstElementChild.remove();
			closeBtn.style.display = 'none';
			makeAutoComplete();
			ourDropdown.style.display = 'block';

			checkOurInpValue();
			if (targ.value === '') {
				ourDropdown.firstElementChild.firstElementChild.remove();
				closeBtn.style.display = 'none';
				returnToDeafult();
			}
		});
		returnToDeafult();

	} else if (targ.classList.contains('dropdown-lists__total-line') && targ.classList.contains('choosen')) {
		targ.parentNode.parentNode.remove();
		returnToDeafult();
	} else if (targ.classList.contains('dropdown-lists__total-line') && !targ.classList.contains('choosen')) {
		makeSelected();
		targ.classList.add('choosen');
	} else {
		ourDropdown.style.display = 'none';

		checkOurInpValue();
	}

});
