function calcular(event){
    event.preventDefault();//Esta função faz com que o está dentro do input não seja removido depois do submit

    let peso = Number(document.getElementById('peso').value)

    let altura =Number(document.getElementById('altura').value)

    let resultado= peso/(altura*altura)

    let define = 0

    console.log(resultado)

    if(resultado < 18.5){
        define = 'Desnutrido'
    }
    else if(resultado < 24.9 && resultado > 18.5){
        define = 'Normal'
    }
    else if(resultado < 29.9 && resultado > 24.9){
        define = 'SobrePeso'
    }
    else if(resultado < 34.9 && resultado > 30.0){
        define = 'Obesidade grau I'
    }
    else if(resultado < 39.9 && resultado > 35.0){
        define = 'Obesidade grau II'
    }
    else{
        define = 'Obesidade grau III'
    }

    let areaResultado = document.getElementById('resultado')

    areaResultado.innerHTML = 'Resuldado: '+ define

    peso = document.getElementById('peso').value = ''
    altura = document.getElementById('altura').value = ''
}   