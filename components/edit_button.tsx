"use client"
import { updateNoteAction } from '@/actions/notes'
import { Note } from '@/db/schemas/notes'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'
import { Pencil } from 'lucide-react'
import EditNoteDialog from './edit_note_dialog'


type EditButtonProps = {
    note: Note
}
function EditButton({note}: EditButtonProps) {      
    const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}> 
        <DialogTrigger onClick={() => setOpen(true)}>
            <Pencil className='size-5 text-primary/50' />
        </DialogTrigger>
        <EditNoteDialog setOpen={setOpen} note={note}/>
    </Dialog>
  )
}

export default EditButton 