import * as Dialog from "@radix-ui/react-dialog";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";

import { PageIntro } from "@/components/PageIntro";
import {
  certificates,
  gallery,
  type GalleryItem,
} from "@/content/portfolio";

type ArchiveTab = "certificates" | "gallery";

const Archive = () => {
  const [activeTab, setActiveTab] = useState<ArchiveTab>("certificates");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <PageIntro
        eyebrow="Archive"
        title="The work around the work."
        description="Certificates, milestones, and photographs kept as a personal record rather than compressed into the main portfolio narrative."
      />

      <section className="page-container page-section">
        <div className="archive-tabs" role="tablist" aria-label="Archive views">
          <button
            type="button"
            role="tab"
            id="certificates-tab"
            aria-controls="certificates-panel"
            aria-selected={activeTab === "certificates"}
            className={activeTab === "certificates" ? "active" : ""}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
            <span>{certificates.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            id="gallery-tab"
            aria-controls="gallery-panel"
            aria-selected={activeTab === "gallery"}
            className={activeTab === "gallery" ? "active" : ""}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
            <span>{gallery.length}</span>
          </button>
        </div>

        {activeTab === "certificates" ? (
          <div
            className="certificate-wall"
            role="tabpanel"
            id="certificates-panel"
            aria-labelledby="certificates-tab"
          >
            {certificates.map((certificate, index) => (
              <article key={`${certificate.title}-${certificate.date}`}>
                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{certificate.date}</p>
                  <h2>{certificate.title}</h2>
                  <p>{certificate.issuer}</p>
                  {certificate.note && <small>{certificate.note}</small>}
                </div>
                {certificate.credential && (
                  <code>{certificate.credential}</code>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div
            className="gallery-grid"
            role="tabpanel"
            id="gallery-panel"
            aria-labelledby="gallery-tab"
          >
            {gallery.map((item, index) => (
              <button
                type="button"
                className="gallery-item"
                key={item.src}
                onClick={() => setSelectedImage(item)}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  width="700"
                  height="700"
                />
                <span className="gallery-overlay">
                  <span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                  <Maximize2 aria-hidden="true" size={18} />
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      <Dialog.Root
        open={Boolean(selectedImage)}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="image-dialog-overlay" />
          <Dialog.Content className="image-dialog">
            <Dialog.Title>{selectedImage?.title}</Dialog.Title>
            <Dialog.Description>
              {selectedImage?.description}
            </Dialog.Description>
            {selectedImage && (
              <img src={selectedImage.src} alt={selectedImage.title} />
            )}
            <Dialog.Close asChild>
              <button
                type="button"
                className="image-dialog-close"
                aria-label="Close image"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Archive;
