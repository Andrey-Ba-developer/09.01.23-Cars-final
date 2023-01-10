const select = document.querySelector('select');
const allLang = ['en', 'ru'];


select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	document.querySelector('.lng-intro__title').innerHTML = langArr['intro__title'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}


changeLanguage();