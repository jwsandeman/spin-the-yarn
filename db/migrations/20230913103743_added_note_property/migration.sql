-- CreateTable
CREATE TABLE "NoteProperty" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "noteTemplateId" INTEGER NOT NULL,

    CONSTRAINT "NoteProperty_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NoteProperty" ADD CONSTRAINT "NoteProperty_noteTemplateId_fkey" FOREIGN KEY ("noteTemplateId") REFERENCES "NoteTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
