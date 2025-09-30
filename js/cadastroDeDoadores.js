import{db} from './firebaseConfig.js'
import {collection, addDoc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
function getInput(){
    return{
    nome: document.getElementById("nome"),
    idade: document.getElementById("email"),
    cargo: document.getElementById("cnpj")
}
}
function getValores({nome,idade, cargo}){
    return{
        nome: nome.value.trim(),
        idade: parseInt(idade.value),
        cargo: cargo.value.trim()
    }
}
document.getElementById("botaoEnviar").addEventListener("click" , async function(){
    const Inputs = getInput()
    const dados = getValores(Inputs)

    console.log("Dados" , dados)

    try {
        const ref = await addDoc(collection(db, "funcionarios"), dados)
        console.log("ID do documento", ref.id)          
        alert("doador cadastrado com sucesso")

    }catch (e){
        console.log("Erro:" , e)

    }



})

