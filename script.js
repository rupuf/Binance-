// Fixed balance
const balance = 205.00;
document.getElementById("bigBalance").textContent = `$${balance.toFixed(2)}`;

// Demo coin list
const market = [
  { name: 'BNB', pair: 'USDT', price: 860.91, change: +0.73 },
  { name: 'BTC', pair: 'USDT', price: 108420.13, change: -0.14 },
  { name: 'ETH', pair: 'USDT', price: 3850.42, change: +1.12 },
  { name: 'SOL', pair: 'USDT', price: 172.33, change: -0.58 }
];

const container = document.getElementById("marketList");
market.forEach(m => {
  const r = document.createElement("div");
  r.className = "row";
  r.innerHTML = `
    <div class="leftcol">
      <div class="coin">${m.name} <span class="pair">/${m.pair}</span></div>
      <div class="pair">$${formatNum(m.price)}</div>
    </div>
    <div class="price">$${formatNum(m.price)}</div>
    <div><div class="change ${m.change>=0?"up":"down"}">${m.change>=0?"+":""}${m.change}%</div></div>
  `;
  container.appendChild(r);
});

function formatNum(n) {
  if (n >= 1000) return n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2});
  return n.toString();
}
