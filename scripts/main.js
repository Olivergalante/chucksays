"use strict";

document.addEventListener("DOMContentLoaded", function () {
	console.log("Has the document loaded?");
	const chuckQuote = this.querySelector("#chuckQuote");

	const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";
	get(apiUrl).then(function (response) {
		showQuote(response.value, chuckQuote);

		const categorysUrl = "https://api.chucknorris.io/jokes/categories";
		get(categorysUrl).then(function (response) {
			console.log(response);
			generateCategoryList(response);
		});
	});
});

const generateCategoryListForm = document.querySelector("#categoryListForm");

function showQuote(quote, element) {
	element.innerText = quote;
	console.log(quote);
}

function generateCategoryListForm(categoryArry) {
	console.log(categoryArry);

	const selectElement = document.createElement("select");
	categoryArry.map(function (category) {
		const option = document.createElement("option");
		option.value = category;
		option.text = category;
		selectElement.appendChild(option);
	});
	categoryList.append(selectElement);
}
