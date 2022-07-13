import prompt from 'prompt-sync'

function propCSS() {
    const ps = prompt()
    const arr = []

    while (true) {

        const prop = ps('Digite uma propriedade de CSS:')

        if (prop.toLowerCase() === 'sair') {
            console.log(arr.sort())
            break;
        }else if (prop.length <= 0){
            console.log('O campo não pode ficar em branco.');
        }else{
            arr.push(prop);
        }
        
    }

}

propCSS();
