import { routes } from "./routes/routes.tsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
