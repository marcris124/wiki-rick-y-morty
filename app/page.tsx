import NavbarSearch from "@/Components/main/NavbarSearch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full scrollbar-none">
       <div className="flex flex-col gap-20 ">
        <NavbarSearch/>

       </div>
    </main>
  );
}
