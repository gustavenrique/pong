const isLoggedIn = () => {
    return JSON.parse(localStorage.getItem('pong__user'))
}