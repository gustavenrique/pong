const toggleNavList = () => document.querySelector('.sidebar').classList.toggle('sidebar-show')

const renderComponent = (componentUrl, elementId) => {
    fetch(componentUrl)
        .then(res => res.text())
        .then(html => document.getElementById(elementId).innerHTML = html)
        .catch(error => console.error('Error:', error));
}

if (document.querySelector('#head'))
    renderComponent('../components/header.html', 'head')

if (document.querySelector('body > #navbar'))
    renderComponent('../components/navbar.html', 'navbar')

if (document.querySelector('body > #footer'))
    renderComponent('../components/footer.html', 'footer')