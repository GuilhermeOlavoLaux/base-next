//da para separar por funções
export default function questao(req, res) {
    if (req.method === 'GET') {
        getQuestao(req, res)
    } else {
        res.status(405).send()
    }

};



function getQuestao(req, res) {
    const id = req.query.id
    res.status(200).json({
        id,
        enunciado: 'Qual sua cor favorita?',
        respostas: ['Preto, Azul, Vermelho']
    })
}
