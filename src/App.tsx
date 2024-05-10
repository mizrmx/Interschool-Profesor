import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EnrollmentsByPerson from "./pages/EnrollmentsByPerson";
import Cursos1B from "./pages/Cursos1B";
import Grupos from "./pages/Grupos";
import CalificacionesNuevo from "./pages/CalificacionesNuevo";
import ActasFinales from "./pages/ActasFinales";
import ActasSubmaterias from "./pages/ActasSubmaterias";
import ReporteAprobacin from "./pages/ReporteAprobacin";
import ActasCalificaciones from "./pages/ActasCalificaciones";
import Calificaciones from "./pages/Calificaciones";
import Login from "./pages/Login";
import InicioV2 from "./pages/InicioV2";
import EvaluacionContinua from "./pages/EvaluacionContinua";

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
      case "/cursos-1b":
        title = "";
        metaDescription = "";
        break;
      case "/grupos":
        title = "";
        metaDescription = "";
        break;
      case "/calificaciones-nuevo":
        title = "";
        metaDescription = "";
        break;
      case "/actas-finales":
        title = "";
        metaDescription = "";
        break;
      case "/actas-submaterias":
        title = "";
        metaDescription = "";
        break;
      case "/reporte-aprobacin":
        title = "";
        metaDescription = "";
        break;
      case "/actas-calificaciones":
        title = "";
        metaDescription = "";
        break;
      case "/calificaciones":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/inicio-v2":
        title = "";
        metaDescription = "";
        break;
      case "/evaluacion-continua":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<EnrollmentsByPerson />} />
      <Route path="/cursos-1b" element={<Cursos1B />} />
      <Route path="/grupos" element={<Grupos />} />
      <Route path="/calificaciones-nuevo" element={<CalificacionesNuevo />} />
      <Route path="/actas-finales" element={<ActasFinales />} />
      <Route path="/actas-submaterias" element={<ActasSubmaterias />} />
      <Route path="/reporte-aprobacin" element={<ReporteAprobacin />} />
      <Route path="/actas-calificaciones" element={<ActasCalificaciones />} />
      <Route path="/calificaciones" element={<Calificaciones />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inicio-v2" element={<InicioV2 />} />
      <Route path="/evaluacion-continua" element={<EvaluacionContinua />} />
    </Routes>
  );
}
export default App;
