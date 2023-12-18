import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import {
  useNextSanityImage,
  UseNextSanityImageBuilder,
  UseNextSanityImageOptions,
} from 'next-sanity-image'

import { getClient } from '../getClient'

export const useSanityImage = function (
  img: SanityImageSource,
  options?: UseNextSanityImageOptions,
) {
  const defaultImageBuilder: UseNextSanityImageBuilder = (
    imageUrlBuilder,
    options,
  ) => {
    const { width, quality, originalImageDimensions } = options;

    let builder = imageUrlBuilder
      .width(width || Math.min(originalImageDimensions.width, 1920))
      .quality(quality || 100)
      .fit("clip")
      .auto("format");

    // Conditionally apply WebP format only for non-GIF images
    if (!imageUrlBuilder?.url()?.includes("gif")) {
      builder = builder.format("webp");
    }

    return builder;
  }
  try {
    const imageProps = useNextSanityImage(getClient(), img, {
      ...options,
      imageBuilder: options?.imageBuilder ?? defaultImageBuilder,
    })
    return imageProps
  } catch (error) {
    // TODO: catch error
    return null
  }
}