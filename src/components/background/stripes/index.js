import React from 'react'
import styled from 'styled-components'

const Stripes = styled.div`
  position: absolute;
  width: 1024px;
  height: 800px;
  top: 500px;
  left: -750px;
  display: flex;
  flex-direction: column;
  z-index: 0;
`
const rgbStripe = `
  173,
  61,
  135,
`
const Stripe = styled.div`
  position: absolute;
  height: ${props => props.height}px;
  width: 900px;
  background: linear-gradient(
    to right, 
    rgba(
      ${rgbStripe}
      ${props => props.extra ? 1 : 0.9}
    ),
    ${props => props.extra && `
      rgba(
        ${rgbStripe}
        0.7
      ),
    `}
    rgba(
      ${rgbStripe}
      0
    )
  );
  transform:
    skewX(-30deg)
    rotate(-45deg)
    ${props => props.xOffset && `translateX(${props.xOffset}px)`}
    ${props => props.gap && `translateY(${props.gap}px)`}
  ;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.highlight ? 2 : 1}px;
    background: linear-gradient(to right, '#b63f86', transparent);
  }
`

const BgStripes = () => {
  const height = 160

  return (
    <Stripes>
      <Stripe height={height} />
      <Stripe height={height} gap={height + 3} xOffset={100} />
      <Stripe height={height} gap={height * 2 + 5} xOffset={200} />
      <Stripe height={height} gap={height * 3 + 7} xOffset={300} />
      <Stripe height={height} gap={height * 4 + 5} xOffset={320} extra />
      <Stripe height={height} gap={height * 5 + 6} xOffset={380} extra highlight />
      <Stripe height={height} gap={height * 6 + 3} xOffset={300} extra />
      <Stripe height={height} gap={height * 7 + 5} xOffset={280} />
      <Stripe height={height} gap={height * 8 + 7} xOffset={100} />
      <Stripe height={height} gap={height * 9 + 7} xOffset={10} />
      <Stripe height={height} gap={height * 10 + 7} xOffset={-100} />
      <Stripe height={height} gap={height * 11 + 7} xOffset={-300} />
      <Stripe height={height} gap={height * 12 + 7} xOffset={-500} />
    </Stripes>
  )
}

export default BgStripes
