import { updateNoteAction } from '@/actions/notes'
import { Note } from '@/db/schemas/notes'
import React, { Dispatch, SetStateAction, useTransition } from 'react'
import { toast } from 'react-hot-toast'
import { DialogContent, DialogDescription, DialogFooter, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

type Props = { 
    setOpen: Dispatch<SetStateAction<boolean>>
    note: Note
}
function EditNoteDialog({setOpen, note}: Props) {
    const [isPending, startTransition] = useTransition()
    const updateNote = async (formData: FormData) => {
        startTransition(async () => {
            const {errorMessage} = await updateNoteAction(formData)
            if (!errorMessage) {
                setOpen(false)
                toast.success("Note updated successfully")
            } else {
                toast.error(errorMessage)
            }   
        })   
    }    
  return (
        <DialogContent>
            <DialogTitle>Edit Note</DialogTitle>
            <DialogDescription>
                Edit your note here.
            </DialogDescription>
            <form action={updateNote}>
                <input type="hidden" name="noteId" value={note.id} />
                <Textarea id="text" name="text"
                    defaultValue={note.text}
                    disabled={isPending}
                    className='mb-6 mt-2 min-h-[380px]' />
                <DialogFooter>
                    <Button type='submit'
                        disabled={isPending}
                        variant={"secondary"}
                        className='w-40'>

                        {isPending ? "Updating Note..." : "Update Note"}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent> 
  )
}

export default EditNoteDialog