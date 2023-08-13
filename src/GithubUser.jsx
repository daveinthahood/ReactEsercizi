import { useFetch } from "./useFetch"


export const GitHubUser = () => {
    const [data, setData] = useFetch()

    return (
        <h1> {data && data.login} </h1>
    )
}