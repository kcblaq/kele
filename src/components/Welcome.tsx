import Link from "next/link";

export default function Welcome() {
  return (
    <div className={`flex flex-col gap-4 h-full  w-full p-3 md:p-8 text-text`}>
      <h1 className=' font-bold text-3xl md:text-6xl'> Hi, I'm Kelechi </h1>
      <div className={`flex border-l-4 pl-6 rounded-tl-lg rounded-bl-lg`}>
        <p className={`font-semibold text-lg `}>

          A passionate Fullstack Software Engineer dedicated to crafting innovative and efficient solutions. With a solid foundation in both frontend and backend technologies, I bring a holistic approach to software development. My journey began with a curiosity for problem-solving, and it has evolved into a commitment to creating seamless, user-centric applications.
        </p>

      </div>
      <div className="pl-6 md:pt-12">
        <div className="transform transition-transform duration-300 hover:shadow-lg">
          <Link href={`https://calendly.com/ugwujameskelechi/30min`} target="_blank" className="border p-3 text-lg font-semibold transform transition-all hover:text-[#66FCF1] duration-300 hover:scale-110 hover:shadow hover:font-extrabold hover:shadow-white"> Schedule a call</Link>
        </div>
      </div>
    </div>
  )
}
