/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function Politics() {
  return (
    <body>
      <header>
        <div>
          <h1>POLÍTICA DE PRIVACIDADE</h1>
          <Image
            src="/logo.png"
            alt="Logo do aplicativo MySpeak"
            width={200}
            height={200}
          />
        </div>
      </header>
      <main>
        <div className="container">
          <p>
            O MySpeak ("nós" ou "nosso") é um aplicativo de aprendizado de
            idiomas que permite aos usuários praticar a fala e a compreensão do
            inglês por meio do reconhecimento de voz e tecnologia de
            inteligência artificial. Esta Política de Privacidade descreve como
            coletamos, usamos e compartilhamos suas informações quando você usa
            nosso aplicativo.
          </p>
          <h2>Coleta de Informações</h2>
          <p>
            Quando você usa o MySpeak, podemos coletar as seguintes informações:
          </p>
          <ul>
            <li>
              <p>
                Informações de registro: Quando você se registra em nossa
                plataforma, podemos coletar seu nome, endereço de e-mail e
                outras informações que você nos fornece.
              </p>
            </li>
            <li>
              <p>
                Informações de uso: Coletamos informações sobre como você usa o
                aplicativo, incluindo as frases que você fala e os resultados da
                análise de fala.
              </p>
            </li>
            <li>
              <p>
                Informações do dispositivo: Podemos coletar informações sobre o
                dispositivo que você está usando, como o modelo do dispositivo,
                sistema operacional e versão do aplicativo.
              </p>
            </li>
          </ul>
          <h2>Uso de Informações</h2>
          <p>Usamos as informações coletadas para os seguintes propósitos:</p>
          <ul>
            <li>
              <p>Para fornecer e melhorar nosso aplicativo.</p>
            </li>
            <li>
              <p>Para analisar e melhorar o desempenho do aplicativo.</p>
            </li>
            <li>
              <p>Para personalizar sua experiência no aplicativo.</p>
            </li>
            <li>
              <p>
                Para entrar em contato com você sobre novos recursos ou
                atualizações do aplicativo.
              </p>
            </li>
          </ul>
          <h2>Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações com terceiros, exceto nas
            seguintes circunstâncias:
          </p>
          <ul>
            <li>
              <p>Quando você nos autoriza a compartilhar suas informações.</p>
            </li>
            <li>
              <p>
                Quando somos obrigados por lei a compartilhar suas informações.
              </p>
            </li>
            <li>
              <p>
                Quando precisamos compartilhar suas informações com prestadores
                de serviços terceirizados que trabalham em nosso nome para
                fornecer o aplicativo.
              </p>
            </li>
          </ul>
          <h2>Segurança de Informações</h2>
          <p>
            Tomamos medidas razoáveis ​para proteger suas informações contra
            acesso não autorizado, uso, alteração ou destruição. No entanto,
            nenhum método de transmissão pela internet ou método de
            armazenamento eletrônico é 100% seguro.
          </p>
          <h2>Alterações na Política de Privacidade</h2>
          <p>
            Podemos atualizar esta Política de Privacidade de tempos em tempos.
            Se fizermos alterações significativas na maneira como tratamos suas
            informações, forneceremos um aviso em destaque no aplicativo.
          </p>
          <h2>Contato</h2>
          <p>
            Se você tiver dúvidas ou preocupações sobre nossa Política de
            Privacidade, entre em contato conosco pelo endereço de e-mail:
            <a
              href="mailto:privacidade@myspeak.com"
              target="_blank"
              rel="noreferrer"
            >
              privacidade@myspeak.com
            </a>
            .
          </p>
          <p>
            Este documento está disponível em inglês, português e espanhol. No
            caso de qualquer discrepância entre as versões, a versão em inglês
            será considerada a versão definitiva.
          </p>
          <p>Última atualização: 13 de abril de 2023</p>
        </div>
      </main>
    </body>
  )
}
