/*
  Warnings:

  - Added the required column `title` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "title" TEXT NOT NULL;
