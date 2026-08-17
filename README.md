# MindMed Launchpad

# Prompt para Lovable — Landing Page MindMed (Nova Versão Profissional)

Cole este prompt diretamente no Lovable para construir a nova landing page da MindMed do zero.

---

## PROMPT

Crie uma landing page completa e extremamente profissional para a **MindMed**, uma plataforma de IA clínica para médicos brasileiros. A página deve ser construída em **React + TypeScript + Tailwind CSS**, com foco em conversão, credibilidade e design de alto nível — no padrão de produtos como Linear, Vercel e Raycast.

---

## DESIGN SYSTEM (OBRIGATÓRIO — siga exatamente)

### Cores
```
Primária:       #2C70DD  (blue principal da MindMed)
Primária dark:  #1A56C4
Primária light: #EEF5FF
Primária mid:   #D0E4FF
Fundo dark:     #0A1628
Dark 2:         #142038
Dark 3:         #1a3060
Texto:          #14181F
Texto muted:    #64748B
Borda:          #E2E8F0
Verde sucesso:  #10B981
Branco:         #FFFFFF
```

### Tipografia
```
Fonte: Inter (Google Fonts) — importar weights 300, 400, 500, 600, 700, 800, 900
H1: 64px / weight 800 / letter-spacing -2px / line-height 1.05
H2: 44px / weight 800 / letter-spacing -1px / line-height 1.12
H3: 22px / weight 700
Body: 16px / weight 400 / line-height 1.65
Small: 14px
Label uppercase: 12px / weight 700 / letter-spacing 1px
```

### Componentes base
```
Border radius cards: 16px (radius-lg: 24px)
Border radius buttons: 10px
Border radius pills: 100px
Sombra card: 0 2px 16px rgba(10,22,40,0.07)
Sombra blue: 0 4px 20px rgba(44,112,221,0.30)
Padding seção: 100px vertical, 5% horizontal
Max-width inner: 1100px
```

### Botões
```
btn-primary: bg #2C70DD, text white, padding 14px 32px, radius 10px, 
             shadow 0 4px 20px rgba(44,112,221,0.35), hover bg #1A56C4

btn-outline: border 2px #D0E4FF, text #2C70DD, padding 14px 32px, radius 10px,
             hover border #2C70DD, hover bg #EEF5FF

btn-ghost: text #2C70DD, padding 8px 16px, hover bg #EEF5FF
```

---

## ESTRUTURA COMPLETA DA PÁGINA

### 1. NAVBAR (fixo no topo, backdrop-blur)

```
Fundo: rgba(255,255,255,0.90) + backdrop-filter blur(16px)
Borda bottom: 1px solid rgba(44,112,221,0.08)
Altura: 68px

Esquerda: Logo MindMed (ícone SVG azul + texto "MindMed" weight 800)
  → SVG: retângulo arredondado azul #2C70DD com path M da letra M em branco

Centro: links de nav
  - Funcionalidades
  - Avicena IA
  - Segurança
  - Integrações
  - Planos

Direita:
  - Link ghost "Entrar" → https://acesso.mindmed.online
  - Botão primary "Começar grátis" → https://acesso.mindmed.online

Mobile: esconder links, manter logo + botão
```

---

### 2. HERO

```
Fundo: gradient linear 155deg de #0A1628 (0%) → #142038 (50%) → #1a3060 (100%)
Overlay: radial-gradient ellipse 70% 60% rgba(44,112,221,0.18) centrado em 50% 40%
Padding: 140px top, 100px bottom
Alinhamento: center

BADGE ANIMADO (pill verde pulsante):
  - Dot verde animado (pulse keyframe)
  - Texto: "✦ Avicena IA — Seu assistente clínico com IA"
  - Background: rgba(44,112,221,0.15)
  - Border: 1px solid rgba(44,112,221,0.35)
  - Texto cor: #93C5FD

H1 (cor white, letter-spacing -2px):
  "Cuide do paciente.
  A MindMed cuida do resto."
  → A palavra "MindMed" em cor #60A5FA

SUBTÍTULO (cor rgba(255,255,255,0.65), max-width 560px):
  "IA clínica com raciocínio médico real, telemedicina integrada e 
  documentação automática — tudo em uma plataforma feita para 
  médicos brasileiros."

CTA BUTTONS (flex, gap 14px, justify center):
  - Primário: "Começar teste gratuito →" → https://acesso.mindmed.online
  - Outline dark: "Ver como funciona" → scroll para #funcionalidades
    (bg rgba(255,255,255,0.06), border rgba(255,255,255,0.15), text white)

TRUST SIGNALS (abaixo dos botões, flex gap 24px, cor rgba(255,255,255,0.50)):
  - ícone shield + "LGPD Compliance"
  - divider vertical
  - ícone zap + "Sem cartão de crédito"
  - divider vertical
  - ícone clock + "30 dias grátis"
```

