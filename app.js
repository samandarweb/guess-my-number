const firstName = prompt('Ismingizni kiriting')
const number = prompt('1dan 20gacha ixtiyoriy raqam kiriting!!!')
let ism = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLocaleLowerCase()
let  randomNumber = (Math.floor(Math.random() *20 ) +1).toFixed(0)
console.log(randomNumber);

if (number == randomNumber) {
    alert(`${ism} siz raqamni togri topdingiz ${randomNumber}. Tabroklayman .`)
}else if (number <= randomNumber){
    alert(`${ism} siz kiritgan raqam biroz kichik bu ${randomNumber} edi. Kiyingi safar omadingizni bersin `)
} else if (number >= randomNumber) {
    alert(`${ism} siz kiritgan raqam biroz katta bu ${randomNumber} edi. Kiyingi safar omadingizni bersin  `)
}