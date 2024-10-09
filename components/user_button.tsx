'use client'
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
import { UserCircle } from 'lucide-react'
import { User } from '@supabase/supabase-js'
import toast from 'react-hot-toast'
import { signOutAction } from '@/actions/user'
import { useRouter } from 'next/navigation'


type Props = {
  user: User,
  className?: string
}

export function UserButton({user, className} : Props) {

  const router = useRouter()

  const handleSignOut = async () => {
    const toastId = toast.loading('Signing Out..')
    await signOutAction()
    router.replace('/login')
    toast.success('Signed Out', {id: toastId})
    toast.dismiss(toastId)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(
        "text-secondary hover:text-primary transition-colors duration-200 ease-in-out"
      )}>
        <UserCircle className='size-10 sm:size-12'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-4 mt-5 sm:mt-4">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}  className='rountedmd p-2'>
          <h3 className='text-sm'>Log out</h3>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) 
}

export default UserButton  
