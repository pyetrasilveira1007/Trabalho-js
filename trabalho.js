
let contador = 0;
let continuar = "sim"; 

while (continuar === "sim") {
    let nome = prompt("Digite o nome do cliente:");
    
    // Adiciona 1 ao contador a cada nome digitado
    contador = contador + 1; 
    
   
    continuar = prompt("Deseja inserir mais nomes? (sim/nao)");
}

alert("Quantidade de clientes cadastrados: " + contador);