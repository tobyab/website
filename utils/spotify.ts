const queryString = require('query-string');

const clientId = process.env.SPTFY_CLIENT_ID
const clientSecret = process.env.SPTFY_SECRET
const refreshToken = process.env.SPTFY_REFRESH_TOKEN

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

const nowPlayingEndpoint = `https://api.spotify.com/v1/me/player/currently-playing`
const tokenEndpoint = `https://accounts.spotify.com/api/token/`

async function getInfo() {
    const response = await fetch(nowPlayingEndpoint, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
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

// https://accounts.spotify.com/authorize?client_id=2c79dcf1c902442297b8eaeef22b432a&response_type=code&redirect_uri=localhost:3000&scope=user-read-currently-playing%20user-top-read