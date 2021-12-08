import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home Page',
        route: '',
    },
    {
        id: 1,
        icon: <InfoIcon />,
        label: 'About',
        route: 'about',
    },
    {
        id: 2,
        icon: <MenuBookIcon />,
        label: 'Column Bar',
        route: 'lesson1',
    },
    {
        id: 3,
        icon: <MenuBookIcon />,
        label: 'Props',
        route: 'lesson2',
    },
    {
        id: 4,
        icon: <MenuBookIcon />,
        label: 'DataGrid MIT',
        route: 'lesson3',
    },
    {
        id: 5,
        icon: <MenuBookIcon />,
        label: 'Pie Chart',
        route: 'lesson4',
    },
    {
        id: 6,
        icon: <MenuBookIcon />,
        label: 'Components MUI',
        route: 'lesson5',
    },
    {
        id: 7,
        icon: <AlternateEmailIcon />,
        label: 'Contact Me',
        route: 'contact',
    },
]