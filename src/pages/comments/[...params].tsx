import { useRouter } from "next/router"

function CommentsCatchAll() {
    const router = useRouter()
    const arrayParams = router.query.params;
    console.log(arrayParams)
    if (arrayParams?.length) return (arrayParams as string[]).map((param: string) => <h1 key={param}>{param}</h1>)
    return <h1>No comments here</h1>
}

export default CommentsCatchAll