//Criando a personagem.
let nome = "Katniss Everdeen";
let classe = "Arqueira";
let nivel = 19;
let vida = 3;
let ouro = 15;
let xp = 4;

console.log(`Início da jornada de ${nome}`);
console.log(`Classe: ${classe}, Nível: ${nivel}, XP: ${xp}, Ouro: ${ouro}, Vida: ${vida}`);

//Missão.
const NOME_ARMA = "Arco e Flecha";
let DANO_BASE = 100;
const NOME_ARMADURA = "Roupa Flamejante"; 
let DEFESA_BASE = 18;   

xp += 150; //Katniss Everdeen ganhou mais 150 de XP;
ouro -= 30; //Comprou uma poção por 30 moedas de ouro;
vida += 40; //Usou a poção e recuperou 40 pontos de vida;
DANO_BASE *= 2; //A arma foi encantada, e seu dano foi dobrado

//Resultado Final.
console.log(`👩‍🎤 Herói: ${nome}`);
console.log(`🔮 Classe: ${classe}`);
console.log(`🥈 Nível: ${nivel}`);
console.log(`🏹 XP: ${xp}`);
console.log(`🥇 Ouro: ${ouro}`);
console.log(`💗 Vida: ${vida}`);

//Calculando os Atributos Finais.
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

//Exibindo os Resultados no Console.
console.log(`Ataque Total: ${ataqueTotal}`);
console.log(`Defesa Total: ${defesaTotal}`);


//1. VidaSuficiente → vida > 70.
let vidaSuficiente = vida > 70;
console.log(`Tem vida suficiente? ${vidaSuficiente}`);

//2. AtaqueForte → ataqueTotal > 60.
let ataqueForte = ataqueTotal > 60;
console.log(`Tem ataque forte? ${ataqueForte}`);

//3. NivelAvancado → nivel >= 10.
let nivelAvancado = nivel >= 10;
console.log(`Possui nível avançado? ${nivelAvancado}`);

//PodeEnfrentarGuardiao → vidaSuficiente && (ataqueForte || nivelAvancado).
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);
console.log(`Pode enfrentar o guardião? ${podeEnfrentarGuardiao}`);
console.log("");


//Narrativa da Personagem (Introdução).
console.log(`📃HISTÓRIA DA GUERREIRA: ${nome}`);
console.log("");
console.log(`Olá! Eu sou a ${nome}, da classe ${classe}, possuo o nível de ${nivel}, com vida ${vida}, XP ${xp} e com ${ouro} moedas de ouro.`);
console.log(`Utilizo a arma ${NOME_ARMA} que ganhei na arena de jogos, na edição 63 de jogos vorazes.`);
console.log(`Para reforçar minha segurança e atrair patrocinadores para os jogos, eu uso a ${NOME_ARMADURA}.`);
console.log(`Essa roupa é muito eficiente e tem dano base de ${DANO_BASE}.`);
console.log(`Os jogos vorazes é um evento que ocorre todo ano em Panem, na qual são recrutados 1 homem e 1 mulher de cada um dos 12 distritos. Eles deverão lutar e apenas 1 consiguirá sair com vida da arena.`);
console.log(`Eu sou do distrito 12, aquele que sofre mais na questão de desigualdade, fui recrutada aos jogos e começei uma rebelião.`);
console.log(`Agora sou simbolo dela, o corvo, pretendo acabar com a capital e estabelecer a paz.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}.`);
console.log(`Você acha que estou preparada para essa missão?`);

//CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1.
//Resgate seus dados do personagem anterior e adicione:

let nomePersonagem = "Katniss Everdeen";
let classePrsonagem = "Arqueira"; 
let vidaAtual = 100;
let vidaMaxima = 100;
let manaAtual = 50;
let manaMaxima = 50;
let Numeronivel = 1;
let experiencia = 0;
let MoedasOuro = 100;

//Novos atributos para batalha.
let forca = 15;
let defesa = 10;
let agilidade = 40;
let combatesVencidos = 0;

// Estado atual da história (continue de onde parou no Nível 1).
let localAtual = "Arena de jogos";
let missaoAtual = "Vencer o jogos vorazes";
console.log("");

// PRÓLOGO - Conexão com o Nível 1
console.log(`Após os eventos do ${localAtual}, nossa heroína ${nomePersonagem}`);
console.log(`da classe ${classe} se depara com um novo desafio...`);
console.log("");

//CAPÍTULO 1: Condicionais Simples na narrativa.
console.log("🎆 CAPÍTULO 1: Que comecem os jogos!");

//Verificação baseada no nível do personagem.
if (nivel >= 16) {
    console.log("⚠️ Você ainda é muito jovem, não tem idade suficiente para participar dos jogos");
    console.log("Mas " + nomePersonagem + " decide se oferecem como tributo mesmo assim, para salvar sua irmã da seleção");
}

