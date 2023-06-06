const routes = [
    { path: '/login', requireLogin: false },
    { path: '/signup', requireLogin: false },
    { path: ['/index', '/'], requireLogin: false },
    { path: '/cart', requireLogin: true },
    { path: '/wish-list', requireLogin: true },
    { path: '/privacy', requireLogin: true },
]

let route = (/(\/[^/]+)\.html$/.exec(window.location.pathname))
route = route ? route[1] : '/'

let routeObj = routes.find(r => r.path == route || (Array.isArray(r.path) && r.path.includes(route)))

const verificarLogin = async () => {
    let loggedIn = (await isLoggedIn()).object
    
    if (routeObj.requireLogin && !loggedIn)
        window.location.href = '/pages/login.html'
    
    else if ((routeObj.path == '/login' || routeObj.path == '/signup') && loggedIn)
        window.location.href = '/pages/'
}

verificarLogin()