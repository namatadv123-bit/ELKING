export const sendOrderEmail = async (orderDetails: {
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  customerEmail?: string;
  notes?: string;
  items: { name: string; quantity: number; price?: number }[];
  totalPrice?: number;
}) => {
  const accessKeys = [
    "84c64417-950b-4be4-98a6-b0694dfd977e", // Existing key
    "8862f5e6-9150-4839-9155-bc68a9828bad", // New key provided by user
  ];

  // Format the items into a readable list
  const itemsList = orderDetails.items
    .map((item) => `- ${item.name} (الكمية: ${item.quantity})${item.price ? ` - السعر: ${item.price} ج.م` : ''}`)
    .join("\n");

  const emailMessage = `
  🎉 طلب جديد من موقع مصنع الكينج!

تفاصيل العميل:
----------------
الاسم: ${orderDetails.customerName}
رقم الهاتف: ${orderDetails.customerPhone}
${orderDetails.customerAddress ? `العنوان: ${orderDetails.customerAddress}` : ''}
${orderDetails.customerEmail ? `البريد الإلكتروني: ${orderDetails.customerEmail}` : ''}
${orderDetails.notes ? `ملاحظات: ${orderDetails.notes}` : ''}

المنتجات المطلوبة:
----------------
${itemsList}

${orderDetails.totalPrice ? `الإجمالي: ${orderDetails.totalPrice} ج.م` : ''}
  `;

  try {
    const promises = accessKeys.map(key => 
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          subject: `طلب جديد من ${orderDetails.customerName}`,
          from_name: "متجر مصنع الكينج",
          name: orderDetails.customerName || "عميل",
          email: orderDetails.customerEmail || "no-reply@elkingclo.com",
          message: emailMessage,
        }),
      })
    );

    const responses = await Promise.all(promises);
    
    // Check responses and log errors if any
    let allSuccess = true;
    for (let i = 0; i < responses.length; i++) {
      const res = responses[i];
      if (!res.ok) {
        allSuccess = false;
        const errorData = await res.text();
        console.error(`Web3Forms Error for key ${accessKeys[i]}:`, res.status, errorData);
      }
    }
    
    return allSuccess;
  } catch (error) {
    console.error("Error sending order emails:", error);
    return false;
  }
};

