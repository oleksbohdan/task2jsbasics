alert(`Привіт мені - ${+prompt('Скільки вам років?')} років`);

const current_year = 2020;
const users_year_of_birth = +prompt("Ваш рік народження?");
alert("Вам " + (current_year - users_year_of_birth) + " років");

let a = [+prompt('довжина сторони а'), +prompt('довжина сторони б')];
alert(`P = ${a[0] * 2 + a[1] * 2}`);

let radius = +prompt('радіус:');
alert(Math.PI* Math.pow(radius, 2));

let time = +prompt('скільки ще часу у хвилинах у вас займе подорож');
time /= 60;
const speed = 50;
alert((speed * time) + " кілометрів залишилось");

let amount = +prompt('кількість одиниць відстані');
const measurement_units = prompt('одиниця вимірювання відстані (kilometres/miles)');

if(measurement_units === "kilometres"){
    amount /= 1.61;
    alert(amount + " " + "миль");
}else if(measurement_units === "miles") {
    amount *= 1.61;
    alert(amount + " " + "кілометрів");
}


let card_amount = prompt(' грн. на картці');
let gas_price_per_litre = prompt("ціна одного літру бензину");
let rest = card_amount % gas_price_per_litre;
let litres = (card_amount - rest) / gas_price_per_litre;
alert(litres + " повних літрів, " + rest + " грн. залишилось");