"use strict";
function get(url) {
	console.log(url);

	return fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data;
		})
		.catch(function (error) {
			console.log(error);
		});
}
