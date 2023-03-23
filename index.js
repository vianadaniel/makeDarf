const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
const fs = require('fs');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const image = fs.readFileSync('brasao.svg', 'utf-8');
const content = [
    { svg: image, fit: [50, 50], alignment: 'center' },
    { text: 'Ministério da Fazenda\n', alignment: 'center', bold: true },
    { text: 'Secretaria da Receita Federal do Brasil\n', alignment: 'center', bold: true },
    { text: 'Documento de Arrecadação de Receitas Federais (DARF)\n\n\n', alignment: 'center', bold: true },
    { text: 'Veja no verso instruções para preenchimento.\n\n', alignment: 'center', bold: true },
    { text: 'É vedado o recolhimento de tributos Contribuições administrados pela Secretaria da Receita Federal cujo valor total seja inferior a R$ 10,00. Ocorrendo tal situação adicione tal valor ao tributo/contribuição de mesmo código de períodos aubsequentes, até que o total seja igual ou superior a R$ 10,00.\n\n', alignment: 'center', bold: true, fontSize: 8 },
    { text: '01 Nome/Telefone: Fulano de Tal / 122-1231\n\n', bold: true },
    { text: '02 Período de apuração: 10/2021\n\n', bold: true },
    { text: '03 Número de CPF ou CGC: 123456789\n\n', bold: true },
    { text: '04 Código da receita: 5952 - Multa Isolada - Pessoa Jurídica\n\n', bold: true },
    { text: '05 Número de referência: 00000000000000000000\n\n', bold: true },
    { text: '06 Data de vencimento: 15/11/2021\n\n', bold: true },
    { text: '07 Valor principal: R$ 100,00\n\n', bold: true },
    { text: '08 Multa: R$ 0,00\n\n', bold: true },
    { text: '09 Juros: R$ 0,00\n\n', bold: true },
    { text: '10 Valor total: R$ 100,00\n\n', bold: true },
    { text: '11 Autenticação Bancária (somente nas 1ª e 2ª vias)\n\n', bold: true },
    { text: '_______________________________________________________________________________________________\n\n' },
    { text: '_______________________________________________________________________________________________\n\n' },
];

var dd = {
    content: [
        {
            style: 'tableExample',
            table: {
                widths: [250, 250],
                body: [

                    [

                        [
                            {
                                table: {
                                    border: [false, false, false, false],
                                    style: 'mainTable',
                                    headerRows: 1,
                                    widths: [50, 180],
                                    body: [
                                        [
                                            [{
                                                image: 'sampleImage.jpg',
                                                fit: [50, 50],

                                            },], [
                                                { text: 'MINISTÉRIO DA FAZENDA\n', alignment: 'left', bold: true, margin: [5, 5, 0, 2] },
                                                { text: 'SECRETARIA DA RECEITA FEDERAL DO BRASIL\n', alignment: 'left', fontSize: 8, margin: [0, 0, 0, 0] },
                                                { text: 'Documento de Arrecadação de Receitas Federais\n', alignment: 'left', fontSize: 8, margin: [0, 6, 0, 6] },
                                                { text: 'DARF\n', alignment: 'left', bold: true },
                                            ]],

                                    ]
                                },
                                layout: 'noBorders'
                            }
                        ],
                        [
                            'or a nested table',

                        ],

                    ]
                ]
            }
        },
    ],
    styles: {
        tableExample: {
            margin: [0, 5, 0, 0]
        },

        mainTable: {
            bold: true,
            fontSize: 15,
            color: 'white'
        }
    },
    defaultStyle: {
        // alignment: 'justify'
    }

}
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
