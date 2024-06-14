import { MaterialLeitura } from "./material";

class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor (titulo: string, autor:string, numeroPagina:number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }

    exibirdetalhe(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Número de páginas: ${this.numeroPagina}`)
    }
}

class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor (titulo: string, autor:string, edicao:number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirdetalhe(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`)
    }
}

class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor (titulo: string, autor:string, dataPublicacao:Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirdetalhe(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Data de Publicação: ${this.dataPublicacao.toDateString()}`)
    }
}


const livro = new Livro("Quarto de despejo", "Caroline Maria de Jesus", 200);
const revista = new Revista("National Geographic", "John Doe", 150);
const artigo = new Artigo ("Inteligencia Artificial", "Jane Smith", new Date(2021,11,1));

livro.exibirdetalhe()
revista.exibirdetalhe()
artigo.exibirdetalhe()