import { useState } from "react";
import { TextField, Typography, Box, Button, InputAdornment } from '@mui/material';

export function Configuration() {
    const [expirationAlert, setExpirationAlert] = useState('');
    const [stockAlert, setStockAlert] = useState('');

    const handleSave = () => {
        console.log("Alerta de vencimento:", expirationAlert);
        console.log("Alerta de estoque mínimo:", stockAlert);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div style={{ marginTop: '3%' }}>
                <Box
                    sx={{
                        height: '50%',
                        width: '50%',
                        padding: '16px',
                        border: '1px solid #D9D9D9',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '80%',
                        margin: '0 auto',
                        boxSizing: 'border-box',
                        borderRadius: '5px',
                    }}
                >

                    <div style={{ marginBottom: '16px' }}>
                        <Typography variant="h5" component="span">
                            Configurações do sistema
                        </Typography>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <TextField
                            label="Alerta de vencimento"
                            variant="outlined"
                            value={expirationAlert}
                            onChange={(e) => setExpirationAlert(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Alerta de estoque mínimo"
                            variant="outlined"
                            value={stockAlert}
                            onChange={(e) => setStockAlert(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                            style={{ marginBottom: '16px' }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#00992E',
                            }}
                            onClick={handleSave}
                        >
                            Salvar
                        </Button>
                    </div>
                </Box>
            </div>
        </div>

    );
}
