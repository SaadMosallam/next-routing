import { useRouter } from "next/router"

function Doc() {
    const router = useRouter()
    const arrayParams = router.query.params;
    console.log(arrayParams)
    if (arrayParams?.length === 2) {
        return <h1>Viewing docs for feature {arrayParams[0]} and concept {arrayParams[1]}</h1>
    }
    if (arrayParams?.length === 1) {
        return <h1>Viewing docs for feature {arrayParams[0]} </h1>
    }
    return <h1>Docs Home Page</h1>
}

export default Doc