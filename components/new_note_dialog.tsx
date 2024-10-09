import React, { useTransition } from 'react'
import { DialogContent, DialogFooter } from './ui/dialog'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import { addNewNoteAction } from '@/actions/notes'



type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NewNoteDialog({ setOpen }: Props) {
    const [isPending, startTransition] = useTransition();
    const handleAddNewNote = async (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await addNewNoteAction(formData)
            if (!errorMessage) {
                setOpen(false)
                toast.success("Successfully Added Note")
            } else {
                toast.error(errorMessage)
            }
        })
    }


    return (
        <DialogContent className='sm:max-w-[425px]'>
            <form action={handleAddNewNote}>
                <Textarea id="text" name="text"
                    disabled={isPending}
                    className='mb-6 mt-2 min-h-[380px]' />
                <DialogFooter>
                    <Button type='submit'
                        disabled={isPending}
                        variant={"secondary"}
                        className='w-40'>

                        {isPending ? "Adding Note..." : "Add Note"}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}

export default NewNoteDialog