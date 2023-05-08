const toggleNavList = () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-show')
    document.querySelector('.sidebar-overlay').classList.toggle('sidebar-overlay-show')
}

const scrollToTop = () => scroll(0, 0)