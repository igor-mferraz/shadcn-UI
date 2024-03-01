import Header from "@/components/header";
import TeamArea from "@/components/team/team-area";


export default function Home() {
  return (
    <main className="min-h-screen flex justify-start items-center flex-col">
      <div className="min-h-screen w-full flex justify-center items-start py-2">
        <TeamArea/>
      </div>
    </main>
  );
}