---

### 3. TRUST BAR (logos de parceiros)

```
Fundo: white
Border bottom: 1px solid #E2E8F0
Padding: 24px vertical

Layout flex, justify-content center, gap 48px, flex-wrap

Elemento: label "PARCEIROS E INTEGRAÇÕES" (uppercase, gray, 12px)

Logos (opacity 0.6, hover 1.0, flex gap 40px):
  - SBACV (com ícone médico)
  - iClinic
  - Tasy
  - MV Sistemas
  - Pixeon

Cada logo: flex align-center, gap 8px, font-size 14px, font-weight 700
```

---

### 4. STATS BAR

```
Fundo: #EEF5FF
Padding: 64px vertical

Grid 4 colunas (mobile: 2 colunas)

Cada card:
  - Fundo white, border-radius 16px, padding 32px, shadow card
  - Número: 42px / weight 900 / cor #2C70DD / letter-spacing -2px
  - Label: 14px / gray-500 / font-weight 500

DADOS:
  Card 1: "12min"  → "economizados por consulta"
  Card 2: "98%"    → "precisão na documentação clínica"
  Card 3: "3×"     → "mais rápido que documentação manual"
  Card 4: "100%"   → "aderência à LGPD e ao CFM"
```

---

### 5. FUNCIONALIDADES (id="funcionalidades")

