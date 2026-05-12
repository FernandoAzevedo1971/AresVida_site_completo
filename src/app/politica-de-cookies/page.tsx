import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Entenda como a Ares Vida usa cookies e dados de navegação, seus direitos e como gerenciar suas preferências.',
}

export default function PoliticaDeCookiesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Privacidade</p>
          <h1 className={styles.title}>Política de Cookies</h1>
          <p className={styles.updated}>Última atualização: 12 de maio de 2026</p>
        </header>

        <div className={styles.body}>
          <section className={styles.section}>
            <h2>O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita
              um site. Eles permitem que o site reconheça seu dispositivo e colete informações sobre
              sua navegação para melhorar a experiência oferecida.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Quais cookies usamos</h2>

            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <span>Nome</span>
                <span>Tipo</span>
                <span>Duração</span>
                <span>Finalidade</span>
              </div>

              <div className={styles.tableRow}>
                <span><code>av_cookie_consent</code></span>
                <span>Necessário</span>
                <span>1 ano</span>
                <span>Armazena sua preferência de consentimento de cookies</span>
              </div>

              <div className={styles.tableRow}>
                <span><code>_ga</code></span>
                <span>Analytics</span>
                <span>2 anos</span>
                <span>Identifica visitantes únicos no Google Analytics 4</span>
              </div>

              <div className={styles.tableRow}>
                <span><code>_ga_*</code></span>
                <span>Analytics</span>
                <span>2 anos</span>
                <span>Mantém o estado da sessão no Google Analytics 4</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Para que usamos os dados coletados</h2>
            <p>
              Os dados de analytics são usados exclusivamente para:
            </p>
            <ul>
              <li>Entender quais páginas são mais visitadas e como os usuários navegam pelo site;</li>
              <li>Identificar problemas de usabilidade e oportunidades de melhoria;</li>
              <li>Mensurar o alcance do nosso conteúdo sobre saúde respiratória.</li>
            </ul>
            <p>
              <strong>Não vendemos, alugamos nem compartilhamos seus dados com terceiros</strong> para
              fins comerciais. O Google Analytics recebe dados anonimizados (IP mascarado) e os processa
              conforme a{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade do Google
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>Base legal (LGPD)</h2>
            <p>
              O uso de cookies de analytics é baseado no seu <strong>consentimento explícito</strong>,
              conforme o art. 7º, inciso I da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              O cookie <code>av_cookie_consent</code> é necessário para registrar sua escolha e é
              dispensado de consentimento por ser estritamente funcional.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Como gerenciar suas preferências</h2>
            <p>
              Você pode alterar sua preferência a qualquer momento de três formas:
            </p>
            <ol>
              <li>
                <strong>Banner de cookies:</strong> limpe o armazenamento local do seu navegador para
                que o banner reapareça na próxima visita.
              </li>
              <li>
                <strong>Configurações do navegador:</strong> todos os navegadores modernos permitem
                bloquear ou excluir cookies nas configurações de privacidade.
              </li>
              <li>
                <strong>Opt-out do Google Analytics:</strong> instale a extensão{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>Seus direitos</h2>
            <p>
              Nos termos da LGPD, você tem direito a:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento de seus dados pessoais;</li>
              <li>Acessar os dados que temos sobre você;</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados;</li>
              <li>Solicitar a exclusão dos dados tratados com base no consentimento;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
              <a href="mailto:privacidade@aresvida.com.br">privacidade@aresvida.com.br</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças nos serviços ou na legislação.
              A data de atualização no topo desta página indica a versão vigente. Alterações
              relevantes serão comunicadas por meio de aviso no site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contato</h2>
            <p>
              Ares Vida — Terapia Respiratória Ltda.<br />
              Av. Paulista, 1842 · 14º andar · São Paulo/SP · CEP 01310-945<br />
              CNPJ 00.000.000/0001-00<br />
              E-mail: <a href="mailto:privacidade@aresvida.com.br">privacidade@aresvida.com.br</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
