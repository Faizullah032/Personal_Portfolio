
export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-accent">Home</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
            <a
              href="#contact"
              className="bg-accent text-black px-4 py-2 rounded-md hover:bg-green-600"
            >
              Hire Me
            </a>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button id="menu-toggle" className="text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-primary px-4"
      >
         <img
              src="/hero-image.png"
              alt="Your Portrait"
              className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8"
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

      {/* About Section */}
      <section id="about" className="py-20 bg-primary px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/about-image.png"
              alt="Your Portrait"
              className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <p className="mb-4">
                Hi, I'm Faizullah, a passionate web developer with experience
                in building modern web applications. I specialize in JavaScript,
                React, and Node.js, and I love creating user-friendly and
                efficient solutions.
              </p>
              <p>
                My goal is to deliver high-quality code and design that meets
                the needs of my clients and users.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <img src="/js.png" alt="JavaScript" className="w-12 h-12" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/react.png" alt="React" className="w-12 h-12" />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/bootstrap.png" alt="Bootstrap" className="w-12 h-12" />
              <p>Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/tailwind.png" alt="Tailwind CSS" className="w-12 h-12" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card */}
            <div className="bg-primary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of the project.</p>
              <a
                href="#"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo
              </a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-black px-4 py-2 rounded-md hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-secondary text-center">
        <p>&copy; 2025 Faizullah. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">GitHub</a>
          <a href="#" className="hover:text-accent">Twitter</a>
        </div>
      </footer>
    </div>
  );
}