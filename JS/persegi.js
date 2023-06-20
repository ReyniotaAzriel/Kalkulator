const hitungLuas = (p,l) => p * l
const rumusBalok = () => {
    const p = document.getElementById("panjang").value
    const l = document.getElementById("lebar").value

    let  luas = hitungLuas(p,l)

const textKeliling = document.getElementById('text-keliling')
textKeliling.innerHTML = luas

}
//trigger tombol balok
const balok = document.getElementById('btn-balok')
balok.addEventListener('click', rumusBalok)

