import { useGitHub } from "./useGithub";


export function GitHubUser() {
    const {users, error, isLoading, onRefresh } = useGitHub()

    return (
        <div>
            <button onClick={onRefresh}> </button>
            {isLoading && <h3> Loading </h3>}
            {error && <h3> Errore </h3>}
            {users && (
                <ul>
                    {users.map((users) => (
                        <li key={users.login}> {users.login} </li>
                    ))}
                </ul>
            )}
        </div>
    )
}