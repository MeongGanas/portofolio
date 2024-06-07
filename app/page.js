"use client";
import Profile from "@/components/Profile";
import Welcome from "@/components/Welcome";
export default function Home() {
  return (
    <>
      <Welcome />
      <Profile />
      <div class="h-screen"></div>
    </>
  );
}
