import Image from 'next/image'

interface Props {
  imageName: string
  title: string
  description: string
  color: 'bg-red-100' | 'bg-green-200' | 'bg-gray-400'
}

export function Card({ imageName, title, description, color }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-around rounded-3xl border border-gray-100 shadow-lg ${color} p-6 md:w-[450px] lg:h-[610px] lg:w-[400px]`}
    >
      <Image src={imageName} alt="" width={200} height={200} />
      <h2 className="py-4 text-center text-2xl font-semibold text-white lg:text-3xl">
        {title}
      </h2>
      <p className="text-center text-sm font-light leading-7 tracking-wider text-white lg:text-base">
        {description}
      </p>
    </div>
  )
}
