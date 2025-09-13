# 🌐 Web Portfolio - Tuan Anh

Website: [https://tale05.github.io/web-portfolio-v2](https://tale05.github.io/web-portfolio-v2)

Đây là dự án **Portfolio cá nhân** được xây dựng bằng **React + Vite**, mục đích để giới thiệu về bản thân, kỹ năng và các dự án web đã thực hiện.  
Website được thiết kế **responsive**, hỗ trợ **SEO cơ bản**, và có thể triển khai trên GitHub Pages hoặc hosting riêng.

## 🚀 Công nghệ sử dụng

- ⚛️ **React 18** – xây dựng UI
- ⚡ **Vite** – công cụ bundler & dev server nhanh
- 🎨 **Tailwind CSS** – thiết kế giao diện responsive
- 🛠 **ESLint** – kiểm tra code style
- 🌍 **Google Translate Widget** – hỗ trợ đa ngôn ngữ
- 📦 **GitHub Pages / Hosting** – triển khai sản phẩm

## 📂 Cấu trúc thư mục

├── dist/ # Build output</br>
├── public/ # Static assets (ảnh, favicon, ...)</br>
├── src/ # Code React chính</br>
│ ├── assets/ # Ảnh, logo, file tĩnh</br>
│ ├── components/ # Component tái sử dụng (Navbar, Loader, ...)</br>
│ ├── pages/ # Các trang (Home, Projects, Contact, ...)</br>
│ └── App.jsx # App chính</br>
├── .gitignore</br>
├── index.html # File HTML gốc</br>
├── package.json</br>
├── tailwind.config.js # Cấu hình Tailwind</br>
└── vite.config.js # Cấu hình Vite</br>

## ⚙️ Cài đặt và chạy dự án

Clone project và cài đặt dependencies:

```bash
git clone https://github.com/tale05/web-portfolio.git
cd web-portfolio
npm install
```

Chạy ở môi trường development:

```bash
npm run dev
```

Build cho production:

```bash
npm run build
```

Xem thử bản build:

```bash
npm run preview
```
