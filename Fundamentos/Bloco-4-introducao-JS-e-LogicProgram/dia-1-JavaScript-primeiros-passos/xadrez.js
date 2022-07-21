const peca = 'azul'

switch (peca) {
    case 'cavalo':
        console.log('anda em L')
        break;
    case 'bispo':
        console.log('anda na diagonal')
        break;
    case 'torre':
        console.log('anda na vertical e horizontal')
        break;
    case 'peão':
        console.log('anda somente para frente, come na diagonal')
        break;
    case 'rainha':
        console.log('em todas direções, exceto em L')
        break;
    case 'rei':
        console.log('em todas direções, exceto em L. uma casa por vez, ')
        break;
    default:
        console.log('opção inválida!')
}