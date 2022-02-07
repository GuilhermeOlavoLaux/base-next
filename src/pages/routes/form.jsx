import { useState } from "react";

export default function Form(params) {
    const [nome, setNome] = useState('')
    const [usuarios, setUsuarios] = useState([])

    const [idade, setIdade] = useState(0)

    async function salvarUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })

        const resp = await fetch('/api/form')
        const usuarios = await resp.json()

        setUsuarios(usuarios)
    }

    function renderizarUsuarios() {
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.nome}</li>
        })
    }

    return (
        <div>

            <h1>Integrando com api</h1>


            <input ttype='text' value={nome} onChange={(e) => { setNome(e.target.value) }}></input>


            <input type='number' value={idade} onChange={(e) => { setIdade(e.target.value) }}></input>

            <button onClick={salvarUsuario}>Enviar</button>

            <ul>
                {renderizarUsuarios()}
            </ul>


        </div>
    )

};
