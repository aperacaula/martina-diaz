import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";

const FitnessBasic: React.FC = () => {
  return (
    <Layout darkMenu={true}>
      <div className={styles.container}>
        <h1>Fitness Basic training</h1>
        <div className={styles.explanation}>
          <p>Perfecto para los recién llegados al fitness, este plan te permite introducirte en el mundo del fitness. Elige este plan para una suave introducción a tu viaje de acondicionamiento físico.</p>
          <p>Comenzamos con una encuesta sobre el estilo de vida, tu historial y tus objetivos.
          Esta comprensión integral garantiza un viaje de fitness hecho a medida solo para ti.
      </p>
          <p>Atendemos a todos los niveles, estableciendo una base para seguir su progreso. Desde principiantes hasta avanzados, nuestras evaluaciones de condición física garantizan mejoras visibles y mensurables <strong>en relación a su estado de salud.</strong>
          </p>
          <ul>
            <li>Entreno personalizado.</li>
            <li>Sesiones adaptadas a tu nivel.</li>
            <li>Enfocado 100% a su objetivo personal.</li>
            <li>Entrega de una planificación mensual.</li>
            <li>2 sesiones de entrenamientos por semana.</li>
            <li>Feedback y contacto semanal.</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default FitnessBasic;