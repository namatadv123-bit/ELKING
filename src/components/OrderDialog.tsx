import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: { id: string; name: string } | null;
}

const OrderDialog = ({ open, onOpenChange, product }: OrderDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "", quantity: 1 });
  const { data: settings } = useSiteSettings();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    const messageBody = `طلب منتج جديد:\n\n` + 
      `المنتج: ${product.name}\n` +
      `الكمية: ${form.quantity}\n\n` +
      `بيانات العميل:\n` +
      `الاسم: ${form.name.trim()}\n` +
      `الهاتف: ${form.phone.trim()}\n` +
      (form.email ? `البريد: ${form.email.trim()}\n` : '') +
      (form.notes ? `ملاحظات: ${form.notes.trim()}` : '');

    const targetPhone = settings?.whatsapp || "01006395252";
    const waLink = `https://wa.me/2${targetPhone}?text=${encodeURIComponent(messageBody)}`;
    
    window.open(waLink, '_blank');
    
    setLoading(false);
    toast.success("تم تحويلك للواتساب لإرسال الطلب!");
    setForm({ name: "", phone: "", email: "", notes: "", quantity: 1 });
    onOpenChange(false);
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="font-cairo text-xl">طلب منتج: {product?.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="الاسم الكامل *"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="font-cairo"
          />
          <Input
            placeholder="رقم الهاتف *"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="font-cairo"
            dir="ltr"
          />
          <Input
            placeholder="البريد الإلكتروني (اختياري)"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="font-cairo"
            dir="ltr"
          />
          <Input
            type="number"
            min={1}
            placeholder="الكمية"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) || 1 })}
            className="font-cairo"
          />
          <Textarea
            placeholder="ملاحظات إضافية"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="font-cairo"
          />
          <Button type="submit" className="w-full font-cairo" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "تأكيد الطلب"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
