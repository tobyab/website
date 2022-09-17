import useSWR from "swr"

export type Repo = {
    owner: string,
    repo: string,
    link: string,
}

export function GetRepo() {
    const get = useSWR<Repo[], Error>(
        "https://gh-pinned-repos.egoist.dev/?username=developedbytoby"
    )
    return {
        ...get,
        data: get.data?.map(item => {
            const data: Repo = {
                ...item,
            }
            return data
        })
    }
}
