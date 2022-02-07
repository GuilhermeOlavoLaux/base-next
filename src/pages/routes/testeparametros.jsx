import { useRouter } from "next/router"
import { Fragment } from "react/cjs/react.production.min"
import Link from "next/link";

export default function Parametros() {

    const router = useRouter()

    const id = router.query.id

    const name = router.query.name

    //http://localhost:3000/routes/testeparametros?name=Guilherme&id=123
    return (
        <Fragment>
            <h1>Ola {name}, id: {id}</h1>
            <Link href='./'>
                <button>Voltar</button>
            </Link>
        </Fragment>
    )
};
