import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
    <NextImage src={`/samyoney.github.io${src}`} {...rest} />
)