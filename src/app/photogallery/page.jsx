import React from "react";
import PhotoGallery from "../../components/ui/PhotoGallery";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl mt-8 mb-4">Photo Gallery</h1>

      <h2 className="text-lg">
        Join us and feel the duck-fference of being part of something beyound
        awesome!
      </h2>
      <PhotoGallery />
    </div>
  );
};

export default page;
