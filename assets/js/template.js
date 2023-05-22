const toggleNavList = () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-show')

    var toggleButton = document.querySelector('.fa-bars')

    if (toggleButton) {
        toggleButton.classList.remove('fa-bars')
        toggleButton.classList.add('fa-x')
    } else {
        toggleButton = document.querySelector('.fa-x')
        toggleButton.classList.remove('fa-x')
        toggleButton.classList.add('fa-bars')
    }
}