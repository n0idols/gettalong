/*
  Warnings:

  - You are about to drop the column `profileId` on the `LoveLanguage` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LoveLanguage" DROP CONSTRAINT "LoveLanguage_profileId_fkey";

-- AlterTable
ALTER TABLE "LoveLanguage" DROP COLUMN "profileId",
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "Profile";

-- AddForeignKey
ALTER TABLE "LoveLanguage" ADD CONSTRAINT "LoveLanguage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
