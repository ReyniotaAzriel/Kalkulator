const hitungKelilingBalok = (p, l, t) => 2 * (p*l + l*t + p*t)
const hitungVolumeBalok= (p,l,t) => p*l*t
const rumusBalok = () => {

//mengambil nilai
const p = document.getElementById("Panjang").value
const l = document.getElementById("Lebar").value
const t = document.getElementById("Tinggi").value

let keliling = hitungKelilingBalok (p,l,t)


let volume = hitungVolumeBalok(p, l, t)


const textKeliling = document.getElementById("text-keliling") 

textKeliling.innerHTML = keliling
// alert('Keliling ${keliling} \nVolume ${volume}`) = =
}
 // trigger tombol balok

 const balok = document.getElementById('btn-balok')

 balok.addEventListener('click',rumusBalok)