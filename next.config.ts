import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // <-- هذا سيجعل المشروع ثابتاً (Static HTML)
  reactStrictMode: true,
  distDir: ".next",
  // إعدادات إضافية للتصدير الثابت
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
