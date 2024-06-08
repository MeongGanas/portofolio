"use client";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import RecentWork from "@/components/RecentWork";
import Welcome from "@/components/Welcome";
export default function Home() {
  return (
    <>
      <Welcome />
      <Profile />
      <RecentWork />
      <Projects />
    </>
  );
}
