import Header from "@/components/header";
import db from "@/db";
import { notes } from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { desc, eq, or } from "drizzle-orm";
import Note from "@/components/note"; // Import the new Note component

export default async function Home() {
  const user = await getUser();
  const _notes = await getNotes(user);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 pb-24">
      <Header />
      <div className="mt-8 grid w-full max-w-[1800px] grid-cols-1 
      gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {_notes.map((note) => (
          <Note note={note} /> // Use the Note component
        ))}
      </div>
    </main>
  );
  
}

async function getNotes(user: User) {
  const _notes = await db.select().from(notes).where(
    or(eq(notes.userId, user.id), eq(notes.userId, user.email ?? ""))
  ).orderBy(desc(notes.updatedAt));
  return _notes;
}

