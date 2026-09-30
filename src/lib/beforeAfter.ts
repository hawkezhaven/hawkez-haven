export type BeforeAfterEntry = {
  image: string;
  caption: string;
};

export const BEFORE_AFTER: Record<string, BeforeAfterEntry> = {
  rip: {
    image: "/images/rip collage.png",
    caption: "Rip — the horse who started it all. His before-and-after journey is a reminder of what patience, care, and a second chance can change."
  },
  kahu: {
    image: "/images/kahu-recovery-collage.jpg",
    caption: "Kahu — from a horse who had given up on life to one who found his way back to himself."
  },
  khan: {
    image: "/images/Khan-condition-hoof-collage.png",
    caption: "Khan — a powerful reminder that recovery is a journey, and every step forward matters."
  },
  electra: {
    image: "/images/electra-collage.jpg",
    caption: "Electra — a young mare whose journey shows just how much can change when a horse is given time, safety, and understanding."
  },
  kohan: {
    image: "/images/kohan-cellulitis.png",
    caption: "Kohan — his cellulitis journey, from severe infection and swelling to recovery and comfortable movement."
  }
};
