import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Samiullah Mohammadi — Web Developer & Educator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const photoBuffer = readFileSync(join(process.cwd(), 'public/samiullah-og.jpg'))
  const photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px 90px',
          background: '#030208',
          backgroundImage:
            'radial-gradient(circle at 78% 30%, rgba(230,168,23,0.16), transparent 55%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 660 }}>
          <div
            style={{
              display: 'flex',
              color: '#e6a817',
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: 'flex',
              color: '#ece7df',
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Samiullah Mohammadi
          </div>
          <div style={{ display: 'flex', color: '#e6a817', fontSize: 28, marginBottom: 20 }}>
            Web Developer &amp; Educator
          </div>
          <div style={{ display: 'flex', color: '#6e6885', fontSize: 24, lineHeight: 1.5 }}>
            Full-Stack Developer · Database Instructor · Youth Leader from Kunduz, Afghanistan
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '6px solid rgba(230,168,23,0.55)',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoBase64}
            width={320}
            height={320}
            alt=""
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
