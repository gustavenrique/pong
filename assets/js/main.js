

// general functions
const toggleNavList = () => document.querySelector('.sidebar').classList.toggle('sidebar-show')

const loading = isLoading => {
    document.querySelector(".spinner-wrapper").classList[isLoading ? "add" : "remove"]("show")
}

const logOut = async () => {
    let res = await signout()

    if (res.object)
        window.location.href = './'
}

const renderComponent = async (componentUrl, elementId) => {
    try {
        let componentHtml = await (await fetch(componentUrl)).text()

        document.getElementById(elementId).innerHTML = componentHtml

        return new Promise(resolve => resolve())
    } catch (err) {
        console.error(err)
        showAlert('Ops! Ocorreu um erro no carregamento de componentes.', 'error')

        return new Promise((resolve, reject) => reject())
    }
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

// dynamic rendering of generic components
if (document.querySelector('#head'))
    renderComponent('../components/head.html', 'head')

if (document.querySelector('body > #navbar'))
    renderComponent('../components/navbar.html', 'navbar')
        .then(async () => {
            const navbar = document.querySelector('.navbar > .nav-list')
            const sidebar = document.querySelector('.navbar > .sidebar')

            const session = await isLoggedIn()

            let navbarContent, sidebarContent
            if (session.object) {
                navbarContent = `
                    <a target="_blank" class="nav-list-item link" onclick='logOut()'>
                        <i class="fa fa-sign-out"></i>
                    </a>`
            
                sidebarContent = `
                    <a class="sidebar-item link" onclick='logOut()'>
                        <i class="fa fa-sign-out p-10"></i> Sair
                    </a>`
            } else {
                navbarContent = `<a href="/pages/login.html" target="_blank" class="nav-list-item link">Login</a>`
                sidebarContent = `
                    <a href="/pages/login.html" target="_blank" class="sidebar-item link">
                        <i class="fa fa-sign-in p-10"></i> Login
                    </a>`
            }

            navbar.insertAdjacentHTML('beforeend', navbarContent)
            sidebar.insertAdjacentHTML('beforeend', sidebarContent)
        })

if (document.querySelector('body > #footer'))
    renderComponent('../components/footer.html', 'footer')