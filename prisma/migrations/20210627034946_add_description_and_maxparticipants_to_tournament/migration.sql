/*
  Warnings:

  - Added the required column `maxParticipants` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "description" TEXT,
ADD COLUMN     "maxParticipants" INTEGER NOT NULL;
