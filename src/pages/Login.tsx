import { FunctionComponent } from "react";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <div className={styles.image}>
        <img className={styles.imageChild} alt="" src="/rectangle-506@2x.png" />
        <div className={styles.imageItem} />
      </div>
      <div className={styles.form}>
        <div className={styles.button}>
          <div className={styles.stateLayer}>
            <div className={styles.labelText}>Login</div>
          </div>
        </div>
        <div className={styles.adminParent}>
          <div className={styles.admin}>admin</div>
          <img
            className={styles.communicationMail}
            alt=""
            src="/communication--mail.svg"
          />
        </div>
        <img className={styles.formChild} alt="" src="/frame-5031.svg" />
        <div className={styles.usuario}>Usuario</div>
        <div className={styles.contrasea}>Contraseña</div>
        <div className={styles.recordar}>Recordar</div>
        <div className={styles.formItem} />
        <div className={styles.login1}>Login</div>
      </div>
      <div className={styles.header}>
        <div className={styles.bienvenidoAlPanel}>
          Bienvenido al panel de control de profesores
        </div>
        <img
          className={styles.interschoolLogoAzul1Icon}
          alt=""
          src="/interschoollogoazul-1.svg"
        />
      </div>
    </div>
  );
};

export default Login;
