import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "routes";
import Sidebar from "components/Sidebar";
import GlobalStyle from "styles/global";
import Container from "ui/Container";
import Layout from "ui/Layout";
import { useAppSelector } from "hooks/redux";

function App() {
  const navigation = useNavigate();
  const lastActivePatch = useAppSelector((state) => state.activePatch);

  useEffect(() => {
    navigation(lastActivePatch);
  }, []);

  return (
    <GlobalStyle>
      <Layout>
        <Sidebar />
        <Container>
          <Routes>
            {routes.map((route) => (
              <Route
                element={route.element}
                key={route.path}
                path={route.path}
              />
            ))}
          </Routes>
        </Container>
      </Layout>
    </GlobalStyle>
  );
}

export default App;
