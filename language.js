const dictionnary = {
	fr: {
		"toggleDetails.simple": "Présentation simplifiée",
		"toggleDetails.complete": "Présentation complète",
	},
	en: {
		"toggleDetails.simple": "Plain presentation",
		"toggleDetails.complete": "Detailed presentation",
	},
};

const frenchPage = document.getElementById("FR");
const englishPage = document.getElementById("EN");

let params = new URLSearchParams(document.location.search);
let lang = params.get("lang");

if (lang == null) {
	lang = navigator.language.slice(0, 2);
}

if (lang === "fr") {
	frenchPage.style.display = "block";
	englishPage.style.display = "none";
} else {
	frenchPage.style.display = "none";
	englishPage.style.display = "block";
}

document.querySelectorAll("[data-i18n]").forEach((element) => {
	lang = lang || "en"; // English is selected by default
	const key = element.getAttribute("data-i18n");
	element.innerHTML = dictionnary[lang][key]; // Similar to dic.lang.key but manages strings instead of tokens
});
