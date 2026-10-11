* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --surface: #eef4ff;
  --primary: #1d4ed8;
  --primary-soft: #dbeafe;
  --success: #0f9f6e;
  --success-soft: #dff7ee;
  --warning: #f59e0b;
  --warning-soft: #fff4db;
  --danger: #ef4444;
  --danger-soft: #fee2e2;
  --text: #14213d;
  --muted: #667085;
  --border: #e5e7eb;
  --shadow: 0 10px 30px rgba(20, 33, 61, 0.08);
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

button {
  font-family: inherit;
  cursor: pointer;
}

.admin-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: white;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px;
}

.brand-badge {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #60a5fa, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.3rem;
}

.brand-box h1 {
  margin: 0;
  font-size: 1.5rem;
}

.brand-box small {
  color: rgba(255,255,255,0.75);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.nav a.active,
.nav a:hover {
  background: rgba(255,255,255,0.08);
  color: white;
}

.sidebar-card {
  margin-top: auto;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label {
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
}

.sidebar-card strong {
  font-size: 1.7rem;
}

.sidebar-card button {
  border: none;
  background: white;
  color: #111827;
  border-radius: 10px;
  padding: 10px 12px;
  font-weight: 700;
}

.main-panel {
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
}

.eyebrow {
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.topbar h2 {
  margin: 4px 0 0;
  font-size: 1.9rem;
}

.topbar-actions {
  display: flex;
  gap: 12px;
}

.primary-btn,
.ghost-btn,
.text-btn {
  border: none;
  border-radius: 10px;
  padding: 11px 18px;
  font-weight: 700;
}

.primary-btn {
  background: var(--primary);
  color: white;
}

.ghost-btn {
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
}

.text-btn {
  background: transparent;
  color: var(--primary);
  padding: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(170px, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 18px 16px;
  box-shadow: var(--shadow);
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.stat-card h3 {
  margin: 0;
  font-size: 2rem;
}

.stat-card p {
  margin: 4px 0 0;
  color: var(--muted);
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
}

.pill.positive {
  background: var(--success-soft);
  color: var(--success);
}

.pill.warning {
  background: var(--warning-soft);
  color: var(--warning);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 22px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.panel-header h3 {
  margin: 0;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: right;
  padding: 14px 10px;
  border-bottom: 1px solid var(--border);
  font-size: 0.96rem;
}

th {
  color: var(--muted);
  font-weight: 700;
}

.car-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.car-thumb {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.status-tag {
  display: inline-block;
  padding: 7px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.75rem;
}

.ready {
  background: var(--success-soft);
  color: var(--success);
}

.busy {
  background: var(--warning-soft);
  color: var(--warning);
}

.trip {
  background: var(--danger-soft);
  color: var(--danger);
}

.row-actions {
  display: flex;
  gap: 8px;
}

.row-actions button {
  border: none;
  background: #f3f4f6;
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: 700;
  color: var(--text);
}

.booking-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.booking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.booking-details strong {
  display: block;
  margin-bottom: 4px;
}

.booking-details span {
  color: var(--muted);
  font-size: 0.82rem;
}

.booking-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.booking-price strong {
  font-size: 1rem;
}

@media (max-width: 1100px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(170px, 1fr));
  }
}

@media (max-width: 800px) {
  .admin-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding-bottom: 18px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
