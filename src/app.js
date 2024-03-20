import express from 'express'; 
import conexao from '../infra/conexao.js';
const app = express();

// indicar para o express ler body com json
app.use(express.json())

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}
//achar o indice do id 
function buscarIdSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}
    
// ROTAS
app.get('/selecoes', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql , id ,(erro, resultado) => {
        if(erro){
            console.log(erro)
            res.status(404).json(erro)
        } else {
            res.status(200).send(resultado)
        }   
    
    })
    })

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
   const id= req.params.id
    
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIdSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send('Seleção deletada com sucesso')
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIdSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo
    res.json(selecoes)
})
export default app