import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  "/logoipsum-1.svg",
  "/logoipsum-2.svg",
  "/logoipsum-3.svg",
  "/logoipsum-4.svg",
  "/logoipsum-5.svg",
];

export default function Logo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLogos = logos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
    }, 2000); // Geser setiap 2 detik

    return () => clearInterval(interval);
  }, [totalLogos]);

  return (
    <div className="container py-8 text-white overflow-hidden">
      <h1 className="text-lg text-center mb-4">
        Trusted by The Worlds Leading Brands
      </h1>

      <div className="flex justify-center overflow-hidden relative">
        <motion.div
          className="flex space-x-6 min-w-max"
          animate={{ x: -currentIndex * 80 }} 
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          {/* Loop logo dua kali untuk efek infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt=""
              className="h-10 md:h-14 lg:h-16"
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
