let name
let surname
let dob
let formattedDob
let pesel
let jestem

// Adres
let city
let postalCode
let street
let phone
let email

// Informacje o egzaminie
let examTerm
let profession
let qualification
let nameQualification
let examAttempt
let accommodation
let kod

let attachments = []

const data = {
	technik: [
		{
			nazwa: 'Technik Budownictwa',
			kod: '311204',
			kwalifikacje: {
				'BUD.12': 'Wykonywanie robót murarskich i tynkarskich',
				'BUD.14': 'Organizacja i kontrola robót budowlanych oraz sporządzanie | kosztorysów',
			},
		},
		{
			nazwa: 'Technik Elektryk',
			kod: '311303',
			kwalifikacje: {
				'ELE.02': 'Montaż, uruchamianie i konserwacja instalacji, maszyn i urządzeń | elektrycznych',
				'ELE.05': 'Eksploatacja maszyn, urządzeń i instalacji elektrycznych',
			},
		},
		{
			nazwa: 'Technik Geodeta',
			kod: '311104',
			kwalifikacje: {
				'BUD.18':
					'Wykonywanie pomiarów sytuacyjnych, wysokościowych i realizacyjnych | oraz opracowywanie wyników tych pomiarów.',
				'BUD.19': 'Wykonywanie prac geodezyjnych związanych z katastrem i gospodarką nieruchomościami.',
			},
		},
		{
			nazwa: 'Technik Hotelarstwa',
			kod: '422402',
			kwalifikacje: {
				'HGT.03': 'Obsługa gości w obiekcie świadczącym usługi hotelarskie ',
				'HGT.06': 'Realizacja usług w recepcji ',
			},
		},
		{
			nazwa: 'Technik Informatyk',
			kod: '351203',
			kwalifikacje: {
				'INF.02':
					'Administracja i eksploatacja systemów komputerowych, urządzeń | peryferyjnych i lokalnych sieci komputerowych ',
				'INF.03': 'Tworzenie i administrowanie stronami i aplikacjami internetowymi | oraz bazami danych ',
			},
		},
		{
			nazwa: 'Technik Mechatronik',
			kod: '311410',
			kwalifikacje: {
				'ELM.03': 'Montaż, uruchamianie i konserwacja urządzeń i systemów | mechatronicznych.',
				'ELM.06': 'Eksploatacja i programowanie urządzeń i systemów mechatronicznych.',
			},
		},
		{
			nazwa: 'Technik Programista',
			kod: '351406',
			kwalifikacje: {
				'INF.03': 'Tworzenie i administrowanie stronami i aplikacjami internetowymi | oraz bazami danych',
				'INF.04': 'Projektowanie, programowanie i testowanie aplikacji',
			},
		},
		{
			nazwa: 'Technik Usług Fryzjerskich',
			kod: '514105',
			kwalifikacje: {
				'FRK.01': 'Wykonywanie usług fryzjerskich',
				'FRK.03': 'Projektowanie i wykonywanie fryzur',
			},
		},
		{
			nazwa: 'Technik Żywienia i Usług Gastronomicznych',
			kod: '343404',
			kwalifikacje: {
				'HGT.02': 'Przygotowanie i wydawanie dań',
				'HGT.12': 'Organizacja żywienia i usług gastronomicznych',
			},
		},
		{
			nazwa: 'Technik Aranżacji Wnętrz',
			kod: '311224',
			kwalifikacje: {
				'BUD.34.': 'Planowanie i wykonywanie poszczególnych etapów wykończenia wnętrz ',
				'BUD.35': 'Wykonywanie aranżacji wnętrz ',
			},
		},
	],
	I_branzowa: [
		{
			nazwa: 'Elektryk',
			kod: '741103',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Kucharz',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Mechanik pojazdów samochodowych',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Monter Zabudowy i Robót Wykończeniowych w Budownictwie',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Slusarz',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Wielozawodowa',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
	],
	II_branzowa: [
		{
			nazwa: 'Technik Elektryk',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Technik Robót Wykończeniowych w Budownictwie',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Technik Żywienia i Usług Gastronomicznych',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
		{
			nazwa: 'Technik Pojadzów samochodowych',
			kod: '311208',
			kwalifikacje: {
				'INF.12': 'Wykonywanie robót informatycznych',
				'INF.14': 'Organizacja i kontrola robót informatycznych',
			},
		},
	],
}

function fillProfessions() {
	const select = document.getElementById('profession')
	select.innerHTML = '<option value="">-- Wybierz zawód --</option>'

	for (const category in data) {
		const group = document.createElement('optgroup')
		group.label =
			category === 'technik'
				? 'Technik'
				: category === 'I_branzowa'
				? 'I Branżowa'
				: category === 'II_branzowa'
				? 'II Branżowa'
				: category

		data[category].forEach(q => {
			const option = document.createElement('option')
			option.value = `${category}|${q.nazwa}`
			option.textContent = q.nazwa
			group.appendChild(option)
		})

		select.appendChild(group)
	}
}

function validForm() {
	let error = 0

	// Imię
	if (name.length < 3) {
		error++
		document.getElementById('nameError').textContent = 'Imię powinno zawierać co najmniej 3 znaki'
	} else {
		document.getElementById('nameError').textContent = ''
	}

	// Nazwisko
	if (surname.length < 2) {
		error++
		document.getElementById('surnameError').textContent = 'Nazwisko powinno zawierać co najmniej 2 znaki'
	} else {
		document.getElementById('surnameError').textContent = ''
	}

	// Data urodzenia
	if (!dob) {
		error++
		document.getElementById('dobError').textContent = 'Podaj datę urodzenia'
	} else {
		document.getElementById('dobError').textContent = ''
	}

	if (!/^\d{11}$/.test(pesel) && !/^[A-Z]{2,3}\d{6,7}$/.test(pesel)) {
		error++
		document.getElementById('peselError').textContent = 'niepoprawny pesel lub paszportu'
	} else {
		document.getElementById('peselError').textContent = ''
	}

	if (!validatePeselDate(pesel, dob)) {
		error++
		document.getElementById('peselError').textContent = 'Data urodzenia nie zgadza się z numerem PESEL'
	} else {
		document.getElementById('peselError').textContent = ''
	}

	// Jestem
	if (!jestem) {
		error++
		document.getElementById('jestemError').textContent = 'Wybierz jedną z opcji'
	} else {
		document.getElementById('jestemError').textContent = ''
	}

	// Miejscowość
	if (city.length < 2) {
		error++
		document.getElementById('cityError').textContent = 'Miejscowość powinna zawierać co najmniej 2 znaki'
	} else {
		document.getElementById('cityError').textContent = ''
	}

	// Kod pocztowy
	if (!/^[0-9]{2}-[0-9]{3}$/.test(postalCode)) {
		error++
		document.getElementById('postalCodeError').textContent = 'Kod pocztowy w formacie 00-000'
	} else {
		document.getElementById('postalCodeError').textContent = ''
	}

	// Ulica
	if (street.length < 3) {
		error++
		document.getElementById('streetError').textContent = 'Podaj poprawny adres (min. 3 znaki)'
	} else {
		document.getElementById('streetError').textContent = ''
	}

	// Telefon
	if (!/^[0-9]{9}$/.test(phone)) {
		error++
		document.getElementById('phoneError').textContent = 'Telefon musi mieć 9 cyfr'
	} else {
		document.getElementById('phoneError').textContent = ''
	}

	// Email
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		error++
		document.getElementById('emailError').textContent = 'Podaj poprawny adres email'
	} else {
		document.getElementById('emailError').textContent = ''
	}

	// Termin egzaminu
	if (!examTerm) {
		error++
		document.getElementById('examTermError').textContent = 'Wybierz termin egzaminu'
	} else {
		document.getElementById('examTermError').textContent = ''
	}

	// Nazwa zawodu
	if (profession === '') {
		error++
		document.getElementById('professionError').textContent = 'Wybierz zawód'
	} else {
		document.getElementById('professionError').textContent = ''
	}

	// Kod kwalifikacji
	if (qualification === '') {
		error++
		document.getElementById('qualificationError').textContent = 'Wybierz kod kwalifikacji'
	} else {
		document.getElementById('qualificationError').textContent = ''
	}

	// Nazwa kwalifikacji
	if (nameQualification.length < 3) {
		error++
		document.getElementById('nameQualification').textContent = 'Nazwa kwalifikacji musi mieć min. 3 znaki'
	} else {
		document.getElementById('nameQualification').textContent = ''
	}

	// Przystępuję do egzaminu
	if (!examAttempt) {
		error++
		document.getElementById('examAttemptError').textContent = 'Wybierz opcję przystąpienia do egzaminu'
	} else {
		document.getElementById('examAttemptError').textContent = ''
	}

	// Dostosowanie warunków
	if (!accommodation) {
		error++
		document.getElementById('accommodationError').textContent = 'Zaznacz TAK lub NIE'
	} else {
		document.getElementById('accommodationError').textContent = ''
	}

	return error === 0
}

async function drawPdf() {
	const { PDFDocument, rgb } = PDFLib

	const existingPdfBytes = await fetch('zalacznik3.pdf').then(res => res.arrayBuffer())
	const fontBytes = await fetch('DejaVuSans.ttf').then(res => res.arrayBuffer())

	const pdfDoc = await PDFDocument.load(existingPdfBytes)

	pdfDoc.registerFontkit(fontkit)

	const customFont = await pdfDoc.embedFont(fontBytes)

	const pages = pdfDoc.getPages()
	const firstPage = pages[0]

	let date = new Date()
	let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	let year = date.getFullYear()

	let dataGranicznaZima = new Date(year, 8, 15)
	let dataGranicznaLato = new Date(year, 1, 7)

	let lato
	let zima

	if (date < dataGranicznaZima) zima = year % 100
	else zima = (year + 1) % 100

	if (date < dataGranicznaLato) lato = year % 100
	else lato = (year + 1) % 100

	//checkboxy
	firstPage.drawRectangle({
		x: 239,
		y: 739,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: jestem === 'uczniem' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 290,
		y: 739,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: jestem === 'sluchaczem' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 356,
		y: 739,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: jestem === 'absolwentem' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawText(day + '.' + month + '.' + year, {
		x: 375,
		y: 715,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	//miejscowos u góry
	firstPage.drawText(capitalize(city), {
		x: 290,
		y: 715,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(capitalize(surname), {
		x: 200,
		y: 673,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(capitalize(name), {
		x: 200,
		y: 649,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(formattedDob, {
		x: 200,
		y: 624,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(capitalize(pesel), {
		x: 200,
		y: 600,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	//miejscowosc
	firstPage.drawText(capitalize(city), {
		x: 200,
		y: 545,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(capitalize(street), {
		x: 200,
		y: 520,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(postalCode + ' ' + capitalize(city), {
		x: 200,
		y: 496,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(phone, {
		x: 200,
		y: 472,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(email, {
		x: 200,
		y: 459,
		size: 9,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	//checboxy
	firstPage.drawRectangle({
		x: 182,
		y: 422,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: examTerm === 'Zima' ? rgb(0, 0, 0) : undefined,
	})

	if (examTerm === 'Zima') {
		firstPage.drawText(zima.toString(), {
			x: 423,
			y: 425,
			size: 9,
			font: customFont,
			color: rgb(0, 0, 0),
			opacity: 1,
		})
	} else if (examTerm === 'Lato') {
		firstPage.drawText(lato.toString(), {
			x: 432,
			y: 407,
			size: 9,
			font: customFont,
			color: rgb(0, 0, 0),
			opacity: 1,
		})
	}

	firstPage.drawRectangle({
		x: 210,
		y: 403,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: examTerm === 'Lato' ? rgb(0, 0, 0) : undefined,
	})

	let letterCode = qualification.split('.')[0].toUpperCase()
	//kod kwalifikacji
	firstPage.drawText(letterCode, {
		x: 76,
		y: 371,
		size: 12,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	let numberCode = qualification.split('.')[1]
	firstPage.drawText(numberCode, {
		x: 130,
		y: 371,
		size: 12,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	let words = nameQualification.trim().split('|')
	let s1 = words[0]
	let s2 = words[1] || ''

	console.log(s1, s2)

	//nazwa kwalifikacji
	firstPage.drawText(s1, {
		x: 180,
		y: 372,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	s2 == '' ||
		firstPage.drawText(s2, {
			x: 177,
			y: 357,
			size: 11,
			font: customFont,
			color: rgb(0, 0, 0),
			opacity: 1,
		})

	//kod zawodu
	firstPage.drawText(kod[0], {
		x: 88,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(kod[1], {
		x: 105,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(kod[2], {
		x: 121,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(kod[3], {
		x: 137,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(kod[4], {
		x: 153,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawText(kod[5], {
		x: 169,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	//nazwa zawodu
	firstPage.drawText(profession, {
		x: 200,
		y: 310,
		size: 11,
		font: customFont,
		color: rgb(0, 0, 0),
		opacity: 1,
	})

	firstPage.drawRectangle({
		x: 89,
		y: 264,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: examAttempt === 'pierwszy' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 196,
		y: 264,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: examAttempt === 'kolejnyPisemny' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 373,
		y: 264,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: examAttempt === 'kolejnyPraktyczny' ? rgb(0, 0, 0) : undefined,
	})

	//dostoswanie warunkow
	firstPage.drawRectangle({
		x: 299,
		y: 247,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: accommodation === 'TAK' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 340,
		y: 247,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: accommodation === 'NIE' ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 70,
		y: 223,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: attachments.includes('pierwsze') ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 70,
		y: 211,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: attachments.includes('drugie') ? rgb(0, 0, 0) : undefined,
	})

	firstPage.drawRectangle({
		x: 70,
		y: 199,
		width: 7,
		height: 7,
		borderColor: rgb(0, 0, 0),
		borderWidth: 1,
		color: attachments.includes('trzecie') ? rgb(0, 0, 0) : undefined,
	})

	const pdfBytes = await pdfDoc.save()
	const blob = new Blob([pdfBytes], { type: 'application/pdf' })
	const link = document.createElement('a')
	link.href = URL.createObjectURL(blob)
	link.download = surname + '_' + name + '.pdf'
	link.click()
}

fillProfessions()

document.getElementById('generateBtn').addEventListener('click', () => {
	attachments = []

	name = document.getElementById('name').value.trim()
	surname = document.getElementById('surname').value.trim()
	dob = document.getElementById('dob').value
	let parts = dob.split('-')
	formattedDob = `${parts[2]}-${parts[1]}-${parts[0]}`

	pesel = document.getElementById('pesel').value.trim()
	jestem = document.querySelector('input[name="jestem"]:checked')?.value || ''

	city = document.getElementById('city').value.trim()
	postalCode = document.getElementById('postalCode').value.trim()
	street = document.getElementById('street').value.trim()
	phone = document.getElementById('phone').value.trim()
	email = document.getElementById('email').value.trim()

	examTerm = document.querySelector('input[name="examTerm"]:checked')?.value || ''
	profession = document.getElementById('profession').value
	profession = profession.split('|')[1]
	qualification = document.getElementById('qualification').value
	nameQualification = document.getElementById('nameQualification').value
	examAttempt = document.querySelector('input[name="examAttempt"]:checked')?.value || ''
	accommodation = document.querySelector('input[name="accommodation"]:checked')?.value || ''

	document.querySelectorAll('input[name="attachments"]:checked').forEach(el => {
		attachments.push(el.value)
	})

	if (!validForm()) return

	drawPdf()
})

function capitalize(text) {
	if (!text) return ''
	return text[0].toUpperCase() + text.slice(1).toLowerCase()
}

function validatePeselDate(pesel, dob) {
	if (!/^\d{11}$/.test(pesel)) return false

	const yearPesel = parseInt(pesel.slice(0, 2), 10)
	let monthPesel = parseInt(pesel.slice(2, 4), 10)
	const dayPesel = parseInt(pesel.slice(4, 6), 10)
	let yearFull

	if (monthPesel > 80 && monthPesel <= 92) {
		yearFull = 1800 + yearPesel
		monthPesel -= 80
	} else if (monthPesel > 60 && monthPesel <= 72) {
		yearFull = 2200 + yearPesel
		monthPesel -= 60
	} else if (monthPesel > 40 && monthPesel <= 52) {
		yearFull = 2100 + yearPesel
		monthPesel -= 40
	} else if (monthPesel > 20 && monthPesel <= 32) {
		yearFull = 2000 + yearPesel
		monthPesel -= 20
	} else {
		yearFull = 1900 + yearPesel
	}

	// Tworzenie dat z PESEL i podanej daty
	const datePesel = new Date(yearFull, monthPesel - 1, dayPesel)
	const dobDate = new Date(dob)

	// Porównanie dat
	return (
		datePesel.getFullYear() === dobDate.getFullYear() &&
		datePesel.getMonth() === dobDate.getMonth() &&
		datePesel.getDate() === dobDate.getDate()
	)
}

document.getElementById('postalCode').addEventListener('input', function () {
	let val = this.value.replace(/\D/g, '')

	if (val.length > 2) {
		val = val.slice(0, 2) + '-' + val.slice(2, 5)
	} else if (val.length === 2 && !this.value.includes('-')) {
		val = val + '-'
	}

	this.value = val
})

document.getElementById('profession').addEventListener('change', function () {
	document.getElementById('nameQualification').value = ''
	const selected = this.value
	const qualSelect = document.getElementById('qualification')
	qualSelect.disabled = false
	qualSelect.innerHTML = '<option value="">-- Wybierz kod --</option>'
	if (!selected) return

	const [selectedCategory, selectedName] = selected.split('|')

	if (data[selectedCategory]) {
		data[selectedCategory].forEach(q => {
			if (q.nazwa === selectedName) {
				kod = q.kod
				if (Object.keys(q.kwalifikacje).length > 0) {
					for (const code in q.kwalifikacje) {
						const option = document.createElement('option')
						option.value = code
						option.textContent = code
						qualSelect.appendChild(option)
					}
				} else {
					const option = document.createElement('option')
					option.value = q.kod
					option.textContent = q.kod
					qualSelect.appendChild(option)
				}
			}
		})
	}
})

document.getElementById('qualification').addEventListener('change', function () {
	const selectedCode = this.value
	const nameInput = document.getElementById('nameQualification')

	if (!selectedCode) {
		nameInput.value = ''
		return
	}

	let found = false
	for (const category in data) {
		for (const q of data[category]) {
			if (q.kod === selectedCode) {
				nameInput.value = q.nazwa
				found = true
				break
			} else if (q.kwalifikacje && q.kwalifikacje[selectedCode]) {
				nameInput.value = q.kwalifikacje[selectedCode]
				found = true
				break
			}
		}
		if (found) break
	}
})
