import React from 'react';
import { Note as NoteType } from '@/db/schemas/notes';
import DeleteButton from './delete_button';
import EditButton from './edit_button';

type Props = {
    note: NoteType
}

function Note({ note }: Props) {
    return (
        <div className='h-96 w-full overflow-y-auto overflow-x-hidden 
    whitespace-pre-wrap break-words rounded-lg bg-muted/80 p-6'>
            <div className='flex relative mb-2 items-center gap-2'>
                <h2 className='text-lg font-semibold text-muted-foreground'>{note.updatedAt.toISOString().split('T')[0]}</h2>
                <EditButton note={note} />  
                <DeleteButton noteId={note.id}/>  
            </div>
      
            <p className='text-lg text-muted-foreground'>{note.text}</p>
        </div>
    )
}

export default Note


