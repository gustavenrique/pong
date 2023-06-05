const routes = [
    { path: '/login', requireLogin: false },
    { path: '/signup', requireLogin: false },
    { path: ['/index', '/'], requireLogin: false },
    { path: '/cart', requireLogin: true },
    { path: '/wish-list', requireLogin: true },
    { path: '/privacy', requireLogin: true },
]

const route = (/(\/[^/]+)\.html$/.exec(window.location.pathname))[1]

let requireLogin = routes.find(r => r.path == route || (Array.isArray(r.path) && r.path.includes(route)))
    .requireLogin

if (requireLogin) {
    let loggedIn = isLoggedIn()

    

    if (!loggedIn) {
        // window.location.href = '/pages/login.html'
    }
}