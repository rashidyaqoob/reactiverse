import { Link } from "react-router-dom";
import "./Misc.scss";

const Misc = () => {
  return (
    <>
      <div className="misc">
        <h1>Table of content</h1>
        <ul className="misc-list">
          <li className="misc-list__item">
            <Link to="/misc/tic-tac-toe" className="misc-list__item-link">
            tic-tac-toe Demo
            </Link>
          </li>
          <li className="misc-list__item">
            <Link to="/misc/blogs" className="misc-list__item-link">
            Blogs Demo
            </Link>
          </li>
          <li className="misc-list__item">
            <Link to="/misc/virtual-list" className="misc-list__item-link">
              Virtual-list Demo
            </Link>
          </li>
          <li className="misc-list__item">
            <Link to="/misc/poll-form" className="misc-list__item-link">
            PollForm Demo
            </Link>
          </li>
          <li className="misc-list__item">
            <Link to="/misc/Redux" className="misc-list__item-link">
            Redux Demo
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Misc;
