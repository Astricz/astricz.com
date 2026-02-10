const DEFAULT_GALLERY_ITEMS = [
  {
    id: "template-1",
    title: "Artwork Template 1",
    description: "Use 1280x720 images for a YouTube thumbnail ratio.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&h=720&q=80",
    createdAt: "Template"
  },
  {
    id: "template-2",
    title: "Artwork Template 2",
    description: "Add your illustration title here.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1280&h=720&q=80",
    createdAt: "Template"
  }
];

const GALLERY_STORAGE_KEY = "astricz_gallery_items";

function loadGalleryItems() {
  try {
    const stored = localStorage.getItem(GALLERY_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return [...DEFAULT_GALLERY_ITEMS, ...parsed];
  } catch {
    return [...DEFAULT_GALLERY_ITEMS];
  }
}

function saveGalleryItems(items) {
  localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(items));
}
