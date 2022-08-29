function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //pega ano com 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex') //se fosse pelo id teria que fazer duas variáveis
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //para colocar o id no elemento criado

        
        //Se o formulário sexo for da posição zero selecionado será masculino
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
            } else if (idade < 21){
                //jovem
            } else if (idade < 50){
                //adulto
            } else {
                //idoso
            }
        } else {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                //criança
            } else if (idade < 21){
                //jovem
            } else if (idade < 50){
                //adulto
            } else {
                //idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}