import prompt from 'prompt-sync'

// testando biblioteca

const ps = prompt()

let name = ps('Digite seu nome: ')

console.log(`Olá ${name}`);

