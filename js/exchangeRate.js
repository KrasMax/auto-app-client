
const EXCHANGE_RATE_URL = 'https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates';

const exchangeRate = async () => {
    let getFetch = await (await fetch(EXCHANGE_RATE_URL)).json();

    // console.log(getFetch);

    let label = document.querySelector('.label');
    let blockPurchaseUsd = document.querySelector('.block_purchase_USD');
    let blockSaleUsd = document.querySelector('.block_sale_USD');
    let blockPurchaseEur = document.querySelector('.block_purchase_EUR');
    let blockSaleEur = document.querySelector('.block_sale_EUR');
    let blockPurchaseRub = document.querySelector('.block_purchase_RUB');
    let blockSaleRub = document.querySelector('.block_sale_RUB');

    label.textContent = `Курсы валют в AlfaBank на ${getFetch.rates[0].date}`;
    blockPurchaseUsd.textContent = `${getFetch.rates[4].buyRate}`;
    blockSaleUsd.textContent = `${getFetch.rates[4].sellRate}`;
    blockPurchaseEur.textContent = `${getFetch.rates[0].buyRate}`;
    blockSaleEur.textContent = `${getFetch.rates[0].sellRate}`;
    blockPurchaseRub.textContent = `${getFetch.rates[3].buyRate}`;
    blockSaleRub.textContent = `${getFetch.rates[3].sellRate}`;
}

exchangeRate();

















