import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 h-screen flex flex-col-reverse md:flex-row items-center md:justify-around justify-center">
      <div className="lg:text-7xl text-4xl font-bold text-center md:text-left">
        <span className="text-sm font-normal text-secondary/70">
          FronEnd Developer
        </span>
        <h1>it's me</h1>
        <h1>Faiqul Washfi</h1>
        <p className="text-sm font-normal text-secondary/70 md:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          accusantium, facere voluptas suscipit sapiente iusto necessitatibus.
          Minus officiis facilis laudantium!
        </p>
      </div>
      <Image
        src="/assets/hero.svg"
        width={400}
        height={400}
        alt="Picture of the author"
        className="mt-4 animate"
      />
      <Image
        src="/assets/texture.svg"
        width={400}
        height={400}
        alt="Picture of the author"
        className="absolute right-0 top-[-25%] z-[-1]"
      />
    </div>
  );
}
