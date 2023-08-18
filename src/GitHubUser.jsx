import { useSWRConfig } from "swr"

const fetcher = url => fetch(url).then(response => response.json())


export function GitHubUser() {
      const {data, error, } =  useSWRConfig(`https://api.github.com/user`, fetcher)

    return (
         <>
            {!data && !error && <h3> Loading </h3>}
            {error && <h3> C'è stato un errore </h3>}
            {data && !error && <ul>
                {data.map(user => (
                    <li key={user.login}> {user.login} </li>
                ))}
            </ul>
            } 
        </>
    )
}