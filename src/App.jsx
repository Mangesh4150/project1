import "./App.css";
import AppRoutes from "./routes";
import { Suspense } from "react";
import PageLoaderSpinner from "./components/shared/PageLoaderSpinner";

function App() {
  return (
    <>
      <Suspense fallback={<PageLoaderSpinner />}>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
