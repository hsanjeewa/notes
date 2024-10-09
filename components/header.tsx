
import React from 'react'
import { Lilita_One } from "next/font/google"
import UserButton from './user_button'
import NewNoteButton from './new_note_button'
import { getUser } from '@/lib/auth'



const lilita = Lilita_One({ weight: "400", subsets: ['latin'] })
async function Header() {
  const user = await getUser()
  return (
    <div className='bg-popover relative mt-2 flex h-20 w-full max-w-5xl items-center justify-between rounded-lg px-4'>
      <UserButton user={user} />
      <h1 className={`text-4xl sm:text-5xl text-gray-700 text-secondary ${lilita.className}`}>Fire Notes</h1>
      <NewNoteButton/>
    </div>
  )
}

export default Header