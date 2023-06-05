import React from 'react'
import ribbit from '../../assets/images/ribbit.png';
import './Dashboard.scss';
import Container from '@mui/material/Container';

function Dashboard() {
  return (
    <Container maxWidth="sm">
        <img className='dashboard-container__img' src={ribbit}></img>
    </Container>
  )
}

export default Dashboard