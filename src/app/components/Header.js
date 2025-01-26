export default function Header({ toggleTheme, darkMode, menuOpen, toggleMenu }) {
    return (
      <header className="sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-accent">Home</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="ml-4 bg-secondary text-accent px-4 py-2 rounded-md hover:bg-gray-700"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <a href="#contact" className="bg-accent text-black px-4 py-2 rounded-md hover:bg-green-600">
              Hire Me
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <a href="#home" className="block py-2 px-4 hover:bg-secondary">Home</a>
            <a href="#about" className="block py-2 px-4 hover:bg-secondary">About</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-secondary">Projects</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-secondary">Contact</a>
            <div className="flex items-center gap-4 py-2">
              <button
                onClick={toggleTheme}
                className="ml-4 bg-secondary text-accent px-4 py-2 rounded-md hover:bg-gray-700"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <a href="#contact" className="bg-accent text-black px-4 py-2 rounded-md hover:bg-green-600">
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>
    );
  }