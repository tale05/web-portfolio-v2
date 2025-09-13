# 🌐 Web Portfolio - Tuan Anh

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

├── dist/ # Build output
├── public/ # Static assets (ảnh, favicon, ...)
├── src/ # Code React chính
│ ├── assets/ # Ảnh, logo, file tĩnh
│ ├── components/ # Component tái sử dụng (Navbar, Loader, ...)
│ ├── pages/ # Các trang (Home, Projects, Contact, ...)
│ └── App.jsx # App chính
├── .gitignore
├── index.html # File HTML gốc
├── package.json
├── tailwind.config.js # Cấu hình Tailwind
└── vite.config.js # Cấu hình Vite

## ⚙️ Cài đặt và chạy dự án

Clone project và cài đặt dependencies:

```bash
git clone https://github.com/tale05/web-portfolio.git
cd web-portfolio
npm install
```

Chạy ở môi trường development:

```npm run dev```


Build cho production:

```npm run build```


Xem thử bản build:

```npm run preview```