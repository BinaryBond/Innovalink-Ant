"use client";

import { useTheme } from "@/utils/ThemeContext";

export default function BackgroundVideos() {
  const { theme } = useTheme();

  return (
    <>
      <video
        className={`fixed inset-0 w-full h-full object-cover z-[-1] ${theme === "dark" ? "block" : "hidden"}`}
        src="/Darkmode%20Bg%202k.webm"
        autoPlay
        loop
        muted
      />
      <video
        className={`fixed inset-0 w-full h-full object-cover z-[-1] ${theme === "light" ? "block" : "hidden"}`}
        src="/Lightmode%20Bg%202k.webm"
        autoPlay
        loop
        muted
      />
    </>
  );
}