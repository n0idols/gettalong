/*
  Warnings:

  - You are about to drop the `Day` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DayToIncident` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DayToIncident" DROP CONSTRAINT "_DayToIncident_A_fkey";

-- DropForeignKey
ALTER TABLE "_DayToIncident" DROP CONSTRAINT "_DayToIncident_B_fkey";

-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Day";

-- DropTable
DROP TABLE "_DayToIncident";
