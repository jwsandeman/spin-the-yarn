-- CreateTable
CREATE TABLE "Note_entry" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "word_count" INTEGER NOT NULL,

    CONSTRAINT "Note_entry_pkey" PRIMARY KEY ("id")
);
