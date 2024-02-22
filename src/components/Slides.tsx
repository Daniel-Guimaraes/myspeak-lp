'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface Props {
  id: number
  avatar: string
  personName: string
  comment: string
}

export function Slides() {
  const slides: Props[] = [
    {
      id: 1,
      avatar: '/person3.jpg',
      personName: 'Joana S',
      comment: `O MySpeak mudou completamente a forma como eu estudo inglês. 
        Antes, eu sempre esquecia as palavras e ficava frustrada. 
        Agora, com a repetição espaçada e o recurso de pronúncia, tenho mais confiança e consigo me lembrar das palavras com facilidade. 
        É incrível como meu vocabulário tem crescido rapidamente. Recomendo a todos!`,
    },
    {
      id: 2,
      avatar: '/person1.jpg',
      personName: 'Ana S',
      comment:
        'Finalmente encontrei uma maneira eficiente de aprender inglês. O recurso de pronúncia me ajudou muito a melhorar minha fala. Super recomendo',
    },
    {
      id: 3,
      avatar: '/person2.jpg',
      personName: 'Pedro R',
      comment:
        'Nunca mais esqueço as palavras em inglês. Os flashcards com repetição espaçada são muito eficazes. O app superou minhas expectativas.',
    },
  ]

  return (
    <div className="bg-primary px-6 py-12 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <h2 className="mb-12 text-center text-2xl font-semibold leading-10 tracking-wide lg:text-left lg:text-4xl">
        O que nossos usuários dizem:
      </h2>
      <div className=" mx-auto lg:w-[800px]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          autoplay={true}
          loop
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex justify-center">
                <Image
                  className="h-24 w-24 rounded-full lg:h-32 lg:w-32"
                  src={slide.avatar}
                  width={96}
                  height={96}
                  alt={slide.personName}
                />
              </div>
              <h1 className="py-4 text-center text-lg font-semibold lg:text-2xl">
                {slide.personName}
              </h1>
              <p className="mb-12 text-center text-sm font-light leading-8 tracking-wider lg:text-base">
                {slide.comment}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
