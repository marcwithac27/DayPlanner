var taskholder = document.getElementById('nine')
taskholder.textContent = localStorage.getItem('storedTask')

$('button').on('click', function(){
var storedTask = $('input').val ();
localStorage.setItem('storedTask', storedTask)
taskholder.textContent = localStorage.getItem('storedTask')
console.log(taskholder.text)
})