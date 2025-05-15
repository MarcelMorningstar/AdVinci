import React from 'react'
import { useLocale } from 'next-intl';
import Footer from '../../components/Footer'

export default function Page() {
  const locale = useLocale();

  return (
    <>
      <section className='flex justify-center pt-32 pb-12 bg-neutral-200'>
        {
          locale === "it" ? (
            <Italian />
          ) : (
            <English />
          )
        }
      </section>
        
      <Footer color="#1a1a1a" />
    </>
  )
}

const English = () => {
  return (
    <div className='w-[90vw] sm:w-[70vw]'>
      <h1 className="text-4xl font-bold text-secondary-foreground">
        Privacy Policy
      </h1>
      
      <div className="my-4">
          <p>Effective date: 13.04.2025</p>
          <p>Updated on: 13.04.2025</p>
      </div>

      <div className='my-4 flex flex-col gap-2.5'>
        <p>AdVinci (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit <a href="https://advinci.it" target="_blank">https://advinci.it</a> (the &quot;Website&quot;) or engage our digital advertising, design and consultancy services (collectively, the &quot;Services&quot;). It also describes your rights under the EU General Data Protection Regulation (Regulation (EU) 2016/679 – GDPR) and applicable Italian data‑protection laws.</p>
        
        <div>
          <h4 className='text-xl font-bold'>1. Who is the Data Controller?</h4>
          <strong>Controller</strong>: <span>AdVinci S.r.l.</span><br />
          <strong>Address</strong>: <span>Via Roma 12, 62027 San Severino Marche (MC), Italy</span><br />
          <strong>P. IVA</strong>: <span>02154870436</span><br />
          <strong>E‑mail</strong>: <a href="mailto:privacy@advinci.it">privacy@advinci.it</a><br />
          <strong>Phone</strong>: <a href="tel:+393508008361">+393508008361</a>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>2. What Personal Data do we collect?</h4>
          <table className='text-left'>
            <thead>
              <tr>
                <th className='pr-3'>Category</th>
                <th className='pr-3'>Examples</th>
                <th className='pr-3'>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pr-3'><em>Identification & Contact</em></td>
                <td className='pr-3'>name, business name, e‑mail address, phone number</td>
                <td className='pr-3'>provided by you (contact form, e‑mails, contracts)</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Content & Creative</em></td>
                <td className='pr-3'>ad creatives, images, copy, files you upload (≤ 20 MB)</td>
                <td className='pr-3'>provided by you</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Transactional</em></td>
                <td className='pr-3'>invoices, payment details, VAT ID, campaign history</td>
                <td className='pr-3'>generated in the course of business</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Usage & Technical</em></td>
                <td className='pr-3'>IP address, browser type, pages visited, time‑zone, cookie identifiers</td>
                <td className='pr-3'>collected automatically via cookies & similar tech</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Marketing Preferences</em></td>
                <td className='pr-3'>newsletter opt‑in/opt‑out, language</td>
                <td className='pr-3'>provided by you</td>
              </tr>
            </tbody>
          </table>
          <p className='pt-2'>We do not intentionally collect special categories of data (art. 9 GDPR) unless you choose to include such information in ad creatives or communications.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>3. Legal Bases & Purposes of Processing</h4>
          <table className='text-left'>
            <thead>
              <tr>
                <th className='pr-3'>Purpose</th>
                <th className='pr-3'>Legal basis (art. 6 GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pr-3'>Responding to inquiries, preparing quotes, providing Services</td>
                <td className='pr-3'>(b) Contract performance</td>
              </tr>
              <tr>
                <td className='pr-3'>Managing customer accounts, issuing invoices, keeping tax records</td>
                <td className='pr-3'>(c) Legal obligation</td>
              </tr>
              <tr>
                <td className='pr-3'>Operating, securing and improving the Website (analytics, logs)</td>
                <td className='pr-3'>(f) Legitimate interest (efficient, secure service)</td>
              </tr>
              <tr>
                <td className='pr-3'>Sending service‑related or promotional e‑mails</td>
                <td className='pr-3'>(b) Contract or (a) Consent (for marketing)</td>
              </tr>
              <tr>
                <td className='pr-3'>Showcasing completed campaigns in our portfolio</td>
                <td className='pr-3'>(f) Legitimate interest (marketing) unless you object</td>
              </tr>
            </tbody>
          </table>
          <p className='pt-2'>Where we rely on legitimate interest, we have balanced our interests against your fundamental rights and freedoms.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>4. Cookies & Similar Technologies</h4>
          <ul>
            <li><strong>Strictly necessary cookies</strong> – essential for site navigation and security.</li>
            <li><strong>Analytics cookies</strong> (e.g., Vercel Analytics, Google Analytics 4) – help us understand site performance. Set only with your consent.</li>
            <li><strong>Advertising cookies</strong> – not used at present.</li>
          </ul>
          <p>You can manage or withdraw your consent at any time via the cookie banner or your browser settings. For detail, see our Cookie Policy (separate document).</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>5. Who will receive your data?</h4>
          <ul>
            <li><strong>Service providers</strong>: hosting (Vercel Inc., EU data centre), e‑mail & CRM (Google Workspace, HubSpot), payment processors, analytics providers, professional advisers.</li>
            <li><strong>Business partners & subcontractors</strong> strictly for fulfilling design or campaign services.</li>
            <li><strong>Public authorities</strong> if required by law or to defend legal claims.</li>
          </ul>
          <p>All processors act under written agreements that meet art. 28 GDPR obligations. We never sell your personal data.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>6. International Transfers</h4>
          <p>Some providers (e.g., Vercel Inc. & Google LLC) are located outside the European Economic Area. Where this results in a transfer of personal data, it is safeguarded by EU Standard Contractual Clauses or adequacy decisions in accordance with arts. 44‑49 GDPR.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>7. Data Retention</h4>
          <table className='text-left'>
            <thead>
              <tr>
                <th className='pr-3'>Data set</th>
                <th className='pr-3'>Retention period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pr-3'>Contact inquiries (no contract)</td>
                <td className='pr-3'>12 months after last contact</td>
              </tr>
              <tr>
                <td className='pr-3'>Client contractual records</td>
                <td className='pr-3'>10 years (Italian Civil Code & tax law)</td>
              </tr>
              <tr>
                <td className='pr-3'>Invoices & accounting</td>
                <td className='pr-3'>10 years</td>
              </tr>
              <tr>
                <td className='pr-3'>Analytics data</td>
                <td className='pr-3'>14 months (GA4 default)</td>
              </tr>
              <tr>
                <td className='pr-3'>Cookies</td>
                <td className='pr-3'>see Cookie Policy</td>
              </tr>
            </tbody>
          </table>
          <p className='pt-2'>We will delete or anonymise data once the retention period expires unless longer storage is required by law or necessary for the establishment, exercise or defence of legal claims.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>8. Your Rights</h4>
          <p>Under the GDPR you may:</p>
          <ol>
            <li><strong>Access</strong> your personal data (art. 15);</li>
            <li><strong>Rectify</strong> inaccurate or incomplete data (art. 16);</li>
            <li><strong>Erase</strong> data (&quot;right to be forgotten&quot;, art. 17);</li>
            <li><strong>Restrict</strong> processing (art. 18);</li>
            <li><strong>Port</strong> data to another controller (art. 20);</li>
            <li><strong>Object</strong> to processing based on legitimate interest or direct marketing (art. 21);</li>
            <li><strong>Withdraw consent</strong> at any time (art. 7 §3), without affecting legality of prior processing.</li>
          </ol>
          <p>To exercise any right, e‑mail <a href="mailto:privacy@advinci.it">privacy@advinci.it</a>. We may need to verify your identity. You also have the right to lodge a complaint with the Italian supervisory authority: <a href="http://www.garanteprivacy.it" target="_blank">Garante per la Protezione dei Dati Personali</a>.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>9. How we protect your data</h4>
          <ul>
            <li>SSL/TLS encryption</li>
            <li>Access controls & role‑based permissions</li>
            <li>Encrypted backups</li>
            <li>Regular software updates & security monitoring</li>
            <li>Processor due‑diligence & NDAs</li>
          </ul>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>10. Automated decision‑making</h4>
          <p>We do not use your data for automated decision‑making or profiling that produces legal or similarly significant effects.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>11. Third‑party links</h4>
          <p>The Website may contain links to sites we do not operate. We are not responsible for their privacy practices. Please review their policies before submitting data.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>12. Changes to this Policy</h4>
          <p>We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will change accordingly. Significant changes will be communicated via the Website or by e‑mail if appropriate.</p>
        </div>
        
        <div>
          <h4 className='text-xl font-bold'>13. Contact us</h4>
          <blockquote>
            <strong>DPO</strong>: Matthew Kirk<br />
            <strong>E‑mail</strong>: <a href="mailto:privacy@advinci.it">privacy@advinci.it</a><br />
            <strong>Address</strong>: Via Roma 12, 62027 San Severino Marche (MC), Italy
          </blockquote>
        </div>
      </div>
    </div>
  )
}

const Italian = () => {
  return (
    <div className='w-[90vw] sm:w-[70vw]'>
      <h1 className="text-4xl font-bold text-secondary-foreground">
        Informativa sulla Privacy
      </h1>

      <div className="my-4">
        <p>Data di entrata in vigore: 13.04.2025</p>
        <p>Aggiornata il: 13.04.2025</p>
      </div>

      <div className='my-4 flex flex-col gap-2.5'>
        <p>AdVinci (&quot;noi&quot;, &quot;ci&quot;, &quot;nostro&quot;) rispetta la tua privacy ed è impegnata a proteggere i dati personali che condividi con noi. La presente Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando visiti <a href="https://advinci.it" target="_blank">https://advinci.it</a> (il &quot;Sito&quot;) o usufruisci dei nostri servizi di pubblicità digitale, design e consulenza (collettivamente, i &quot;Servizi&quot;). Descrive inoltre i tuoi diritti ai sensi del Regolamento Generale sulla Protezione dei Dati dell’UE (Regolamento (UE) 2016/679 – GDPR) e delle leggi italiane applicabili in materia di protezione dei dati.</p>

        <div>
          <h4 className='text-xl font-bold'>1. Chi è il Titolare del trattamento?</h4>
          <strong>Titolare</strong>: <span>AdVinci S.r.l.</span><br />
          <strong>Indirizzo</strong>: <span>Via Roma 12, 62027 San Severino Marche (MC), Italia</span><br />
          <strong>P. IVA</strong>: <span>02154870436</span><br />
          <strong>E‑mail</strong>: <a href="mailto:privacy@advinci.it">privacy@advinci.it</a><br />
          <strong>Telefono</strong>: <a href="tel:+393508008361">+393508008361</a>
        </div>

        <div>
          <h4 className='text-xl font-bold'>2. Quali Dati Personali raccogliamo?</h4>
          <table className='text-left'>
            <thead>
              <tr>
                <th className='pr-3'>Categoria</th>
                <th className='pr-3'>Esempi</th>
                <th className='pr-3'>Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pr-3'><em>Identificazione e Contatto</em></td>
                <td className='pr-3'>nome, ragione sociale, indirizzo e‑mail, numero di telefono</td>
                <td className='pr-3'>forniti da te (form di contatto, e‑mail, contratti)</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Contenuti e Creatività</em></td>
                <td className='pr-3'>creatività pubblicitarie, immagini, testi, file caricati (≤ 20 MB)</td>
                <td className='pr-3'>forniti da te</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Transazionali</em></td>
                <td className='pr-3'>fatture, dettagli di pagamento, P.IVA, cronologia campagne</td>
                <td className='pr-3'>generati durante l’attività commerciale</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Utilizzo e Tecnici</em></td>
                <td className='pr-3'>indirizzo IP, tipo di browser, pagine visitate, fuso orario, identificatori cookie</td>
                <td className='pr-3'>raccolti automaticamente tramite cookie e tecnologie simili</td>
              </tr>
              <tr>
                <td className='pr-3'><em>Preferenze di Marketing</em></td>
                <td className='pr-3'>iscrizione/disiscrizione alla newsletter, lingua</td>
                <td className='pr-3'>forniti da te</td>
              </tr>
            </tbody>
          </table>
          <p className='pt-2'>Non raccogliamo intenzionalmente categorie particolari di dati (art. 9 GDPR) a meno che tu non scelga di includerli nelle creatività pubblicitarie o nelle comunicazioni.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>3. Basi Giuridiche e Finalità del Trattamento</h4>
          <table className='text-left'>
            <thead>
              <tr>
                <th className='pr-3'>Finalità</th>
                <th className='pr-3'>Base giuridica (art. 6 GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pr-3'>Rispondere a richieste, preparare preventivi, fornire Servizi</td>
                <td className='pr-3'>(b) Esecuzione del contratto</td>
              </tr>
              <tr>
                <td className='pr-3'>Gestione account clienti, emissione fatture, conservazione documenti fiscali</td>
                <td className='pr-3'>(c) Obbligo legale</td>
              </tr>
              <tr>
                <td className='pr-3'>Gestione, sicurezza e miglioramento del Sito (analisi, log)</td>
                <td className='pr-3'>(f) Legittimo interesse (servizio efficiente e sicuro)</td>
              </tr>
              <tr>
                <td className='pr-3'>Invio di e‑mail promozionali o relative ai Servizi</td>
                <td className='pr-3'>(b) Contratto o (a) Consenso (per marketing)</td>
              </tr>
              <tr>
                <td className='pr-3'>Mostrare campagne completate nel nostro portfolio</td>
                <td className='pr-3'>(f) Legittimo interesse (marketing), salvo opposizione</td>
              </tr>
            </tbody>
          </table>
          <p className='pt-2'>Quando facciamo affidamento sul legittimo interesse, bilanciamo i nostri interessi con i tuoi diritti e libertà fondamentali.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>4. Cookie e Tecnologie Simili</h4>
          <ul>
            <li><strong>Cookie strettamente necessari</strong> – essenziali per la navigazione e la sicurezza del sito.</li>
            <li><strong>Cookie di analisi</strong> (es. Vercel Analytics, Google Analytics 4) – ci aiutano a comprendere le prestazioni del sito. Attivati solo con il tuo consenso.</li>
            <li><strong>Cookie pubblicitari</strong> – attualmente non utilizzati.</li>
          </ul>
          <p>Puoi gestire o revocare il consenso in qualsiasi momento tramite il banner dei cookie o le impostazioni del browser. Per i dettagli, vedi la nostra Cookie Policy (documento separato).</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>5. Chi riceverà i tuoi dati?</h4>
          <ul>
            <li><strong>Fornitori di servizi</strong>: hosting (Vercel Inc., data center UE), e‑mail e CRM (Google Workspace, HubSpot), processori di pagamento, fornitori di analisi, consulenti professionali.</li>
            <li><strong>Partner commerciali e subappaltatori</strong> strettamente per l’erogazione di servizi di design o campagne.</li>
            <li><strong>Autorità pubbliche</strong> se richiesto dalla legge o per difendere diritti legali.</li>
          </ul>
          <p>Tutti i responsabili operano in base a contratti scritti conformi all’art. 28 GDPR. Non vendiamo mai i tuoi dati personali.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>6. Trasferimenti Internazionali</h4>
          <p>Alcuni fornitori (es. Vercel Inc. e Google LLC) si trovano al di fuori dello Spazio Economico Europeo. Quando ciò comporta un trasferimento di dati personali, esso è protetto da Clausole Contrattuali Standard UE o da decisioni di adeguatezza secondo gli artt. 44‑49 GDPR.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>7. Conservazione dei Dati</h4>
          <table className='text-left'>
            <thead>
              <tr>
                <th className='pr-3'>Set di dati</th>
                <th className='pr-3'>Periodo di conservazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pr-3'>Richieste di contatto (senza contratto)</td>
                <td className='pr-3'>12 mesi dall’ultimo contatto</td>
              </tr>
              <tr>
                <td className='pr-3'>Documentazione contrattuale dei clienti</td>
                <td className='pr-3'>10 anni (Codice Civile e norme fiscali italiane)</td>
              </tr>
              <tr>
                <td className='pr-3'>Fatture e contabilità</td>
                <td className='pr-3'>10 anni</td>
              </tr>
              <tr>
                <td className='pr-3'>Dati analitici</td>
                <td className='pr-3'>14 mesi (impostazione predefinita GA4)</td>
              </tr>
              <tr>
                <td className='pr-3'>Cookie</td>
                <td className='pr-3'>vedi Cookie Policy</td>
              </tr>
            </tbody>
          </table>
          <p className='pt-2'>Elimineremo o anonimizzeremo i dati al termine del periodo di conservazione, salvo obblighi legali o necessità di tutela legale.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>8. I tuoi Diritti</h4>
          <p>Ai sensi del GDPR puoi:</p>
          <ol>
            <li><strong>Accedere</strong> ai tuoi dati personali (art. 15);</li>
            <li><strong>Rettificare</strong> dati inesatti o incompleti (art. 16);</li>
            <li><strong>Cancellare</strong> i dati (&quot;diritto all’oblio&quot;, art. 17);</li>
            <li><strong>Limitare</strong> il trattamento (art. 18);</li>
            <li><strong>Portare</strong> i dati a un altro titolare (art. 20);</li>
            <li><strong>Opporti</strong> al trattamento basato su interesse legittimo o marketing diretto (art. 21);</li>
            <li><strong>Revocare il consenso</strong> in qualsiasi momento (art. 7 §3), senza pregiudicare la liceità del trattamento precedente.</li>
          </ol>
          <p>Per esercitare un diritto, scrivi a <a href="mailto:privacy@advinci.it">privacy@advinci.it</a>. Potremmo dover verificare la tua identità. Hai anche diritto a presentare reclamo all’autorità italiana competente: <a href="http://www.garanteprivacy.it" target="_blank">Garante per la Protezione dei Dati Personali</a>.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>9. Come proteggiamo i tuoi dati</h4>
          <ul>
            <li>Crittografia SSL/TLS</li>
            <li>Controlli di accesso e permessi basati sui ruoli</li>
            <li>Backup crittografati</li>
            <li>Aggiornamenti software e monitoraggio della sicurezza regolari</li>
            <li>Due diligence e NDA con i responsabili</li>
          </ul>
        </div>

        <div>
          <h4 className='text-xl font-bold'>10. Decisioni automatizzate</h4>
          <p>Non utilizziamo i tuoi dati per processi decisionali automatizzati o profilazione che producano effetti legali o significativi.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>11. Link a terze parti</h4>
          <p>Il Sito può contenere link a siti esterni che non gestiamo. Non siamo responsabili delle loro pratiche sulla privacy. Ti invitiamo a consultare le loro informative prima di inviare dati.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>12. Modifiche alla presente Informativa</h4>
          <p>Possiamo aggiornare questa Informativa sulla Privacy di tanto in tanto. La data “Ultimo aggiornamento” in alto cambierà di conseguenza. Le modifiche significative saranno comunicate tramite il Sito o e‑mail, se opportuno.</p>
        </div>

        <div>
          <h4 className='text-xl font-bold'>13. Contattaci</h4>
          <blockquote>
            <strong>DPO</strong>: Matthew Kirk<br />
            <strong>E‑mail</strong>: <a href="mailto:privacy@advinci.it">privacy@advinci.it</a><br />
            <strong>Indirizzo</strong>: Via Roma 12, 62027 San Severino Marche (MC), Italia
          </blockquote>
        </div>
      </div>
    </div>
  )
}

