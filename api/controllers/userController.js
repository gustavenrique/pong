import { response } from '/api/utils.js'
import { User } from '/api/models/user.js'

export const isLoggedIn = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('pong_session'))
    
        if (!user) return response(404, 'Usuário não está logado.')

        return response(200, 'Usuário está logado.', user)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}

export const login = async req => {
    try {
        if (!req.identifier || !req.password)
            return response(400, 'Todos os campos do formulário devem estar preenchidos.')

        let users = JSON.parse(localStorage.getItem('pong_user')) || []
    
        let user = users.find(u => {
            if (!u) return false
    
            return u.username == req.identifier || u.email == req.identifier
        })
    
        if (!user) return response(404, 'Usuário inexistente.')
    
        if (await hashPassword(req.password) != user.password) 
            return response(400, 'Senha incorreta.')

        localStorage.setItem('pong_session', JSON.stringify(user))

        return response(200, 'Login realizado com sucesso!', true)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}

export const signup = async req => {
    try {
        if (!req.username || !req.email || !req.password || !req.confirm)
            return response(400, 'Todos os campos do formulário devem estar preenchidos.')

        if (req.password != req.confirm)
            return response(400, 'Senha não foi confirmada corretamente.')
    
        let users = JSON.parse(localStorage.getItem('pong_user')) || []
    
        let usuarioJaExiste = users.find(u => u ? u.username == req.username || u.email == req.email : false);
    
        if (usuarioJaExiste) 
            return response(400, 'Username ou Email já cadastrado.')
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.email))
            return response(400, 'E-mail inválido. O e-mail deve seguir o seguinte exemplo: "seunome@exemplo.com"')
    
        users.push(new User (
            users.length + 1, 
            req.username, 
            req.email, 
            await hashPassword(req.password),
            new Date().toLocaleString().replace(',', '')
        ))
    
        localStorage.setItem('pong_user', JSON.stringify(users))
    
        return response(200, 'Usuário cadastrado com sucesso!', true)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}

export const signout = () => {
    try {
        localStorage.removeItem('pong_session')
    
        return response(200, 'Usuário deslogado com sucesso!', true)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}

// 'private' methods
const hashPassword = async password => {
    const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    const hashArray = Array.from(new Uint8Array(buffer));

    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}