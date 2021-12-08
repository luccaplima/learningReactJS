import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                ReactJS
            </Typography>
            <Typography variant="h5" component="div">
                React{bull}JS
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Biblioteca JavaScript
            </Typography>
            <Typography variant="body2">
                Uma biblioteca JavaScript para criar interfaces de usuário
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href="https://pt-br.reactjs.org/" target="_blank">Saiba Mais</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}