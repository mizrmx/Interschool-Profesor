import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EvaluacionContinua from "./pages/EvaluacionContinua";
import InicioV2 from "./pages/InicioV2";
import Login from "./pages/Login";
import Calificaciones from "./pages/Calificaciones";
import ActasCalificaciones from "./pages/ActasCalificaciones";
import ReporteAprobacin from "./pages/ReporteAprobacin";
import ActasSubmaterias from "./pages/ActasSubmaterias";
import ActasFinales from "./pages/ActasFinales";
import Materia from "./pages/Materia";
import EspecialidadesTaller from "./pages/EspecialidadesTaller";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/inicio-v2":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/calificaciones":
        title = "";
        metaDescription = "";
        break;
      case "/actas-calificaciones":
        title = "";
        metaDescription = "";
        break;
      case "/reporte-aprobacin":
        title = "";
        metaDescription = "";
        break;
      case "/actas-submaterias":
        title = "";
        metaDescription = "";
        break;
      case "/actas-finales":
        title = "";
        metaDescription = "";
        break;
      case "/materia":
        title = "";
        metaDescription = "";
        break;
      case "/especialidades-taller":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<EvaluacionContinua />} />
      <Route path="/inicio-v2" element={<InicioV2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calificaciones" element={<Calificaciones />} />
      <Route path="/actas-calificaciones" element={<ActasCalificaciones />} />
      <Route path="/reporte-aprobacin" element={<ReporteAprobacin />} />
      <Route path="/actas-submaterias" element={<ActasSubmaterias />} />
      <Route path="/actas-finales" element={<ActasFinales />} />
      <Route path="/materia" element={<Materia />} />
      <Route path="/especialidades-taller" element={<EspecialidadesTaller />} />
    </Routes>
  );
}
export default App;
