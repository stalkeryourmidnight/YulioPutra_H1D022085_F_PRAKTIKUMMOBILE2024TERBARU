# pertemuan8

[Halaman Login](login.png)
[Halaman Login Berhasil](loginberhasil.png)

Penjelasan
1. database dan koneksi
cobaionic.sql
berisi skema database dan tabel yang diperlukan

koneksi.php
 menghubungkan aplikasi PHP ke database.

 2. proses login
 login.php
 menangani permintaan login seperti, query ke database dan memeriksa password cocok atau tidak

 3. modul dan routing
app/app.module.ts
konfigurasi utama untuk aplikasi Ionic, mengimpor semua modul yang diperlukan, termasuk modul untuk routing, komponen, dan layanan yang digunakan dalam aplikasi.

app/app-routing.module.ts
menentukan jalur URL untuk setiap halaman dan mengaitkannya dengan komponen yang sesuai

4. otentikasi
services/authentication.service.t
untuk menangani logika otentikasi. Ini mencakup metode untuk login, logout, menyimpan data pengguna, seperti,  login() di sini akan mengirimkan permintaan ke login.php dan menangani respons yang diterima.

5. guard
guards/auth.guard.ts
digunakan untuk melindungi rute tertentu dalam aplikasi. Misalnya, jika pengguna mencoba mengakses halaman home tanpa login, guard ini akan mencegah akses dan mengarahkan pengguna kembali ke halaman login.

guard/auto-login.guard.ts
igunakan untuk memeriksa apakah pengguna sudah terautentikasi saat aplikasi dimuat. Jika pengguna sudah terautentikasi, mereka bisa diarahkan langsung ke halaman home tanpa harus melalui halaman login.

6. halaman login dan home
app/login/login.page.html
mendefinisikan tampilan untuk halaman login. Halaman ini memiliki form untuk input username dan password, serta tombol untuk login.

app/login/login.page.ts
Ketika pengguna mengklik tombol login, metode login() akan dipanggil, yang akan menggunakan authentication.service.ts untuk memproses login.

app/home/home.page.html:
mendefinisikan tampilan untuk halaman home. Halaman ini menampilkan informasi pengguna setelah login berhasil.

app/home/home.page.ts
Ini mengambil nama pengguna dari AuthenticationService dan menyediakan metode untuk logout.