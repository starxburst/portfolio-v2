import type { CSS } from '@stitches/react'
import { ComponentProps } from '@stitches/react'
import { forwardRef, HTMLAttributes } from 'react'
import { styled } from '../../styles'


const StyledBox = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '$2',

  variants: {
    responsive: {
      true: {
        '@sm': {
          flexDirection: 'column!important',
        },
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    gap: {
      none: {
        gap: '0',
      },
      large: {
        gap: '$4',
      },
      xlarge: {
        gap: '$8',
      },
    },
    padding: {
      none: {
        padding: '0',
      },
      small: {
        padding: '$2',
      },
      medium: {
        padding: '$4',
      },
      large: {
        padding: '$8',
      },
    },
  },
  defaultVariants: {
    padding: 'none',
  },
})

type BoxProps = {
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end'
  children: React.ReactNode
  css?: CSS
} & HTMLAttributes<HTMLDivElement> &
  ComponentProps<typeof StyledBox>

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      justify = 'center',
      direction = 'row',
      align = 'center',
      css,

      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledBox
        css={{
          justifyContent: justify,
          flexDirection: direction,
          alignItems: align,

          ...css,
        }}
        {...props}
        {...ref}
      >
        {children}
      </StyledBox>
    )
  }
)

export default Box
