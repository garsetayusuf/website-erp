import React from "react";

export const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row justify-center items-center space-y-4 text-center">
          <img
            src="/about-blob.png"
            alt=""
            className="absolute left-[-200px] h-[540px]"
          />
          <div className="space-y-2 relative">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Tentang kami
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Selamat datang di Sistem ERP kami, sebuah platform yang
              didedikasikan untuk meningkatkan efisiensi dan produktivitas dalam
              mengelola bisnis Anda. Kami memahami bahwa setiap bisnis memiliki
              kebutuhan uniknya sendiri, itulah mengapa kami menyajikan solusi
              ERP yang terintegrasi untuk mendukung berbagai aspek operasional
              dan manajemen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
