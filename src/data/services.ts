export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  is_active: boolean;
  sort_order: number;
}

export const staticServices: Service[] = [
  {
    id: "1",
    title: "جودة مضمونة",
    description: "نستخدم أفضل خامات القطن المصري لضمان راحة طفلتك",
    icon: "ShieldCheck",
    is_active: true,
    sort_order: 1
  },
  {
    id: "2",
    title: "أسعار الجملة",
    description: "نقدم أفضل أسعار الجملة في السوق المصري للكميات",
    icon: "Tags",
    is_active: true,
    sort_order: 2
  },
  {
    id: "3",
    title: "شحن سريع",
    description: "توصيل سريع وموثوق لجميع محافظات مصر",
    icon: "Truck",
    is_active: true,
    sort_order: 3
  }
];
