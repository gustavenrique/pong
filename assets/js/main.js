import { isLoggedIn, signout } from '/api/controllers/userController.js'
import Toastify from '/components/toastify/toastify.js'

// general functions
export const sidebar = () => document.querySelector('.sidebar').classList.toggle('sidebar-show')

export const loading = async (isLoading, hideElement = '') => {
    let spinner = document.querySelector(".spinner-wrapper")

    if (!spinner) {
        await renderComponent("/components/spinner.html", 'body', 'afterbegin')

        spinner = document.querySelector('.spinner-wrapper')
    }
        
    spinner.classList[isLoading ? "add" : "remove"]("show")

    if (hideElement) {
        let el = document.querySelector(hideElement)

        if (el) el.classList[isLoading ? "add" : "remove"]("d-none")
    }
}

export const logOut = async () => {
    let res = await signout()

    if (res.object)
        window.location.href = '/pages/'
}

export const renderComponent = async (componentUrl, selector, position = 'beforeend') => {
    try {
        let componentHtml = await (await fetch(componentUrl)).text()

        document.querySelector(selector).insertAdjacentHTML(position, componentHtml)

        return new Promise(resolve => resolve())
    } catch (err) {
        console.error(err)
        showAlert('Ops! Ocorreu um erro no carregamento de componentes.', 'error')

        return new Promise((resolve, reject) => reject())
    }
}

export const showAlert = (message, type, duration = 3000) => {
    Toastify({
        text: message || 'Ocorreu um erro não identificado.',
        duration: duration,
        stopOnFocus: true, // Prevents dismissing of toast on hover
        position: 'right',
        style: {
            background: type == 'error' ? "#f44336" : type == 'success' ? '#4CAF50' : 'var(--first)',
            boxShadow: '0 0 5px var(--third)'
        }
    }).showToast()
}

// dynamic rendering of generic components
const setupLayout = () => {
    renderComponent('/components/head.html', 'head', 'afterbegin')
    
    if (document.querySelector('body > #navbar'))
        renderComponent('/components/navbar.html', '#navbar')
            .then(async () => {
                const navbar = document.querySelector('.navbar > .nav-list')
                const sidebar = document.querySelector('.navbar > .sidebar')
    
                const session = await isLoggedIn()
    
                let navbarContent, sidebarContent
                if (session.object) {
                    navbarContent = `
                        <a class="nav-list-item link" onclick='logOut()'>
                            <i class="fa fa-sign-out"></i>
                        </a>`
                
                    sidebarContent = `
                        <a class="sidebar-item link" onclick='logOut()'>
                            <i class="fa fa-sign-out p-10"></i> Sair
                        </a>`
                } else {
                    navbarContent = `<a href="/pages/login" class="nav-list-item link color-first" style='border-radius: 10px'>Login</a>`
                    sidebarContent = `
                        <a href="/pages/login" class="sidebar-item link">
                            <i class="fa fa-sign-in p-10"></i> Login
                        </a>`
                }
    
                navbar.insertAdjacentHTML('beforeend', navbarContent)
                sidebar.insertAdjacentHTML('beforeend', sidebarContent)
            })
    
    if (document.querySelector('body > #footer'))
        renderComponent('/components/footer.html', '#footer')
}

// scripts needed to run the generic functions
const setupFunctionality = () => {
    const declare = document.createElement('script')
    declare.textContent = "let sidebar, logOut, showAlert"
    document.body.appendChild(declare)
    
    const set = document.createElement('script')
    set.type = 'module'
    set.textContent = `
        import { sidebar as Sidebar, logOut as LogOut, showAlert as ShowAlert } from '/assets/js/main.js'
    
        sidebar = Sidebar
        logOut = LogOut
        showAlert = ShowAlert`
    document.body.appendChild(set)
}

setupLayout()
setupFunctionality()