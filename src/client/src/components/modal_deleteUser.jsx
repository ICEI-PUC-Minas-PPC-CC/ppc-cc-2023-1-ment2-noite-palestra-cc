import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

export default function ModalDelete(props){
    const { title, children, openPopup, setOpenPopup } = props

    return (
        <div>
            <Dialog open={openPopup}>
                <DialogTitle>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >{title}</div>
                </DialogTitle>
                <DialogContent>
                    <div>{children}</div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
