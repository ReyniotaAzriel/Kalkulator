//Rumus BMI
document.getElementById('bmiform').addEventListener('submit', function(e) {
    e.preventDefault()


    //Mengambil nilai
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    //memanggil function hitung bmi
    const hasilBMI = hitungBMI(weight, height)

    //menampilkan hasil
    document.getElementById('result').innerHTML = 'Hasil BMI anda' + hasilBMI.toFixed(2)
})
    //memanggil function
    const hitungBMI =  (bb,tb) =>{
        tb = tb / 100
        return bb / (tb * tb)
    }