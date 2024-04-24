import { FunctionComponent } from "react";
import styles from "./InicioV2.module.css";

const InicioV2: FunctionComponent = () => {
  return (
    <div className={styles.inicioV2}>
      <b className={styles.panelDeInicio}>Panel de inicio</b>
      <div className={styles.dashboard}>
        <div className={styles.dashboardChild} />
        <div className={styles.nuevosAltas}>
          <div className={styles.nuevasAltas}>Nuevas Altas</div>
          <b className={styles.b}>100</b>
          <img
            className={styles.nuevosAltasChild}
            alt=""
            src="/group-13279.svg"
          />
        </div>
        <div className={styles.escuelas}>
          <div className={styles.nuevasAltas}>Escuelas</div>
          <b className={styles.b}>26</b>
          <img
            className={styles.nuevosAltasChild}
            alt=""
            src="/group-132791.svg"
          />
        </div>
        <div className={styles.maestros}>
          <div className={styles.nuevasAltas}>Maestros</div>
          <b className={styles.b}>60</b>
          <img
            className={styles.nuevosAltasChild}
            alt=""
            src="/group-132792.svg"
          />
        </div>
        <div className={styles.estudiantes}>
          <div className={styles.nuevasAltas}>Estudiantes</div>
          <b className={styles.b}>700</b>
          <img
            className={styles.nuevosAltasChild}
            alt=""
            src="/group-132793.svg"
          />
        </div>
      </div>
      <div className={styles.component1}>
        <div className={styles.sideMenu}>
          <div className={styles.placeholder} />
          <div className={styles.name}>
            <div className={styles.mayraZ}>Mayra Z.</div>
            <div className={styles.admin}>Admin</div>
          </div>
          <div className={styles.contrasea}>
            <div className={styles.bg} />
            <img className={styles.iconKey} alt="" src="/-icon-key.svg" />
          </div>
          <div className={styles.disponibilidad}>
            <div className={styles.bg} />
            <img
              className={styles.iconCalendarCheck}
              alt=""
              src="/-icon-calendar-check.svg"
            />
          </div>
          <div className={styles.inbox}>
            <div className={styles.bg} />
            <img className={styles.iconInbox} alt="" src="/-icon-inbox.svg" />
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.background} />
          <div className={styles.footer}>
            <b className={styles.scolarpanel}>Scolarpanel</b>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.i}>I</b>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.dashboard1}>
              <img className={styles.homeIcon} alt="" src="/home.svg" />
              <div className={styles.email}>Inicio</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/student.svg" />
              <div className={styles.email}>Calificaciones</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/teacher.svg" />
              <div className={styles.email}>Actas Calificaciones</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/calendar.svg" />
              <div className={styles.email}>Reporte Aprobación</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/finance.svg" />
              <div className={styles.email}>Actas Submaterias</div>
            </div>
            <div className={styles.food}>
              <img
                className={styles.iconPdfFile}
                alt=""
                src="/-icon-pdf-file.svg"
              />
              <div className={styles.email}>Publicaciones</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/user.svg" />
              <div className={styles.email}>Consulta Publicaciones</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/chat.svg" />
              <div className={styles.email}>Reactivos</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/activity.svg" />
              <div className={styles.email}>Actos Finales</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/activity.svg" />
              <div className={styles.email}>Aspectos Evaluación</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/activity.svg" />
              <div className={styles.email}>Evaluación Continua</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/activity.svg" />
              <div className={styles.email}>Calificación Evaluación</div>
            </div>
            <div className={styles.students}>
              <img className={styles.homeIcon} alt="" src="/activity.svg" />
              <div className={styles.email}>Asistencia</div>
            </div>
          </div>
          <div className={styles.logo}>
            <b className={styles.escuelaBenitoJuarez}>Escuela Benito Juarez</b>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <b className={styles.e}>E</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioV2;
