function obterDados(e){
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(resp => resp.json())
    .then(resp =>{
        e.innerHTML = resp.USDBRL.bid 
    })
}