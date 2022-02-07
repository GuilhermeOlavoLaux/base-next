import { useState, useEffect } from "react"

export default function Questao(params) {
    const [questao, setQuestao] = useState()


    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])

    return (

        <>
            <h1>Questao</h1>
            <p> {questao ? questao.enunciado : 'teste'}</p>

            <p> {questao ? questao.respostas : 'teste'}</p>
            
        </>
    )
};
