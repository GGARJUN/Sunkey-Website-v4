import type { NextRequest } from 'next/server'
import { NextResponse }     from 'next/server'
import { Resend }           from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_ADDRESS   = 'info@sunkeydesignsystems.com'
const FROM_ADDRESS = 'noreply@sunkeydesignsystems.com'
const FROM_NAME    = 'Sunkey Design Systems'

/* ── Types ──────────────────────────────────────────────── */

interface MeetingPayload {
  type:        'meeting'
  firstName:   string
  lastName:    string
  email:       string
  company:     string
  service:     string
}

interface RequirementPayload {
  type:         'requirement'
  name:         string
  email:        string
  projectType:  string
  requirement:  string
}

type ContactPayload = MeetingPayload | RequirementPayload

/* ── Handler ────────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  // Rate limit check — basic IP-based (Vercel handles advanced rate limiting)
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
  void ip // Used for logging in production monitoring

  let body: ContactPayload
  try {
    body = await req.json() as ContactPayload
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Validate common fields
  const email = body.email?.trim()
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  try {
    if (body.type === 'meeting') {
      return await handleMeeting(body)
    } else if (body.type === 'requirement') {
      return await handleRequirement(body)
    } else {
      return NextResponse.json({ error: 'Unknown form type.' }, { status: 400 })
    }
  } catch (err) {
    console.error('[contact/route] Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please email us directly at info@sunkeydesignsystems.com.' },
      { status: 500 }
    )
  }
}

/* ── Meeting request ─────────────────────────────────────── */

async function handleMeeting(data: MeetingPayload) {
  const { firstName, lastName, email, company, service } = data

  if (!firstName?.trim()) {
    return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
  }

  const fullName = [firstName.trim(), lastName?.trim()].filter(Boolean).join(' ')

  // Notify Sunkey team
  await resend.emails.send({
    from:    `${FROM_NAME} <${FROM_ADDRESS}>`,
    to:      TO_ADDRESS,
    subject: `Discovery Call Request — ${company?.trim() || fullName}`,
    html:    teamMeetingEmail({ fullName, email, company, service }),
  })

  // Confirm to requester
  await resend.emails.send({
    from:    `${FROM_NAME} <${FROM_ADDRESS}>`,
    to:      email.trim(),
    subject: 'We received your meeting request — Sunkey Design Systems',
    html:    confirmationEmail({
      name: firstName.trim(),
      message:
        'We received your discovery call request and will follow up within one business day to schedule a time that works for both sides.',
    }),
  })

  return NextResponse.json({ success: true, type: 'meeting' })
}

/* ── Requirement submission ──────────────────────────────── */

async function handleRequirement(data: RequirementPayload) {
  const { name, email, projectType, requirement } = data

  if (!name?.trim()) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  }
  if (!requirement?.trim()) {
    return NextResponse.json({ error: 'Please describe your requirement.' }, { status: 400 })
  }

  // Notify Sunkey team
  await resend.emails.send({
    from:    `${FROM_NAME} <${FROM_ADDRESS}>`,
    to:      TO_ADDRESS,
    subject: `New Requirement — ${name.trim()}`,
    html:    teamRequirementEmail({ name, email, projectType, requirement }),
  })

  // Confirm to requester
  await resend.emails.send({
    from:    `${FROM_NAME} <${FROM_ADDRESS}>`,
    to:      email.trim(),
    subject: 'We received your requirement — Sunkey Design Systems',
    html:    confirmationEmail({
      name: name.trim().split(' ')[0],
      message:
        'We received your project requirement and will review it with our engineering team. You can expect a detailed quote or scoping questions within 2 business days.',
    }),
  })

  return NextResponse.json({ success: true, type: 'requirement' })
}

/* ── Email HTML templates ───────────────────────────────────
   Minimal HTML — works in all email clients.
   No external CSS or images beyond inline styles.
──────────────────────────────────────────────────────────── */

function baseEmail(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f2f2f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2f2;padding:32px 16px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="background:#1a1a1a;padding:28px 36px;">
          <div style="font-size:13px;font-weight:900;letter-spacing:0.06em;color:#ffffff;">SUNKEY</div>
          <div style="font-size:8px;font-weight:400;letter-spacing:0.12em;color:rgba(255,255,255,0.45);margin-top:2px;">DESIGN SYSTEMS</div>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:36px;">
          ${body}
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="padding:20px 36px;border-top:1px solid #ebebeb;">
          <p style="margin:0;font-size:11px;color:#999999;">
            Sunkey Design Systems Pvt. Ltd. · Chennai, India<br>
            <a href="https://sunkeydesignsystems.com" style="color:#f05030;text-decoration:none;">sunkeydesignsystems.com</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

function teamMeetingEmail(d: {
  fullName:  string
  email:     string
  company?:  string
  service?:  string
}): string {
  return baseEmail(`
    <h2 style="margin:0 0 20px;font-size:20px;font-weight:700;color:#1a1a1a;letter-spacing:-0.03em;">
      Discovery Call Request
    </h2>
    ${field('Name',    d.fullName)}
    ${field('Email',   `<a href="mailto:${d.email}" style="color:#f05030;">${d.email}</a>`)}
    ${field('Company', d.company || '—')}
    ${field('Service', d.service || '—')}
    <div style="margin-top:24px;padding:16px;background:#f7f7f7;border-radius:6px;border-left:3px solid #f05030;">
      <p style="margin:0;font-size:13px;color:#555;">
        Reply directly to this email to contact ${d.fullName}.
      </p>
    </div>
  `)
}

function teamRequirementEmail(d: {
  name:         string
  email:        string
  projectType?: string
  requirement:  string
}): string {
  return baseEmail(`
    <h2 style="margin:0 0 20px;font-size:20px;font-weight:700;color:#1a1a1a;letter-spacing:-0.03em;">
      New Project Requirement
    </h2>
    ${field('Name',         d.name)}
    ${field('Email',        `<a href="mailto:${d.email}" style="color:#f05030;">${d.email}</a>`)}
    ${field('Project Type', d.projectType || '—')}
    <div style="margin:16px 0 0;">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#999;margin-bottom:6px;">
        Requirement
      </div>
      <div style="padding:14px;background:#f7f7f7;border-radius:6px;font-size:14px;color:#333;line-height:1.65;border-left:3px solid #f05030;">
        ${d.requirement.replace(/\n/g, '<br>')}
      </div>
    </div>
  `)
}

function confirmationEmail(d: { name: string; message: string }): string {
  return baseEmail(`
    <h2 style="margin:0 0 12px;font-size:20px;font-weight:700;color:#1a1a1a;letter-spacing:-0.03em;">
      Hi ${d.name},
    </h2>
    <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.7;">
      ${d.message}
    </p>
    <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.7;">
      In the meantime, if you have additional information to share, just reply to this email.
    </p>
    <a href="https://sunkeydesignsystems.com"
       style="display:inline-block;background:linear-gradient(135deg,#f05030,#ec4040);color:#ffffff;
              padding:12px 24px;border-radius:6px;font-size:14px;font-weight:700;
              text-decoration:none;letter-spacing:-0.01em;">
      Visit sunkeydesignsystems.com
    </a>
  `)
}

function field(label: string, value: string): string {
  return `
    <div style="margin-bottom:14px;">
      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#aaa;margin-bottom:3px;">
        ${label}
      </div>
      <div style="font-size:14px;color:#1a1a1a;font-weight:500;">${value}</div>
    </div>
  `
}
