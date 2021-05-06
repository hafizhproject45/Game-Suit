var tanya = true;
while (tanya) {
    // Menangkap pilihan player
    var p = prompt('Pilih : Gunting, Kertas, Batu');
    // Menangkap pilihan computer

    // Bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gunting';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'kertas';
    } else {
        comp = 'batu';
    }


    var hasil = '';
    // Rules
    if (p == comp) {
        hasil = 'seri'
    } else if (p == 'gunting') {
        if (comp == 'kertas') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else if (p == 'kertas') {
        if (comp == 'batu') {
            hasil = 'MENANG!'
        } else {
            hasil = 'KALAH!';
        }
    } else if (p == 'batu') {
        if (comp == 'gunting') {
            hasil = 'MENANG!'
        } else {
            hasil = 'KALAH!';
        }
    } else {
        hasil = 'Memasukan pilihan yang salah!';
    }
    // Hasil

    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka Hasilnya : kamu ' + hasil)

    tanya = confirm('Main lagi?')
}
alert('Terima Kasih sudah bermain')