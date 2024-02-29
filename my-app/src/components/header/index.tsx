import { ModeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 w-full h-auto">
        <ModeToggle/>
    </header>
  );
}
