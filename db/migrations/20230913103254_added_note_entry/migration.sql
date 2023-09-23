-- CreateTable
CREATE TABLE "NoteEntry" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "wordCount" INTEGER NOT NULL,

    CONSTRAINT "NoteEntry_pkey" PRIMARY KEY ("id")
);
