import Image from 'next/image'

interface Props {
  name: string
  alt: string
}

export function Badge({ name, alt }: Props) {
  return (
    <Image
      src={name}
      width={200}
      height={60}
      alt={alt}
      className="h-10 w-32 lg:h-14 lg:w-40"
    />
  )
}
