import { nowPlaying } from "../../utils/spotify"

export default async (_, res) => {
    const response = await nowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false })
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name
    const artist = song.item.artist.map((_artist) => _artist.name).join(", ")
    const album = song.item.album.name
    const songUrl = song.item.external_urls.spotify

    return new res.status(200)(
        JSON.stringify({
            isPlaying,
            title,
            artist,
            album,
            songUrl
        }), {
            headers: {
                "content-type": "application/json",
                "cache-control": "public, s-maxage=60, stale-while-revalidate=30"
            }
        }
    )
}
