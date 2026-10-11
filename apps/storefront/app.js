* {
  box-sizing: border-box;
}

:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --primary: #1d4ed8;
  --primary-dark: #0f172a;
  --primary-soft: #dbeafe;
  --text: #14213d;
  --muted: #667085;
  --border: #e5e7eb;
  --shadow: 0 12px 35px rgba(17, 24, 39, 0.06);
  --success: #0f9f6e;
  --warning: #f59e0b;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Cairo", sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  text-decoration: none;
}

button,
select {
  font: inherit;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.header {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(229,231,235,0.7);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 1.4rem;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #60a5fa, #2563eb);
  color: white;
  font-weight: 800;
}

.nav nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav nav a {
  color: var(--text);
  font-weight: 600;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  box-shadow: 0 14px 24px rgba(29, 78, 216, 0.2);
}

.secondary-btn {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.hero {
  padding: 56px 0 28px;
  background: radial-gradient(circle at top right, rgba(96,165,250,0.18), transparent 30%), linear-gradient(180deg, #f8fbff 0%, #edf4ff 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 28px;
}

.badge {
  display: inline-flex;
  padding: 8px 12px;
  font-size: 0.8rem;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 999px;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.25rem, 4vw, 4rem);
  line-height: 1.2;
  margin: 18px 0 14px;
  color: var(--primary-dark);
}

.hero-copy p {
  margin: 0;
  color: var(--muted);
  line-height: 1.9;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 22px;
}

.hero-stats {
  list-style: none;
  display: flex;
  gap: 28px;
  padding: 0;
  margin: 28px 0 0;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-stats strong {
  font-size: 1.5rem;
  color: var(--primary-dark);
}

.hero-stats span {
  color: var(--muted);
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.mini-card,
.booking-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.mini-card {
  padding: 22px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: white;
}

.mini-card span {
  color: rgba(255,255,255,0.8);
  font-size: 0.8rem;
}

.mini-card h3 {
  margin: 12px 0 6px;
  font-size: 2rem;
}

.mini-card p {
  margin: 0;
  color: rgba(255,255,255,0.8);
}

.booking-card {
  padding: 22px;
}

.booking-card h4 {
  margin-top: 0;
  font-size: 1.4rem;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.booking-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

.booking-form select {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #f9fafb;
  padding: 12px 14px;
  color: var(--text);
}

.btn-full {
  width: 100%;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 18px;
}

.filter-chip {
  background: white;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
}

.filter-chip.active {
  background: var(--primary-soft);
  color: var(--primary);
  border-color: transparent;
}

.cars {
  padding: 30px 0 20px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 20px;
}

.section-head h2 {
  margin: 6px 0 0;
  font-size: 2rem;
}

.subheading {
  color: var(--primary);
  font-weight: 700;
}

.section-head a {
  color: var(--primary);
  font-weight: 700;
}

.car-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 20px;
}

.car-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.car-image {
  height: 200px;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.car-body {
  padding: 18px 18px 20px;
}

.car-body-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.car-body h3 {
  margin: 0;
  font-size: 1.5rem;
}

.tag {
  background: var(--primary-soft);
  color: var(--primary);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 700;
}

.car-meta {
  margin: 14px 0;
  color: var(--muted);
  font-size: 0.95rem;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.car-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.price small {
  font-size: 0.8rem;
  color: var(--muted);
}

.book-btn {
  border: none;
  background: var(--primary);
  color: white;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 700;
}

.features {
  padding: 40px 0 70px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
}

.feature-item {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px 20px;
  box-shadow: var(--shadow);
}

.feature-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: var(--primary-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 16px;
}

.feature-item h3 {
  margin: 0 0 8px;
}

.feature-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.footer {
  background: #0f172a;
  color: white;
  padding: 28px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer h3 {
  margin: 0 0 8px;
}

.footer p {
  margin: 0;
  color: rgba(255,255,255,0.75);
}

@media (max-width: 900px) {
  .hero-content,
  .car-grid,
  .features {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 14px 0;
  }

  .nav nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 560px) {
  .hero-copy h1 {
    font-size: 2.3rem;
  }

  .hero-actions,
  .section-head,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 16px;
  }
}
