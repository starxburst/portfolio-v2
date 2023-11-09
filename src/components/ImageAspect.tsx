import { Root } from '@radix-ui/react-aspect-ratio'
import {
  ComponentProps,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react'

import imageFailed from '../assets/fallbacks/imageFailed.jpg'
import { Box } from './Containers/Box'
import { previewGoogleDriveAsset } from '../utils/googleDrive'
import { styled } from '../styles'

const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

type ImageAspectProps = {
  google?: boolean
  ratio?: number
  width: string
  src: string
  alt: string
  borderRadius?: string
  boxProps?: Omit<ComponentProps<typeof Box>, 'children'>
} & HTMLAttributes<HTMLImageElement>

export const ImageAspect = forwardRef<HTMLImageElement, ImageAspectProps>(
  ({ google, ratio, width, src, alt, borderRadius, boxProps, ...props }, ref) => {
    const handleImageError = (
      event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      const img = event.currentTarget
      img.src = imageFailed
    }

    const [imageSrc, setImageSrc] = useState<string>('')

    const getImageSrc = async () => {
      if (!src) return
      if (!google) {
        setImageSrc(src)
      } else {
        setImageSrc(previewGoogleDriveAsset(src))
      }
    }

    useEffect(() => {
      const fetchImageSrc = async () => {
        await getImageSrc()
      }
      fetchImageSrc()
    }, [src, imageSrc])

    return (
      <Box css={{ borderRadius, overflow: 'hidden', width }} {...boxProps}>
        <Root ratio={ratio ?? 16 / 9}>
          <Img
            src={imageSrc}
            onError={handleImageError}
            alt={alt}
            {...ref}
            {...props}
          />
        </Root>
      </Box>
    )
  }
)