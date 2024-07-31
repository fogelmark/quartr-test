import Buttons from "@/components/buttons"
import Image from "next/image"
import laptop from "../images/devmaster.jpg"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <section className="flex w-full flex-grow justify-between gap-16">
        <div className="flex w-1/2 flex-col gap-6 pl-16">
          <h1 className="text-8xl font-semibold">Shape Your Tech Career</h1>
          <div className="text-2xl text-slate-500">
            Advanced Coding Courses for Future Innovators
          </div>
          <Buttons />
            <p className="text-gray-800 mb-4">
              Join Our Community of 10,000+ graduated students. We offer a wide range of coding courses for beginners and advanced developers.
            </p>
          </div>
        <div className="relative w-1/2 shadow-xl shadow-black/50">
          <Image
            src={laptop}
            alt={"Image of a laptop"}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-lg"
          />
        </div>
      </section>
    </main>
  )
}
