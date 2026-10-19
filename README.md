# Fintexa · Nuova presentazione

Presentazione interattiva Fintexa del 19 ottobre 2026: 18 slide HTML modificabili, responsive e utilizzabili anche a schermo intero.

Revisione del 19 ottobre: dimensioni e contrasto dei testi aumentati, spazi corretti nei pannelli e negli schemi, tre visual 3D coerenti con i blu Fintexa. Su mobile la presentazione scorre in un’area distinta dai comandi. La navigazione riporta ogni slide all’inizio del proprio contenuto.

## Aprire e navigare

Aprire `index.html` nel browser mantenendo la cartella `assets` accanto al file. Durante questa sessione è disponibile anche l’anteprima locale sulla porta 8878.

Frecce e tasti Pagina avanti/indietro cambiano slide. `Home` apre la copertina, `End` la chiusura, `I` l’indice e `F` lo schermo intero. L’indice e i rimandi interni usano ancore condivisibili. La vista mobile ricompone i contenuti verticalmente. È presente uno stile di stampa.

## File modificabili

- `index.html`: contenuti e struttura delle 18 slide.
- `styles.css`: palette Fintexa, Montserrat, griglie, superfici, layout mobile e stampa.
- `refinements.css`: revisione della leggibilità, dimensioni del testo, spazi dei pannelli e inserimento dei visual 3D.
- `frames.css`: cornici e superfici dei riquadri, composizione degli a capo, entrate progressive e interazioni al passaggio del mouse. Le animazioni rispettano la preferenza di movimento ridotto.
- `presentation.js`: indice, tastiera, hash e schermo intero.
- `assets/flow.svg`: nove percorsi vettoriali originali, modificabili come SVG.
- `assets/logo-positivo.png` e `assets/logo-negativo.png`: marchi ufficiali già forniti.
- `assets/fonts`: Montserrat e licenza OFL.
- `assets/3d`: visual PNG trasparenti nei colori Fintexa e prompt di produzione. Testi, titoli, collegamenti e schemi restano in HTML/CSS/SVG.

### Visual 3D

- [Infrastruttura](assets/3d/core-infrastruttura.png) · [prompt](assets/3d/core-infrastruttura.prompt.txt)
- [Wallet](assets/3d/wallet.png) · [prompt](assets/3d/wallet.prompt.txt)
- [Sicurezza](assets/3d/sicurezza.png) · [prompt](assets/3d/sicurezza-prompt.txt)

Gli oggetti illustrativi sono stati prodotti con ImageGen integrato e conservati come PNG con trasparenza. Non rappresentano schermate di prodotto né marchi di certificazione.

## Fonti e direttive

Contenuti ricavati dalla presentazione aziendale di 25 pagine e dai due articoli forniti dall’utente, con correzioni successive che prevalgono sul materiale originale. Escluse pagine e sezioni indicate dall’utente. I nomi attuali sono Core Fintexa, System Open Banking, Chain Solution e Nexio.

Le dichiarazioni ISO 27001, conformità PSD2/GDPR e SLA derivano dal materiale aziendale fornito: in questa sessione non sono stati esaminati attestati, scadenze o perimetri di certificazione. La presenza di Fintexa come Partner Tecnologico pagoPA è stata controllata nella [scheda ufficiale](https://www.pagopa.gov.it/it/pubbliche-amministrazioni/partner-intermediari/11359430961.html). Non è stata attribuita la qualifica «Partner Tecnologico Qualificato».

Riferimenti per il flusso pagoPA: [Partner e Intermediari](https://www.pagopa.gov.it/it/pubbliche-amministrazioni/partner-intermediari/) e [ruolo del PSP](https://assistenza.pagopa.gov.it/hc/it/articles/39315652190097-Che-cos-%C3%A8-un-gestore-del-pagamento-PSP). I collegamenti degli schemi descrivono flussi informativi e funzionali, non custodia o trasferimento diretto di fondi da parte di Fintexa.

Il rapporto fra denominazione Core Fintexa e WMOS non viene rappresentato come gerarchia tecnica o equivalenza. Nessun logo di associazioni o di partner è stato inventato. Nessun dato di conto illustrativo è presentato come reale.

La documentazione interna di lavorazione è separata da questa cartella. Il repository e il sito della precedente presentazione rimangono distinti da questo progetto.
