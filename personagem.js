//Criando a personagem.
let nome = "Katniss Everdeen";
let classe = "Arqueira";
let nivel = 19;
let vida = 3;
let ouro = 15000;
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

//Narrativa da Personagem.
console.log(`📃HISTÓRIA DA GUERREIRA: ${nome}`);
console.log(`Olá! Eu sou a ${nome}, da classe ${classe}, possuo o nível de ${nivel}, com vida ${vida}, XP ${xp} e com ${ouro} moedas de ouro.`);
console.log(`Utilizo a arma ${NOME_ARMA} que ganhei na arena de jogos, na edição 63 de jogos vorazes.`);
console.log(`Para reforçar minha segurança e atrair patrocinadores para os jogos, eu uso a ${NOME_ARMADURA}.`);
console.log(`Essa roupa é muito eficiente e tem dano base de ${DANO_BASE}.`);
console.log(`Os jogos vorazes é um evento que ocorre todo ano em Panem, na qual são recrutados 1 homem e 1 mulher de cada um dos 12 distritos.`);
console.log(`Eu sou do distrito 12, aquele que sofre mais na questão de desigualdade, fui recrutada aos jogos e começei uma rebelião.`);
console.log(`Agora sou simbolo dela, o corvo, pretendo acabar com a capitar e estabelecer a paz.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}.`);
console.log(`Você acha que estou preparada para essa missão?`);