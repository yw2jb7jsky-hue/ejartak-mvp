const cars = [
  { name: 'BMW X5', type: 'SUV', seats: '5 مقاعد', price: 620, icon: '🚙', label: 'مفضل' },
  { name: 'تويوتا كامري', type: 'سيدان', seats: '5 مقاعد', price: 320, icon: '🚗', label: 'حصري' },
  { name: 'مرسيدس C200', type: 'فاخرة', seats: '4 مقاعد', price: 540, icon: '🏎️', label: 'جديد' },
  { name: 'هيونداي سوناتا', type: 'عائلية', seats: '5 مقاعد', price: 290, icon: '🚘', label: 'مميز' },
  { name: 'كيا سورينتو', type: 'SUV', seats: '7 مقاعد', price: 470, icon: '🚙', label: 'عائلي' },
  { name: 'أودي A5', type: 'فاخرة', seats: '4 مقاعد', price: 580, icon: '🚘', label: 'متميز' },
];

export default function StorefrontPage() {
  return (
    <main style={{ fontFamily: 'Cairo, sans-serif', background: '#f5f7fb', color: '#14213d', minHeight: '100vh' }}>
      <header style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ width: 'min(1200px, calc(100% - 32px))', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 24 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg, #60a5fa, #2563eb)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>إ</div>
            إيجار تك
          </div>
          <nav style={{ display: 'flex', gap: 22, fontWeight: 600 }}>
            <a href="#" style={{ color: '#14213d', textDecoration: 'none' }}>الرئيسية</a>
            <a href="#" style={{ color: '#14213d', textDecoration: 'none' }}>السيارات</a>
            <a href="#" style={{ color: '#14213d', textDecoration: 'none' }}>العروض</a>
            <a href="#" style={{ color: '#14213d', textDecoration: 'none' }}>من نحن</a>
          </nav>
          <button style={{ border: 'none', borderRadius: 12, background: '#1d4ed8', color: 'white', padding: '12px 18px', fontWeight: 700 }}>احجز الآن</button>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #edf4ff 100%)', padding: '56px 0 32px' }}>
        <div style={{ width: 'min(1200px, calc(100% - 32px))', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 28, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', padding: '8px 12px', borderRadius: 999, fontWeight: 700, fontSize: 12 }}>منصة مخصصة لمكاتب التأجير</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', margin: '18px 0 14px', lineHeight: 1.2 }}>أسهل طريقة لعرض سياراتك وتأجيرها عبر الإنترنت</h1>
            <p style={{ color: '#667085', lineHeight: 1.9, fontSize: 18, margin: 0 }}>أنشئ متجرًا احترافيًا لمكتبك، أضف سياراتك، وحدد الأسعار، واستقبل الحجوزات من عملائك بكل سهولة.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 24 }}>
              <button style={{ border: 'none', borderRadius: 12, background: '#1d4ed8', color: 'white', padding: '12px 20px', fontWeight: 700 }}>ابدأ الآن</button>
              <button style={{ border: '1px solid #dfe3ea', borderRadius: 12, background: 'white', padding: '12px 20px', fontWeight: 700 }}>استعرض السيارات</button>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 28 }}>
              <div><strong style={{ display: 'block', fontSize: 28 }}>250+</strong><span style={{ color: '#667085' }}>سيارة</span></div>
              <div><strong style={{ display: 'block', fontSize: 28 }}>4.9/5</strong><span style={{ color: '#667085' }}>تقييم</span></div>
              <div><strong style={{ display: 'block', fontSize: 28 }}>24/7</strong><span style={{ color: '#667085' }}>دعم</span></div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', color: 'white', borderRadius: 22, padding: 22 }}>
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12 }}>أكثر طلبًا</span>
              <h3 style={{ margin: '12px 0 6px', fontSize: 32 }}>BMW X5</h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>من 620 ر.س / يوم</p>
            </div>
            <div style={{ background: 'white', borderRadius: 22, padding: 22, border: '1px solid #e5e7eb', boxShadow: '0 12px 30px rgba(17,24,39,0.05)' }}>
              <h4 style={{ margin: '0 0 16px' }}>حجز سريع</h4>
              <div style={{ display: 'grid', gap: 14 }}>
                <label style={{ display: 'grid', gap: 8, fontWeight: 600 }}>
                  <span>نوع السيارة</span>
                  <select style={{ border: '1px solid #dfe3ea', borderRadius: 12, padding: '12px 14px', background: '#f9fafb' }}>
                    <option>سيدان</option>
                    <option>SUV</option>
                    <option>فاخرة</option>
                  </select>
                </label>
                <label style={{ display: 'grid', gap: 8, fontWeight: 600 }}>
                  <span>مدة التأجير</span>
                  <select style={{ border: '1px solid #dfe3ea', borderRadius: 12, padding: '12px 14px', background: '#f9fafb' }}>
                    <option>يوم</option>
                    <option>أسبوع</option>
                    <option>شهر</option>
                  </select>
                </label>
                <button style={{ width: '100%', border: 'none', background: '#1d4ed8', color: 'white', borderRadius: 12, padding: '12px 18px', fontWeight: 700 }}>ابحث الآن</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: 'min(1200px, calc(100% - 32px))', margin: '26px auto 0' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['الكل', 'SUV', 'سيدان', 'عائلية', 'فاخرة'].map((chip, index) => (
            <span key={chip} style={{ background: index === 0 ? '#dbeafe' : 'white', color: index === 0 ? '#1d4ed8' : '#14213d', border: '1px solid #e5e7eb', borderRadius: 999, padding: '10px 16px', fontWeight: 700 }}>{chip}</span>
          ))}
        </div>
      </section>

      <section style={{ width: 'min(1200px, calc(100% - 32px))', margin: '30px auto 0', paddingBottom: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
          <div>
            <span style={{ color: '#1d4ed8', fontWeight: 700 }}>السيارات المتاحة</span>
            <h2 style={{ margin: '8px 0 0', fontSize: 32 }}>اختَر السيارة المناسبة لك</h2>
          </div>
          <a href="#" style={{ color: '#1d4ed8', fontWeight: 700, textDecoration: 'none' }}>عرض الكل</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(240px, 1fr))', gap: 20 }}>
          {cars.map((car) => (
            <article key={car.name} style={{ background: 'white', borderRadius: 22, border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 12px 30px rgba(17,24,39,0.04)' }}>
              <div style={{ height: 180, background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 54 }}>{car.icon}</div>
              <div style={{ padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: 28 }}>{car.name}</h3>
                  <span style={{ padding: '6px 10px', borderRadius: 999, background: '#dbeafe', color: '#1d4ed8', fontSize: 12, fontWeight: 700 }}>{car.label}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, color: '#667085' }}>
                  <span>{car.type}</span>
                  <span>{car.seats}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
                  <div style={{ fontWeight: 800, fontSize: 28 }}>{car.price}<small style={{ color: '#667085', fontSize: 12 }}> ر.س / يوم</small></div>
                  <button style={{ border: 'none', background: '#1d4ed8', color: 'white', borderRadius: 10, padding: '10px 14px', fontWeight: 700 }}>احجز</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
