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
        label: 'Lesson 1',
        route: 'lesson1',
    },
    {
        id: 3,
        icon: <MenuBookIcon />,
        label: 'Lesson 2',
        route: 'lesson2',
    },
    {
        id: 4,
        icon: <MenuBookIcon />,
        label: 'Lesson 3',
        route: 'lesson3',
    },
    {
        id: 5,
        icon: <AlternateEmailIcon />,
        label: 'Contact Me',
        route: 'contact',
    },
]