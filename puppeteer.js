const puppeteer = require('puppeteer');
const fs = require('fs');

async function createPDF() {
    let html = fs.readFileSync('h.html', 'utf-8');
    html = html.replace(/{Nome}/g, 'Joaquim')

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    // await page.$eval('input[name="campo1"]', el => el.value = 'Joaquim');
    // await page.$eval('input[name="campo1-2"]', el => el.value = 'Joaquim');
    // await page.$eval('label[for="name"]', el => el.textContent = 'Novo texto da label');
    // await page.$eval('input[type="submit"]', el => el.value = 'Cancelar');
    const pdfOptions = {
        format: 'A4',
        printBackground: true,
        margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
    };



    await page.pdf({ path: 'exemplo.pdf', ...pdfOptions });

    await browser.close();
}

createPDF();