```
Fundo: white
Section label: "Funcionalidades" (pill azul)
H2: "Tudo que você precisa, em um só lugar."
Sub: "Do raciocínio clínico à telemedicina, passando pela documentação 
automática — a MindMed integra o que estava separado."

GRID DE CARDS:
Layout: 2 colunas no desktop (primeiro card ocupa 2 colunas inteiras)

━━━ CARD AVICENA (DESTAQUE — fundo escuro, grid-column 1/-1) ━━━
Fundo: gradient linear 135deg #0A1628 → #142038
Border: 1px solid rgba(44,112,221,0.30)
Border-radius: 24px
Padding: 48px

Layout interno: 2 colunas (1fr 1fr), gap 40px

COLUNA ESQUERDA:
  Badge: "✦ Avicena IA" (pill, cor #93C5FD, bg rgba(44,112,221,0.20))
  
  H3 (28px, white): "Seu assistente clínico com inteligência real."
  
  Parágrafo (rgba(255,255,255,0.60)):
  "Avicena entende o contexto de cada atendimento, analisa as informações 
  do paciente e responde com precisão baseada em evidências científicas — 
  apoiando seu raciocínio clínico em tempo real."
  
  Nota em itálico (rgba(255,255,255,0.30), 13px):
  "Nomeado em homenagem a Ibn Sina (980–1037), o maior médico da 
  história e autor do Cânone da Medicina."
  
  Lista (ícone check verde, cor rgba(255,255,255,0.75)):
  ✓ Diagnósticos diferenciais com evidências
  ✓ Interações medicamentosas instantâneas
  ✓ Sinais de alerta e contraindicações
  ✓ Protocolos clínicos atualizados (UpToDate, PubMed)

COLUNA DIREITA (UI mockup do chat):
  Container: bg rgba(255,255,255,0.04), border rgba(255,255,255,0.08), 
             border-radius 20px, padding 28px

  Header do chat:
    - Avatar circular 42px com gradient azul, ícone ✦ branco
    - Título: "Avicena" (white, 15px, bold)
    - Subtítulo: "Assistente Clínico IA · Online" (rgba(255,255,255,0.40))

  Mensagem usuário (alinhada à direita):
    Bubble: bg rgba(255,255,255,0.08), border-radius 16px 4px 16px 16px
    Texto: "Paciente com 58 anos, HAS, creatinina 2,1. Qual a melhor 
    opção anti-hipertensiva?"

  Mensagem Avicena (alinhada à esquerda):
    Avatar: circular azul gradient, ✦
    Bubble: bg rgba(44,112,221,0.15), border-radius 4px 16px 16px 16px
    Texto: "Para esse perfil, considere Anlodipino 5mg como primeira 
    escolha. Evitar IECAs nessa função renal (Kidney Int, 2022). 
    Monitorar K⁺."
    → "Anlodipino 5mg" em bold cor #93C5FD

  Tags no rodapé do chat (pills azuis escuros):
    "Baseado em evidências" | "Contexto do paciente" | "Tempo real"

━━━ CARD TELEMEDICINA ━━━
Fundo: #F7F9FC, border 1px #E2E8F0, border-radius 20px, padding 40px
Ícone: 💻 em box azul claro (#EEF5FF)
H3: "Telemedicina integrada"
Texto: "Atenda seus pacientes de onde estiver com sala virtual segura, 
alta qualidade de vídeo e documentação automática ao final de cada consulta."
Lista checklist verde:
  ✓ Sala virtual criptografada
  ✓ Laudo automático pós-consulta
  ✓ Resolução CFM 2.314/2022
Tag pill azul: "Exclusivo MindMed"
Hover: border #D0E4FF, shadow card azul, translateY(-2px)

━━━ CARD DOCUMENTAÇÃO ━━━
(mesma estrutura)
Ícone: 📋
H3: "Documentação automática"
Texto: "A MindMed escuta a consulta, organiza as informações clínicas e 
gera anamneses, laudos e atestados completos em segundos — sem você 
precisar digitar uma linha."
Lista:
  ✓ Templates por especialidade
  ✓ Criação de modelos personalizados
  ✓ Exportação para qualquer prontuário
Tag pill: "Economize 12min por consulta"
```

---

### 6. CREDIBILIDADE CIENTÍFICA (id="ciencia")

```
Fundo: white

Layout: 2 colunas (1fr 1.2fr), gap 80px, align-items center

COLUNA ESQUERDA:
  Section label: "Ciência & Precisão"
  H2: "Respaldado pela literatura médica internacional."
  Sub: "A precisão da MindMed não é uma promessa de marketing. 
  É validada por metodologia baseada em evidências e testada 
  por especialistas clínicos."

  3 badges de credibilidade (bg #F7F9FC, border #E2E8F0, border-radius 14px, padding 16px 20px):
    📖  "Fundamentos em UpToDate & PubMed"
        "Avicena referencia as principais bases de dados clínicas do mundo"
    
    🏥  "Validado por especialistas"
        "Protocolo revisado por médicos de diversas especialidades brasileiras"
    
    📊  "Metodologia auditável"
        "Cada resposta do Avicena cita a fonte clínica que a embasa"

COLUNA DIREITA (painel de métricas):
  Container: bg #F7F9FC, border #E2E8F0, border-radius 20px, padding 40px
  
  Título: "Desempenho clínico da IA" (14px, bold, dark)
  
  4 métricas com progress bar:
    "Precisão diagnóstica nos diferenciais"    → 94% (barra azul)
    "Completude da documentação clínica"       → 98%
    "Detecção de interações medicamentosas"    → 99%
    "Satisfação dos médicos usuários"          → 96%
  
  Barra: height 8px, bg #E2E8F0, fill #2C70DD, border-radius 100px
  Valor: alinhado à direita, cor #2C70DD, font-weight 700
  
  Nota rodapé (bg #EEF5FF, border-radius 10px, padding 16px):
  "✦ A MindMed utiliza modelos de linguagem especializados em medicina, 
  não modelos genéricos."
```

---

### 7. SEGURANÇA (id="seguranca")

