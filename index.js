const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
const fs = require('fs');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const content = [
    { text: 'Ministério da Fazenda\n', alignment: 'center', bold: true },
    { text: 'Secretaria da Receita Federal do Brasil\n', alignment: 'center', bold: true },
    { text: 'Documento de Arrecadação de Receitas Federais (DARF)\n', alignment: 'center', bold: true },
    { text: 'Código da receita:', bold: true },
    { text: ' 5952 - Multa Isolada - Pessoa Jurídica\n\n' },
    { text: 'Nome:', bold: true },
    { text: ' Fulano de Tal\n\n' },
    { text: 'Período de apuração:', bold: true },
    { text: ' 10/2021\n\n' },
    { text: 'Número de referência:', bold: true },
    { text: ' 00000000000000000000\n\n' },
    { text: 'Valor principal:', bold: true },
    { text: ' R$ 100,00\n\n' },
    { text: 'Juros:', bold: true },
    { text: ' R$ 0,00\n\n' },
    { text: 'Multa:', bold: true },
    { text: ' R$ 0,00\n\n' },
    { text: 'Valor total:', bold: true },
    { text: ' R$ 100,00\n\n' },
    { text: 'Data de vencimento:', bold: true },
    { text: ' 15/11/2021\n\n' },
    { text: 'Autenticação mecânica\n\n' },
    { text: '________________________________________________________________________________\n\n' },
    { text: '________________________________________________________________________________\n\n' },
];

const docDefinition = {
    content,
    styles: {
        header: {
            fontSize: 18,
            bold: true,
        },
    },
};

var pdfDoc = pdfMake.createPdf(docDefinition)
pdfDoc.getBuffer(buffer => {
    fs.writeFile('./pdfs/arquivo.pdf', buffer, (err) => {
        if (err) throw err;
        console.log('Arquivo gravado com sucesso!');
    });
})
