/* eslint-disable @next/next/no-img-element */
import {
  IconAperture,
  IconBrightnessUp,
  IconFunction,
} from "@tabler/icons-react";
import Exif, { type ExifData } from "exif";
import Link from "next/link";
import path from "path";

export async function GalleryTile({ imageFile }: { imageFile: string }) {
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
    <Link
      href={`/gallery/details/${path.parse(imageFile).name}`}
      className="group relative aspect-auto h-auto max-w-2xl"
    >
      <img
        alt={metaData.exif.UserComment?.toString() ?? ""}
        className="aspect-auto object-cover"
        src={`/gallery/${imageFile}`}
      />
      {/* <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 bg-black/50 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {metaData.exif.FocalLength && (
          <div className="flex items-center gap-1">
            <IconAperture className="h-4 w-4" /> {metaData.exif.FocalLength}mm
          </div>
        )}
        {metaData.exif.FNumber && (
          <div className="flex items-center gap-1">
            <IconFunction className="h-4 w-4" /> {metaData.exif.FNumber}
          </div>
        )}
        {metaData.exif.ISO && (
          <div className="flex items-center gap-1">
            <IconBrightnessUp className="h-4 w-4" />{" "}
            {metaData.exif.ISO?.toLocaleString()}
          </div>
        )}
      </div> */}
    </Link>
  );
}
