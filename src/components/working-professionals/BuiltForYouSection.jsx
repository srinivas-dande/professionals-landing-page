'use client';

const checklistItems = [
  'You have technical foundations',
  'You know the industry, not just the algorithm',
  'You need a transition in months, not years',
  'You need it to work around a full-time job',
];

const domains = [
  {
    label: 'Software Engineering / Backend',
    badge: 'Largest cohort',
    badgeBg: '#E0E7FF',
    badgeText: '#4F46E5',
  },
  {
    label: 'Data Engineering / BI / Analytics',
    badge: 'Fastest transition',
    badgeBg: '#F3E8FF',
    badgeText: '#9333EA',
  },
  {
    label: 'DevOps / Infrastructure / Cloud',
    badge: 'MLOps roles',
    badgeBg: '#FEE2C0',
    badgeText: '#EA580C',
  },
  {
    label: 'Banking / Finance Technology',
    badge: 'FinAI roles',
    badgeBg: '#CFFAFE',
    badgeText: '#0891B2',
  },
  {
    label: 'Manufacturing / Industrial',
    badge: 'Industrial AI roles',
    badgeBg: '#DCFCE7',
    badgeText: '#16A34A',
  },
];

export default function BuiltForYouSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '60px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Column */}
          <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
            <span
              style={{
                color: '#4F46E5',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              Built For You Specifically
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 5vw, 36px)',
                lineHeight: '1.2',
                fontWeight: '700',
                color: '#0F172A',
                marginTop: '16px',
                marginBottom: '0',
              }}
            >
              This course is not repurposed fresher content. It was{' '}
              <span style={{ color: '#DC2626' }}>designed from scratch</span> for
              you.
            </h2>
            <p
              style={{
                color: '#6B7280',
                fontSize: '15px',
                lineHeight: '1.6',
                marginTop: '20px',
                marginBottom: '0',
              }}
            >
              Most AI/ML courses start at zero. This one starts where you are with years of engineering or domain experience that becomes your unfair advantage inside the programme.
            </p>

            <ul
              style={{
                listStyle: 'none',
                padding: '0',
                margin: '24px 0 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {checklistItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#DDF3E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16A34A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    style={{
                      color: '#0F172A',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '1.4',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1 1 300px', minWidth: '280px', marginTop: '0' }}>
            <h3
              style={{
                fontSize: 'clamp(18px, 4vw, 22px)',
                fontWeight: '700',
                color: '#0F172A',
                margin: '0 0 12px 0',
              }}
            >
              Domains We&apos;ve Placed From
            </h3>
            <p
              style={{
                color: '#6B7280',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '24px',
                margin: '0 0 24px 0',
              }}
            >
              These are the professional backgrounds our placed switchers came from. Each domain brings context that accelerates AI learning not slows it.
            </p>

            <div
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: '0px',
                overflow: 'hidden',
              }}
            >
              {domains.map((domain, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '14px 16px',
                    borderBottom:
                      index === domains.length - 1
                        ? 'none'
                        : '1px solid #E5E7EB',
                    backgroundColor: 'transparent',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      color: '#1F2937',
                      fontSize: '13px',
                      fontWeight: '500',
                      flex: '1',
                      minWidth: '150px',
                    }}
                  >
                    {domain.label}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      backgroundColor: domain.badgeBg,
                      color: domain.badgeText,
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '6px 12px',
                      borderRadius: '3px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {domain.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
