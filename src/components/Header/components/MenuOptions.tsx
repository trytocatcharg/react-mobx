import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import useGenerateMenu from './service/generate-menu.hook';

// https://stackoverflow.com/questions/76284629/react-auth-kit-token-expiration-logout-error

interface MenuProps {
    isButton?: boolean;
    handleCloseNavMenu:() => void;
}

const MenuOptions = ({isButton = false, handleCloseNavMenu}: MenuProps) => {
    const navigate = useNavigate();
    const pages = useGenerateMenu();

  return (
    <>
        {
            !!pages?.length && pages.map((page) => (
                page.isVisible ? (isButton 
                    ? <Button
                            key={page.name}
                            onClick={() => navigate(page.page)}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page.name}
                        </Button>
                    : <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ) : null
            ))
        }
    </>
    
  )
}

export default MenuOptions