//Verificação de recursos especiais.
if (ouro <= 20) {
    console.log("💰 Com poucas moedas você precisa de patrocinadores para sobreviver aos jogos");
}

//Verificação de classe específica.
if (classe === "Arqueira") {
    console.log("✨ O talento com arco e flecha está em você, grandes chances de ganhar");
}
console.log("");

//CAPÍTULO 2: Escolha Estratégica.
console.log("🛡️ CAPÍTULO 2: Sobreviva ou morra tentando");

// Escolha baseada em recursos.
if (ouro >= 20) {
    console.log(`💰 Com ouro suficiente, ${nomePersonagem} compra comida para sobreviver!`);
    forca += 5;
    defesa += 3;
    ouro -= 50;
    console.log(`Força e defesa aumentaram! Ouro restante: ${ouro}`);
} else {
    console.log(`💔 Sem ouro suficiente, ${nomePersonagem} deve confiar apenas em suas habilidades e agradar os patrocinadores!`);
    console.log("A cada dificuldade sua habilidades melhoram! Agilidade +2");
    agilidade += 2;
}

// Sistema de recompensas narrativo.
if (experiencia >= 100) {
    console.log(`🎉 A sabedoria é a chave para o avanço! ${nomePersonagem} sente-se mais poderoso!`);
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima; // Vida restaurada.
} else {
    console.log(`🤔 ${nomePersonagem} ainda busca mais conhecimento e experiência para seu primeiro jogo`);
    console.log(`Sabedoria atual: ${experiencia}/100`);
}
console.log("");

// CAPÍTULO 3: Os jogos com maior dificuldade começaram!
console.log("⚔️ CAPÍTULO 3: Os jogos com maior dificuldade começaram!");
let poderInimigo = 30;

// Sistema de combate inteligente baseado na situação.
if (vidaAtual <= 10) {
    console.log(`🆘 Com pouca vida, ${nomePersonagem} usa sua arama desesperadamente!`);
    console.log("Quase morrendo, da um golpe com todas sua força restante!");
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Arqueira") {
    console.log(`✨ ${nomePersonagem} canaliza todo seu poder e habilidade`);
    console.log("🔥 Mulher em chamas devastadora!");
    poderInimigo -= (forca + 60);
    manaAtual -= 10;
} else if (agilidade >= 15) {
    console.log("🏃‍♂️ Com grande agilidade, executa um ataque certeiro e ganha do adiversário!");
    poderInimigo -= forca;
} else {
    console.log("🛡️ Luta defensiva e calculada!");
    poderInimigo -= (forca / 2);
    vidaAtual += 20; // Recupera um pouco de vida.
}
console.log("");

console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nomePersonagem + " ===");
console.log("");

// EPÍLOGO - Resultado final
if (poderInimigo <= 0) {
    console.log(`🎉 VITÓRIA ÉPICA! ${nomePersonagem} Arrasou demais!`);
    experiencia += 100;
    combatesVencidos++;
    console.log(`A lenda da ${localAtual}, ${nomePersonagem} cresce...`);
} else {
    console.log(`⚔️ A batalha foi muito trabalhosa, mas ${nomePersonagem} sobrevive a luta junto com o seu parceiro Peeata!`);
}
console.log("🥇 Juntos eles conseguem vencer os jogos pela primeira vez, em dupla, representando o distrito 12");

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde a próxima aventura!");

//CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3.

//NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS.
// Inventário mágico - primeira coleção arcana.
let inventario = ["Arco e flecha", "Lança", "Roupa flamejante"];
let aliados = ["Guerreiro Peeata Mellark", "Orientador Haymitch Abernathy", "Lançador Finnick Odair"];
let inimigosEncontrados = ["Gale Hawthorne", "Presidente Snow", "Cato"];
let salasCastelo = ["Quarto de ouro", "Sala de Banquete", "Sala de treinamento"];
let tesouroColetado = [];

console.log(`🏰 ${nomePersonagem} ADENTRA O CASTELO DOS ARRAYS DA CAPITAL`);
console.log("Após vencer os jogos vorezes, a nossa heroína chega ao castela luxuoso da capital de Panem");
console.log(`Inventário inicial: ${inventario.length} itens mágicos`);
console.log("");

//CAPÍTULO 1: Finalmente chegamos à Capital!
console.log("🗝️ CAPÍTULO 1: Finalmente chegamos à Capital!");

//3.5.1. Declaração e inicialização.
let pocoesEncontradas = ["Cura tudo", "Poção anti-fome", "Beleza extraordinária"];
let armadilhasAtiradas = []; //Array vazio - será preenchido na aventura.

//3.5.2. Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

