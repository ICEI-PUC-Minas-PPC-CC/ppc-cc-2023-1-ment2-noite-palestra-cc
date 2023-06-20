import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { Header } from './Header'

export default function ModalForm(props){
    const { title, children, icon, openPopup, setOpenPopup } = props

    return (
        <div>
            <Dialog open={openPopup}>
                <DialogTitle>
                    <Header>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff'}} >{title}</div>
                    </Header>
                </DialogTitle>
                <DialogContent>
                    <div>{children}</div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
