import Grid from '@mui/material/Unstable_Grid2';
import Header from "../components/Header"
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <Grid container direction="column">
      <Grid>
        <div>
          <Header />
        </div>
      </Grid>
      <Grid>
        <div>{children}</div>
      </Grid>
    </Grid>
  )
}

export default MainLayout