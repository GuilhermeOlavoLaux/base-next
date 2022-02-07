import { useRouter } from "next/router"
export default function Name() {

    const router = useRouter()

    const id = router.query.id

    const name = router.query.name

    return (
        <>
        <h1>Ola {name}, id: {id}</h1>
        </>
    )
};
