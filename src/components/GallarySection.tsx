"use client"
import { useState, useEffect } from "react";
import { ParallaxScrollSecond } from "./ui/parallax-scroll";
import axios from "axios";

export function ParallaxScrollSecondDemo() {
  const [fetchedImages, setFetchedImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data: { images } } = await axios.get('/api/admin/upload-image');

        // Extract image URLs from fetched images
        const imageURLs = images.map((image: any) => image.image_url);
        setFetchedImages(imageURLs);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return <ParallaxScrollSecond images={fetchedImages} />;
}
