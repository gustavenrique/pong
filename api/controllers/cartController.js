import { response } from '/api/utils.js'
import { isLoggedIn } from '/api/controllers/userController.js'

export const addToCart = async gameId => {
    try {
        const userSession = (await isLoggedIn()).object

        if (!userSession)
            window.location.href = '/pages/login'

        let users = await JSON.parse(localStorage.getItem('pong_user'))

        let user = users.find(u => u.id == userSession.id)

        if (user) {
            if (user.cart && user.cart.length) {
                let alreadyAdded = user.cart.find(id => id == gameId)

                if (!alreadyAdded) 
                    user.cart = [ ...user.cart, gameId ]
                else 
                    return response(400, 'O jogo já está no carrinho.')
            } else
                user.cart = [ gameId ]
        }

        localStorage.setItem('pong_user', JSON.stringify(users))

        return response(200, 'Jogo adicionado ao carrinho com sucesso!', true)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}