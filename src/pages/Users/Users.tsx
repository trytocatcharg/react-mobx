import { useAdminRole } from '../../hooks/useAdminRole';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import appStore from '../../mobx/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserType } from '../../models/user';

const Users = () => {
    const isAdminRole = useAdminRole();
    const navigate = useNavigate();

    if (!isAdminRole) {
        navigate("/", { replace: true });
        return <></>;
    }
  return (
    
    <Container maxWidth="sm">

      <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appStore.users.map((row) => (
                  <TableRow
                    key={row.username}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.type === UserType.ADMIN ? 'Admin' : 'User'}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
    </Container>
    

  )
}

export default Users