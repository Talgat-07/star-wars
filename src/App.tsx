import { Route, Routes } from "react-router-dom";
import { routes } from "@routes/routesConfig.tsx";
import Header from "@components/Header";
import styles from "./styles/App.module.sass";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
