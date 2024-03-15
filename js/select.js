/*=============== SELECT ===============*/
let selection = document.querySelector('select');
let result = document.querySelector('.price');
selection.addEventListener('change', () => {
   result.innerText = selection.options[selection.selectedIndex].value;
//    console.log(selection.selectedIndex);
});
