import { useMemo, useState } from "react"


export const FilterList = (user) => {
    const [data, setData] = useState(null)

    const filterUser = () => {
        setData(user.filter((data) => data.age > 18 ))
    }

    // uso use memo

    useMemo(() => {
        filterUser()
    }, [user])

    return (
        <>
            <h1> List </h1>
            {data &&
                    data.map((data) => { return (
                        <h1 key={data.id}>
                            id:{data.id} name{data.name} age{data.age}
                        </h1>
                    )})}
        </>
    )
}