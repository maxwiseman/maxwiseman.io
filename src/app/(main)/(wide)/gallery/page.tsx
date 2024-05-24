import { Masonry } from "../../../../components/masonry";
import { GalleryTile } from "./galleryTile";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import { Footer } from "./footer";

export default async function GalleryPage() {
  const photos = fs.readdirSync(path.join(process.cwd(), "/public/gallery"));

  return (
    <div>
      <Masonry className="p-4" gutter="1rem" columnsCount={3}>
        {photos.map((photoId) => (
          <Suspense key={photoId} fallback={<div>Loading...</div>}>
            <GalleryTile imageFile={photoId} />
          </Suspense>
        ))}
      </Masonry>
      <Footer />
    </div>
  );
}
