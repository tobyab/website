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

    return res.status(200).json({
        isPlaying,
        title,
        artist,
        album,
        songUrl
    })
}
