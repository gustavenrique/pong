const getGames = async () => {
    try {
        const games = await (await fetch("../api/games.json")).json()

        return response(200, 'Games buscados com sucesso!', games)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}