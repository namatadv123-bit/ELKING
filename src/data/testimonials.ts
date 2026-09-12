export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image_url?: string;
  is_active: boolean;
  sort_order: number;
}

export const staticTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "أم أحمد",
    role: "عميل",
    content: "خامات ممتازة وأسعار الجملة لا يعلى عليها. تعامل راقي وتوصيل سريع.",
    rating: 5,
    is_active: true,
    sort_order: 1
  },
  {
    id: "2",
    name: "محل أطفالنا",
    role: "تاجر",
    content: "أفضل مصنع نتعامل معه في الليجن والكولون. البضاعة بتتباع بسرعة.",
    rating: 5,
    is_active: true,
    sort_order: 2
  }
];
