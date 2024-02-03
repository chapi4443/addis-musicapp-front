import { Route, Routes } from "react-router-dom";
import AllList from "./page/AllList";
import Import from "./page/Import";
import Update from "./page/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllList />} />
      <Route path="/create" element={<Import />} />
      <Route path="/edit/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
