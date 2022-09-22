import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { animate, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import Instagram from "/src/assets/video/instagram.mp4";
import Commerce from "/src/assets/video/commerce.mp4";
import Netflix from "/src/assets/video/netflix.mp4";
import Note from "/src/assets/video/note.mp4";
import Github from "/src/assets/video/github.mp4";
import Anime from "/src/assets/video/anime.mp4";
import Toxo from "/src/assets/video/toxo.mp4";
import Mitsuki from "/src/assets/video/mitsuki.mp4";

import "./project.css";
import "./darkmode.css";
import "../../App.css";

export function Project() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "-20px",
        opacity: 1,
        transition: {
          // delay: 0.5,
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <motion.div animate={animation} ref={ref} id="projects">
      <h3 className="projects__title">
        <span className="primary-color">03.</span>Projects
      </h3>

      <div className="projects__container--primary">
        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Instagram} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Instagram Clone</h3>
              <span>
                <a
                  href="https://instagram-demonslayer.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Instagram-Clone"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              Instagram clone based on Demon slayer characters. To be able to
              like, comment, upload a post, you must sign in with Google.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Firebase</span>
              <span>Framer motion</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Commerce} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>E-Commerce</h3>
              <span>
                <a
                  href="https://mystore-ecommerce.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/E-Commerce"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              A fully functional e-commerce application with stripe payment
              gateway.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>TypeScript</span>
              <span>Stripe</span>
              <span>commerce.js</span> <br /> <span>React Hook Form</span>
              <span>React Router</span>
              <span>Material UI</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Netflix} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Netflix Clone</h3>
              <span>
                <a
                  href="https://netflix-mirayatech.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Netflix-Clone"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              Netflix clone built with react and typescript. You are able to
              mute and unmute the trailer video.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>TypeScript</span>
              <span>TMDB API</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Note} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Note App</h3>
              <span>
                <a
                  href="https://github.com/mirayatech/Note-App"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              A note app with simple functionality for adding, editing, and
              deleting notes. User can use markdown language in the note app.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>CSS</span>
              <span>Markdown </span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Github} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>GitHub Finder</h3>
              <span>
                <a
                  href="https://ghfinder-phi.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Github-Finder"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              GitHub Finder makes it super easy to find any random GitHub user
              and see their work.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>GitHub API</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Anime} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Anime Quote</h3>
              <span>
                <a
                  href="https://github.com/mirayatech/Anime-Quote"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://anime-quotes-rho.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              Random Amine Quote Generator used to generate random quotes.
              Convert a quote to speech, copy a quote, or share a quote on
              Twitter by clicking the given button is possible.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>API</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Toxo} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Tic Tac Toe</h3>
              <span>
                <a
                  href="https://toxo-two.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Tic-Tac-Toe"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              A Tic Tac Toe game build with pure JavaScript. User plays against
              the computer.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Mitsuki} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Mitsuki</h3>
              <span>
                <a
                  href="https://mitsuki-psi.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Mitsuki"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              An easy way for you to create, edit, and delete tasks and notes.
              All notes and tasks will be stored in the browser local storage.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects__container--secondary">
        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Instagram} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Instagram Clone</h3>
              <span>
                <a
                  href="https://instagram-demonslayer.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Instagram-Clone"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              Instagram clone based on Demon slayer characters. To be able to
              like, comment, upload a post, you must sign in with Google.
            </p>
            <div className="project__language first">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Firebase</span>
              <span>Framer motion</span>
            </div>

            <div className="project__language second">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Firebase</span>
              <br />
              <span>Framer motion</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Commerce} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>E-Commerce</h3>
              <span>
                <a
                  href="https://mystore-ecommerce.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/E-Commerce"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              A fully functional e-commerce application with stripe payment
              gateway.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>TypeScript</span>
              <span>Stripe</span>
              <span>commerce.js</span> <br /> <span>React Hook Form</span>
              <span>React Router</span>
              <span>Material UI</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Netflix} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Netflix Clone</h3>
              <span>
                <a
                  href="https://netflix-mirayatech.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Netflix-Clone"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              Netflix clone built with react and typescript. You are able to
              mute and unmute the trailer video.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>TypeScript</span>
              <span>TMDB API</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Note} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Note App</h3>
              <span>
                <a
                  href="https://github.com/mirayatech/Note-App"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              A note app with simple functionality for adding, editing, and
              deleting notes. User can use markdown language in the note app.
            </p>
            <div className="project__language">
              <span>React</span>
              <span>CSS</span>
              <span>Markdown </span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Github} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>GitHub Finder</h3>
              <span>
                <a
                  href="https://ghfinder-phi.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Github-Finder"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              GitHub Finder makes it super easy to find any random GitHub user
              and see their work.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>GitHub API</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Anime} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Anime Quote</h3>
              <span>
                <a
                  href="https://github.com/mirayatech/Anime-Quote"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://anime-quotes-rho.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              Random Amine Quote Generator used to generate random quotes.
              Convert a quote to speech, copy a quote, or share a quote on
              Twitter by clicking the given button is possible.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>API</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Toxo} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Tic Tac Toe</h3>
              <span>
                <a
                  href="https://toxo-two.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Tic-Tac-Toe"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              A Tic Tac Toe game build with pure JavaScript. User plays against
              the computer.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <video muted loop autoPlay>
            <source src={Mitsuki} type="video/mp4" />
          </video>
          <div className="project">
            <div className="project__wrapper">
              <h3>Mitsuki</h3>
              <span>
                <a
                  href="https://mitsuki-psi.vercel.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FiExternalLink className="arrow" />
                </a>
                <a
                  href="https://github.com/mirayatech/Mitsuki"
                  target="_blank"
                  className="project-link"
                >
                  <FiGithub className="arrow" />
                </a>
              </span>
            </div>
            <p>
              An easy way for you to create, edit, and delete tasks and notes.
              All notes and tasks will be stored in the browser local storage.
            </p>
            <div className="project__language">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
