"use client";
import Profile from "@/components/Profile";
import RecentWork from "@/components/RecentWork";
import Welcome from "@/components/Welcome";
export default function Home() {
  return (
    <>
      <Welcome />
      <Profile />
      <RecentWork />
      <div class="relative z-[40] -mt-[50vh] h-screen bg-white">
        <h1>Project</h1>
      </div>
    </>
  );
}
