import { Routes, Route } from "react-router-dom";
import PollForm from "../../components/Chart/PollForm.jsx";
import Counter from "../../components/Redux/Components/Counter.jsx";
import TicTacToe from "../../components/TickTacToe/TickTacToe.jsx";
import VirtualList from "../../components/virtual-list/virtual-list.jsx";
import Blogs from "../Blogs/Blogs.jsx";
import Todo from "../../components/Todo/todo.jsx";

export const MiscRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/misc/tic-tac-toe" element={<TicTacToe />} />;
        <Route path="/misc/blogs" element={<Blogs />} />;
        <Route path="/misc/virtual-list" element={<VirtualList />} />;
        <Route path="/misc/poll-form" element={<PollForm />} />;
        <Route path="/misc/Redux" element={<Counter />} />;
        <Route path="/misc/todo-app" element={<Todo />} />;
      </Routes>
    </>
  );
};

export default MiscRoutes;