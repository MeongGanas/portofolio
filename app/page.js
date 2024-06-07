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
      <div class="h-screen bg-white">
        <h1>Project</h1>
      </div>
    </>
  );
}
