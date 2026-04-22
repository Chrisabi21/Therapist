import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Code-split pages – each chunk loads only when needed
const Home     = lazy(() => import("@/pages/Home"));

const PageFallback: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      color: "var(--color-muted)",
      fontFamily: "var(--font-body)",
      fontSize: "0.9rem",
    }}
  >
    Loading…
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/"  element={<Home />}     />
      </Routes>
    </Suspense>
  );
};

export default App;
