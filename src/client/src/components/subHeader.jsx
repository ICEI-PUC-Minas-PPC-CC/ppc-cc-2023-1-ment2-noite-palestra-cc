import * as React from 'react';
import Box from '@mui/material/Box';
import { SvgIcon, Typography } from '@mui/material';
import { LogoDefault } from './LogoDefault';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';




export default function SubHeader() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: 60,
                backgroundColor: '#F4F4F4',
                padding: '0 20px',
            }}
        >
            <SvgIcon component={LogoDefault} viewBox="0 0 600 400" sx={{ fontSize: 48, width: 'auto', height: 40 }} />
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <PersonOutlineOutlinedIcon fontSize="large" sx={{ color: '#8A8A8A !important' }} />
                <Typography variant="p" component="span" sx={{ mx: 1 }}>
                    UserName
                </Typography>
                <LogoutIcon fontSize="large" />
            </div>

        </Box>

    );
}