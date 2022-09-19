const queryString = require('query-string');

const clientId = process.env.SPTFY_CLIENT_ID
const clientSecret = process.env.SPTFY_SECRET
const refreshToken = process.env.SPTFY_REFRESH_TOKEN

const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

const nowPlayingEndpoint = `https://api.spotify.com/v1/me/player/currently-playing`
const tokenEndpoint = `https://accounts.spotify.com/api/token/`

async function getInfo() {
    const response = await fetch(nowPlayingEndpoint, {
        method: "POST",
        headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }, body: queryString.stringify ({
            grant_type: "refresh_token",
            refreshToken
        })
    })
    return response.json()
}

export async function nowPlaying() {
    const { accessToken } = await getInfo()

    return fetch (nowPlayingEndpoint, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

/*
{
    "access_token":"BQDUt2FsTv2uwBgg28VYZEeZ4_TSIR3ZzpfRB5KE-4Rttc8XspAALmNEkz_I3QJMJeoQYT4TGB7mhlQjO8od0wQwqhLjBsRMTS8hSmVFSMCUONmCOBAO8TXsVRxxnOmKxQY47qO0WHWZhdYwTE_OAYYDKXIz32N74dJF_t97uvsmDOdP7Rwf6OPaVUuvtAu0Ms5x8pcNk91a1zcU",
    "token_type":"Bearer",
    "expires_in":3600,
    "scope":"user-read-currently-playing user-top-read"
}
*/
