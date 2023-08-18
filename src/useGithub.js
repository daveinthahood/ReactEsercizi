import { mutate, useSWRConfig } from "swr"

const fetcher = url => fetch(url).then(response => response.json())


export function useGitHub() {
      const {data, error, } =  useSWRConfig(`https://api.github.com/user`, fetcher)
      if(!username) {
        return {
            data: null,
        }
      }


      function handleRefresh() {
        mutate()
      }

      return {
        users:data, 
        error,
        isLoading : !data && !error,
        onRefresh:handleRefresh,
      }

}
