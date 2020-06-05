//  o site que foi feito o testes é o 
//  https://www.situacao-cadastral.com/


const puppeteer = require('puppeteer');
let cpfconsultado = '' // informe o cpf, com todos os caracteres

const consultaCpf = async (cpf)=>{

    const browser = await puppeteer.launch({
        headless:false
    });

    const page = await browser.newPage();
    await page.goto("https://www.situacao-cadastral.com/")
    await page.waitFor('input[name="doc"]');
    await page.type('input[name="doc"]',cpf,{delay:185});//ira digitar automatico
    await page.keyboard.press('Enter');
    await page.waitFor('#corpo > tbody > tr:nth-child(2) >td > span > a')
    await page.screenshot({path:'consultaCPF-${cpf}.png'});

    await browser.close(); // fecha navegador
}

consultaCpf(cpfconsultado);