```
Fundo: #F7F9FC

Section label: "Segurança"
H2: "Proteção em padrão clínico. Zero concessões."
Sub: "Dados de pacientes exigem o mais alto nível de proteção. 
A MindMed foi construída com segurança no núcleo."

Grid 3 colunas (mobile: 1 coluna):

Card 1 — ícone 🔊
  "Áudios descartados automaticamente"
  "Nenhum arquivo de áudio das suas consultas fica armazenado. 
  A transcrição ocorre em tempo real e o áudio é eliminado imediatamente."

Card 2 — ícone 🔐
  "Dados anonimizados e criptografados"
  "Todas as informações clínicas são anonimizadas e criptografadas com AES-256. 
  Em conformidade total com a LGPD e as resoluções do CFM."

Card 3 — ícone 🏛️
  "Dados exclusivamente na MindMed"
  "Nenhum dado clínico transita por aplicações de terceiros. O processamento 
  ocorre em infraestrutura própria, controlada e auditada."

Card 4 — ícone ✅
  "Sem autorização do paciente necessária"
  "O uso da MindMed não requer consentimento formal adicional do paciente, 
  enquadrado como ferramenta de apoio clínico ao médico."

Card 5 — ícone 🛡️
  "Infraestrutura de nível hospitalar"
  "Servidores com uptime 99,9%, backups automatizados e logs de 
  auditoria completos para cada ação."

Card 6 — ícone 📋
  "Conformidade CFM & CRM"
  "Desenvolvida em conformidade com as resoluções do Conselho Federal 
  de Medicina, incluindo normas de telemedicina."

Estilo dos cards:
  - Fundo white, border 1px #E2E8F0, border-radius 20px, padding 32px
  - Hover: shadow card, border #D0E4FF
  - Ícone: box 56px, bg #EEF5FF, border-radius 16px, font-size 26px

CERTIFICATIONS (após grid, border-top, pt 40px):
  Label: "Certificações e compliance"
  Pills (border 1.5px #CBD5E1): 
    "🛡️ LGPD Compliant"  "🏥 CFM Res. 2.314/2022"  "🔒 ISO 27001"  "✅ HIPAA Ready"
```

---

### 8. INTEGRAÇÕES & PARCERIAS (id="integracoes")

```
Fundo: white

Layout: 2 colunas (1fr 1fr), gap 80px

COLUNA ESQUERDA:
  Section label: "Integrações"
  H2: "Funciona com o prontuário que você já usa."
  Sub: "A MindMed não é um prontuário eletrônico. Ela se integra aos 
  maiores sistemas do Brasil, exportando documentação diretamente 
  para onde você já trabalha."
  CTA: btn-primary "Ver todas as integrações →"

COLUNA DIREITA (grid 3x2 de logos):
  Grid 3 colunas, gap 14px
  
  Card formato (bg #F7F9FC, border 1.5px #E2E8F0, border-radius 14px, 
                padding 20px, flex column center, hover border #2C70DD):
    
    iClinic    — ícone quadrado verde, "Integração nativa"
    Tasy       — ícone azul, "Philips Healthcare"
    MV         — ícone roxo, "MV Sistemas"
    Pixeon     — ícone laranja, "Gestão hospitalar"
    RNP        — ícone vermelho, "Rede Nacional"
    "+ Em breve" — border dashed, "+8 sistemas"

━━━ SEÇÃO PARCERIAS (abaixo, margin-top 64px) ━━━

H3: "Parcerias institucionais"

3 cards de parceria (flex, gap 20px):

CARD 1 — SBACV (fundo escuro #0A1628):
  Fundo: linear-gradient 135deg #0A1628 → #142038
  Overlay: radial-gradient rgba(44,112,221,0.25) no canto superior direito
  
  Micro-label uppercase: "SBACV" (rgba(255,255,255,0.40), letter-spacing 2px)
  Nome: "Sociedade Brasileira de Angiologia e de Cirurgia Vascular"
  Desc: "A SBACV endossa a MindMed como ferramenta de apoio clínico 
         para cirurgiões vasculares brasileiros."
  Badge verde: "● Parceria oficial"

CARD 2 — Pesquisa (fundo #1a3060):
  Micro-label: "PESQUISA"
  Nome: "Universidades e centros de pesquisa"
  Desc: "Colaborações para validação científica dos modelos de IA 
         clínica da plataforma."
  Badge verde: "● Em desenvolvimento"

CARD 3 — Abertura (fundo #142038):
  Micro-label: "SEJA PARCEIRO"
  Nome: "Sua sociedade médica aqui"
  Desc: "A MindMed está aberta a parcerias com sociedades e associações 
         médicas de todas as especialidades."
  Badge azul claro: "● Fale conosco"
```

