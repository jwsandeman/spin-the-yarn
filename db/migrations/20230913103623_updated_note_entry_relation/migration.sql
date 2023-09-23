/*
  Warnings:

  - Added the required column `noteId` to the `NoteEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NoteEntry" ADD COLUMN     "noteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "NoteEntry" ADD CONSTRAINT "NoteEntry_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
