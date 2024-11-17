# pertemuan10

[Halaman Login](login.png)
[Halaman Home](home.png)
[Halaman Profile](profile.png)

Penjelasan
1. main.ts
menghubungkan pinia untuk menyimpan state global aplikasi termasuk data autentikasi di 'auth.ts' dan router digunakan untuk mengarahkan pengguna setelah login berhasil atau logout, setelah router siap 'router.isReady()' aplikasi di elemen HTML dengan IF #app

2. Konfigurasi Firebase(firebase.ts)
Firebase akan diinialisasi dengan menggunakan 'initialize(firebaseConfig)' melalui konfigurasi Google Cloud Console. Kemudian konfigurasi dengan 'apikey','authDomain', dan 'projectid'.

'getAuth' digunakan untuk mengakses layaan autentikasi Firebase dan 'GoogleAuthProvider' melakukan autentikasi dengan akun Google

3. Autentikasi (auth.ts)
I. login dengan Google
a. Inisialisasi Google Auth
    menggunakan 'GoogleAuth.initialize()' dengan clienId yang telaah didaftarkan di Google Cloud Console.
b. Login 
    dengan 'GoogleAuth.signIn()' akan membuka  dialog login Google dan setelah login berhasil, Google akan mengembalikan token ID 'idToken' melalui 'googleUser.authentication.idToken'
c. Verifikasi di Firebase
    Token Id digunakan untuk membuat kredensial Google dengan 'GoogleAuthProvider.credential(idToken)' dan 'signInWithCredential(auth,credential)' akan memverifikasi kredensial dan mengauntentikasi pengguna di Firebase
d. Simpan Data Pengguna
    Firebase mengembalikan objek user yang menyimpan informasi pengguna seperti 'displayname', 'email','photoURL'

II. Logout
signOut(auth) dan GoogleAuth.signOut() akan menghapus status autentikasi pengguna di Firebase dan Google. Kemudian variabel user diatur ulan ke null, dan pengguna diarahkan ke halaman login

III Pemantauan Status Autentikasi
Pada 'onAuthStateChanged(auth, callback)' akan secara otomatis memantau perubahan status autentikasi. Jika pengguna login atau logout Firebase akan memperbarui status currentUser, yang kemudian disimpan di user

