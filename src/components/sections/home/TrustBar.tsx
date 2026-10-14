const VERTICALS = [
  'Semiconductor', 'Drone & UAV', 'Industrial Automation',
  'IoT & Wireless', 'Automotive', 'Agricultural Technology',
] as const

export function TrustBar() {
  return (
    <div className="bg-surface border-b border-border-card py-4 overflow-hidden" aria-label="Industries served">
      <div className="section-container">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none">
          <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-text-muted whitespace-nowrap flex-shrink-0">
            Trusted in
          </span>
          <div className="w-px h-[18px] bg-border-card flex-shrink-0" aria-hidden="true" />
          <div className="flex items-center gap-6 flex-1">
            {VERTICALS.map((v, i) => (
              <div key={v} className="flex items-center gap-6 flex-shrink-0">
                <span className="text-[0.78rem] font-semibold text-text-secondary whitespace-nowrap">{v}</span>
                {i < VERTICALS.length - 1 && (
                  <span className="w-[3px] h-[3px] rounded-full flex-shrink-0" style={{ background: '#FF5A1F' }} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
