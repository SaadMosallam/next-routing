import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()
    const name = router.query.name;
    return (
      <h1>Hello {name}</h1>
    )
  }