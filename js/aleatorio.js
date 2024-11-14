const nomes = ["Kadu", "Kaueh", "Kemilly", "Kauan", "Amanda", "Kauana", "Jaqueline"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)