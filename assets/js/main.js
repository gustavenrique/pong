const toggleNavList = () => document.querySelector('.sidebar').classList.toggle('sidebar-show')

const renderComponent = (componentUrl, elementId) => {
    fetch(componentUrl)
        .then(res => res.text())
        .then(html => document.getElementById(elementId).innerHTML = html)
        .catch(error => console.error('Error:', error));
}

renderComponent('../components/header.html', 'header')
renderComponent('../components/navbar.html', 'navbar')
renderComponent('../components/footer.html', 'footer')