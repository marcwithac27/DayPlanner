var taskholder = document.getElementById('nine')
taskholder.textContent = localStorage.getItem('storedTask')
var time = moment().format('LLLL')

timeEl = document.getElementById('currentDay')
timeEl.append(time)
console.log(time)
$('button').on('click', function(){
var storedTask = $('input').val ();
localStorage.setItem('storedTask', storedTask)
taskholder.textContent = localStorage.getItem('storedTask')
console.log(taskholder.text)
})