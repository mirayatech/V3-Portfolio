import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import "./projects.css";
import "../../App.css";

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
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
    <motion.div animate={animation} ref={ref} className="projects">
      <h3 className="projects__title ">Top projects</h3>
      <div className="wrapper">
        {/* Project 1 */}
        <motion.div className="project">
          <h3 className="projects__title mobile">Top projects</h3>
          <div className="project__wrapper">
            <h3>Instagram Clone</h3>{" "}
            <span>
              <a
                href="https://instagram-demonslayer.vercel.app/"
                target="_blank"
              >
                <FiExternalLink className="arrow" />
              </a>
              <a
                href="https://github.com/mirayatech/Instagram-Clone"
                target="_blank"
              >
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>
          <p>
            Instagram clone based on Demon slayer characters. To be able to like
            or comment on posts, you must sign in with Google. The same applies
            to being able to upload a post. Other users can like and comment on
            your posts. You can also delete your own posts and comments. While
            logged in, you're able to follow the suggested users on the side
            profile.
          </p>
          <div className="project__language">
            <span> React</span> <span> TypeScript</span> <span>CSS</span>{" "}
            <span> Firebase</span> <span>Framer Motion</span>
          </div>
        </motion.div>
        {/* Project 2 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>E-Commerce</h3>{" "}
            <span>
              <a href="https://mystore-ecommerce.vercel.app/" target="_blank">
                <FiExternalLink className="arrow" />
              </a>
              <a
                href="https://github.com/mirayatech/E-Commerce"
                target="_blank"
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
            <span> React</span> <span> TypeScript</span>{" "}
            <span> Material UIs</span>
          </div>
        </div>
        {/* Project 3 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>Netflix Clone</h3>{" "}
            <span>
              <a href="https://netflix-mirayatech.vercel.app/" target="_blank">
                <FiExternalLink className="arrow" />
              </a>

              <a
                href="https://github.com/mirayatech/Netflix-Clone"
                target="_blank"
              >
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>

          <p>
            A Netflix clone built with react and typescript. You are able to
            mute and unmute the trailer video.
          </p>
          <div className="project__language">
            <span> React</span> <span> TypeScript</span> <span>API</span>{" "}
            <span>CSS</span>
          </div>
        </div>
        {/* Project 4 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>Note App</h3>{" "}
            <span>
              <a href="https://github.com/mirayatech/Note-App" target="_blank">
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>

          <p>
            A note app with simple functionality for adding, editing, and
            deleting notes. This app is built with pure react.js and stores
            notes in the browser's local storage, so you won't lose your
            contents when the page refreshes or tabs are closed. You can use
            markdown language in the note app.
          </p>
          <div className="project__language">
            <span> React</span> <span> CSS</span> <span> VS Code</span>
          </div>
        </div>
        {/* Project 5 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>GitHub Finder</h3>{" "}
            <span>
              <a href="https://ghfinder-phi.vercel.app/" target="_blank">
                <FiExternalLink className="arrow" />
              </a>
              <a
                href="https://github.com/mirayatech/Github-Finder"
                target="_blank"
              >
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>
          <p>
            GitHub Finder makes it super easy to find any random GitHub user and
            see their work. Just start typing any username and with each key
            stroke if there is any GitHub user with that username the details
            about their profile and their latest 5 repositories will show up
            here.
          </p>
          <div className="project__language">
            <span>JavaScript</span> <span>HTML</span> <span> CSS</span>{" "}
            <span>GitHub API</span>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>Anime Quote</h3>{" "}
            <span>
              <a href="https://anime-quotes-rho.vercel.app/">
                {" "}
                <FiExternalLink className="arrow" />
              </a>
              <a
                href="https://github.com/mirayatech/Anime-Quote"
                target="_blank"
              >
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>
          <p>
            Random Amine Quote Generator used to generate random quotes. Each
            time you click on the button, you’ll get a new anime quote. You can
            also convert a quote to speech, copy a quote, or share a quote on
            Twitter by clicking the given button
          </p>
          <div className="project__language">
            <span>JavaScript</span> <span>HTML</span> <span> CSS</span>{" "}
            <span> API</span>
          </div>
        </div>
        {/* Project 6 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>Tic Tac Toe</h3>{" "}
            <span>
              <a href="  https://toxo-two.vercel.app/" target="blank">
                {" "}
                <FiExternalLink className="arrow" />
              </a>
              <a
                href=" https://github.com/mirayatech/Tic-Tac-Toe "
                target="_blank"
              >
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>
          <p>
            You play against the computer. First you select to be player X or O.
            The computer will be the opposite of what you've selected. There are
            the player names at the top in the playboard section and it shows
            whose turn is . Once a match is won by someone a result module
            appears with the winner sign.
          </p>
          <div className="project__language">
            <span>JavaScript</span> <span>HTML</span> <span> CSS</span>{" "}
          </div>
        </div>

        {/* Project 6 */}
        <div className="project">
          <div className="project__wrapper">
            <h3>Mitsuki</h3>{" "}
            <span>
              <a href="https://mitsuki-psi.vercel.app/">
                {" "}
                <FiExternalLink className="arrow" />
              </a>

              <a href="https://github.com/mirayatech/Mitsuki" target="_blank">
                <FiGithub className="arrow" />
              </a>
            </span>
          </div>
          <p>
            On the first page it is an todo app, where you can easily add, edit,
            or delete your task. There are filters button too that helps you to
            filter the tasks. On the second pages it is a note app with simple
            functionality for adding, editing, and deleting notes. Everything
            will be stored in the browser local storage so your tasks and notes
            won’t be removed when the page refresh or tab close.
          </p>

          <div className="project__language">
            <span>JavaScript</span> <span>HTML</span> <span> CSS</span>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
