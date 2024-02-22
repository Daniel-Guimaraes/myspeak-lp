import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import { Slides } from '@/components/Slides'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between px-6 pt-4 lg:px-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={200}
          priority
          className="h-16 w-20 md:h-20 md:w-24"
        />

        <Link
          href="https://onelink.to/atuz7w"
          className="rounded-3xl bg-button px-4 py-2 text-sm font-bold text-white md:text-base"
        >
          Baixar App
        </Link>
      </header>

      <section className="mb-10 px-6 md:mx-auto md:w-[600px] lg:my-12 lg:flex lg:w-[1024px] lg:flex-row lg:gap-10 lg:px-0 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-10 text-center text-3xl font-semibold leading-10 tracking-wide lg:text-left lg:text-4xl">
            <span className="text-heading">Myspeak:</span> O futuro do
            aprendizado em inglês.
          </h1>
          <p className="text-center text-sm leading-7 tracking-wide lg:text-left lg:text-xl lg:font-light">
            O mais novo e inovador aplicativo, que utiliza o poder da
            inteligência artificial para revolucionar a forma como você aprende
            inglês
          </p>
          <div className="my-10 flex gap-4 lg:mb-0 lg:mt-14">
            <Badge name="/apple-store-badge.svg" alt="Apple Store" />
            <Badge name="/playstore-badge.png" alt="Playstore" />
          </div>
        </div>

        <Image
          src="/mockup-cells.png"
          alt="Mockup cells"
          width={428}
          height={380}
          className="mx-auto h-[280px] w-[311px] md:h-[380px] md:w-[428px] lg:h-[450px] lg:w-[560px]"
        />
      </section>

      <section className="bg-primary px-6 py-12 lg:px-10">
        <div className="">
          <h2 className="my-10 text-center text-2xl font-semibold leading-10 tracking-wide lg:mx-auto lg:w-[1024px]  lg:text-4xl">
            Veja como o Myspeak te{' '}
            <span className="text-heading">Impulsiona</span> na jornada do
            aprendizado:
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-col lg:flex-row">
            <Card
              color="bg-red-100"
              imageName="/image-card-01.png"
              title="Tecnologia de Inteligência artificial"
              description="Domine a pronúncia perfeita com a ajuda da nossa inteligência artificial!
                Com o Myspeak, você pode praticar sua pronúncia em inglês usando comandos de voz.
                Aprenda de forma interativa e melhore sua fala enquanto expande seu vocabulário"
            />
            <Card
              color="bg-green-200"
              imageName="/image-card-02.svg"
              title="Flashcards Inteligentes"
              description="Os flashcards são a solução perfeita para você! Essa ferramenta de
              estudo tradicional, agora aprimorada com tecnologia moderna, te ajuda
              a memorizar informações de forma rápida, eficaz e divertida."
            />
            <Card
              color="bg-gray-400"
              imageName="/image-card-03.svg"
              title="Repetição Espaçada"
              description="Cansado de esquecer as palavras que aprende em inglês? A repetição
              espaçada é a solução que você procura! Essa técnica inovadora, utilizada
              pelo Myspeak, te ajuda a memorizar vocabulário de forma rápida, eficaz e duradoura."
            />
          </div>
        </div>
      </section>

      <section className="mb-10 px-6 lg:my-12 lg:flex lg:gap-8 lg:px-10">
        <div className="mx-auto flex flex-col items-center justify-center md:w-[600px] lg:w-[1024px] lg:flex-row lg:gap-8">
          <div className="lg:w-[476px]">
            <h2 className="my-10 text-center text-2xl font-semibold leading-10 tracking-wide lg:text-left lg:text-4xl">
              <span className="text-heading">Aprenda</span> inglês de forma
              rápida e eficaz com Myspeak
            </h2>
            <p className="text-center text-sm leading-7 tracking-wide lg:text-left lg:text-xl lg:font-light">
              Através de flashcards personalizados e da técnica de repetição
              espaçada, o Myspeak otimiza seu processo de memorização de
              palavras, te ajudando a alcançar seus objetivos de forma rápida e
              eficaz.
            </p>
          </div>
          <Image
            src="/flashcard-myspeak-portrait.png"
            alt="Mockup cells"
            width={250}
            height={480}
            priority
            className="mx-auto mt-10 h-[480px] w-[250px] lg:h-[560px] lg:w-[280px]"
          />
        </div>
      </section>

      <Slides />

      <footer className="bg-gray-400 p-6 md:p-12">
        <iframe
          className="mx-auto h-[200px] w-full rounded-lg shadow-2xl md:h-[400px] lg:h-[500px] lg:w-[1024px]"
          src="https://www.youtube.com/embed/ENNXdGwepAs"
          title="Baixe o App MySpeak"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div className="md:mx-auto md:w-[600px]">
          <h2 className="my-10 text-center  text-2xl font-semibold leading-10 tracking-wide text-white lg:text-4xl">
            Sua Jornada de Fluência Começa Agora com{' '}
            <span className="text-heading">Myspeak</span>
          </h2>
          <div className="my-10 flex items-center justify-center gap-4 lg:mb-0 lg:mt-14">
            <Badge name="/apple-store-badge.svg" alt="Apple Store" />
            <Badge name="/playstore-badge.png" alt="Playstore" />
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="border-r pr-6">
              <Link href="/terms" className="text-xs text-white">
                Temos e condições
              </Link>
            </div>
            <div>
              <Link
                href="/politics
              "
                className="text-xs text-white"
              >
                Politica de privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
