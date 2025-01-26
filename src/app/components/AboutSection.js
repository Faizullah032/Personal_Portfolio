export default function AboutSection() {
    return (
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Hi, I'm <span className="text-accent font-semibold">Faizullah</span>, a passionate web developer with experience in building modern web applications. I specialize in JavaScript, React, and Node.js, and I love creating user-friendly and efficient solutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-8">
            <img
              src="/about-image.png"
              alt="Your Portrait"
              className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-accent"
            />
            <div>
              <p className="text-lg mb-4">
                I have a strong passion for web development and enjoy solving complex problems with creative solutions.
              </p>
              <p className="text-lg">
                When I'm not coding, I enjoy exploring new places, reading tech blogs, and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }