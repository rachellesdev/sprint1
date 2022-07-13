import prompt from 'prompt-sync'

function propCSS() {
    const ps = prompt()
    const arr = []

    while (true) {

        const prop = ps('Digite uma propriedade de CSS:')

        if (prop.toLowerCase() === 'sair') {
            console.log(arr)
            break;
        }else{
            arr.push(prop);
        }
        
    }

}

propCSS();
