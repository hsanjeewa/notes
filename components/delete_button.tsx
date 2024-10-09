'use client'

import { Trash2 } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { toast } from 'react-hot-toast'
import { deleteNoteAction } from '@/actions/notes'

function DeleteButton({ noteId }: { noteId: number }) {
    const [open, setOpen] = useState(false)
    const [isPending, startTransition] = useTransition()
    const deleteNote = async () => {
        startTransition(async () => {
            const {errorMessage} = await deleteNoteAction(noteId)
            if (!errorMessage) {
                setOpen(false)
                toast.success("Note deleted successfully")
            } else {
                toast.error(errorMessage)
            }
        })
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger className='absolute-right-2'>
                <Trash2 className='size-5 text-destructive/50' />
            </AlertDialogTrigger>  
            <AlertDialogContent>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your note and remove it from our servers.
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isPending} onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
                    <form >
                        <AlertDialogAction onClick={deleteNote} type='submit'
                        className='bg-destructive text-destructive-foreground hover:brightness-110'
                        disabled={isPending}    
                        >
                            {isPending ? "Deleting Note..." : "Delete Note"}
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteButton


