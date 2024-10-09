'use client'

import React, { useState } from 'react'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import NewNoteDialog from './new_note_dialog'
import { cn } from '@/lib/utils'


function NewNoteButton({className}: {className?: string}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger className={cn(
        "text-secondary hover:text-primary transition-colors duration-200 case-in-out",
        className
      )}
        onClick={() => setOpen(true)}
      >
        <Plus className='size-10 sm:size-12'/>
      </DialogTrigger>
      <NewNoteDialog setOpen={setOpen}/>
    </Dialog>
  )
}

export default NewNoteButton 