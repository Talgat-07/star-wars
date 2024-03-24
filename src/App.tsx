import { Route, Routes } from "react-router-dom";
import { routes } from "@routes/routesConfig.tsx";
import Header from "@components/Header";
import styles from "./styles/App.module.sass";
import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks.ts";
import { useEffect } from "react";
import { getFavorite } from "@store/features/getFavorite/getFavoriteSlice.ts";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);
  const p = useAppSelector((state) => state.getFavorite.people);
  console.log(p);
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
