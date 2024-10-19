// React Imports
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='40' height='22' viewBox='0 0 40 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        width='7.37565'
        height='21.1131'
        rx='3.68783'
        transform='matrix(-0.865206 0.501417 0.498585 0.866841 28.4115 0)'
        fill='var(--mui-palette-primary-main)'
      />
      <rect
        width='7.37565'
        height='21.1131'
        rx='3.68783'
        transform='matrix(-0.865206 0.501417 0.498585 0.866841 28.4869 0)'
        fill='url(#paint0_linear_448_114254)'
        fillOpacity='0.4'
      />
      <rect
        width='7.37565'
        height='21.1131'
        rx='3.68783'
        transform='matrix(0.865206 0.501417 -0.498585 0.866841 25.6563 0)'
        fill='var(--mui-palette-primary-main)'
      />
      <rect
        width='7.37565'
        height='21.1131'
        rx='3.68783'
        transform='matrix(-0.865206 0.501417 0.498585 0.866841 14.3293 0)'
        fill='var(--mui-palette-primary-main)'
      />
      <rect
        width='7.37565'
        height='21.1131'
        rx='3.68783'
        transform='matrix(-0.865206 0.501417 0.498585 0.866841 14.3293 0)'
        fill='url(#paint1_linear_448_114254)'
        fillOpacity='0.4'
      />
      <rect
        width='7.37565'
        height='21.1131'
        rx='3.68783'
        transform='matrix(0.865206 0.501417 -0.498585 0.866841 11.5132 0)'
        fill='var(--mui-palette-primary-main)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_448_114254'
          x1='3.68783'
          y1='0'
          x2='3.68783'
          y2='21.1131'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_448_114254'
          x1='3.68783'
          y1='0'
          x2='3.68783'
          y2='21.1131'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
