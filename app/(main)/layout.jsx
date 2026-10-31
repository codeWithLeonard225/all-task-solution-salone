// app/(main)/layout.js
"use client";

import MainFooter from "../component/MainFooter";
import MainNavbar from "../component/MainNavbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <MainNavbar />

      {/* Page Content */}
      <main className="pt-20 overflow-x-hidden">
        {children}
      </main>

      <MainFooter />
    </div>
  );
}
