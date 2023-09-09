// Data pendaftar
const pendaftar = [];

// Fungsi untuk menampilkan tab yang aktif
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (const tab of tabcontent) {
        tab.style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (const tablink of tablinks) {
        tablink.classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Fungsi untuk submit form
function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uangSangu').value);

    if (nama.length >= 10 && umur >= 25 && uangSangu >= 100000 && uangSangu <= 1000000) {
        // Menambahkan pendaftar ke tabel
        const table = document.getElementById('pendaftarTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        cell1.innerHTML = nama;
        cell2.innerHTML = umur;
        cell3.innerHTML = uangSangu;

        // Menambahkan pendaftar ke array
        pendaftar.push({ nama, umur, uangSangu });

        // Menghitung rata-rata
        const totalUangSangu = pendaftar.reduce((acc, p) => acc + p.uangSangu, 0);
        const totalUmur = pendaftar.reduce((acc, p) => acc + p.umur, 0);
        const avgUangSangu = totalUangSangu / pendaftar.length;
        const avgUmur = totalUmur / pendaftar.length;

        // Memperbarui tampilan rata-rata
        document.getElementById('avgUangSangu').textContent = avgUangSangu.toFixed(2);
        document.getElementById('avgUmur').textContent = avgUmur.toFixed(2);

        // Mengosongkan form
        document.getElementById('nama').value = '';
        document.getElementById('umur').value = '';
        document.getElementById('uangSangu').value = '';
    } else {
        alert('Mohon isi form dengan benar.');
    }
}
