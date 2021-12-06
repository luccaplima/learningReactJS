import React from 'react';
import './Card.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { bgcolor } from '@mui/system';

export default props => (
    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            <Stack>
                <Button spacing={2} color="inherit" href={props.href}>{props.titulo}</Button>
            </Stack>
        </div>
    </div>
)