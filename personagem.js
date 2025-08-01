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
const DANO_BASE = 50;
const NOME_ARMADURA = "Roupa Flamejante"; 
const DEFESA_BASE = 18;   

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

//Calculando os Atributos Finais
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

//Exibindo os Resultados no Console.
console.log(`Ataque Total: ${ataqueTotal}`);
console.log(`Defesa Total: ${defesaTotal}`);