---

### 9. DEPOIMENTOS (id="depoimentos")

```
Fundo: white

Section label: "Depoimentos"
H2: "Médicos que transformaram sua rotina com a MindMed."
(centralizado)

Grid 3 colunas (mobile: 1 coluna)

Estilo dos cards: bg #F7F9FC, border 1px #E2E8F0, border-radius 20px, padding 32px

Card 1:
  ★★★★★ (cor #FBBF24)
  "O Avicena virou parte do meu raciocínio clínico. Antes eu passava minutos 
  pesquisando interações medicamentosas. Hoje recebo a resposta em segundos, 
  com a referência bibliográfica já incluída."
  Avatar: circle bg #EEF5FF, emoji 👨‍⚕️
  Nome: "Dr. Rafael M." (bold)
  Cargo: "Clínico Geral · São Paulo"

Card 2:
  ★★★★★
  "A telemedicina integrada foi o que me fez escolher a MindMed. Não preciso 
  mais de 3 plataformas diferentes. Consulto, documento e assino tudo no 
  mesmo lugar."
  Avatar: 👩‍⚕️
  Nome: "Dra. Camila S."
  Cargo: "Cirurgiã Vascular · Rio de Janeiro"

Card 3:
  ★★★★★
  "Reduzi 40% do tempo que eu passava documentando. Meus templates são 
  completamente personalizados para cirurgia vascular. A MindMed me devolveu 
  tempo para cuidar de mais pacientes."
  Avatar: 🧑‍⚕️
  Nome: "Dr. André P."
  Cargo: "Angiologista · Porto Alegre"
```

---

### 10. PLANOS (id="planos")

```
Fundo: #F7F9FC

Section label: "Planos"
H2: "Quanto custa ter uma IA clínica ao seu lado?"
Sub: "Comece grátis por 30 dias. Cancele quando quiser."
(tudo centralizado)

Grid 3 colunas. Card central (PRO) maior, margin-top -16px, margin-bottom -16px.

━━━ CARD BÁSICO ━━━
Fundo white, border 1.5px #E2E8F0, border-radius 20px, padding 36px

Plan label: "BÁSICO"
Preço: "R$ 0" (grande, bold)
Período: "Grátis por 30 dias"
Features (checklist ✓ verde):
  ✓ Avicena IA (50 consultas/mês)
  ✓ Documentação automática
  ✓ 5 templates personalizados
  ✓ Integração básica com prontuário
CTA outline: "Começar grátis"

━━━ CARD PROFISSIONAL (destaque) ━━━
Fundo: #0A1628, border 1.5px #2C70DD, border-radius 20px
Shadow: 0 8px 40px rgba(44,112,221,0.30)
Padding: 48px 36px

Tag topo: pill "Mais escolhido" (bg #2C70DD, text white)
Plan label: "PROFISSIONAL" (rgba(255,255,255,0.50))
Preço: "R$ 249" (white, 44px, weight 900)
Período: "por mês" (rgba(255,255,255,0.50))
Features (✓ verde, text rgba(255,255,255,0.80)):
  ✓ Avicena IA ilimitado
  ✓ Telemedicina integrada
  ✓ Templates ilimitados
  ✓ Todas as integrações com prontuários
  ✓ Suporte prioritário
  ✓ Relatórios e estatísticas
CTA filled: "Começar trial gratuito" (bg #2C70DD)

━━━ CARD CLÍNICA ━━━
Fundo white, border 1.5px #E2E8F0
Plan label: "CLÍNICA / GRUPO"
Preço: "Sob consulta" (menor, ~32px)
Período: "para múltiplos médicos"
Features:
  ✓ Tudo do Profissional
  ✓ Multi-usuário
  ✓ Dashboard administrativo
  ✓ Integração customizada
  ✓ Treinamento da equipe
CTA outline: "Falar com vendas" → mailto:mindmedcontato@gmail.com
```

