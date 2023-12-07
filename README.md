# Latihan: Membuat Dashboard Menggunakan Create React App

- Project start: 5 Desember 2023
- Project finish: ....

[Image]

## Project Overview

Goal-nya adalah membuat single-page application (SPA) berupa dashboard untuk pengguna sebuah kursus online. Saya mencoba React tanpa build tool pihak ketiga, jadi langsung menggunakan Create React App yang sudah bundling dengan Webpack, babel, ESLint, dll. File ini adalah dokumentasi atau catatan saya ketika belajar. Kendala yang dihadapi dan pendekatan yang saya lakukan. Termasuk catatan sintaksis (yang lebih banyak erornya) agar bisa dicontek di lain waktu.

Desain dashboard oleh Boguslaw Podhalicz, dimodifikasi dan ditambahkan saat ngoding.

## Tech Stacks

Teknologi yang digunakan:

- React: [Create React App](https://create-react-app.dev/) v.5.01
- Router: [React Router](https://reactrouter.com/en/main) v.6.20.1
- Chart: [Apex Charts](https://apexcharts.com/) v.1.4.1
- CSS framework: [React Bootstrap](https://react-bootstrap.netlify.app/) v.2.9.1
- CSS preprocessor: Sass
- Icon: [Uicons by Flaticon](https://www.flaticon.com/uicons) v.3.0.0

## React Components

Nah, ini bagian paling membingungkan. React components terdiri dari dua jenis: **Class components dan Function components**. Perbedaan paling utama terletak pada sintaksis dan kesaktian ES6, tetapi saya tidak yakin dengan komponen mana yang paling baik untuk digunakan.

Dari hasil diskusi dengan Chat GPT (euleuh), ceunah pemilihan class components dan function components tergantung pada preferensi pribadi programmer-nya. Karena saya lebih terbiasa menggunakan function components (sintaksisnya lebih mudah dan singkat), maka saya menggunakan ini. Meski tidak menutup kemungkinan akan ada campur-sari.

### Memilah dan Memilih Elemen untuk Dijadikan Komponen

Tantangan berikutnya adalah memilah elemen-elemen mana yang akan dijadikan komponen. Seperti kata Pak Dhika, terlalu besar atau terlalu kecil sebuah komponen akan sama-sama sulit dikelola. Saya berusaha fokus pada re-usability dan scalability (baca: sebagai latihan agar tidak dibabuk sobat back-end).

### Catatan sintaksis

Eror-eror yang terjadi dan solusinya.

1. **Salah sintaksis**

Saya akan mengimpor file SVG: `import logo-react from '../icon/logo-react.svg';`

Tentu saja ini akan menyebabkan eror karena identifier-nya tidak valid. Bukan `logo-react`, seharusnya `logoReact` (camelCase) atau `logo_react` dengan underscore.

2. **Salah tipe data, yaelah**

Oke, file SVG di poin pertama akan dimasukkan ke dalam `array` seperti ini:

```javascript

// Digunakan di dalam array
const courses = [
    {
      id: 1,
      logo: 'logoReact',
      title: 'Tutorial React Paling Masuk Akal untuk Pemula',
      author: "Web Programming UNPAS",
      date: '2023-12-06',
      duration: '6h 30m',
      rating: 9.7,
      popularity: '100'
    },
]
```

Properti `logo: 'logoReact'` akan digunakan sebagai ekspresi dalam `<img src={course.logo} />`. Tetapi, ketika di-render menjadi `<img src="logoReact" />`. Jadi, apanya yang salah?

Well, lagi-lagi, saya salah menuliskan tipe data. Properti logo seharusnya ditulis `logo: logoReact` (tanpa tanda '') sehingga akan di-render sebagai objek, **bukan string**.

3. **Salah sintaksis komponen**

Berbeda dari poin pertama dan kedua, kali ini saya akan mengimpor file SVG sebagai komponen. Ini yang saya tulis:

`import { ReactComponent as logoLaravel } from '../icon/logo-laravel.svg';`

Terjadi eror: "<logoLaravel /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements."

Solusi dibetulkan menjadi `import { ReactComponent as LogoLaravel } from '../icon/logo-laravel.svg';`

Sudah tiga kali salah eja, kayaknya saya harus balik lagi belajar JavaScript dasar. :D

## Notes Adalah Catatan

Catatan lainnya.

### Routing & Folder Structure

Create React App tidak dilengkapi dengan routing, saya menggunakan React Router untuk menavigasikan halaman. Maka routing dan struktur foldernya seperti ini:

- `src/index.js` adalah entry point. Sama seperti `main.jsx` jika di React atau jika menggunakan React + Vite. `src/App.js` tidak lagi digunakan, diganti dengan `src/routes/root.js` untuk menampilkan sidenav/sidebar dan `src/routes/Dashboard.js` untuk menampilkan halaman utama.
- `src/routes/root.js` untuk menampilkan sidenav dan mengatur navigasi antarhalaman.
- `src/routes` adalah folder untuk menyimpan semua halaman.
- `src/components` adalah folder untuk menyimpan semua komponen.
- `src/icon` adalah folder untuk menyimpan semua file icon dan ilustrasi sehingga bisa diimpor sebagai komponen.

P.S. penamaan folder untuk routing bebas, yang terpenting cukup masuk akal dan **mudah dieja**.

Ekstensi file ada yang `.js` ada pula yang `.jsx`.

### CSS Framework

Ada banyak cara untuk mengatur tampilan di React. Saya menggunakan metode SCSS tradisional + framework (memanfaakan classes bawaannya saja). Barangkali ini bukan metode terbaik jika digunakan untuk project asli atau jika bekerja dengan tim.

Styling utama ditangani oleh file `src/App.scss` dan `src/index.scss` untuk global dan normalize. Untuk framework, mula-mula web aplikasi ini menggunakan Chakra UI, tetapi karena belum terbiasa, saya bingung. Maka, diganti dengan React Bootstrap agar bisa ngoding barbar. *eh

Meskipun sudah terbiasa menggunakan Bootstrap, tetapi perlu penyesuaian kembali ketika menggunakan CSS framework di React. Komponen-komponen React Bootstrap sedikit berbeda dengan Bootstrap biasa, terutama tag HTML yang di-render. Saya masih belum tahu cara paling baik memanfaatkan Webpack agar load CSS tidak besar dan agar tidak banyak unused CSS.

1. **Import**

`import { Container } from 'react-bootstrap';`
`import Container from 'react-bootstrap';`

2. **Menambahkan class pada komponen Bootstrap**

Untuk menambahkan `class` Bootstrap, gunakan props, misal `<Col md={6}></Col>`, bukan `<Col className='md-6'></Col>`. Tetapi ya tidak masalah, sih, karena keduanya akan di-render menjadi `<div class="col-md-6">`.

Jika kita menggunakan `tag HTML` biasa, kita juga bisa menggunakan `className` untuk menambahkan `class` bawaan Bootstrap. Contoh: `<div className='bg-light>'`.

3. **Utilities (ngoding barbar)**

Salah satu kendala ketika menggunakan Bootstrap adalah spacing (margin, padding, gap). Besar spacing relatif terhadap $spacer dan saya tidak tahu (lebih tepatnya malas menghitung) `mt-1` itu berapa rem atau px dan Bootstrap menggunakan atribut `!important`. So, seperti biasa, saya akan membuat spacing sendiri alias ngoding barbar.

React Bootstrap punya fungsi Theming and customizing styles. Saya tidak menggunakan itu, saya membuat `class` biasa di `App.css` dan mendeklarasikan utilites sesuai yang saya butuhkan. 

**Contoh:**

```css
.gap {
  &--40 {
  gap: 40px;
  }
  &--40-20 {
    row-gap: 40px;
    column-gap: 20px;
  }
}

.mt {
  &--50 {
    margin-top: 50px;
  }
}
```

Kemudian menambahkan `class` tersebut pada elemen atau komponen yang saya inginkan. P.S. ini bukan praktik yang solid, terutama untuk project yang dikerjakan dalam tim.

4. **Custom element untuk layout**

By default, komponen `<Container>`, `<Row>`, dan `<Col>` akan di-render menjadi `<div class="...">`. Kelemahannya adalah kita tidak bisa menggunakan tag semantic HTML seperti `<section>` atau `<article>`. Maksud saya, ketika menggunakan Bootstrap, saya terbiasa menggunakannya seperti ini:

```html
<main class="container">
  <section class="row">
    <div class="col">
    </div>
    <div class="col">
    </div>
  </section>

  <section class="row">
    <div class="col">
    </div>
    <div class="col">
    </div>
  </section>
</main>
```

Di project ini, saya ingin menggunakan teknik yang sama agar tetap menggunakan semantic HTML yang sesuai dengan `landmark` tetapi tetap mendapat keuntungan dari `class` Bootstrap. 

Ada dua cara untuk mencapai itu. Pertama membuat custom component atau extend dari komponen Bootstrap agar `<Col>` dirender sebagai, misalnya, `<section>`. Cara ini kurang fleksibel karena tidak semua `<Col>` akan dirender sebagai `<section>`, bukan?

Cara kedua adalah dengan tetap menggunakan tag HTML biasa dan memberikan `class` Bootstrap ke dalamnya. Contoh, `<section className='col'>`. Saya menggunakan cara kedua ini karena lebih fleksibel.

### Charts

Line charts dan circle chart menggunakan library pihak ketiga yaitu Apex Charts. Instalasinya cukup mudah, sayang cara membuat chart-nya agak membingungkan. Pengetahuan tentang anatomi diagram dan data visualization akan sangat membantu.

Ngomong-ngomong, karena project ini hanya slicing front-end, saya belum ada bayangan bagaimana cara memvisualisasikan data dari back-end ke dalam diagram/charts. 

## Useful Links

Projects hore-hore ini tidak akan terlaksana tanpa jasa berbagai tutorial dan bahan bacaan. Selain dokumentasi resmi masing-masing teknologi, berikut sumber-sumber yang berguna untuk mengasah pemahaman tentang React.

1. **Playlist React Web Programming UNPAS**

2. **Tutorial React W3School**

[Tutorial React](https://www.w3schools.com/react/default.asp). Cukup jelas meski tidak menyeluruh.

3. **Dokumentasi React lama**

[Legacy React](https://legacy.reactjs.org/docs/components-and-props.html). Ini dokumentasi React yang lama, tetapi lebih jelas dan mudah dipahami oleh pemula.

https://www.smashingmagazine.com/2020/05/styling-components-react/

---

Seperti kata Pak Dhika, React adalah un-opinionated library, begitu juga dengan React Bootstrap. Banyak cara untuk membangun sebuah aplikasi web menggunakan React. Bagi saya, kebebasan seperti ini cukup melegakan.

Project ini selesai dalam waktu ... hari. Belum sempurna, tetapi saya cukup puas dengan hasilnya. Dan yang terpenting, banyak hal yang saya pelajari. **(eL)**
            <div key={course.id} className="course-item row gap-1 mb-4 border-0">
          </div>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=P8MVhngACX8BD3f_&amp;list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>