const fs = require('fs');
const path = require('path');

function lerArquivosMarkdown(diretorio) {
    const diretorioCompleto = path.resolve(__dirname, diretorio);
    const arquivos = fs.readdirSync(diretorioCompleto);
    const arquivosMarkdown = arquivos.filter(arquivo => arquivo.endsWith('.md'));
    const conteudos = arquivosMarkdown.map(arquivo => {
        const caminhoArquivo = path.join(diretorioCompleto, arquivo);
        return {
            nome: arquivo,
            conteudo: fs.readFileSync(caminhoArquivo, 'utf8')
        };
    });
    return conteudos;
}

module.exports = lerArquivosMarkdown;