---

### 11. FAQ (id="faq")

```
Fundo: #F7F9FC

Section label: "Perguntas frequentes"
H2: "O que os médicos mais perguntam"
(centralizado, max-width 720px, margin auto)

Accordion (details/summary ou componente custom):
Fundo white, border 1px #E2E8F0, border-radius 14px, margin-bottom 12px

Pergunta 1: "A MindMed substitui meu prontuário eletrônico?"
Resposta: "Não. A MindMed é uma camada de inteligência clínica que funciona 
junto ao seu prontuário atual. Ela documenta, apoia o raciocínio clínico e 
oferece telemedicina — e exporta tudo para o sistema que você já usa, como 
iClinic, Tasy ou MV."

Pergunta 2: "O que é o Avicena e como ele é diferente de outros chatbots médicos?"
Resposta: "Avicena é o assistente de IA clínica da MindMed, nomeado em homenagem 
a Ibn Sina (980–1037), o maior médico da história. Diferente de chatbots genéricos, 
o Avicena entende o contexto do atendimento atual, tem acesso ao histórico do 
paciente e cita as fontes clínicas (UpToDate, PubMed) para cada resposta."

Pergunta 3: "A plataforma está em conformidade com o CFM para telemedicina?"
Resposta: "Sim. A telemedicina da MindMed foi desenvolvida em conformidade com a 
Resolução CFM 2.314/2022, que regulamenta a prática de telemedicina no Brasil."

Pergunta 4: "Preciso pedir autorização ao paciente para usar a MindMed?"
Resposta: "Não é necessária autorização formal adicional. A MindMed funciona como 
ferramenta de apoio clínico ao médico. Os dados são anonimizados e os áudios 
descartados automaticamente."

Pergunta 5: "Posso criar meus próprios templates de laudos?"
Resposta: "Sim, com total liberdade. Você pode criar modelos do zero, editar 
templates pré-existentes por especialidade e salvar diferentes formatos para 
cada tipo de consulta."

Pergunta 6: "Como funciona o período de teste gratuito?"
Resposta: "Você tem 30 dias de acesso completo ao plano Profissional sem 
necessidade de cartão de crédito. Ao final, escolha seu plano ou cancele 
sem cobranças automáticas."

Estilo do accordion:
  Summary: padding 22px 28px, font-size 16px, weight 600, cursor pointer
  Ícone: "+" que rota 45° quando open
  Resposta: padding 0 28px 22px, font-size 15px, cor #64748B
```

---

### 12. CTA FINAL

```
Fundo: gradient linear 135deg #0A1628 → #142038
Overlay: radial-gradient ellipse rgba(44,112,221,0.15)
Padding: 120px vertical
text-align: center

H2 (white, letter-spacing -1.5px):
  "Pronto para exercer
  medicina de outro nível?"

Sub (rgba(255,255,255,0.55), 18px):
  "Junte-se aos médicos que já deixaram a burocracia com a MindMed."

Buttons (flex, gap 14px, justify center):
  - Primary: "Começar gratuitamente — 30 dias"
  - Outline dark: "Falar com a equipe" → mailto:mindmedcontato@gmail.com
```

---

### 13. FOOTER

```
Fundo: #0A1628
Padding: 64px top, 32px bottom

Grid 4 colunas (1fr col marca, 3× col links):

Coluna marca:
  Logo MindMed (mesmo da nav, porém white)
  Texto: "Inteligência clínica para médicos brasileiros. IA, telemedicina 
  e documentação automática em uma só plataforma."

Coluna "Produto":
  Funcionalidades, Avicena IA, Integrações, Planos

Coluna "Empresa":
  Sobre, Blog, Parcerias, Contato

Coluna "Legal":
  Termos de uso, Privacidade, LGPD, Segurança

Footer bottom (border-top rgba(255,255,255,0.07), padding-top 28px):
  Esquerda: "© 2025 MindMed. Todos os direitos reservados."
  Direita: Política de Privacidade · Termos de Uso

Todas as cores: rgba(255,255,255,0.45), hover rgba(255,255,255,0.80)
Links: text-decoration none, transition color .2s
```

