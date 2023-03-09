-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoveLanguage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profileId" TEXT,

    CONSTRAINT "LoveLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Day" (
    "id" TEXT NOT NULL,
    "argument" BOOLEAN NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Argument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "intensityId" TEXT NOT NULL,

    CONSTRAINT "Argument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intensity" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Intensity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArgumentToDay" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArgumentToDay_AB_unique" ON "_ArgumentToDay"("A", "B");

-- CreateIndex
CREATE INDEX "_ArgumentToDay_B_index" ON "_ArgumentToDay"("B");

-- AddForeignKey
ALTER TABLE "LoveLanguage" ADD CONSTRAINT "LoveLanguage_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Argument" ADD CONSTRAINT "Argument_intensityId_fkey" FOREIGN KEY ("intensityId") REFERENCES "Intensity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArgumentToDay" ADD CONSTRAINT "_ArgumentToDay_A_fkey" FOREIGN KEY ("A") REFERENCES "Argument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArgumentToDay" ADD CONSTRAINT "_ArgumentToDay_B_fkey" FOREIGN KEY ("B") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;
