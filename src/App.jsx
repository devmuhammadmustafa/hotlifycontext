import { Suspense, lazy } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { TemperatureProvider } from "./contexts/TemperatureContext";
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <TemperatureProvider>
        <AppLayout />
      </TemperatureProvider>
    </Suspense>
  );
}

export default App;
