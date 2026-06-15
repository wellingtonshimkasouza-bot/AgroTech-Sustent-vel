// ======================================
// 🌱 AgroTech Sustentável - Agrinho 2026
// 👨‍🌾 Participante: Wellington
// ======================================


let nome = "Wellington";

let arvores = 0;

let pontos = 0;

let perguntaAtualIndex = 0;



// Banco de perguntas do Quiz

const perguntasQuiz = [

{
pergunta: "O uso consciente da água ajuda a preservar o meio ambiente?",
resposta: true
},

{
pergunta: "A agricultura de precisão utiliza tecnologias para reduzir desperdícios?",
resposta: true
},

{
pergunta: "O desmatamento melhora a qualidade do solo?",
resposta: false
},

{
pergunta: "A energia solar é uma fonte renovável de energia?",
resposta: true
},

{
pergunta: "Queimar resíduos agrícolas é a melhor prática sustentável?",
resposta: false
}

];





// Inicialização

window.onload = function(){

document.getElementById("boasVindas").innerHTML =
"🌱 Bem-vindo, " + nome + "! Sua missão sustentável começou.";

carregarPergunta();

atualizar();

};







// ================================
// Atualização geral do sistema
// ================================


function atualizar(){



document.getElementById("arvores").innerText = arvores;



let pontosExibicao = pontos;


if(pontosExibicao > 100){

pontosExibicao = 100;

}


if(pontosExibicao < 0){

pontosExibicao = 0;

}



document.getElementById("pontos").innerText = pontosExibicao;



document.getElementById("progresso").style.width =
pontosExibicao + "%";




let nivel = document.getElementById("nivel");



if(pontosExibicao < 35){

nivel.innerHTML =
"🌱 Nível Iniciante";

}


else if(pontosExibicao < 70){

nivel.innerHTML =
"🌿 Produtor Consciente";

}


else{

nivel.innerHTML =
"🌳 Mestre Sustentável";

}



verificarConquistas();


}







// ================================
// 🌳 Plantar árvore
// ================================


function plantarArvore(){


arvores++;

pontos += 8;



document.getElementById("mensagemArvore").innerHTML =
"🌱 Árvore plantada! +8 pontos para Wellington.";



atualizar();


}







// ================================
// 📝 Quiz
// ================================


function carregarPergunta(){


document.getElementById("pergunta-quiz").innerText =
perguntasQuiz[perguntaAtualIndex].pergunta;


document.getElementById("resultadoQuiz").innerText = "";


let botoes =
document.querySelectorAll(".btn-quiz");


botoes.forEach(botao=>{

botao.disabled = false;

});


}





function verificarQuiz(respostaUsuario){


let correta =
perguntasQuiz[perguntaAtualIndex].resposta;


let resultado =
document.getElementById("resultadoQuiz");



let botoes =
document.querySelectorAll(".btn-quiz");


botoes.forEach(botao=>{

botao.disabled = true;

});




if(respostaUsuario === correta){


pontos += 15;


resultado.innerHTML =
"✅ Correto! +15 pontos";


}

else{


pontos -= 5;


resultado.innerHTML =
"❌ Resposta incorreta. Continue aprendendo!";


}



atualizar();



setTimeout(()=>{


perguntaAtualIndex++;



if(perguntaAtualIndex >= perguntasQuiz.length){

perguntaAtualIndex = 0;

}



carregarPergunta();



},2000);



}







// ================================
// 🚜 Produção inteligente
// ================================


function simularProducao(){



let eficiencia =
Math.floor(Math.random()*41)+60;



document.getElementById("simulacao").innerHTML =

"🚜 Eficiência da produção: "
+ eficiencia + "%";



pontos += 5;



atualizar();


}







// ================================
// 💧 Impacto ambiental
// ================================


function calcularImpacto(){



let impacto =
90 - (arvores * 5);



if(impacto < 5){

impacto = 5;

}



document.getElementById("impacto").innerHTML =

"🌎 Pegada ecológica: "
+ impacto + "%";



pontos += 5;



atualizar();


}







// ================================
// 🏅 Sistema de conquistas
// ================================


function verificarConquistas(){


let conquista =
document.getElementById("conquista");



if(pontos >= 90){


conquista.innerHTML =

"🏆 Selo Mestre do Agro Sustentável - Wellington criou uma fazenda modelo do futuro!";


}


else if(pontos >= 60){


conquista.innerHTML =

"🥈 Selo Produtor Consciente - Excelente uso da tecnologia e sustentabilidade!";


}


else if(pontos >= 30){


conquista.innerHTML =

"🥉 Selo Agricultor Iniciante - Primeiros passos rumo ao agro sustentável!";


}



}








// ================================
// 🏆 Resultado final
// ================================


function verificarFinal(){



let final =
document.getElementById("final");



if(pontos >= 85){


final.innerHTML =

"🏆 Parabéns Wellington! Sua fazenda recebeu o Selo Verde de Sustentabilidade do AgroTech!";


}


else{


final.innerHTML =

"🌱 Continue realizando desafios para alcançar o selo sustentável.";


}



}








// ================================
// 🌙 Tema escuro
// ================================


function alternarTema(){



document.body.classList.toggle("dark");



let botao =
document.getElementById("btn-tema");



if(document.body.classList.contains("dark")){


botao.innerHTML =
"☀️ Modo Claro";


}


else{


botao.innerHTML =
"🌙 Modo Escuro";


}



}








// ================================
// 🤖 AgroIA
// ================================


function perguntarIA(){



let pergunta =
document.getElementById("input-ia").value
.toLowerCase();



let caixa =
document.getElementById("resposta-ia-box");


let resposta =
document.getElementById("resposta-ia");




if(pergunta==""){


alert("Digite uma pergunta!");

return;


}




caixa.style.display="block";


resposta.innerHTML="Pensando...";




setTimeout(()=>{



let texto =

"A tecnologia sustentável ajuda o agricultor a produzir mais preservando os recursos naturais.";




if(pergunta.includes("água") ||
pergunta.includes("irrigação")){


texto =

"Sistemas inteligentes de irrigação economizam água e melhoram o desenvolvimento das plantas.";

}



else if(pergunta.includes("energia") ||
pergunta.includes("solar")){


texto =

"A energia solar é renovável e pode reduzir custos no campo.";

}



else if(pergunta.includes("drone") ||
pergunta.includes("tecnologia")){


texto =

"Drones e sensores ajudam no monitoramento das plantações e reduzem desperdícios.";

}



else if(pergunta.includes("solo")){


texto =

"O cuidado com o solo mantém a produtividade e evita erosão.";

}



resposta.innerHTML = texto;



pontos += 4;


atualizar();



document.getElementById("input-ia").value="";



},1200);



}