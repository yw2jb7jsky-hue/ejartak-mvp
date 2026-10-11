const stats = [
  { label: 'إجمالي السيارات', value: '146', delta: '+12%' },
  { label: 'الحجوزات', value: '284', delta: '+9%' },
  { label: 'الإيراد', value: '24500', delta: '+18%' },
  { label: 'طلبات معلقة', value: '19', delta: '-4%' },
];

const cars = [
  { name: 'تويوتا كامري', type: 'سيدان', price: 320, status: 'متاح' },
  { name: 'BMW X5', type: 'SUV', price: 620, status: 'في رحلة' },
  { name: 'مرسيدس C200', type: 'فاخرة', price: 540, status: 'متاح' },
  { name: 'هيونداي سوناتا', type: 'عائلية', price: 290, status: 'مؤجّلة' },
];

const bookings = [
  { customer: 'أحمد السالم', car: 'BMW X5', total: '620 ر.س', status: 'مؤكد' },
  { customer: 'سارة الخالدي', car: 'كامري', total: '320 ر.س', status: 'قيد المراجعة' },
  { customer: 'عبد الرحمن', car: 'مرسيدس C200', total: '540 ر.س', status: 'مؤكد' },
];

export default function AdminPage() {
  return (
    <main style={{ padding: 32, background: '#f5f7fb', minHeight: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 20 }}>
        <aside style={{ background: '#0f172a', color: 'white', borderRadius: 20, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>إ</div>
            <div>
              <h2 style={{ margin: 0 }}>إيجار تك</h2>
              <small style={{ color: '#cbd5e1' }}>لوحة الإدارة</small>
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 30 }}>
            {['لوحة التحكم', 'السيارات', 'الحجوزات', 'العملاء', 'التقارير', 'الإعدادات'].map((item, index) => (
              <a key={item} href="#" style={{ color: index === 0 ? 'white' : '#cbd5e1', textDecoration: 'none', padding: '10px 12px', borderRadius: 10, background: index === 0 ? 'rgba(255,255,255,0.08)' : 'transparent' }}>
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <section style={{ display: 'grid', gap: 22 }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 8px 0' }}>
            <div>
              <p style={{ margin: 0, color: '#667085' }}>مرحبًا بك</p>
              <h1 style={{ margin: '8px 0 0', fontSize: 30 }}>نظرة عامة على النشاط</h1>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ padding: '10px 16px', border: '1px solid #dfe3ea', borderRadius: 12, background: 'white', fontWeight: 700 }}>تصدير</button>
              <button style={{ padding: '10px 16px', border: 'none', borderRadius: 12, background: '#1d4ed8', color: 'white', fontWeight: 700 }}>إضافة سيارة</button>
            </div>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))', gap: 16 }}>
            {stats.map((item) => (
              <div key={item.label} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 18, padding: 18, boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ width: 38, height: 38, borderRadius: 12, background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📊</span>
                  <span style={{ padding: '6px 10px', background: item.delta.includes('-') ? '#fff4db' : '#dff7ee', color: item.delta.includes('-') ? '#d97706' : '#0f9f6e', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>{item.delta}</span>
                </div>
                <h3 style={{ margin: 0, fontSize: 28 }}>{item.value}</h3>
                <p style={{ margin: '6px 0 0', color: '#667085' }}>{item.label}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20 }}>
            <div style={{ background: 'white', borderRadius: 18, border: '1px solid #e5e7eb', padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ margin: 0 }}>السيارات</h3>
                <a href="#" style={{ color: '#1d4ed8', textDecoration: 'none', fontWeight: 700 }}>عرض الكل</a>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'right', color: '#667085', padding: '10px 8px' }}>السيارة</th>
                    <th style={{ textAlign: 'right', color: '#667085', padding: '10px 8px' }}>الفئة</th>
                    <th style={{ textAlign: 'right', color: '#667085', padding: '10px 8px' }}>السعر</th>
                    <th style={{ textAlign: 'right', color: '#667085', padding: '10px 8px' }}>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr key={car.name}>
                      <td style={{ padding: '12px 8px' }}>{car.name}</td>
                      <td style={{ padding: '12px 8px' }}>{car.type}</td>
                      <td style={{ padding: '12px 8px' }}>{car.price} ر.س</td>
                      <td style={{ padding: '12px 8px' }}>
                        <span style={{ background: car.status === 'متاح' ? '#dff7ee' : '#fff4db', color: car.status === 'متاح' ? '#0f9f6e' : '#d97706', borderRadius: 999, padding: '6px 10px', fontWeight: 700, fontSize: 12 }}>{car.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background: 'white', borderRadius: 18, border: '1px solid #e5e7eb', padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ margin: 0 }}>الحجوزات الحديثة</h3>
                <a href="#" style={{ color: '#1d4ed8', textDecoration: 'none', fontWeight: 700 }}>الكل</a>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {bookings.map((booking) => (
                  <div key={booking.customer} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eef2f7', paddingBottom: 10 }}>
                    <div>
                      <strong>{booking.customer}</strong>
                      <div style={{ color: '#667085', fontSize: 13 }}>{booking.car}</div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <strong>{booking.total}</strong>
                      <div style={{ fontSize: 12, color: booking.status === 'مؤكد' ? '#0f9f6e' : '#d97706' }}>{booking.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
