// Em um cenário real da Shopify, esses dados viriam do backend (Liquid/JSON).
// Aqui, criamos um array de objetos para simular os produtos.
/* =========================================
   1. OS DADOS DOS PRODUTOS
========================================= */
const produtos = [
    {
        titulo: "VITAMINA D",
        tag: "EM GUMMIES",
        lottieUrl: "./assets/lotties/vitaminad.json",
        imgUrl: "./assets/images/Bg_icone_vitaminad.png",

        tema: {
            fundo: "#95C8FF",
            destaque: "#FF85B3",
            stroke: "#000000"
        },
        bgUrl: "./assets/images/Bg_VitaminaD.jpg",

        htmlFrases: `
            <div class="phrase__curved-container">
                <img src="./assets/images/Texto_curvado.svg" alt="Sua melhor amiga">
            </div>
            <div class="phrase__pink-blob phrase__pink-blob--serif" style="background-color: var(--text-pink);">
                <span>para</span>
                <span>crescer</span>
            </div>
            <div class="phrase__pink-dot" style="background-color: var(--text-pink);"></div>
            <div class="phrase__pill">mais forte</div>
        `,

        beneficios: [
            {
                iconeSvg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.1523 4.80176V4.80273L59 8.43652V34.3867C58.9999 45.1893 52.3403 52.3256 45.5049 56.8184C42.0938 59.0604 38.6753 60.6171 36.1055 61.6133C34.8222 62.1107 33.7545 62.4673 33.0107 62.6982C32.639 62.8137 32.3481 62.8974 32.1523 62.9521C32.1347 62.9571 32.1177 62.9614 32.1016 62.9658C32.0854 62.9616 32.0685 62.9569 32.0508 62.9521C31.8536 62.8996 31.5601 62.8194 31.1855 62.708C30.4362 62.4851 29.3604 62.1401 28.0674 61.6553C25.478 60.6843 22.0333 59.158 18.5967 56.9365C11.7129 52.4868 5.00002 45.3512 5 34.3867V8.42285L16.9912 4.80469L32.0996 1.03223L46.1523 4.80176Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                            </svg>
                            `, texto: "Mais imunidade e defesa do corpo", destaque: false
            },
            {
                iconeSvg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35.5673" cy="11.3418" r="10.3418" style="fill: transparent !important; stroke: #FFFFFF !important;" stroke-width="2"/>
                    <circle cx="8.25859" cy="46.5783" r="7.25859" style="fill: transparent !important; stroke: #FFFFFF !important;" stroke-width="2"/>
                    <circle cx="49.4416" cy="23.0138" r="10.3418" style="fill: transparent !important; stroke: #FFFFFF !important;" stroke-width="2"/>
                    <circle cx="18.3892" cy="55.1675" r="7.25859" style="fill: transparent !important; stroke: #FFFFFF !important;" stroke-width="2"/>
                    
                    <rect x="41.0502" y="13.0681" width="10.7733" height="42.7065" transform="rotate(42.4468 41.0502 13.0681)" style="fill: transparent !important; stroke: #ffffff !important;" stroke-width="2"/>
                    
                    <rect x="10.051" y="39.7747" width="19.681" height="9.17317" rx="3" transform="rotate(40.637 10.051 39.7747)" style="fill: #FD86CD !important; stroke: none !important;"/>
                    <rect x="36.746" y="5.77014" width="23.095" height="14.0256" rx="3" transform="rotate(40.637 36.746 5.77014)" style="fill: #FD86CD !important; stroke: none !important;"/>
                </svg>`, 
                texto: "Crescimento dos ossos mais fortes", 
                destaque: true
            },
            {
                iconeSvg: `<svg width="70" height="64" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_1744" fill="white">
                        <path style="fill: white !important; stroke: none !important;" d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM12.5867 32C12.5867 42.7217 21.2783 51.4133 32 51.4133C42.7217 51.4133 51.4133 42.7217 51.4133 32C51.4133 21.2783 42.7217 12.5867 32 12.5867C21.2783 12.5867 12.5867 21.2783 12.5867 32Z"/>
                    </mask>
                    <path d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM12.5867 32C12.5867 42.7217 21.2783 51.4133 32 51.4133C42.7217 51.4133 51.4133 42.7217 51.4133 32C51.4133 21.2783 42.7217 12.5867 32 12.5867C21.2783 12.5867 12.5867 21.2783 12.5867 32Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="4" mask="url(#path-1-inside-1_1_1744)"/>
                    <circle cx="31.8916" cy="32" r="11" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                    <path d="M31.3914 32.0001L68.6329 16.0698" stroke="var(--icon-stroke)" stroke-width="2"/>
                </svg>`, 
                texto: "Dá um play no foco e aprendizado!", 
                destaque: false
            },
            {
                iconeSvg: `<svg width="54" height="64" viewBox="0 0 54 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.5449 20.2031L26.2949 21.0078L27.0449 21.3906L52.1768 34.2236L19.5303 60.7236L28.4229 39.3848L28.7695 38.5537L27.9785 38.1221L1.88574 23.8896L32.0469 2.52441L26.5449 20.2031Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                            </svg>`, 
                texto: "Mais disposição e xô preguiça!",
                destaque: false
            }
        ]
    },
    {
        titulo: "FERRO",
        tag: "EM GUMMIES",
        lottieUrl: "./assets/lotties/ferro.json",
        imgUrl: "./assets/images/Bg_icone_ferro.png",

        tema: {
            fundo: "#85E085",
            destaque: "#1463CC",
            stroke: "#000000"
        },
        bgUrl: "./assets/images/Bg_Ferro.jpg",

        htmlFrases: `
            <div class="phrase__curved-container">
                <img src="./assets/images/Daily_dose.svg" alt="Sua dose diária">
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                <div class="phrase__circle">de</div>
                <div class="phrase__pill" style="padding: 5px 15px;">SUPER</div>
            </div>

            <div class="phrase__curved-container">
                <img src="./assets/images/Energy.svg" alt="energia">
            </div>
        `,

        beneficios: [
            {
                iconeSvg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5449 20.2031L30.2949 21.0078L31.0449 21.3906L56.1768 34.2236L23.5303 60.7236L32.4229 39.3848L32.7695 38.5537L31.9785 38.1221L5.88574 23.8896L36.0469 2.52441L30.5449 20.2031Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                        </svg>`, 
                texto: "Combate o cansaço e dá disposição", 
                destaque: false
            },
            {
                iconeSvg: `<svg width="70" height="64" viewBox="-2 -2 74 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style="fill: transparent !important; stroke: var(--icon-fill) !important;" d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM12.5867 32C12.5867 42.7217 21.2783 51.4133 32 51.4133C42.7217 51.4133 51.4133 42.7217 51.4133 32C51.4133 21.2783 42.7217 12.5867 32 12.5867C21.2783 12.5867 12.5867 21.2783 12.5867 32Z" stroke-width="2"/>
                                
                                <circle cx="32" cy="32" r="11" style="fill: transparent !important; stroke: var(--icon-fill) !important;" stroke-width="2"/>
                                
                                <path d="M32.5 31.9999L68.633 16.0699" style="fill: transparent !important; stroke: var(--icon-fill) !important;" stroke-width="2"/>
                            </svg>`, 
                texto: "Mais concentração e aprendizado!", 
                destaque: true
            },
            {
                iconeSvg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.8447 1.11328C32.0505 1.26653 32.331 1.50213 32.6816 1.82617C33.4177 2.50648 34.4021 3.51696 35.5527 4.80664C37.8517 7.38349 40.7771 11.0352 43.6533 15.3086C49.436 23.9002 54.8916 34.8137 54.8916 44.5C54.8916 54.2833 45.2857 63 31.8652 63C18.4007 63 8.3916 54.7474 8.3916 44.5C8.3916 33.812 13.963 22.8967 19.8408 14.5771C22.7682 10.4337 25.7445 6.97228 28.0811 4.55371C29.2502 3.34355 30.25 2.40355 30.9961 1.77344C31.3517 1.47311 31.636 1.2549 31.8447 1.11328Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                                <line x1="22.8916" y1="36" x2="39.8916" y2="36" stroke="var(--icon-stroke)" stroke-width="2" stroke-linecap="round"/>
                                <line x1="31.8916" y1="28" x2="31.8916" y2="45" stroke="var(--icon-stroke)" stroke-width="2" stroke-linecap="round"/>
                            </svg>`, 
                texto: "Mais saúde pro sangue", 
                destaque: false
            },
            {
                iconeSvg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.4863 23H40V37.3955L22.083 46.8418V23H6.90137L32.9375 2.625L54.4863 23Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                                <path d="M39.5 63H22V55.084L39.5 45.2119V63Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                            </svg>`, 
                texto: "Crescimento saudável", 
                destaque: false
            }
        ]
    },
    {
        // TELA 3: ÔMEGA 3
        titulo: "ÔMEGA 3",
        tag: "EM GUMMIES",

        lottieUrl: "./assets/lotties/omega 3.json",
        imgUrl: "./assets/images/Bg_icone_omega3.png",
        bgUrl: "./assets/images/Bg_Omega3.jpg",

        tema: {
            fundo: "#FFEA79",
            destaque: "#FC5B03", 
            stroke: "#1A1A1A" 
        },

        htmlFrases: `
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 24px; height: 24px; background-color: var(--text-pink); border: 2px solid #1A1A1A; border-radius: 50%;"></div>
                <div class="phrase__pill">Seu aliado</div>
            </div>
            
            <div class="phrase__half-circle" style="background-color: transparent;">
                para uma
            </div>
            
            <div class="phrase__curved-container">
                <img src="./assets/images/Arch_omega3.svg" alt="mente mais brilhante">
            </div>
        `,

        beneficios: [
            {
                iconeSvg: `<svg width="68" height="64" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="28" y="38" width="17" height="17" rx="8.5" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                                <mask id="path-2-inside-1_1_2027" fill="white">
                                    <path style="fill: white !important; stroke: none !important;" d="M16 46C16 43.3736 16.5173 40.7728 17.5224 38.3463C18.5275 35.9198 20.0007 33.715 21.8579 31.8579C23.715 30.0007 25.9198 28.5275 28.3463 27.5224C30.7729 26.5173 33.3736 26 36 26C38.6264 26 41.2272 26.5173 43.6537 27.5224C46.0802 28.5275 48.285 30.0007 50.1421 31.8579C51.9993 33.715 53.4725 35.9198 54.4776 38.3463C55.4827 40.7729 56 43.3736 56 46L48.9883 46C48.9883 44.2944 48.6523 42.6054 47.9996 41.0296C47.3469 39.4538 46.3902 38.022 45.1841 36.8159C43.978 35.6098 42.5462 34.6531 40.9704 34.0004C39.3946 33.3477 37.7057 33.0117 36 33.0117C34.2944 33.0117 32.6054 33.3477 31.0296 34.0004C29.4538 34.6531 28.022 35.6098 26.8159 36.8159C25.6098 38.022 24.6531 39.4538 24.0004 41.0296C23.3477 42.6054 23.0117 44.2944 23.0117 46L16 46Z"/>
                                </mask>
                                <path d="M16 46C16 43.3736 16.5173 40.7728 17.5224 38.3463C18.5275 35.9198 20.0007 33.715 21.8579 31.8579C23.715 30.0007 25.9198 28.5275 28.3463 27.5224C30.7729 26.5173 33.3736 26 36 26C38.6264 26 41.2272 26.5173 43.6537 27.5224C46.0802 28.5275 48.285 30.0007 50.1421 31.8579C51.9993 33.715 53.4725 35.9198 54.4776 38.3463C55.4827 40.7729 56 43.3736 56 46L48.9883 46C48.9883 44.2944 48.6523 42.6054 47.9996 41.0296C47.3469 39.4538 46.3902 38.022 45.1841 36.8159C43.978 35.6098 42.5462 34.6531 40.9704 34.0004C39.3946 33.3477 37.7057 33.0117 36 33.0117C34.2944 33.0117 32.6054 33.3477 31.0296 34.0004C29.4538 34.6531 28.022 35.6098 26.8159 36.8159C25.6098 38.022 24.6531 39.4538 24.0004 41.0296C23.3477 42.6054 23.0117 44.2944 23.0117 46L16 46Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="4" mask="url(#path-2-inside-1_1_2027)"/>
                                <mask id="path-3-inside-2_1_2027" fill="white">
                                    <path style="fill: white !important; stroke: none !important;" d="M4 45C4 40.929 4.8277 36.8979 6.43585 33.1368C8.044 29.3757 10.4011 25.9583 13.3726 23.0797C16.3441 20.2011 19.8717 17.9176 23.7541 16.3597C27.6366 14.8018 31.7977 14 36 14C40.2023 14 44.3635 14.8018 48.2459 16.3597C52.1283 17.9176 55.656 20.2011 58.6274 23.0797C61.5989 25.9583 63.956 29.3757 65.5642 33.1368C67.1723 36.8979 68 40.929 68 45L61.2231 45C61.2231 41.7912 60.5707 38.6138 59.3031 35.6492C58.0355 32.6846 56.1776 29.9909 53.8354 27.722C51.4933 25.453 48.7127 23.6531 45.6525 22.4251C42.5923 21.1972 39.3124 20.5651 36 20.5651C32.6877 20.5651 29.4078 21.1972 26.3475 22.4251C23.2873 23.6531 20.5068 25.4529 18.1646 27.7219C15.8224 29.9909 13.9645 32.6846 12.6969 35.6492C11.4293 38.6138 10.7769 41.7912 10.7769 45L4 45Z"/>
                                </mask>
                                <path d="M4 45C4 40.929 4.8277 36.8979 6.43585 33.1368C8.044 29.3757 10.4011 25.9583 13.3726 23.0797C16.3441 20.2011 19.8717 17.9176 23.7541 16.3597C27.6366 14.8018 31.7977 14 36 14C40.2023 14 44.3635 14.8018 48.2459 16.3597C52.1283 17.9176 55.656 20.2011 58.6274 23.0797C61.5989 25.9583 63.956 29.3757 65.5642 33.1368C67.1723 36.8979 68 40.929 68 45L61.2231 45C61.2231 41.7912 60.5707 38.6138 59.3031 35.6492C58.0355 32.6846 56.1776 29.9909 53.8354 27.722C51.4933 25.453 48.7127 23.6531 45.6525 22.4251C42.5923 21.1972 39.3124 20.5651 36 20.5651C32.6877 20.5651 29.4078 21.1972 26.3475 22.4251C23.2873 23.6531 20.5068 25.4529 18.1646 27.7219C15.8224 29.9909 13.9645 32.6846 12.6969 35.6492C11.4293 38.6138 10.7769 41.7912 10.7769 45L4 45Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="4" mask="url(#path-3-inside-2_1_2027)"/>
                            </svg>`,
                texto: "Melhora a memória e o aprendizado",
                destaque: false
            },
            {
                iconeSvg: `<svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5669 28.3954C22.2168 28.3954 28.4183 22.1985 28.4183 14.5541C28.4183 6.90983 22.2168 0.712891 14.5669 0.712891C6.91704 0.712891 0.715576 6.90983 0.715576 14.5541C0.715576 22.1985 6.91704 28.3954 14.5669 28.3954Z" fill="white"/>
                                <path style="fill: #1A1A1A !important;" d="M14.5669 29.1105C6.53566 29.1105 0 22.5817 0 14.5542C0 6.52674 6.53358 0 14.5669 0C22.6002 0 29.1338 6.52882 29.1338 14.5542C29.1338 22.5796 22.6002 29.1105 14.5669 29.1105ZM14.5669 1.43006C7.32401 1.43006 1.43111 7.31868 1.43111 14.5542C1.43111 21.7897 7.32401 27.6804 14.5669 27.6804C21.8098 27.6804 27.7027 21.7918 27.7027 14.5542C27.7027 7.3166 21.8098 1.43006 14.5669 1.43006Z" />
                                <path style="fill: #1A1A1A !important;" d="M0.717651 14.554C0.717651 22.1969 6.91841 28.3953 14.569 28.3953V0.714844C6.92049 0.714844 0.717651 6.91109 0.717651 14.5561V14.554Z" />
                                <path d="M57.3649 28.3954C65.0148 28.3954 71.2162 22.1985 71.2162 14.5541C71.2162 6.90983 65.0148 0.712891 57.3649 0.712891C49.715 0.712891 43.5135 6.90983 43.5135 14.5541C43.5135 22.1985 49.715 28.3954 57.3649 28.3954Z" fill="white"/>
                                <path style="fill: #1A1A1A !important;" d="M57.3649 29.1105C49.3336 29.1105 42.798 22.5817 42.798 14.5542C42.798 6.52674 49.3316 0 57.3649 0C65.3982 0 71.9297 6.52882 71.9297 14.5542C71.9297 22.5796 65.3961 29.1105 57.3649 29.1105ZM57.3649 1.43006C50.122 1.43006 44.2291 7.31868 44.2291 14.5542C44.2291 21.7897 50.122 27.6804 57.3649 27.6804C64.6078 27.6804 70.5007 21.7918 70.5007 14.5542C70.5007 7.3166 64.6078 1.43006 57.3649 1.43006Z" />
                                <path style="fill: #1A1A1A !important;" d="M43.5135 14.554C43.5135 22.1969 49.7143 28.3953 57.3649 28.3953V0.714844C49.7164 0.714844 43.5135 6.91109 43.5135 14.5561V14.554Z" />
                            </svg>`,
                texto: "Ajuda para uma visão desenvolvida",
                destaque: true
            },
            {
                iconeSvg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.588 6C53.1462 5.99976 57.7182 9.67713 60.0773 14.8496C62.4341 20.0175 62.5 26.5292 59.1495 31.9492C55.2283 38.2924 48.0991 44.7084 41.8693 49.5771C38.7682 52.0007 35.9152 54.0209 33.838 55.4355C32.7997 56.1427 31.9552 56.6985 31.3722 57.0762C31.2375 57.1634 31.1159 57.2397 31.0099 57.3076C30.9178 57.2462 30.8143 57.1774 30.7003 57.1006C30.1543 56.7326 29.363 56.1914 28.3888 55.499C26.4398 54.1138 23.7597 52.128 20.8361 49.7285C14.9654 44.9104 8.20391 38.495 4.36145 31.9678C1.37087 26.8876 1.09997 20.3488 3.26379 15.0938C5.41171 9.87735 9.9149 6 16.5001 6C21.7726 6.00001 25.4507 7.67353 27.8019 9.31934C28.9815 10.1451 29.8327 10.9679 30.3839 11.5771C30.6593 11.8815 30.8593 12.132 30.9874 12.3018C31.0514 12.3865 31.0976 12.4512 31.1261 12.4922C31.1402 12.5124 31.1499 12.5269 31.1554 12.5352C31.1566 12.537 31.1575 12.5388 31.1583 12.54V12.541L32.1085 14.0186L32.8937 12.4463H32.8947C32.8982 12.4396 32.9049 12.4267 32.9152 12.4082C32.9361 12.3706 32.9719 12.3098 33.0226 12.2285C33.124 12.0658 33.2875 11.8226 33.5216 11.5254C33.9898 10.9312 34.7413 10.1218 35.8527 9.30664C38.0633 7.68538 41.752 6.00028 47.588 6Z" var(--icon-fill)" var(--icon-stroke) stroke-width="2"/>
                            </svg>`,
                texto: "Mantém o ritmo e a saúde do coração",
                destaque: false
            },
            {
                iconeSvg: `<svg width="70" height="64" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_1_2002" fill="white">
                                    <path style="fill: white !important; stroke: none !important;" d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM12.5867 32C12.5867 42.7217 21.2783 51.4133 32 51.4133C42.7217 51.4133 51.4133 42.7217 51.4133 32C51.4133 21.2783 42.7217 12.5867 32 12.5867C21.2783 12.5867 12.5867 21.2783 12.5867 32Z"/>
                                </mask>
                                <path d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM12.5867 32C12.5867 42.7217 21.2783 51.4133 32 51.4133C42.7217 51.4133 51.4133 42.7217 51.4133 32C51.4133 21.2783 42.7217 12.5867 32 12.5867C21.2783 12.5867 12.5867 21.2783 12.5867 32Z" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="4" mask="url(#path-1-inside-1_1_2002)"/>
                                <circle cx="32" cy="32" r="11" fill="var(--icon-fill)" stroke="var(--icon-stroke)" stroke-width="2"/>
                                <path d="M32.5 31.9999L68.633 16.0699" stroke="var(--icon-stroke)" stroke-width="2"/>
                            </svg>`,
                texto: "Mais concentração nas suas tarefas",
                destaque: false
            }
        ]
    }
];

/* =========================================
   2. VARIÁVEIS DE CONTROLE E SELEÇÃO DE DOM
========================================= */
let currentIndex = 0;

const elTitulo = document.getElementById('product-title');
const elTag = document.getElementById('product-tag');
const elMotivo = document.getElementById('product-reason');
const elLottie = document.getElementById('product-lottie');
const elContainerBeneficios = document.getElementById('benefits-container');
const elGarrafa = document.getElementById('product-image');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

/* =========================================
   3. A FUNÇÃO DE RENDERIZAÇÃO
========================================= */
// Toda vez que o índice muda, chamamos essa função para atualizar a tela
const elFrasesContainer = document.querySelector('.carousel__phrases');

function renderizarProduto(index) {
    const produtoAtual = produtos[index];

    // 1. Atualizando Textos Principais
    elTitulo.innerText = produtoAtual.titulo;
    elTag.innerText = produtoAtual.tag;

    // 2. MUDANDO AS CORES DA TELA INTEIRA
    document.documentElement.style.setProperty('--bg-blue', produtoAtual.tema.fundo);
    document.documentElement.style.setProperty('--text-pink', produtoAtual.tema.destaque);

    document.body.style.backgroundImage = `url('${produtoAtual.bgUrl}')`;
    document.documentElement.style.setProperty('--tema-borda', produtoAtual.tema.stroke);

    // 3. Injetando o HTML correto das formas da esquerda
    elFrasesContainer.innerHTML = produtoAtual.htmlFrases;

    // 4. Atualizando a Animação Lottie
    elLottie.load(produtoAtual.lottieUrl);

    // 5. Atualizando a Garrafa de Bg
    elGarrafa.src = produtoAtual.imgUrl;
    elGarrafa.alt = `Pote de ${produtoAtual.titulo}`;

    // 6. Atualizando os Benefícios
    elContainerBeneficios.innerHTML = '';
    produtoAtual.beneficios.forEach(beneficio => {
        const classeDestaque = beneficio.destaque ? 'benefit-card--highlight' : '';

        const cardHTML = `
            <div class="benefit-card ${classeDestaque}">
                <div class="benefit-card__icon-wrapper">
                    ${beneficio.iconeSvg} 
                </div>
                <p class="benefit-card__text">${beneficio.texto}</p>
            </div>
        `;

        elContainerBeneficios.innerHTML += cardHTML;
    });
}

/* =========================================
   4. EVENT LISTENERS (Interatividade)
========================================= */
// Clicar no botão "Próximo"
btnNext.addEventListener('click', () => {
    // Se chegou no último produto, volta pro primeiro (índice 0)
    if (currentIndex === produtos.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    renderizarProduto(currentIndex);
});

// Clicar no botão "Anterior"
btnPrev.addEventListener('click', () => {
    // Se está no primeiro produto, vai para o último
    if (currentIndex === 0) {
        currentIndex = produtos.length - 1;
    } else {
        currentIndex--;
    }
    renderizarProduto(currentIndex);
});

/* =========================================
   5. INICIALIZAÇÃO
========================================= */
renderizarProduto(currentIndex);