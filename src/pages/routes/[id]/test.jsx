import { useRouter } from "next/router"
export default function Test() {

    const router = useRouter()


    const id = router.query.id
    return (
        <>
        <h1>Teste, id: {id}</h1>
        </>
    )
};
