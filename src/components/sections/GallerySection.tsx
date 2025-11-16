import { useState } from "react";
import { TerminalWindow } from "../TerminalWindow";
import { Image as ImageIcon, X } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  {
    id: 1,
    title: "CIE Finals Presentation",
    description: "Presenting at CIE Finals",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1200/v1/portfolio/gallery/portfolio/gallery/CIE_finals_me_presenting?_a=BAMAMiOc0",
  },
  {
    id: 2,
    title: "CIDECODE Win",
    description: "Winner at CIDECODE Hackathon",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1200/v1/portfolio/gallery/portfolio/gallery/Cidecode_win?_a=BAMAMiOc0",
  },
  {
    id: 3,
    title: "IIT Kanpur",
    description: "At IIT Kanpur",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1200/v1/portfolio/gallery/portfolio/gallery/IIT_Kanpur_me?_a=BAMAMiOc0",
  },
  {
    id: 4,
    title: "IIT Madras",
    description: "At IIT Madras",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1200/v1/portfolio/gallery/portfolio/gallery/IIT_Madras_me?_a=BAMAMiOc0",
  },
  {
    id: 5,
    title: "Kodikon Win",
    description: "Winner at Kodikon 3.0",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1200/v1/portfolio/gallery/portfolio/gallery/Kodikon_win?_a=BAMAMiOc0",
  },
  {
    id: 6,
    title: "TAMS Patna",
    description: "Marketing at TAMS Patna",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1200/v1/portfolio/gallery/portfolio/gallery/TAMS_Patna_marketing?_a=BAMAMiOc0",
  },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="gallery" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/gallery">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>find ./images -type f -name "*.jpg"</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square rounded-lg border border-border hover:border-primary smooth-transition cursor-pointer group overflow-hidden ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-full h-full relative group-hover:scale-105 smooth-transition">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <div className="text-xs font-mono text-white">
                      <div className="font-bold">{image.title}</div>
                      <div className="text-gray-300 text-[10px] mt-1">
                        {image.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="code-block mt-6">
            <div className="text-sm text-muted-foreground">
              <span className="command-prompt">$</span> exiftool --stats
            </div>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Total Images:</span>
                <span className="text-primary">{galleryImages.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated:</span>
                <span className="text-primary">2024-01-15</span>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="space-y-4">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