---

## ANIMAÇÕES E INTERAÇÕES

```
1. Scroll fade-in: cada seção faz fade + translateY(20px → 0) ao entrar na viewport
   Usar Intersection Observer com threshold 0.1
   Duração: 0.5s ease-out, delay escalonado para elementos em grid

2. Hero badge: dot verde com animation pulse (opacity 1 → 0.3 → 1, duration 2s)

3. Botões primary: hover translateY(-1px), transition 0.15s
   Box-shadow aumenta no hover

4. Cards de feature: hover translateY(-2px), border-color transition, shadow transition
   Duration: 0.25s ease

5. Progress bars da seção científica: 
   Animar width de 0% para o valor final quando a seção entra no viewport
   Duration: 1s ease-out, delay 0.2s por barra

6. Accordion FAQ: smooth height transition no open/close

7. Nav: ao fazer scroll >10px, adicionar box-shadow suave
```

---

## RESPONSIVIDADE

```
Breakpoints:
  Desktop: > 1024px (layouts de 2-3 colunas conforme especificado)
  Tablet:  768px–1024px (reduzir para 2 colunas onde há 3)
  Mobile:  < 768px (1 coluna, padding 24px lateral)

Mobile específico:
  - Nav: esconder links, exibir só logo + "Começar grátis"
  - Hero h1: font-size 36px, letter-spacing -1px
  - Stats grid: 2×2
  - Feature card Avicena: 1 coluna (conteúdo acima, mockup abaixo)
  - Pricing cards: 1 coluna, card PRO sem margin de sobreposição
  - Footer grid: 2×2
```

---

## DETALHES TÉCNICOS

```
Stack: React + TypeScript + Tailwind CSS

Dependências adicionais:
  - framer-motion (animações de entrada)
  - lucide-react (ícones)
  - @radix-ui/react-accordion (FAQ)

Estrutura de componentes:
  /components/landing/
    Navbar.tsx
    Hero.tsx
    TrustBar.tsx
    StatsBar.tsx
    Features.tsx         (inclui AvicenaChatMockup.tsx como subcomponente)
    Science.tsx          (inclui ProgressBar.tsx)
    Security.tsx
    Integrations.tsx     (inclui Partnerships.tsx)
    Testimonials.tsx
    Pricing.tsx          (inclui PricingCard.tsx)
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx

SEO (no <head>):
  title: "MindMed — Inteligência Clínica para Médicos"
  description: "IA clínica com raciocínio médico real, telemedicina integrada e 
  documentação automática. Avicena, seu assistente clínico com IA."
  og:image: logo MindMed
  
Links externos:
  CTA principal → https://acesso.mindmed.online
  Entrar → https://acesso.mindmed.online
  Email vendas → mindmedcontato@gmail.com
```

---

## OBSERVAÇÕES FINAIS PARA O LOVABLE

1. **Não use imagens de stock** — use gradientes, ícones SVG e mockups de UI
2. **O assistente chama-se AVICENA** — nunca MindChat ou outro nome
3. **MindMed NÃO é prontuário** — é uma camada de IA que integra com prontuários existentes
4. **SBACV** deve aparecer como parceiro de destaque com nome completo: "Sociedade Brasileira de Angiologia e de Cirurgia Vascular"
5. **Cor azul exata**: #2C70DD — não usar outras tonalidades de azul
6. **Fonte obrigatória**: Inter — importar do Google Fonts
7. **Profissionalismo**: nível Vercel/Linear — sem elementos genéricos de template
8. O card do **Avicena** é o mais importante da página — deve ter o maior impacto visual
9. Seção de **segurança** deve transmitir confiança absoluta — médicos são conservadores com dados
10. **Pricing** deve mostrar claramente que tem 30 dias grátis sem cartão

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://assistente-clinico-ia.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4dd44935-3af9-4fe3-a730-e68d237e4bfe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
