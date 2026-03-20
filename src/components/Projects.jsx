import CMS from "../assets/CMS.png";
import Reversi from "../assets/Reversi.gif";
import Chess from "../assets/Chess.png";
import FileExplorer from "../assets/File Explorer.jpg";
import VisionGo from "../assets/VisionGo.png";
import TicTacToe from "../assets/tic-tac-toe.png";
const projects = [
  {
    title: "VisionGo",
    description: "A Flutter-based smart surveillance app featuring real-time object detection, camera integration, and security monitoring and Real Time notifications",
    image: VisionGo,
    github: "https://github.com/Toheed-Ali/VisionGo"
  },
  {
    title: "University Management",
    description: "Full-stack University Management System built with React and Node.js to manage academic operations. It enables faculty to efficiently handle enrollments, and academic records",
    image: CMS,
    github: "https://github.com/Toheed-Ali/University-Course-management-system-CMS"
  },
  {
    title: "Console File Explorer",
    description: "A console-based Virtual File Explorer in C++ that simulates a file system with directories, files, and operations like create, edit, copy, paste, and delete.",
    image: FileExplorer,
    github: "https://github.com/Toheed-Ali/File-Explorer-OOP-project"
  },
  {
    title: "Reversi",
    description: "A graphical Reversi (Othello) game in C++ built with Raylib, featuring smooth flip animations and an AI opponent powered by Minimax with Alpha-Beta pruning.",
    image: Reversi,
    github: "https://github.com/Toheed-Ali/Reversi-Othello"
  },
  {
    title: "Chess",
    description: "A console-based Chess game in C++ that follows all standard chess rules, including castling, en passant, pawn promotion, check, checkmate, and draw conditions.",
    image: Chess,
    github: "https://github.com/Toheed-Ali/Chess"
  },
  {
    title: "Tic Tac Toe",
    description: "A console-based Tic-Tac-Toe game in Python implementing Minimax and Alpha-Beta Pruning algorithms for an unbeatable AI opponent.",
    image: TicTacToe,
    github: "https://github.com/Toheed-Ali/Tic-Tac-Toe"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-editorial text-4xl md:text-6xl font-bold mb-16 text-white uppercase tracking-tighter">
          <span className="text-primary block text-sm font-mono tracking-widest mb-2">
            03/ DIRECTORY_LIST
          </span>
          Projects.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-black border-[2px] border-[#808080] rounded-[10px] overflow-hidden aspect-square">

      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Name Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm py-2 text-center transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white text-base font-semibold tracking-wide">
          {project.title}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-between text-center px-6 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        <div className="flex-1 flex items-center justify-center">
          <p className="text-white text-xs leading-relaxed">
            {project.description}
          </p>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap hover:scale-105 transition-transform"
        >
          <i className="fa-brands fa-github text-base"></i>
          View on GitHub
        </a>

      </div>
    </div>
  );
};

export default Projects;