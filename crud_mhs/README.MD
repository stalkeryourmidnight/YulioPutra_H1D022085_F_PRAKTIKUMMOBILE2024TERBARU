# pertemuan 9 atau tugas ke 8
Nama        : Yulio Putra
NIM         : H1D022085
Shift Baru  : F

Screenshoot:
[Halaman Data Mahasiswa](datamahasiswa.png)
[Halaman Tambah Mahasiswa](tambahmahasiswa.png)
[Halaman Edit Mahasiswa](editmahasiswa.png)
[Halaman Hapus Mahasiswa](hapusmahasiswa.png)

Penjelasan CRUD
1. Data Mahasiswa (Read)
jadi pada metode getMahasiswa() berfungsi untuk mengambil dan menampilkan daftar data dari mahasiswa dari API, kemudian proses ini yang menggunakan metode 'this.api.tampil('tampil.php')' untuk mengambil endpoint dari API tampil.php. setelah itu data akan diterima dan disimpan dalam 'dataMahasiswa' lalu ditampilkan. Kemudian untuk hasil outputnya jika berhasil maka data mahasiswa akan ditampilkan dan jika sebaliknya maka akan muncul informasi data harus diisi terlebih dahulu.

2. Tambah Data Mahasiswa (Create)
Pada metode tambahMahasiswa() memiliki sebuah fungsi sebagai menambaha data mahasiswa ke database melalui API. Kemuudian proses pertama dari metode ini adalah akan memasitikan bahwa nama dan jurusan tidak kosong, jika valid data akan dikirimkan ke API endpoint 'tambah.php' yang menggunakan metode 'this.api.tambah(data, 'tambah.php')' kemudian jika sukses data mahasiswa terefresh dan langsung direct ke halaman read dan jika gagal maka akan muncul informasi data harus diisi terlebih dahulu

3. Edit Data Mahasiswa (Update)
Pada metode editMahasiswa() berfungsi sebagai memperbarui data mahasiswa yang ada di database, kemudian proses ini akan mengambil data terlebih dahulu berdasarkan id yang menggunakan metode "ambilMahasiswa(id:any)". Setelah data berhasil diambil editMahasiswa() akan mengirim data yang diubah ke API 'edit.php'. Jika sukses data akan diupdate di tampilan dan data mahasiswa dperbarui

4. Hapus Data Mahasiswa (Delete)
Pada metode hapusMahasiswa(id:any) berfungsi sebagai menghapus data mahasiswa dari database berdasarkan id yang dipilih, kemudian proses ini akan memanggil API dengan endpoint 'hapus.php?id=' dan menambahkan id mahasiswa yang akan dihapus, setelah berhasil getMahasiswa() dipanggil kembali untuk memperbarui data mahasiswa di tampilan