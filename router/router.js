import { isLoggedIn } from '/api/controllers/userController.js'

const routes = [
    { 
        path: '/not-found', 
        require_login: false
    },
    { 
        path: '/login',
        require_logout: true 
    },
    { 
        path: '/signup', 
        require_logout: true 
    },
    { 
        path: ['/index', '/', '/home'], 
        require_login: false 
    },
    { 
        path: '/cart', 
        require_login: true 
    },
    { 
        path: '/wish-list', 
        require_login: true 
    },
    { 
        path: '/terms', 
        require_login: false 
    },
    { 
        path: '/pong-coin', 
        require_login: false 
    }
]

let route = window.location.pathname.match(/\/pages\/([^/]+)/)
route = route ? '/' + route[1] : '/'

let routeObj = routes.find(r => r.path == route || (Array.isArray(r.path) && r.path.includes(route)))

const verificarLogin = async () => {
    let loggedIn = (await isLoggedIn()).object
    
    if (routeObj.require_login && !loggedIn)
        window.location.href = '/pages/login'

    else if (routeObj.require_logout && loggedIn)
        window.location.href = '/pages/home'
}

verificarLogin()