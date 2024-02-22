/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function Terms() {
  return (
    <body>
      <header>
        <div>
          <h1>TERMOS E CONDIÇÕES</h1>
          <Image
            src="/logo.png"
            alt="Logo do aplicativo MySpeak"
            width={200}
            height={200}
          />
        </div>
      </header>
      <main className="text-center leading-8">
        <div className="container">
          <p>
            O aplicativo MySpeak ("Aplicativo") é fornecido pela equipe de
            desenvolvimento responsável pelo seu desenvolvimento. O uso deste
            aplicativo está sujeito aos seguintes termos e condições:
          </p>
          <h2>Aceitação dos Termos e Condições de Uso</h2>
          <p>
            Ao fazer o download, instalar e usar este aplicativo, você concorda
            em cumprir e ficar vinculado aos termos e condições de uso descritos
            abaixo. Se você não concordar com estes termos e condições de uso,
            não faça o download, instale ou use este aplicativo.
          </p>
          <h2>Licença de Uso:</h2>
          <p>
            O aplicativo é licenciado, não vendido, para você para uso não
            comercial e pessoal. Você pode fazer o download, instalar e usar o
            aplicativo em um dispositivo móvel ou tablet que você possua ou
            controle. Você não pode sublicenciar, vender, atribuir, transferir,
            distribuir ou explorar comercialmente o aplicativo, exceto conforme
            expressamente permitido por estes termos.
          </p>
          <h2>Direitos de Propriedade Intelectual:</h2>
          <p>
            O aplicativo, incluindo todo o seu conteúdo, é de propriedade da
            equipe de desenvolvimento responsável pelo seu desenvolvimento. O
            aplicativo é protegido por direitos autorais e outras leis de
            propriedade intelectual. Você não pode copiar, modificar,
            distribuir, vender ou transferir qualquer parte do aplicativo ou seu
            conteúdo sem a permissão prévia por escrito da equipe de
            desenvolvimento responsável pelo seu desenvolvimento.
          </p>
          <h2>Privacidade:</h2>
          <p>
            O aplicativo coleta informações limitadas de usuário que são usadas
            apenas para melhorar a experiência do usuário. Todas as informações
            coletadas são tratadas de acordo com a política de privacidade do
            aplicativo, que pode ser encontrada na seção "Política de
            Privacidade" do aplicativo.
          </p>
          <h2>Isenção de Responsabilidade:</h2>
          <p>
            O aplicativo é fornecido "como está" e sem garantias de qualquer
            tipo, expressas ou implícitas. A equipe de desenvolvimento
            responsável pelo seu desenvolvimento não garante que o aplicativo
            atenda às suas necessidades ou expectativas, ou que o aplicativo
            será ininterrupto, oportuno, seguro ou livre de erros.
          </p>
          <h2>Limitação de Responsabilidade:</h2>
          <p>
            A equipe de desenvolvimento responsável pelo desenvolvimento do
            aplicativo não será responsável por quaisquer danos diretos,
            indiretos, incidentais, especiais, punitivos ou consequentes
            resultantes do uso ou incapacidade de uso do aplicativo.
          </p>
          <h2>Alterações nos Termos e Condições de Uso:</h2>
          <p>
            A equipe de desenvolvimento responsável pelo desenvolvimento do
            aplicativo se reserva o direito de alterar estes termos e condições
            de uso a qualquer momento. As alterações entrarão em vigor assim que
            publicadas no aplicativo.
          </p>
          <h2>Lei Aplicável e Jurisdição:</h2>
          <p>
            Estes termos e condições de uso são regidos pelas leis do Brasil.
            Qualquer disputa decorrente ou relacionada a estes termos e
            condições de uso será submetida à jurisdição exclusiva dos tribunais
            localizados no Brasil.
          </p>
          <p>Última atualização: 13 de Abril de 2023.</p>
        </div>
      </main>
    </body>
  )
}
