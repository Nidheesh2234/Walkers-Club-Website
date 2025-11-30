import { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  // Replace these with your actual image paths or URLs
  const [images] = useState([
    { id: 1, url: "/gallery/img1.jpg" },
    { id: 2, url: "/gallery/img2.jpg" },
    { id: 3, url: "/gallery/img16.jpg" },
    { id: 4, url: "/gallery/img28.jpg" },
    { id: 5, url: "/gallery/img40.jpg" },
    { id: 6, url: "/gallery/img52.jpg" },
    { id: 7, url: "/gallery/img64.jpg" },
    { id: 8, url: "/gallery/img76.jpg" },
    { id: 9, url: "/gallery/img88.jpg" },
    { id: 10, url: "/gallery/img100.jpg" },
    { id: 11, url: "/gallery/img112.jpg" },
    { id: 12, url: "/gallery/img124.jpg" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Walkers Club Gallery
        </motion.h1>
        <p className="text-black text-lg max-w-2xl mx-auto">
          A glimpse into our journey of health, friendship, and community.
        </p>
      </section>

      {/* Masonry Gallery Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer break-inside-avoid"
              >
                <img
                  src={image.url}
                  alt="Gallery"
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
