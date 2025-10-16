import { Navbar, Footer } from "@/utilities";
import Hero from "./hero/hero";
import Contact from "./contact/contact";
import Blog from "./blog/blog";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen w-full h-full font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start w-full h-full">
          <Navbar />
          <Hero />
          <Blog />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
