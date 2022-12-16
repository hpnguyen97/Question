var barIcon = document.querySelector('.sidebar__icon')
var sidebar = document.querySelector('.sidebar')
var closeIcon = document.querySelector('.sidebar__close__icon')
var sidebarMenu = document.querySelectorAll('.sidebar ul li')

barIcon.addEventListener('click', function() {
    sidebar.classList.add('active');
    closeIcon.classList.add('close__icon--active');
})

closeIcon.addEventListener('click', function() {
    sidebar.classList.remove('active');
    closeIcon.classList.remove('close__icon--active');
})

sidebarMenu.forEach(button => button.addEventListener('click', function() {
    sidebar.classList.remove('active');
    closeIcon.classList.remove('close__icon--active');
}))