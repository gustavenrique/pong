const getGames = async () => {
    try {
        const games = await (await fetch("../api/games.json")).json()

        return response(200, 'Games buscados com sucesso!', games)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}

const getAds = async () => {
    try {
        const games = await (await fetch("../api/games-ads.json")).json()

        return response(200, 'Games para anúncios buscados com sucesso!', games)
    } catch (err) {
        console.error(err)
        return response(500, 'Ops! Ocorreu um erro não identificado.')
    }
}
