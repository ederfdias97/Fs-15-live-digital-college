const semaforo ='vermelho'
const estado_atual = 'amarelo'
const atencao = 'amarelo'
const pare ='vermelho'
if (semaforo === estado_atual) {
    console.log('Pode passar, o semaforo está verde')

}
if (semaforo == atencao) {
    console.log('Cuidado ! Osemaforo está fechando')

}
if (semaforo == pare) {
    console.log('Semáforo fechado!')
}
