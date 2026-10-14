'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type TabId = 'meeting' | 'requirement'
type Status = 'idle' | 'submitting' | 'success' | 'error'

const SERVICE_OPTIONS = [
  'PCB Design & Engineering',
  'Embedded Firmware Development',
  'PCBA & Electronics Manufacturing',
  'Drone / UAV Electronics',
  'IoT & Wireless Design',
  'Contract Engineering Resources',
  'End-to-End Product Build',
]

const PROJECT_TYPES = [
  'PCB Design — new board',
  'PCB Design — redesign / revision',
  'Firmware Development',
  'PCBA / Manufacturing Run',
  'Prototype Build',
  'Contract Engineer',
  'Full Product Build',
]

interface ContactFormProps {
  defaultTab?: TabId
}

export function ContactForm({ defaultTab = 'meeting' }: ContactFormProps) {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type') as TabId | null

  const [active, setActive] = useState<TabId>(
    typeParam === 'requirement' ? 'requirement' : defaultTab
  )
  const [status, setStatus]   = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Meeting form state
  const [meetingForm, setMeetingForm] = useState({
    firstName: '', lastName: '', email: '', company: '', service: '',
  })

  // Requirement form state
  const [reqForm, setReqForm] = useState({
    name: '', email: '', projectType: '', requirement: '',
  })

  useEffect(() => {
    if (typeParam === 'meeting' || typeParam === 'requirement') setActive(typeParam)
  }, [typeParam])

  // Reset status when tab changes
  useEffect(() => {
    setStatus('idle')
    setErrorMsg('')
  }, [active])

  async function submitMeeting() {
    if (!meetingForm.firstName || !meetingForm.email) {
      setErrorMsg('First name and email are required.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'meeting', ...meetingForm }),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (!res.ok || !data.success) throw new Error(data.error ?? 'Submission failed.')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  async function submitRequirement() {
    if (!reqForm.name || !reqForm.email || !reqForm.requirement) {
      setErrorMsg('Name, email, and requirement are required.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'requirement', ...reqForm }),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (!res.ok || !data.success) throw new Error(data.error ?? 'Submission failed.')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-white/[0.07] overflow-hidden"
           style={{ background: 'rgba(255,255,255,0.035)' }}>
        <div className="p-10 text-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 border border-brand-orange/25"
            style={{ background: 'rgba(240,80,48,0.12)' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4 4 8-8" stroke="#f05030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[1rem] font-bold text-white mb-2">Message received.</div>
          <p className="text-[0.85rem] text-white/40 leading-[1.7]">
            {active === 'meeting'
              ? 'We will follow up within one business day to confirm a time.'
              : 'You will receive a quote or scoping questions within 2 business days.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.07]"
         style={{ background: 'rgba(255,255,255,0.035)' }}>

      {/* Tab bar */}
      <div role="tablist" aria-label="Contact options" className="flex border-b border-white/[0.06]">
        {(['meeting', 'requirement'] as TabId[]).map(tab => (
          <button
            key={tab}
            role="tab"
            id={`ftab-${tab}`}
            aria-selected={active === tab}
            aria-controls={`fpanel-${tab}`}
            onClick={() => setActive(tab)}
            disabled={status === 'submitting'}
            className={[
              'flex-1 py-4 px-5 text-[0.82rem] font-bold tracking-tight border-none cursor-pointer transition-colors duration-300',
              active === tab ? 'text-white bg-white/[0.04]' : 'text-white/35 hover:text-white/65 bg-transparent',
              status === 'submitting' ? 'cursor-not-allowed opacity-60' : '',
            ].join(' ')}
          >
            {tab === 'meeting' ? 'Book a Discovery Call' : 'Share Requirement'}
          </button>
        ))}
      </div>

      <div className="p-7">

        {/* Meeting tab */}
        {active === 'meeting' && (
          <div role="tabpanel" id="fpanel-meeting" aria-labelledby="ftab-meeting">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <FormGroup label="First Name">
                <input
                  type="text" className={inputCls}
                  placeholder="Alex" autoComplete="given-name"
                  value={meetingForm.firstName}
                  onChange={e => setMeetingForm(p => ({ ...p, firstName: e.target.value }))}
                />
              </FormGroup>
              <FormGroup label="Last Name">
                <input
                  type="text" className={inputCls}
                  placeholder="Thompson" autoComplete="family-name"
                  value={meetingForm.lastName}
                  onChange={e => setMeetingForm(p => ({ ...p, lastName: e.target.value }))}
                />
              </FormGroup>
            </div>
            <FormGroup label="Work Email" className="mb-3.5">
              <input
                type="email" className={inputCls}
                placeholder="alex@yourcompany.com" autoComplete="email"
                value={meetingForm.email}
                onChange={e => setMeetingForm(p => ({ ...p, email: e.target.value }))}
              />
            </FormGroup>
            <FormGroup label="Company" className="mb-3.5">
              <input
                type="text" className={inputCls}
                placeholder="Your company name" autoComplete="organization"
                value={meetingForm.company}
                onChange={e => setMeetingForm(p => ({ ...p, company: e.target.value }))}
              />
            </FormGroup>
            <FormGroup label="What are you looking for?" className="mb-5">
              <select
                className={selectCls}
                value={meetingForm.service}
                onChange={e => setMeetingForm(p => ({ ...p, service: e.target.value }))}
              >
                <option value="" disabled>Select a service area</option>
                {SERVICE_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </FormGroup>
            {errorMsg && <ErrorMsg msg={errorMsg} />}
            <button
              type="button"
              className="btn-primary w-full justify-center"
              onClick={submitMeeting}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Book a Discovery Call'}
            </button>
            <p className="mt-3 text-[0.68rem] text-white/20 text-center">
              We respond within one business day. No commitment required.
            </p>
          </div>
        )}

        {/* Requirement tab */}
        {active === 'requirement' && (
          <div role="tabpanel" id="fpanel-requirement" aria-labelledby="ftab-requirement">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <FormGroup label="Your Name">
                <input
                  type="text" className={inputCls}
                  placeholder="Alex Thompson" autoComplete="name"
                  value={reqForm.name}
                  onChange={e => setReqForm(p => ({ ...p, name: e.target.value }))}
                />
              </FormGroup>
              <FormGroup label="Work Email">
                <input
                  type="email" className={inputCls}
                  placeholder="alex@company.com" autoComplete="email"
                  value={reqForm.email}
                  onChange={e => setReqForm(p => ({ ...p, email: e.target.value }))}
                />
              </FormGroup>
            </div>
            <FormGroup label="Project Type" className="mb-3.5">
              <select
                className={selectCls}
                value={reqForm.projectType}
                onChange={e => setReqForm(p => ({ ...p, projectType: e.target.value }))}
              >
                <option value="" disabled>Select project type</option>
                {PROJECT_TYPES.map(o => <option key={o}>{o}</option>)}
              </select>
            </FormGroup>
            <FormGroup label="Brief Requirement" className="mb-5">
              <textarea
                className={`${inputCls} min-h-[96px] resize-y`}
                placeholder="Board dimensions, layer count, key ICs, volume, timeline — any detail helps us scope faster."
                value={reqForm.requirement}
                onChange={e => setReqForm(p => ({ ...p, requirement: e.target.value }))}
              />
            </FormGroup>
            {errorMsg && <ErrorMsg msg={errorMsg} />}
            <button
              type="button"
              className="btn-primary w-full justify-center"
              onClick={submitRequirement}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Submit Requirement'}
            </button>
            <p className="mt-3 text-[0.68rem] text-white/20 text-center">
              Quote provided within 2 business days.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

/* ── Sub-components ─────────────────────────────────────── */

function FormGroup({ label, children, className = '' }: {
  label: string; children: React.ReactNode; className?: string
}) {
  return (
    <div className={className}>
      <label className="block text-[0.72rem] font-semibold tracking-[0.04em] text-white/40 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  )
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div className="mb-4 px-3 py-2.5 rounded-md bg-red-500/10 border border-red-500/20">
      <p className="text-[0.78rem] text-red-400">{msg}</p>
    </div>
  )
}

const inputCls = `
  w-full bg-white/[0.045] border border-white/[0.09] rounded-md
  px-4 py-2.5 text-[0.85rem] text-white font-normal
  placeholder:text-white/18 outline-none
  focus:border-brand-orange/45 focus:bg-white/[0.06]
  transition-[border-color,background-color] duration-300
  disabled:opacity-50 disabled:cursor-not-allowed
`.trim()

const selectCls = `${inputCls} cursor-pointer text-white/45 [&>option]:bg-[#1a1a1a] [&>option]:text-white`
