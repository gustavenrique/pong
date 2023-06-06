const toggleNavList = () => document.querySelector('.sidebar').classList.toggle('sidebar-show')

const renderComponent = (componentUrl, elementId) => {
    fetch(componentUrl)
        .then(res => res.text())
        .then(html => document.getElementById(elementId).innerHTML = html)
        .catch(error => console.error('Error:', error));
}

const showAlert = (message, type, duration = 3000) =>
    Toastify({
        text: message || 'Ocorreu um erro não identificado.',
        duration: duration,
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type == 'error' ? "#f44336" : type == 'success' ? '#4CAF50' : 'var(--first)',
            boxShadow: '0 0 5px var(--third)'
        }
    }).showToast()

if (document.querySelector('#head'))
    renderComponent('../components/header.html', 'head')

if (document.querySelector('body > #navbar'))
    renderComponent('../components/navbar.html', 'navbar')

if (document.querySelector('body > #footer'))
    renderComponent('../components/footer.html', 'footer')