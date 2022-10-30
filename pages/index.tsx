import styles from '../styles/Home.module.css'
import  EconomicDashboardComponent from "../components/economic-dashboard.component";
import Container from '@mui/material/Container';
import { DataContextProvider } from '../Contexts/data.context';

export default function Home() {
  return (
    <div className={styles.container}>
      <Container maxWidth="lg">
        <DataContextProvider>
            <EconomicDashboardComponent />
        </DataContextProvider>
      </Container>
    </div>
  )
}
