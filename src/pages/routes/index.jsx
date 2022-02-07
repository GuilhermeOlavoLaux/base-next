import Link from "next/link";
import { Fragment } from "react/cjs/react.production.min";
import router, { useRouter } from 'next/router'

export default function index() {


    function navegar(url) {
        router.push(url)
    }

    function navegarParametrosInteligente(id, name) {
        router.push({
            pathname: '/routes/testeparametros',
            query: {
                id: id,
                name: name
            }

        })
    }


    return (
        <Fragment>
            <h1>Sou o index</h1>

            <ul>
                <li>
                    <Link href='routes/testeparametros?name=guilherme&id=123'>
                        <button>Teste Parametros</button>
                    </Link>
                </li>
            </ul>


            <h1>Navegação por push</h1>

            <button onClick={() => { navegar('routes/123/test') }}>Teste</button>


            <h1>Navegação utilizando parametros</h1>
            <ul>
                <li>
                    <button onClick={() => { navegarParametrosInteligente('134', 'guilherme') }}>Teste</button>
                </li>
                <li>
                    <button onClick={() => { navegarParametrosInteligente('135', 'guilherme') }}>Teste 2</button>
                </li>
            </ul>

        </Fragment>
    )
};
