import { useMemo } from "react";

<nav className="sidebar">
  <div className="sidebar-top-wrapper">
    <div className="sidebar-top">
      <a className="logo__wrapper" href="#" >
        <img alt="Logo" className="logo-small" src="assets/logo.png"/>
      </a>
    </div>
    <div className="expand-btn">
      <svg
        fill="none"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
          stroke="#F4F6F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  </div>
  <div className="sidebar-links">
    <ul>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-house icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Home
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-regular fa-star icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Calificaciones
          </span>
        </a>
      </li>
      <li>
        <a className="tooltip" href="#" title="Home">
          <i className="fa-regular fa-star icon icon-tabler icon-tabler-home" height="24" width="24"/>
          <span className="link hide">Actas Calificaciones</span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-regular fa-thumbs-up icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Reporte Aprobación
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-regular fa-newspaper icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Actas Submaterias
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-regular fa-file icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Publicaciones
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-book icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Consulta Publicaciones
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-graduation-cap icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Reactivos
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-regular fa-folder icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Actos Finales
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-file-pdf icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Aspectos Evaluación
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-file-contract icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Evaluación Continua
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-file-invoice icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Calificación Evaluación
          </span>
        </a>
      </li>
      <li>
        <a
          className="tooltip"
          href="#"
          title="Home"
        >
          <i
            className="fa-solid fa-file-lines icon icon-tabler icon-tabler-home"
            height="24"
            width="24"
          />
          <span className="link hide">
            Asistencia
          </span>
        </a>
      </li>
    </ul>
  </div>
  <div className="divider" />
  <div className="sidebar-top">
    <a
      className="logo__wrapper"
      href="#"
    >
      <img
        alt="Logo"
        className="logo-small"
        src="assets/logo.png"
      />
    </a>
  </div>
</nav>

export default ContainerSidebarMenu;