import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">سياسة الخصوصية</h1>
          
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">1. مقدمة</h2>
              <p>
                نحن في موقعنا نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدامك لموقعنا وخدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">2. المعلومات التي نجمعها</h2>
              <p>
                قد نقوم بجمع المعلومات التالية عند استخدامك للموقع أو طلب منتجاتنا:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>الاسم بالكامل.</li>
                <li>معلومات الاتصال بما في ذلك عنوان البريد الإلكتروني ورقم الهاتف.</li>
                <li>المعلومات الديموغرافية مثل الرمز البريدي والعنوان.</li>
                <li>معلومات أخرى ذات صلة باستطلاعات العملاء أو العروض.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">3. كيف نستخدم المعلومات</h2>
              <p>
                نستخدم هذه المعلومات لفهم احتياجاتك وتقديم خدمة أفضل، وبشكل خاص للأسباب التالية:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>حفظ السجلات الداخلية ومعالجة الطلبات.</li>
                <li>تحسين منتجاتنا وخدماتنا.</li>
                <li>إرسال رسائل بريد إلكتروني ترويجية بشكل دوري حول المنتجات الجديدة أو العروض الخاصة.</li>
                <li>التواصل معك لأغراض أبحاث السوق.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">4. حماية البيانات</h2>
              <p>
                نحن ملتزمون بضمان حماية معلوماتك. لمنع الوصول أو الإفصاح غير المصرح به، قمنا بوضع إجراءات مادية وإلكترونية وإدارية مناسبة لحماية وتأمين المعلومات التي نجمعها عبر الإنترنت.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">5. استخدام ملفات تعريف الارتباط (Cookies)</h2>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط لتحليل حركة المرور على الويب وتخصيص تجربة المستخدم. يمكنك اختيار قبول أو رفض ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">6. الروابط لمواقع أخرى</h2>
              <p>
                قد يحتوي موقعنا على روابط لمواقع أخرى ذات صلة. بمجرد استخدامك لهذه الروابط لمغادرة موقعنا، يجب ملاحظة أننا لا نملك أي سيطرة على تلك المواقع الأخرى. لذلك، لا يمكننا أن نكون مسؤولين عن حماية وخصوصية أي معلومات تقدمها أثناء زيارتك لتلك المواقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">7. التغييرات على هذه السياسة</h2>
              <p>
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. ننصحك بمراجعة هذه الصفحة بشكل دوري للتأكد من موافقتك على أي تغييرات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">8. اتصل بنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر صفحة اتصل بنا أو من خلال معلومات الاتصال المتوفرة في الموقع.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
