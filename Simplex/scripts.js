
// function expression
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement(s:'.open').addEventListener('click', () => {
	selectElement(s:'.nav-list').classList.add('active');
});
//close
selectElement(s:'.close').addEventListener('click',() => {
	selectElement(s:'.nav-list').classList.remove(tokens:'active');
});