//Modificando elemento específico.
inventario[0] = "Cura tudo e mais um pouco"; //Upgrade da poção!
console.log(`✨ ${nomePersonagem} aprimorou uma poção!`);

//3.5.3. Métodos de array fundamentais.
inventario.push("Invisibilidade"); //Adiciona no final.
console.log(`💍 Novo item adicionado! Inventário: ${inventario}`);

let itemRemovido = inventario.pop(); //Remove do final.
console.log(`📤 Item removido: ${itemRemovido}`);
console.log(`🎒 Inventário atual: ${inventario}`);
console.log("");

//CAPÍTULO 2: Explorando a região!
console.log("⚔️ CAPÍTULO 2: Explorando a região!");

//Explorando cada sala do castelo usando for tradicional.
console.log(`🗺️ Começando a exploração das ${salasCastelo.length} salas`);

for (let i = 0; i < salasCastelo.length; i++) {
console.log(`🚪 Sala ${(i + 1)}: ${salasCastelo[i]}`);

//Lógica diferente para cada sala baseada no índice
if (i === 0) {
    console.log(`📜 ${nomePersonagem} encontra itens revestidos por ouro!`);
    experiencia += 50;
} else if (i === 1) {
    console.log("🥙 Há muitas comidas espalhadas pela mesa!");
    tesouroColetado.push("Comer ajuda a ficar mais forte");
} else {
    console.log(`Ocorreu um acidante com os equipamentos!`);
    vidaAtual -= 10; //Pequeno dano.
 }
}
console.log(`📊 Exploração completa! XP: ${experiencia} | Vida: ${vidaAtual}`);
console.log("");

//CAPÍTULO 3: Reunindo os aliados para a segunda edição dos jogos.
console.log("🤝 CAPÍTULO 3: Reunindo os aliados para a segunda edição dos jogos");

// Recrutando aliados com for tradicional.
console.log(`🏹 ${nomePersonagem} convoca seus aliados para conversarem`);

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log(`⚡ Aliado ${(i + 1)}: ${aliado} se junta à missão de descobrir como ganhar o jogo novamente!`);

//Cada posição no array determina habilidade especial.
if (i === 0) { //Primeiro aliado - Guerreiro Peeata Mellark.
    console.log(`🔮 Como ${aliado}, multiplica a força da equipe!`);
    forca += 50;
} else if (i === 1) { //Segundo aliado - Orientador Haymitch Abernathy.
    console.log(`🛡️ Como ${aliado}, fortalece a sabedoria e a expeiência!`);
    experiencia += 30;
} else { //Lançador Finnick Odair.
    console.log(`🏹 Como ${aliado}, aprimora as táticas de combate e melhora a agilidade!`);
    agilidade += 40;
 }
}
console.log(`🎖️ Equipe completa! Força ${forca} | Experiência: ${experiencia} | Agilidade: ${agilidade}`);
console.log("");

//CAPÍTULO 4: A batalha final de arrays
console.log("🐉 CAPÍTULO 4: Confronto ma segunda edição de jogos forazes");

//Sistema de batalha usando arrays e for tradicional
let inimigosBatalha = ["Pessoa do distrito 1", "Pessoa do distrito 10", "Pessoa do distrito 7"];
let danoRecebido = [];

console.log(`💀 ${nomePersonagem} enfrenta ${inimigosBatalha.length} inimigos épicos!`);

//Batalha usando for tradicional para controle preciso
for (let i = 0; i < inimigosBatalha.length; i++) {
let inimigo = inimigosBatalha[i];
let dano = Math.floor(Math.random() * 30) + 10; // Dano entre 10 e 39

console.log(`⚔️ Rodada ${(i + 1)} - Enfrentando: ${inimigo}`);
console.log(`💥 ${nomePersonagem} causa ${dano} de dano!`);

danoRecebido.push(dano); //Armazena dano para cálculos posteriores

//Lógica especial para cada rodada baseada no índice
if (i === 0) {
    console.log("💎 Primeira vitória! Cristais fragmentados concedem bônus!");
    tesouroColetado.push("Fragmento de Cristal");
} else if (i === 1) {
    console.log(`🌑 Segunda batalha! A luta deixa cansaço extremo, mas ${nomePersonagem} resiste!`);
    vidaAtual -= 15;
} else {
    console.log("🔥 Batalha final! O rival recua e morre! Vitória épica alcançada!");
    experiencia += 100;
    tesouroColetado.push("Ouro em grande quantidade");
 }
}

//Calculando estatísticas da batalha usando for tradicional
let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
    danoTotal += danoRecebido[i];
    console.log(`📊 Rodada ${(i + 1)} - Dano: ${danoRecebido[i]}`);
}

console.log(`⚡ Dano total causado: ${danoTotal}`);
console.log(`🏆 Tesouros coletados: ${tesouroColetado.length} itens épicos!`);
console.log("");

