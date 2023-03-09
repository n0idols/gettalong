/*
  Warnings:

  - You are about to drop the column `intensityId` on the `Argument` table. All the data in the column will be lost.
  - You are about to drop the column `argument` on the `Day` table. All the data in the column will be lost.
  - You are about to drop the `_ArgumentToDay` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Argument" DROP CONSTRAINT "Argument_intensityId_fkey";

-- DropForeignKey
ALTER TABLE "_ArgumentToDay" DROP CONSTRAINT "_ArgumentToDay_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArgumentToDay" DROP CONSTRAINT "_ArgumentToDay_B_fkey";

-- AlterTable
ALTER TABLE "Argument" DROP COLUMN "intensityId";

-- AlterTable
ALTER TABLE "Day" DROP COLUMN "argument";

-- DropTable
DROP TABLE "_ArgumentToDay";

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "argumentId" TEXT NOT NULL,
    "intensityId" TEXT NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DayToIncident" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DayToIncident_AB_unique" ON "_DayToIncident"("A", "B");

-- CreateIndex
CREATE INDEX "_DayToIncident_B_index" ON "_DayToIncident"("B");

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_argumentId_fkey" FOREIGN KEY ("argumentId") REFERENCES "Argument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_intensityId_fkey" FOREIGN KEY ("intensityId") REFERENCES "Intensity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToIncident" ADD CONSTRAINT "_DayToIncident_A_fkey" FOREIGN KEY ("A") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToIncident" ADD CONSTRAINT "_DayToIncident_B_fkey" FOREIGN KEY ("B") REFERENCES "Incident"("id") ON DELETE CASCADE ON UPDATE CASCADE;
