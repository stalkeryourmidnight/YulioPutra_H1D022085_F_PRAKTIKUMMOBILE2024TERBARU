# Penjelasan tugas 10 - pertemuan11
Screenshoot:
[Halaman Home Awal](homeawal.png)
[Halaman Tambah Data](tambahdata.png)
[Halaman Tambah Data Berhasil](tambahdataberhasil.png)
[Halaman Lihat Data](lihatdata.png)
[Halaman Edit Data](editdata.png)
[Halaman Edit Data Berhasil](editdataberhasil.png)
[Halaman Data Completed](datacompleted.png)
[Halaman Data Active](dataactive.png)
[Halaman Hapus Data](hapusdataberhasil.png)


Penjelasan CRUD:
1. firebase.ts
Pda file ini mengatur dan inisialisasi Firebase untuk digunakan dalam aplikasi, seperti 'getFirestore' untuk menginisialisasi Firestore database.

2. firestore.ts
File ini mengatur operasi CRUD untuk data Todo
a. Create(addTodo)
Menyisipkanatribut seperti title, description, status, createdAt, dan updateAt
b. Read (getTodos)
membaca semua dokumen dari todos pengguna yang sedang login
c. Update(updateTodo dan updateStatus)
'updateTodo' untuk update Todo berdasarkan ID tertentu. data yang diperbarui termasuk title, description dan updateAt
'updateStatus' untuk update Todo aktid atau selesai dan memperbarui 
d. Delete(deleteTodo)
Menghapus dokumen Todo berdasarkan ID

3. InputModal.vue
File ini untuk menambhakan atau mengedit Todo
a.Create
'input' akan mengirim data baru dari form input melalui 'submit'. dan jika ID tidak ada maka data Todo baru dibuat
b. Update
Jika ID Todo tersedia, data todo yang ada akabn diperbarui melalui 'submit'. dan data yang diubah dikirimkan dan diproses di file HomePage.vue
c.Read & Delete
Komponen ini hanya bertanggung jawab untuk menampilkan form

4. HomePage.vue
File ini untuk mengelola semua interaksi CRUD dengan firestoreService
a. Create
'handleSubmit' akan mengambil data Todo dari 'InputModal' dan jika 'editingId' tidak ada data baru ditambahkan melalui 'firestoreService.addTodo'
b. Read
'loadTodos' akan memuat semua data Todo (aktif dan selesai) dari Firestore 'firestoreService.getTodos'
c. Update 
'handleSubmit' jika 'editingId' ada maka data akan diperbarui melalui 'firestroeService.updateTodo'. dan 'handleStatus' akan mengubah status Todo antara aktif dan selesai melalui 'firestoreService.updateStatus'
d. Delete
'handleDelete' akan menghapus Todo dari Firestore 'firestoreService.deleteTodo'







# Penjelasan tugas 9 - pertemuan10
[Halaman Login](login.png)
[Halaman Home](home.png)
[Halaman Profile](profile.png)

Penjelasan autentikasi Mobile
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

