"use strict";
const categoryListForm = document.querySelector("#categoryListForm");

document.addEventListener("DOMContentLoaded", function () {
	console.log("Has the document loaded?");
	const chuckQuote = this.querySelector("#chuckQuote");

	const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";
	get(apiUrl).then(function (response) {
		showQuote(response.value, chuckQuote);
	});

	const categorysUrl = "https://api.chucknorris.io/jokes/categories";
	get(categorysUrl).then(function (response) {
		console.log(response);
		generateCategoryList(response);
	});

	categoryListForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const newCategory = this.querySelector("select").value;
		const apiUrl = `https://api.chucknorris.io/jokes/random?category=${newCategory}`;
		get(apiUrl).then(function (response) {
			showQuote(response.value, chuckQuote);
		});
	});
});

function showQuote(quote, element) {
	element.innerText = quote;
	console.log(quote);
}

function generateCategoryList(categoryArry) {
	console.log(categoryArry);
	console.log("Is this loaded?");

	const selectElement = document.createElement("select");
	categoryArry.map(function (category) {
		const option = document.createElement("option");
		option.value = category;
		option.text = category;
		selectElement.appendChild(option);
	});
	categoryListForm.append(selectElement);
}
