export default function HeroSection() {
    return (
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center from-gray-900 to-primary px-4"
      >
        <img
          src="/hero-image.png"
          alt="Your Portrait"
          className="w-40 h-40 rounded-full mb-6 border-4 border-accent"
        />
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-accent">Faizullah</span>
        </h2>
        <p className="text-lg md:text-2xl mb-6">
          I create beautiful and efficient web applications.
        </p>
        <a
          href="#projects"
          className="bg-accent text-black px-6 py-3 rounded-md text-lg hover:bg-green-600"
        >
          View My Work
        </a>
      </section>
    );
  }