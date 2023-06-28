import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "routes";
import Sidebar from "components/Sidebar";
import "styles/global.css";
import Container from "ui/Container";
import Layout from "ui/Layout";
import { useAppSelector } from "hooks/redux";

function App() {
  const navigation = useNavigate();
  const { activePath } = useAppSelector((state) => state.navigation);

  useEffect(() => {
    navigation(activePath);
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Container>
        <Routes>
          {routes.map((route) => (
            <Route element={route.element} key={route.path} path={route.path} />
          ))}
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
