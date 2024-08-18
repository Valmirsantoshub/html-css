 //biblioteca e codigos de terceiros
 const formatador = (data) => {
    return {
        dia: {
         numerico: dayjs(data).format('DD'),
         semana: {
            curto:  dayjs(data).format('ddd'),
            longo: dayjs(data).format('dddd'),
         }
    },
    mes: dayjs(data).format('MMMM'),
        
        hora: dayjs(data).format('HH:mm')
    }
    
 }



//object{}
const atividade = {
    nome:"almoço",
    data: new Date("2024-07-09 11:00"),
    finalizada: true
}
//lista ,array ,vetor [a,b,c]

const atividades =[
    atividade,
    {
    nome: 'academia em grupo',
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
    },
   {
     nome: 'gamming session',
    data: new Date("2024-07-09 16:00"),
    finalizada: true,
   },
]
//atividade = []

//arrow function
const criarItemDeAtividade = (atividade) => {

    let input ='<input type="checkbox"'

    if(atividade.finalizada){
       input += 'checked'
    }
    input += '>'

    const formatar = formatador(atividade.data);
    return `
    <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>
    ${formatar.dia.semana.longo},
    dia ${formatar.dia.numerico}
     de ${formatar.mes} 
     às ${formatar.hora}h</time>
  </div>
`
}


const atualizarListaDeAtividades = () => {


const section = document.querySelector('section')
section.innerHTML = ''

// verificar se a minha lista esta vazia
if(atividades.length == 0){
    section.innerHTML = '<p>Nenhuma atividade cadastrada.</p>'
    return
}

for(let atividade of atividades){ 

section.innerHTML += criarItemDeAtividade(atividade)
}

}


atualizarListaDeAtividades()


const salvaratividade = (event) => {
    event.preventDefault()
    const dadosdoformulario = new formData(event.target)

    const nome = dadosdoformulario.get('atividade')
    const dia = dadosdoformulario.get('dia')
    const hora = dadosdoformulario.get('hora')
    const data = `${dia} ${hora}`

    const novaatividade = {
    nome,
    data,
    finalizada: false
}
const atividadeExiste = atividades.find((atividade) => {
     atividade.data == novaatividade.data

})
}
if(atividadeExiste){
     alert('dia/hora não disponivel')

atividades = [novaatividade, ...atividades]
atualizarListaDeAtividades()

}


const criardiasselecao = () =>{
    const dias  = [
        "2024-02-28",
        "2024-02-29",
        "2024-03-01",
        "2024-03-02",
        "2024-03-03",
    ]

    let diasselecao = ""
    
    for(let dia of dias){
        const formatar = formatador(dia)
        const diaformatado =`
        ${formatar.dia.numerico} de
        ${formatar.mes}
        `
        diasselecao += `
        <option value="${dia}">${diaformatado}</option>`

    document
    .querySelector('select[name="dia"]')
    .innerHTML = diasselecao
    criardiasselecao()
}
}

const criarhorasselecao = () => {
    let horasdisponiveis = ""
    for(let i = 6; i < 23; i ++){
        horasdisponiveis += `<option value="${i}:00">${i}:00</option>`
        horasdisponiveis += `<option value="${i}:30">${i}:30</option>`
    }   


    document
    .querySelector('select[name="hora"]')
    .innerHTML = horasdisponiveis
    
}
criarhorasselecao()










//Academia em Grupo
//terca 09 de julho de 2024