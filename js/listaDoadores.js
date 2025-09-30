import { db } from "./firebaseConfig.js"
import { getDocs, collection, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

console.log("PASSEI POR AQUI")

async function buscarDoadores() {
    const dadosBanco = await getDocs(collection(db, "funcionarios"))
    const doadores = []
    for (const doc of dadosBanco.docs) {
        doadores.push({ id: doc.id, ...doc.data() })
    }
    return doadores;
}

const listaDoadoresDiv = document.getElementById("listar-doadores")

async function carregarListaDeDoadores() {
    listaDoadorDiv.innerHTML = ' <p> Carregando Lista de doadores ...</p>'
    try {
        const doadores = await buscarDoadores()
        console.log(funcionarios)
        renderizarListaDeDoadores(doadores)
    } catch (error) {
        console.log("Erro ao carregar a lista de doadores", error);
        listaDoadorDiv.innerHTML = '<p Erro ao carregar a lista de doadores</p>'
    
    }
}

function renderizarListaDeDoadores(doador) {
    listaDoadoresDiv.innerHTML = ' '

    if (doadores.length === 0) {
        listaDoadorDiv.innerHTML = '<p> Nenhum funcionario cadastrado ainda ;(</p>'
        return
    }
    for (let doador of doadores) {
        const doadoresDiv = document.createElement("div")
        doadoresDiv.classList.add('Doador-item');
        funcionarioDiv.innerHTML = `
        <strong> Nome: </strong> ${doador.nome}<br>
        <strong> Idade: </strong> ${doador.email}<br>
        <strong> Cargo: </strong> ${doador.cnpj}<br>
        <button class="botaoExcluir" data-id="${doador.id}">Excluir</button>
        <button class="botaoEditar" data-id="${doador.id}">Editar</button>      `
        listaFuncionarioDiv.appendChild(doadorDiv)
    }
    addEventListener();
}
async function excluirFuncionario(idDoador) {
    try{
        const documentoDeletar = doc(db, "funcionarios" , idDoador)
        await deleteDoc(documentoDeletar)
        console.log("Doador com ID") + idDoador + "foi excluido"
        return true;
    }catch (erro){
        console.log("Erro ao excluir o funcionário" , erro)
        alert("Ocorreu um erro ao excluir o funcionario. Tente novamente!")
        return false;
    }
}
 async function lidarClique(eventoDeClique) {
    const botaoExcluir = eventoDeClique.target.closest('.botaoExcluir')
    if(botaoExcluir){
        const certeza = confirm("Tem certeza que deseja fazer ess exclusão")
        if(certeza){
            const idFuncionario = botaoExcluir.dataset.id;
            const exclusaoBemSucedida = await excluirFuncionario(idFuncionario)

            if(exclusaoBemSucedida){
                carregarListaDeFuncionarios();
                alert("Funcionario excluido com sucesso!")
            }
        }else{
            alert("Exclusao cancelada")
        }
    }
    const botaoEditar = eventoDeClique.target.closest('.botaoEditar')
    if(botaoEditar){
        const idFuncionario = botaoEditar.dataset.id;
        const funcionario = await buscarFuncionarioPorId(idFuncionario);

        const edicao = getValoresEditar()

        edicao.editarNome.value = funcionario.nome;
        edicao.editarIdade.value = funcionario.idade;
        edicao.editarCargo.value = funcionario.cargo;
        editar.editarId.value = funcionario.id;

        edicao.formularioEdicao.style.display = 'block';
    }
 }
 
 function getValoresEditar(){
    return {
     formularioEdicao :document.getElementById('formulario-edicao'),
     editarNome: document.getElementById('editar-nome'),
     editarIdade: document.getElementById('editar-idade'),
     editarCargo: document.getElementById('editar-cargo'),
     editarId: document.getElementById('editar-id')
 }
 }
 async function buscarFuncionarioPorId(id) {
    try{
        const funcionarioDoc = await getDocs(funcionarioDoc)
        const dadosAtual = await getDocs(funcionarioDoc)
        
        if(dadosAtual.exists()){
            return {id: dadosAtual.id, ...dadosAtual.data()}
        } else{
            console.log("Nenhum funcionario encontrado com o ID" , id);
            return null;
    }
    
 } catch (erro){
    console.log("Erro ao buscar funcionario por ID" , erro);
    alert("Ocorreu um erro ao buscar o funcionario para editar")
    return null;
 }
}
document.getElementById("botao-salvar-edicao").addEventListener("click" , async () => {
    const id = edicao.editarId.value;
    const novoDados = {
        nome: edicao.editarNome.value,
        idade: parseInt(edicao.editarIdade.value),
        cargo: edicao.editarid.value.trim()
    }


try{
    const ref = doc(db, "funcionarios", id)
    await setDoc (ref, novpDados)
    alert("Funcionario editado com sucesso!")
    edicao.formularioEdicao.style.display = 'none';
    carregarListaDeFuncionarios();
 }catch(erro){
    console.log("Erro ao salvar edicao" , erro)
    alert("Erro ao atualizar funcionário", erro)
    }

})


 function addEventListener(){
    listaFuncionarioDiv.addEventListener("click" , lidarClique)
 }




document.addEventListener("DOMContentLoaded", carregarListaDeFuncionarios)