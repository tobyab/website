import useSWR from "swr"

export type Repo = {
    owner: string,
    repo: string,
    link: string,
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export function GetRepo() {
    const { data, error } = useSWR(
        "https://gh-pinned-repos.egoist.dev/?username=developedbytoby",
        fetcher
    )
}
