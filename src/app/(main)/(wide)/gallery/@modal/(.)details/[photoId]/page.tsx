/* eslint-disable @next/next/no-img-element */
import Exif, { type ExifData } from "exif";
import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";
import { PhotoModal } from "./modal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type ReactElement, type ReactNode, cloneElement } from "react";
import {
  IconAperture,
  IconBrightnessUp,
  IconCamera,
  IconClock,
  IconFunction,
  IconSun,
  IconTelescope,
} from "@tabler/icons-react";
import { capitalize } from "@/lib/utils";

export default async function PhotoPage({
  params,
}: {
  params: { photoId: string };
}) {
  const images = fs.readdirSync(path.join(process.cwd(), "/public/gallery"));
  const imageFile = images.find((image) => image.startsWith(params.photoId));
  if (!imageFile) notFound();

  const ExifReader = new Exif.ExifImage();
  const metaData = await new Promise<ExifData>((resolve, reject) => {
    ExifReader.loadImage(
      path.join(process.cwd(), "/public/gallery", imageFile),
      (error, data) => {
        if (error) reject(error);
        resolve(data);
      },
    );
  });

  return (
    // <div className="flex min-h-full max-w-full bg-muted">
    //   <img
    //     alt={metaData.exif.UserComment?.toString() ?? ""}
    //     src={`/gallery/${imageFile}`}
    //     className="h-auto min-w-0 shrink grow"
    //   />
    //   <Card className=" h-full min-w-[25vw] rounded-none border-0 border-l">
    //     Oh, youve arrived
    //   </Card>
    // </div>
    <PhotoModal>
      <div className="jsutify-center flex max-w-full flex-nowrap bg-muted">
        <img
          alt={metaData.exif.UserComment?.toString() ?? ""}
          src={`/gallery/${imageFile}`}
          className="max-h-[90vh] min-w-0 shrink grow object-contain"
        />
        <Card className="min-w-20 max-w-md shrink-0 grow rounded-none border-0 border-l">
          <CardHeader className="font-extrabold">Image Metadata</CardHeader>
          <CardContent className="flex flex-col gap-2 text-muted-foreground">
            <MetadataItem icon={<IconCamera />} label="Camera">
              {capitalize(metaData.image.Make ?? "")} {metaData.image.Model}
            </MetadataItem>
            <MetadataItem icon={<IconTelescope />} label="Lens">
              {metaData.exif.LensModel}
            </MetadataItem>
            <MetadataItem icon={<IconAperture />} label="Focal Length">
              {metaData.exif.FocalLength}mm
            </MetadataItem>
            <MetadataItem icon={<IconBrightnessUp />} label="ISO">
              {metaData.exif.ISO?.toLocaleString()}
            </MetadataItem>
            <MetadataItem icon={<IconFunction />} label="F-Stop">
              {metaData.exif.FNumber}
            </MetadataItem>
            <MetadataItem icon={<IconClock />} label="Shutter Speed">
              {metaData.exif.ExposureTime?.toPrecision(3)}s
            </MetadataItem>
            <MetadataItem icon={<IconSun />} label="Exposure Compensation">
              {metaData.exif.ExposureCompensation}
            </MetadataItem>
          </CardContent>
        </Card>
      </div>
    </PhotoModal>
  );
}

export function MetadataItem({
  children,
  icon,
  label,
}: {
  children?: ReactNode;
  icon?: ReactElement;
  label: ReactNode;
}) {
  const scaledIcon = icon ? cloneElement(icon, { className: "h-5 w-5" }) : null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 font-bold text-primary">
        {scaledIcon}
        <>{label}:</>
      </div>
      <div>{children}</div>
    </div>
  );
}
