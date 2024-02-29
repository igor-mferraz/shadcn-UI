import Header from "@/components/header";
import TeamArea from "@/components/team/team-area";

import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-start items-center flex-col">
      <Header/>
      <div className="min-h-screen w-full flex justify-center items-center">
        <TeamArea/>
      </div>
    </main>
  );
}
