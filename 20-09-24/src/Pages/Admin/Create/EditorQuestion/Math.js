import React from 'react';
import { Button, ButtonGroup, Tooltip, IconButton, Popper, Paper, ClickAwayListener, Box } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';


const symbols = [
    { label: 'Less Than', symbol: '<' },
    { label: 'Greater Than', symbol: '>' },
    { label: 'Less Than or Equal To', symbol: '≤' },
    { label: 'Greater Than or Equal To', symbol: '≥' },
    // Add more symbols as needed
];




const Math = () => {
    return (
        <div>
            {/* <ButtonGroup style={{display:"flex",justifyContent:"space-between"}} variant="contained" aria-label="symbol picker"> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {symbols.map((symbol) => (
                    <Tooltip key={symbol.symbol} title={symbol.label}>
                        <Button style={{ background: "red" }}>{symbol.symbol}</Button>
                    </Tooltip>
                ))}
                {/* </ButtonGroup> */}
            </div>
        
        </div >
    )
}

export default Math