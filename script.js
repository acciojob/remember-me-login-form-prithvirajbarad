//your JS code here. If required.
let formEle = document.querySelector("form");

formEle.addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	let checkEle = document.getElementById("checkbox").checked;
	alert( `${checkEle}`);
}