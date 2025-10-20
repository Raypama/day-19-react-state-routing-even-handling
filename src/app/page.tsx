import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full max-h-screen overflow-hidden">
      <Image
        src="/assets/rey.jpg"
        alt="home jpg"
        width={1920}
        height={1080}
        className="w-full h-full object-cover brightness-75 "
      />
      <div className="absolute top-1/2 left-[5%] w-[70%] h-[280px] -translate-y-1/2 text-white text-5xl font-bold leading-tight z-20">
        <h1
          id="multi-Hero"
          className="transition-opacity duration-400 ease-in-out cursor-pointer"
        >
          u can <span className="text-cyan-400">calls</span> reys
          <br />
          Hi, I am Web.dev
        </h1>
      </div>
    </section>
  );
}
