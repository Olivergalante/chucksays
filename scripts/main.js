"use strict";

document.addEventListener("DOMContentLoaded", function () {
	console.log("Has the document loaded?");

	const fetchQuote = fetch(
		"https://api.chucknorris.io/jokes/o8a2hwedsl229fyvwikkxq?category=dev"
	);
	const chuckQuote = this.querySelector("#chuckQuote")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			showQuote(data.value, chuckQuote);
			return data;
		});
});

function showQuote(quote, element) {
	element.innerText = quote;
	console.log(quote);
}
