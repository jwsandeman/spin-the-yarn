/*
  Warnings:

  - Added the required column `notePropertyId` to the `NoteEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NoteEntry" ADD COLUMN     "notePropertyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "NoteEntry" ADD CONSTRAINT "NoteEntry_notePropertyId_fkey" FOREIGN KEY ("notePropertyId") REFERENCES "NoteProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
