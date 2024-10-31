TUGAS 7 PRAKTIKUM PEMROGRAMAN MOBILE
===================================


Nama  : Luthfi Emillulfata

NIM   : H1D022017

Shift Lama  : D

Shift Baru  : C

=====================================================

SCREENSHOT TAMPILAN

1. Tampilan Awal
   
   ![Screenshot 2024-10-30 220917](https://github.com/user-attachments/assets/c538ef95-cae4-4d0f-a8ea-d0184654c004)


2. Input/Memasukkan Nama dan Password

   ![Screenshot 2024-10-30 220943](https://github.com/user-attachments/assets/dbbaa6e6-46f0-4800-93b7-bb7563275393)


3. Kondisi ketika Input Nama dan Password Salah

   ![Screenshot 2024-10-30 221031](https://github.com/user-attachments/assets/99bf684e-e4f9-498c-8a66-8ea962c15554)


4. Tampilan Home

   ![Screenshot 2024-10-30 220959](https://github.com/user-attachments/assets/090ebd80-e42c-46db-afa2-720cb0186463)


5. Logout

   ![Screenshot 2024-10-30 221014](https://github.com/user-attachments/assets/d4b61568-fa1b-48a0-a2dd-fedaa287ff03)

==========================================

PENJELASAN CARA KERJA LOGIN

1. Pertama-tama kita perlu membuat Database API dan file PHP API nya, untuk pembuatan database nya saya menggunakan tools Laragon dan untuk file PHP nya itu terdiri dari 2 file antara lain file koneksi.php dan login.php; File koneksi.php digunakan agar projek ionic dan database nya itu saling terhubung satu sama lain, sedangkan file login.php digunakan untuk proses DDL dalam database sehingga bisa membuat/create user pada projek tersebut.

2. Setelah itu kita perlu membuat projek ionic nya dengan memasukkan perintah "ionic start {nama projek ionic nya}" kemudian pilih framework Angular dengan memilih template 'blank' dan modul NgModules. Lalu masuk ke direktori projek ionic tersebut.

3. Di direktori tersebut lalu masukkan perintah "npm i @capacitor/preferences". Perintah tersebut digunakan untuk menginstall berbagai packages.

4. Selanjutnya pada file app.module.ts, kita deklarasikan provideHttpClient agar aplikasi dapat berinteraksi dengan API. Deklarasi tersebut digunakan untuk mendaftarkan provideHttpClient sebagai Provider, sehingga dengan provideHttpClient() sebagai provider, komponen-komponen di aplikasi dapat mengimpor HttpClient dan menggunakannya untuk melakukan request HTTP, seperti GET, POST, PUT, dan DELETE.

Tampilan code

![image](https://github.com/user-attachments/assets/ce2d6d6f-faa6-4b89-b38e-1dc0550c7f3d)

*Tampilan code untuk mendaftarkan provideHttpClient() sebagai provider

![image](https://github.com/user-attachments/assets/4d5792a1-e6fb-476d-bcd5-3b230d265cc3)


5. Setelah itu jalankan perintah "ionic g service services/authentication". Perintah tersebut secara otomatis akan membuat Fitur service services/authentication pada folder app/

Tampilan code

![image](https://github.com/user-attachments/assets/6c663a06-4b13-4f62-bbc3-6f56492fc249)
![image](https://github.com/user-attachments/assets/a6ae2ec2-46b8-4336-a7fb-6db2b59e66d2)
![image](https://github.com/user-attachments/assets/ca7431bd-a3cf-4525-8a6c-fe53ba54f158)

Dari kode diatas dapat dilihat bahwa Kelas AuthenticationService mengelola status autentikasi pengguna dalam aplikasi menggunakan HttpClient untuk koneksi API. Selain itu juga terdapat saveData, loadData, clearData, dan logout. saveData digunakan untuk menyimpan token dan nama pengguna di perangkat, sementara loadData mengecek data yang disimpan saat aplikasi dimulai untuk memastikan status login; Lalu clearData dan logout menghapus data autentikasi dan mengatur ulang status login.


6. Selanjutnya kita masukkan perintah ionic g guard guards/auth --implements CanActivate dan ionic g guard guards/autoLogin --implements CanActivate, sehingga fitur guard auth dan autoLogin akan dibuat secara otomatis pada folder app/

Tampilan kode auth.guard.ts

![image](https://github.com/user-attachments/assets/7602af2a-9db7-42ba-b5d8-4694ac56d46c)

Kode tersebut secara intinya bahwa authGuard adalah berfungsi sebagai pelindung rute (route guard) yang mencegah akses ke rute tertentu jika pengguna tidak terautentikasi dengan kondisi, jika isAuthenticated bernilai true, akses ke rute diberikan, tetapi jika false, pengguna diarahkan ke halaman login

Tampilan kode auto-login.guard.ts

![image](https://github.com/user-attachments/assets/a9efe3a2-5a65-4cf7-9d1c-7696795544ca)

Kode autoLoginGuard adalah fungsi penjaga rute (route guard) yang mencegah pengguna yang sudah terautentikasi mengakses halaman login atau halaman terkait login lainnya, jika isAuthenticated bernilai true, pengguna diarahkan ke halaman /home, sedangkan jika tidak terautentikasi, pengguna dapat melanjutkan ke rute yang diminta

7. Setelah menambahkan guard, baik auth.guard.ts dan auto-login.guard.ts; Selanjutnya kita masukkan guard tersebut ke dalam file app-routing.module.ts

Tampilan kode

![image](https://github.com/user-attachments/assets/13e5d3a5-de88-402a-8dff-62c197f85e0e)

Kode 'AppRoutingModule' mengatur rute dalam aplikasi dan menentukan penjaga akses untuk halaman tertentu; rute /home hanya bisa diakses jika pengguna sudah login dengan "authGuard", sementara rute /login menggunakan "autoLoginGuard" agar pengguna yang sudah login diarahkan langsung ke /home. Rute default (path: '') mengarahkan pengguna ke halaman login.

8. Selanjutnya kita mengatur method" di dalam file login.page.ts dan home.page.ts

*login.page.ts

Kode LoginPage menangani logika login pengguna dengan mengambil data username dan password yang dimasukkan; jika respons menunjukkan login berhasil (status_login == 'berhasil') pengguna diarahkan ke halaman /home. Jika login gagal, metode notifikasi akan menampilkan pesan kesalahan, baik karena inputan yang salah atau inputan kosong.

![image](https://github.com/user-attachments/assets/6933f046-046f-4e06-8706-d0c2070b7d8b)
![image](https://github.com/user-attachments/assets/0b4c22fd-8766-475a-8ad1-b3f9bca5a710)

*home.page.ts

Kode HomePage menampilkan nama pengguna yang diambil dari 'AuthenticationService' dan menyediakan fungsi logout; saat pengguna memilih logout, 'logout()' dipanggil untuk menghapus status autentikasi menggunakan 'authService.logout()' dan menampilkan pesan konfirmasi logout, lalu mengarahkan pengguna kembali ke halaman login.

![image](https://github.com/user-attachments/assets/42189ba9-1c7f-4abe-84ed-e93f6ca24e06)
![image](https://github.com/user-attachments/assets/b0d14496-384b-4d7c-bec2-b0bd09bc0e31)


