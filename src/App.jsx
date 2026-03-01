import { useState } from "react";

const C={bg:"#faf6f1",card:"#fff",alt:"#f5f0ea",ac:"#2563eb",acL:"#3b82f6",gold:"#b45309",grn:"#047857",red:"#b91c1c",org:"#c2410c",pur:"#7c3aed",pnk:"#be185d",teal:"#0d9488",tx:"#1e293b",mt:"#475569",dm:"#94a3b8",bd:"#e2ddd7",hi:"#fffbeb"};
const B=({children,color=C.ac,s={}})=><span style={{display:"inline-block",padding:"2px 10px",borderRadius:9999,fontSize:11,fontWeight:600,background:color+"18",color,letterSpacing:.3,...s}}>{children}</span>;
const IR=({icon,l,v})=><div style={{display:"flex",gap:8,marginBottom:5,fontSize:13}}>{icon&&<span style={{width:18,textAlign:"center"}}>{icon}</span>}<span style={{color:C.mt,minWidth:90}}>{l}</span><span style={{color:C.tx,fontWeight:500,flex:1}}>{v}</span></div>;
const SH=({t,z,icon,accent=C.ac,children})=><div style={{marginBottom:22}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,borderBottom:`2px solid ${accent}44`,paddingBottom:6}}><span style={{fontSize:18}}>{icon}</span><div><div style={{fontSize:14,fontWeight:700,color:C.tx}}>{t}</div>{z&&<div style={{fontSize:12,color:C.mt}}>{z}</div>}</div></div>{children}</div>;
const TB=({time,act,actP,det,detP,hl})=><div style={{display:"flex",gap:12,marginBottom:8,padding:"7px 11px",borderRadius:8,background:hl?C.hi:"transparent",borderLeft:hl?`3px solid ${C.gold}`:`3px solid ${C.bd}`}}><div style={{minWidth:65,fontSize:12,fontWeight:600,color:hl?C.gold:C.ac,paddingTop:1}}>{time}</div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.tx}}>{act}</div>{actP&&<div style={{fontSize:12,color:C.mt}}>{actP}</div>}{det&&<div style={{fontSize:11,color:C.dm,marginTop:2,lineHeight:1.5}}>{det}</div>}{detP&&<div style={{fontSize:11,color:C.dm,lineHeight:1.5}}>{detP}</div>}</div></div>;
const Card=({style:s,...p})=><div style={{background:C.card,borderRadius:12,padding:16,marginBottom:12,boxShadow:"0 1px 3px rgba(0,0,0,0.06)",...s}} {...p}/>;
const SubTab=({tabs,sel,onSel})=><div style={{display:"flex",gap:3,flexWrap:"wrap",marginBottom:14}}>{tabs.map(t=><button key={t.id} onClick={()=>onSel(t.id)} style={{padding:"5px 9px",borderRadius:7,border:`1px solid ${sel===t.id?C.ac:C.bd}`,cursor:"pointer",fontSize:11,fontWeight:sel===t.id?700:400,background:sel===t.id?C.ac:C.card,color:sel===t.id?"#fff":C.mt,whiteSpace:"nowrap",transition:"all .15s",flexShrink:0}}><div>{t.icon} {t.label}</div>{t.sub&&<div style={{fontSize:9,opacity:.7}}>{t.sub}</div>}</button>)}</div>;

const DAYS=[
{d:"2/27 Fri",t:"Depart USA / Partida dos EUA",z:"Partida",meals:"—",hotel:"E.C.H.O. (pre)",attire:"—",sched:[{time:"—",act:"Depart on self-booked flights",actP:"Partida em voos reservados individualmente",det:"Early check-in confirmed at Starhotels E.C.H.O. Pre-paid; incidentals at own expense.",detP:"Check-in antecipado confirmado. Hospedagem pré-paga; extras por conta própria."}]},
{d:"2/28 Sat",t:"Arrive Milan / Chegada em Milão",z:"Chegada",meals:"D",hotel:"E.C.H.O. (1/3)",attire:"Casual",sched:[{time:"4:00 PM",act:"Hotel check-in",actP:"Check-in no hotel",det:"Starhotels E.C.H.O., Viale Andrea Doria 4. Passport + credit card.",detP:"Passaporte + cartão de crédito. Guarde bagagem se quarto indisponível."},{time:"6:00 PM",act:"Meet lobby — Jack & Stephanie",actP:"Encontro no lobby"},{time:"6:30 PM",act:"Walk to dinner (12 min)",actP:"Caminhada até o jantar (12 min)"},{time:"7:00 PM",act:"Welcome Dinner — Osteria Mamma Rosa (2h)",actP:"Jantar de Boas-Vindas (2h)",hl:true,det:"Aperitif → Cured meats, fried veg, buffalo mozzarella → Penne ragù + Risotto (½ each) → Beef thyme + potatoes → Tiramisù. Water, coffee, digestif. All dietary restrictions accommodated.",detP:"Aperitivo → Frios, legumes fritos, mozzarella de búfala → Penne ragù + Risoto (½ cada) → Carne com tomilho → Tiramisù. Água, café, digestivo. Restrições atendidas."}]},
{d:"3/1 Sun",t:"Milan Walking Tour / Tour a Pé",z:"Tour Milão",meals:"B L",hotel:"E.C.H.O. (2/3)",attire:"Comfy shoes",sched:[{time:"7:00 AM",act:"Breakfast (ground floor)",actP:"Café da manhã (térreo)"},{time:"9:45 AM",act:"Meet guide, depart on foot",actP:"Encontro com guia, saída a pé"},{time:"10:00",act:"Milan City Tour (1.5h)",actP:"Tour pela cidade (1,5h)",det:"Duomo, La Scala, Vittorio Emanuele Gallery. Entrances + whispers included.",detP:"Duomo, La Scala, Galeria Vittorio Emanuele. Entradas + fones incluídos."},{time:"11:30",act:"⭐ Duomo Terraces by lift",actP:"⭐ Terraços do Duomo de elevador",hl:true},{time:"12:30",act:"Cathedral interior tour",actP:"Tour interior da catedral"},{time:"1:30 PM",act:"Group Lunch — Fresco e Cimmino (1.5h)",actP:"Almoço em grupo (1,5h)",det:"Eggplant Parmigiana → Paccheri alla Nerano → Water",detP:"Parmigiana de berinjela → Paccheri alla Nerano → Água"},{time:"PM",act:"Free — dinner on own",actP:"Livre — jantar por conta"}]},
{d:"3/2 Mon",t:"⭐ Pagani + Ferrari (Motor Valley)",z:"Motor Valley",meals:"B L",hotel:"E.C.H.O. (3/3)",attire:"Casual",sched:[{time:"6:15 AM",act:"Breakfast ⚠️ EARLY",actP:"Café ⚠️ BEM CEDO"},{time:"7:00 AM",act:"Coach depart (2.5h drive)",actP:"Saída de ônibus (2,5h)"},{time:"10:00",act:"⭐ PAGANI Factory Tour (1h)",actP:"⭐ Tour pela Fábrica PAGANI (1h)",hl:true,det:"Museum & Atelier. Carbon fiber artisans. Huayra/Utopia assembly.",detP:"Museu e Ateliê. Artesãos de fibra de carbono. Montagem Huayra/Utopia."},{time:"11:45",act:"Lunch Modena — il Fantino (1.5h)",actP:"Almoço em Modena (1,5h)",det:"Fried gnocco + cold cuts → Gramigna sausage ragù (or Tortelli Zucca) → Pork ribs Lambrusco (or cheese) → Water & soft drinks",detP:"Gnocco frito + frios → Gramigna com ragù (ou Tortelli de abóbora) → Costela de porco (ou queijos) → Água e refrigerantes"},{time:"1:30 PM",act:"⭐ FERRARI Museum + Fiorano (2h)",actP:"⭐ Museu FERRARI + Fiorano (2h)",hl:true,det:"1:30 free access. 2:00 guided — split 2 groups. F1 cars, prototypes. Fiorano panoramic. ⚠️ Production line RESTRICTED.",detP:"1:30 acesso livre. 2:00 tour guiado — 2 grupos. F1, protótipos. Panorâmica Fiorano. ⚠️ Linha de produção RESTRITA."},{time:"4:00 PM",act:"Coach back (3h) — dinner on own",actP:"Ônibus de volta (3h) — jantar por conta"}]},
{d:"3/3 Tue",t:"⭐ Casile e Casile → Rome",z:"→ Roma",meals:"B",hotel:"→ Michelangelo (1/4)",attire:"Biz Casual",sched:[{time:"6:30 AM",act:"Breakfast",actP:"Café da manhã"},{time:"8:30 AM",act:"⚠️ CHECK OUT Milan",actP:"⚠️ CHECK-OUT Milão",det:"Return key, settle incidentals, LOAD LUGGAGE ON COACH.",detP:"Devolver chave, acertar extras, BAGAGEM NO ÔNIBUS. Arrume malas na noite anterior!"},{time:"10:00",act:"⭐ CASILE E CASILE (2.5h)",actP:"⭐ CASILE E CASILE (2,5h)",hl:true,det:"Francesco Casile, CEO (50+ yrs). Heritage, human-centered brand design, strategy→creative, modernizing brands, Q&A.",detP:"Francesco Casile, CEO (50+ anos). Herança, design de marca, estratégia→criativa, modernização, P&R."},{time:"12:30",act:"Lunch on own (2.5h)",actP:"Almoço por conta (2,5h)"},{time:"4:00 PM",act:"Frecciarossa 9465 → Rome (3h)",actP:"Frecciarossa 9465 → Roma (3h)",hl:true,det:"Coach #5. Seats: 6A-13C.",detP:"Vagão #5. Assentos reservados."},{time:"7:15 PM",act:"Meet Christian, coach to hotel",actP:"Encontro com Christian, ônibus ao hotel",det:"Transit passes (ROMA72H + ROMA24H) → Stephanie Adams"},{time:"8:00 PM",act:"Check in Michelangelo, Rome",actP:"Check-in Michelangelo, Roma",det:"14 Via della Stazione di San Pietro. Passport + credit card."}]},
{d:"3/4 Wed",t:"⭐ EIIS + Intellera SHAPE",z:"EIIS+SHAPE",meals:"B",hotel:"Michelangelo (2/4)",attire:"Biz Casual",sched:[{time:"6:00 AM",act:"Breakfast",actP:"Café da manhã"},{time:"10:45",act:"Coach depart",actP:"Saída de ônibus"},{time:"11:30",act:"⭐ EIIS (1.5h)",actP:"⭐ EIIS — Instituto Europeu (1,5h)",hl:true,det:"Andrea Geremicca. Welcome → Innovation Lecture → Q&A → 15th-century palazzo tour.",detP:"Boas-vindas → Palestra Inovação → P&R → Tour palácio séc. XV."},{time:"1:00 PM",act:"Lunch on own",actP:"Almoço por conta"},{time:"3:00 PM",act:"⭐ INTELLERA SHAPE (1.5h)",actP:"⭐ INTELLERA SHAPE (1,5h)",hl:true,det:"Ivan Cardaci, CEO. Design thinking in public sector, SHAPE methodology, strategy/policy/service design, Q&A.",detP:"Design thinking no setor público, metodologia SHAPE, integração estratégia/política/design, P&R."},{time:"4:30 PM",act:"Return hotel (30 min) — dinner on own",actP:"Retorno ao hotel — jantar por conta"}]},
{d:"3/5 Thu",t:"⭐ Olive Hill Sabina",z:"Olive Hill",meals:"B",hotel:"Michelangelo (3/4)",attire:"Casual+shoes+jacket",sched:[{time:"6:00 AM",act:"Breakfast",actP:"Café da manhã"},{time:"8:00 AM",act:"Coach depart (1h45m)",actP:"Saída de ônibus (1h45)"},{time:"10:00",act:"⭐ OLIVE HILL SABINA (2h)",actP:"⭐ OLIVE HILL SABINA (2h)",hl:true,det:"Emma & Scott Notman. ⚠️ 10-min uphill walk. Grove tour (Emma) → Processing + strategy (Scott) → Q&A → Tasting → Bottle home!",detP:"⚠️ Caminhada de 10 min subindo. Tour olival (Emma) → Processamento + estratégia (Scott) → P&R → Degustação → Leve uma garrafa!"},{time:"12:00",act:"Return hotel (1.5h) — free PM",actP:"Retorno ao hotel — tarde livre"}]},
{d:"3/6 Fri",t:"⭐ Rome + Fifth Beat + Farewell",z:"Fifth Beat",meals:"B D",hotel:"Michelangelo (4/4)",attire:"Biz Casual",sched:[{time:"6:00 AM",act:"Breakfast",actP:"Café da manhã"},{time:"9:30 AM",act:"Rome Walking Tour (3h) — guide Carlotta",actP:"Tour a Pé por Roma (3h) — guia Carlotta",det:"Colosseum → Arch of Constantine → Palatine Hill → Roman Forum. NO entrances. Whispers mandatory.",detP:"Coliseu → Arco de Constantino → Monte Palatino → Fórum Romano. SEM entradas. Fones obrigatórios."},{time:"12:30",act:"Lunch on own",actP:"Almoço por conta"},{time:"2:00 PM",act:"Meet assistant, board coach",actP:"Encontro com assistente, embarcar"},{time:"3:00 PM",act:"⭐ FIFTH BEAT (1.5h)",actP:"⭐ FIFTH BEAT (1,5h)",hl:true,det:"Raffaele Boiano, CEO. Design philosophy, embedding design, measuring impact (KPIs), AI in digital experience, Q&A.",detP:"Filosofia de design, incorporação de design, mensuração de impacto (KPIs), IA em experiência digital, P&R."},{time:"6:30 PM",act:"Walk to dinner (15 min)",actP:"Caminhada ao jantar (15 min)"},{time:"7:00 PM",act:"Farewell Dinner — Taverna Angelica (2h)",actP:"Jantar de Despedida (2h)",hl:true,det:"Pork neck + tomato → Ravioli amatriciana → Chocolate mango passion fruit. Pork-free alt available. Water + 1 soft drink.",detP:"Pescoço de porco + tomate → Ravioli amatriciana → Chocolate manga maracujá. Opção sem porco disponível. Água + 1 refrigerante."}]},
{d:"3/7 Sat",t:"Program Ends / Fim do Programa",z:"Partida",meals:"B",hotel:"Check out",attire:"—",sched:[{time:"3:30 AM",act:"⚠️ Early group → FCO T1",actP:"⚠️ Grupo cedo → FCO T1",det:"Lucien (TAP 839, 6:00), Roy Chowdhury (AA 719, 6:10), Hickey (BA 1576, 6:10), Lenz (BA 1576, 6:10), Darkoa-Ampem (BA 553, 6:45). Boxed breakfast at front desk.",detP:"Café em caixa na recepção (fruta, torrada, croissant, água, suco)."},{time:"6:30 AM",act:"Breakfast",actP:"Café da manhã"},{time:"10:00",act:"Later group → FCO T3",actP:"Grupo posterior → FCO T3",det:"Christian De Cesare. Avalon (AA 719, 1:10), Bunn (BA 1576, 1:10), Maz (BA 1576, 1:10), Bouchrouche (BA 553, 1:20), Xing (WizzAir 6065, 1:45)."},{time:"11:00",act:"CHECK OUT Rome hotel",actP:"CHECK-OUT hotel Roma",det:"Return key, settle incidentals, store luggage if needed.",detP:"Devolver chave, acertar extras, guardar bagagem se necessário."}]}
];

const COMPANIES=[
{id:"pagani",name:"Pagani",pt:"Fabricante boutique de hipercarros",date:"3/2 Mon 10AM",color:C.red,icon:"🏎️",attire:"Casual",addr:"Via dell'Industria 26, 41018 San Cesario sul Panaro (MO)",speaker:"Site guides / Guias locais",web:"pagani.com",
bg:["Founded 1992 by Horacio Pagani (Italian-Argentinian). Previously led Lamborghini's composite materials dept. / Fundada em 1992 por Horacio Pagani. Ex-chefe de materiais compostos da Lamborghini.","Located in Motor Valley near Modena. 30 min from Ferrari. / No Vale dos Motores, 30 min da Ferrari.","Ultra-low-volume hypercars: Zonda, Huayra, Utopia. ~40 cars/year, €2M-7M+. / Hipercarros em volume ultra-baixo: ~40/ano.","Da Vinci philosophy: 'Art & Science must walk hand in hand.' / Filosofia: 'Arte e Ciência devem caminhar juntas.'","2016: expanded to modern facility. Calls factory 'Atelier' — branding decision. / Chama a fábrica de 'Ateliê'.","Museum opened 2017: limited editions, unreleased concepts. / Museu aberto em 2017."],
analysis:["Purest design-driven case (Verganti). Horacio = visionary interpreter. Carbon fiber as meaning. / Caso mais puro de design-driven. Horacio = intérprete visionário.","Horacio IS the identity filter. Key tension: succession. / Horacio É o filtro de identidade. Tensão: sucessão.","Keeley: Process (handcraft), Product Performance, Brand (founder myth), Customer Engagement (bespoke). / Processo, Desempenho, Marca, Engajamento.","Scalability paradox: 'Atelier' identity resists scale, but company grew in 2016. / Paradoxo de escala."]},
{id:"ferrari",name:"Ferrari",pt:"Marca icônica de carros esportivos de luxo",date:"3/2 Mon 1:30PM",color:C.red,icon:"🐎",attire:"Casual",addr:"Via Alfredo Dino Ferrari 43, 41053 Maranello (MO)",speaker:"2 site guides / 2 guias",web:"ferrari.com/museums",
bg:["Founded 1939 by Enzo Ferrari, HQ Maranello. NYSE: RACE. Market cap ~€75B+. / Fundada 1939. Listada na NYSE.","~14,000 cars/year — deliberately constrained. 'One fewer car than demand.' / ~14.000/ano — deliberadamente limitado.","Museum opened 1990, expanded 2004. 2,500 sqm. ~180,000 visitors/year. 300m from factory. / Museu a 300m da fábrica.","Fiorano Track: private 3km test track (1972). Panoramic bus tour. ⚠️ Production line RESTRICTED. / Pista privada. ⚠️ Linha de produção RESTRITA.","Split into 2 groups at 2:00 PM. Free museum from 1:30. / Dividido em 2 grupos às 14h."],
analysis:["THE identity filter case. Electrification = ultimate test for a V12 brand. / O caso do filtro de identidade.","Dual identity: luxury brand AND racing company. Sometimes conflict. / Dupla identidade: luxo E corrida.","Controlled scarcity at scale: 14,000 > Pagani (40) but << Porsche (300,000). / Escassez controlada em escala.","Racing→road pipeline with filters. Fiorano as brand theater — note what you're NOT shown. / Pipeline corrida→estrada. Teatro de marca."]},
{id:"casile",name:"Casile e Casile",pt:"Showroom de luxo e distribuição de marcas",date:"3/3 Tue 10AM",color:C.pnk,icon:"👗",attire:"Biz Casual",addr:"Via Tortona 9, 20144 Milano",speaker:"Francesco Casile, CEO",web:"casileecasile.it",
bg:["Founded 1975 by Francesco Casile. Milan luxury showroom & brand distribution. / Fundada 1975. Showroom de luxo e distribuição.","Via Tortona 9 — Tortona Design District. 400 sqm. / Distrito de Design de Tortona.","Francesco moved to Milan with friend Gianni Versace. Started as warehouse worker. / Mudou-se com Versace. Começou como operário.","Co-founded Camera Showroom Milano (CSM). 'Cavaliere' by President Mattarella. / Co-fundou CSM. 'Cavaleiro' pelo Presidente.","Now with daughter Alessia. Expanded to Shanghai, Seoul, Moscow. 250+ IT / 200+ int'l clients. / Com filha Alessia. Expansão internacional.","Teaches at 4 Milan universities. Active mentor, age ~78. / Leciona em 4 universidades."],
analysis:["'Meaning intermediary' (Verganti): curates brands, manages meaning layer. / 'Intermediário de significado': faz curadoria de marcas.","Ecosystem positioning: CSM co-founder, gov't recognition = institutional node. / Posicionamento ecossistêmico.","Succession: Francesco (~78) → Alessia. How to modernize without losing trust? / Sucessão: como modernizar sem perder confiança?","DTC/e-commerce threatens intermediary model. Alessia's digital strategy = response. / DTC ameaça o modelo intermediário."]},
{id:"eiis",name:"EIIS",pt:"Instituto Europeu de Inovação para Sustentabilidade",date:"3/4 Wed 11:30AM",color:C.grn,icon:"🌱",attire:"Biz Casual",addr:"Palazzo Taverna, Via di Monte Giordano 36, Roma",speaker:"Andrea Geremicca",web:"eiis.eu",
bg:["Pan-European, Rome-based. Sustainable innovation via education & partnerships. / Pan-europeu. Inovação sustentável via educação.","HQ: Palazzo Taverna Aldobrandini — 15th-century palazzo near Piazza Navona. Building = part of experience. / Palácio do séc. XV perto da Piazza Navona.","Works with companies, governments, UN agencies across 120+ countries. / Atua com empresas, governos, ONU em 120+ países.","'No professors or students, only people.' Challenge-based, immersive learning. / 'Sem professores ou alunos, apenas pessoas.'","Programs: Food & Sustainability, Space Entrepreneurship. 5★ Trustpilot (179 reviews). / 5 estrelas no Trustpilot.","Annual EIIS Summit at Palazzo Taverna. / Cúpula anual no Palazzo Taverna."],
analysis:["Reframing sustainability: compliance → strategic opportunity. Design-driven applied to mindset. / Ressignificando sustentabilidade.","Palazzo as pedagogy: 15th-century building + sustainability = tradition & transformation. / O palácio como pedagogia.","Stakeholder complexity: diverse stakeholders require different approaches. / Complexidade de stakeholders."]},
{id:"shape",name:"Intellera SHAPE",pt:"Estúdio de Design e Experiência Cidadã",date:"3/4 Wed 3PM",color:C.teal,icon:"🏛️",attire:"Biz Casual",addr:"Rome (meeting point from assistant / ponto de encontro pelo assistente)",speaker:"Ivan Cardaci, CEO",web:"intelleraconsulting.com",
bg:["Design & Citizen Experience Studio of Intellera Consulting. Launched 2023. / Lançado em 2023 sob Ivan Cardaci.","Intellera: 2021 PwC Italy spin-off → Gyrus Capital → Accenture 2024. 700→1,400+ employees. / Adquirido pela Accenture.","Public sector: ministries, healthcare, municipalities. Digital transformation with data & AI. / Setor público: ministérios, saúde, municípios.","Ivan Cardaci: ex-Head of Omnichannel Experience at Poste Italiane. / Ex-chefe de experiência no Correio Italiano.","SHAPE method: problem framing → stakeholder mapping → prototyping → iteration. / Método SHAPE.","Key role in Italy's EU recovery fund (NRRP) deployment. / Papel-chave nos fundos de recuperação da UE."],
analysis:["Public vs. private design: citizen with rights ≠ customer with preferences. / Cidadão com direitos ≠ cliente com preferências.","PwC → PE → Accenture: itself a case study in organizational design. / A jornada corporativa é um caso em si.","SHAPE as internal startup: design unit within strategy consultancy. / Startup interna dentro de consultoria."]},
{id:"olive",name:"Olive Hill Sabina",pt:"Fazenda familiar orgânica de oliveiras",date:"3/5 Thu 10AM",color:C.org,icon:"🫒",attire:"Casual+shoes+jacket",addr:"San Giorgio di Tarano, Sabina Hills (~1h from Rome / de Roma)",speaker:"Emma & Scott Notman",web:"olivehillsabina.com",
bg:["Family-run organic olive farm, 8.5 hectares. Founded 2018. Restored abandoned property. / Fazenda orgânica familiar. Propriedade abandonada restaurada.","Scott: ex-NATO military, Professional Olive Oil Sommelier. Emma: Qualified Organic Farmer. / Ex-militar NATO + agricultora orgânica.","Award-winning hand-harvested early-harvest cold-extracted EVOO. Varieties: Frantoio, Pendolino, Leccino, Carboncello, Raja. / AOVE premiado.","Regenerative: no fungicides/insecticides. Solar powered. EU Ecoscheme. / Regenerativo: sem agrotóxicos. Solar.","Sabina: olive oil for millennia. 2 trees alive from Rome's founding (7th c. BC). / Oliveiras vivas desde a fundação de Roma.","⚠️ 10-min uphill walk. Comfortable shoes + jacket. Take a bottle home! / Caminhada subindo. Leve uma garrafa!"],
analysis:["2018 startup, not heritage story. Two foreigners in centuries-old market. / Startup de 2018, não história de herança.","Meaning in commodity market (Verganti): 'hand-harvested organic from Sabina' = meaning proposition. / Significado em mercado de commodities.","Scale as anti-strategy: 8.5ha is tiny. Constraint may BE the value. / Escala como anti-estratégia.","Agritourism as revenue diversification. / Agroturismo como diversificação de receita."]},
{id:"5beat",name:"Fifth Beat",pt:"Consultoria de design digital e inovação",date:"3/6 Fri 3PM",color:C.pur,icon:"🎨",attire:"Biz Casual",addr:"Rome (offices: Rome, Milan, Bologna, Brescia / escritórios em 4 cidades)",speaker:"Raffaele Boiano, CEO & Co-Founder",web:"fifthbeat.com",
bg:["Independent design-driven innovation studio, co-founded 2014. Group of 4 companies. / Estúdio independente, 4 empresas.","Clients: IKEA, Luxottica, Royal Caribbean, Unicredit, RAI, Brunello Cucinelli. 210+ products, 40+ apps. / Clientes renomados.","Raffaele: anthropology + communication (Sapienza). Prof at Politecnico di Milano. CEO of Year 2024 Rome. / Formação em antropologia.","Approach: ethnographic research → UX/UI → business design → implementation. Agile teams. / Pesquisa etnográfica → design.","Hosts 'Beat Camp' annual international design conference. / Conferência anual de design."],
analysis:["Meta-case: helps others become design-driven. Methodology IS the innovation. / Metacaso: a metodologia é a inovação.","Anthropology→technology bridge: ethnographic methods, not just surveys. Rare. / Ponte antropologia→tecnologia.","Embedding vs. consulting: making design stick after engagement ends. / Incorporar vs. consultar.","Directly relevant to startups: AI in design, measuring ROI, lean experimentation. / Diretamente relevante para startups."]}
];

const VENUES=[
{id:"duomo",name:"Duomo di Milano",pt:"Catedral de Milão",date:"3/1 Sun 11:30",color:C.gold,icon:"⛪",addr:"Piazza del Duomo, Milano",
facts:["600 years of construction (1386–1965). Milanese proverb: 'Long as the Duomo work.' / 600 anos de construção. Provérbio: 'Longo como a obra do Duomo.'","Largest church in Italy. 135 spires, 3,400+ statues, 150 gargoyles. Pink Candoglia marble. / Maior igreja da Itália. 135 pináculos, 3.400+ estátuas.","Madonnina: gilded copper (108.5m), ~300g gold, ~900kg. Symbol of Milan. Visible from Lake Como. / Símbolo de Milão. Visível do Lago Como.","ONLY Gothic cathedral with accessible terraces. Lift or 250 stairs. Even with lift, ~50 more steps. / ÚNICA catedral gótica com terraços acessíveis.","77 architects over 600 years. Napoleon crowned King of Italy here. His statue on a spire. / Napoleão coroado aqui.","Veneranda Fabbrica (~1387): 600+ year-old organization still managing maintenance. / Organização de 600+ anos ainda em operação."],
tips:["📸 Photography OK. 👗 Dress code: no bare shoulders/short shorts. 🏔️ Clear days: see Alps. 🔍 Hidden carvings: Dante's face on terraces. ⚠️ ~50 steps even with lift."]},
{id:"galleria",name:"Galleria Vittorio Emanuele II",pt:"Galeria Vittorio Emanuele II",date:"3/1 Sun 10AM",color:C.pur,icon:"🏛️",addr:"Piazza del Duomo, Milano",
facts:["Built 1865–1877 by Mengoni (died before inauguration). Glass-iron dome (47m). / Construída 1865–1877. Cúpula de vidro e ferro.","Floor mosaics: 4 Italian capitals (Turin bull, Rome wolf, Florence lily, Milan cross). / Mosaicos: 4 capitais italianas.","'Milan's living room.' Prada since 1913 (oldest flagship worldwide). Also LV, Gucci, Versace. / 'Sala de estar de Milão.' Prada desde 1913.","Bull tradition: spinning on Turin bull = good luck. Worn down & replaced many times. / Tradição: girar no touro = sorte.","Connects Piazza del Duomo to Piazza della Scala. / Conecta as duas praças principais."],
tips:["🐂 Try the bull spin! 🏪 Prada's 1913 store at entrance. 📐 Connection to Casile: luxury ecosystem's physical origin. / Conexão com Casile."]},
{id:"scala",name:"Teatro alla Scala",pt:"Teatro alla Scala",date:"3/1 Sun 10AM",color:C.pnk,icon:"🎭",addr:"Via Filodrammatici 2, Milano",
facts:["Opened 1778. World's most prestigious opera house. / Inaugurado em 1778. A casa de ópera mais prestigiada do mundo.","2,030 seats. Season opens Dec 7 (Saint Ambrose). Rebuilt after 1943 bombing. / 2.030 assentos. Temporada em 7 de dezembro.","Premieres: Verdi (Otello, Nabucco), Puccini (Butterfly, Turandot). / Estreias de Verdi e Puccini.","Own orchestra, ballet, chorus + academy. La Scala = Italian cultural identity. / Identidade cultural italiana."],
tips:["🎼 Entrance + whispers included. 🔗 'Brand theater': La Scala : opera :: Ferrari : racing = controlled access to excellence. / Teatro de marca."]},
{id:"colosseum",name:"Colosseum (Exterior)",pt:"Coliseu (Exterior)",date:"3/6 Fri 9:30AM",color:C.red,icon:"🏟️",addr:"Piazza del Colosseo 1, Roma",
facts:["Built 72–80 AD (Vespasian → Titus). Funded with Jerusalem spoils. Named after Nero's colossal statue. / Financiado com espólios de Jerusalém.","189m × 156m × 48m. ~50,000-80,000 capacity. 80 arches: filled/emptied in minutes. Retractable awning by 1,000 sailors. / 80 arcos: entrada/saída em minutos.","Gladiator fights, animal hunts, mock sea battles. Up to 100-day shows. Est. 400,000 humans + 1M animals died. / Lutas de gladiadores, caças, batalhas navais.","South collapsed 847 earthquake. New 7 Wonders. On Italy's 5 cent coin. Bede prophecy: 'While Colossus stands, Rome stands.' / Novas 7 Maravilhas."],
tips:["⚠️ EXTERIOR ONLY. 📸 Best: Via dei Fori Imperiali + Arch of Constantine. 🔗 80-arch crowd management = ancient UX → compare Fifth Beat. / Gestão de multidões = UX antigo."]},
{id:"constantine",name:"Arch of Constantine",pt:"Arco de Constantino",date:"3/6 Fri 9:30AM",color:C.org,icon:"🏛️",addr:"Between Colosseum & Palatine, Roma",
facts:["315 AD. Constantine's victory at Milvian Bridge (312). Largest surviving Roman triumphal arch (21m × 25.9m). / Maior arco triunfal romano sobrevivente.","Spolia: sculptures 'borrowed' from Trajan, Hadrian, Marcus Aurelius — heads re-carved. Creative reuse or decline? / Esculturas 'emprestadas' de monumentos anteriores.","Academic parallel: spolia = curation in stone. Compare Ferrari reusing racing DNA, Casile curating brands. / Spolia = curadoria em pedra."],
tips:["🔍 Spot style difference: 2nd-c. naturalistic vs. 4th-c. schematic = Classical → Late Antique transition. / Diferença de estilos entre séculos."]},
{id:"palatine",name:"Palatine Hill",pt:"Monte Palatino",date:"3/6 Fri 9:30AM",color:C.grn,icon:"🏔️",addr:"Via di San Gregorio 30, Roma",
facts:["Founding myth: Romulus & Remus raised by she-wolf here (753 BC). / Mito: Rômulo e Remo criados por loba aqui.","Word 'palace' from 'Palatine' (Palatium). Most important of 7 hills. / 'Palácio' vem de 'Palatino.'","Augustus made it seat of imperial power. Successive emperors built palaces. / Augusto fez dele o centro do poder imperial.","Views: Roman Forum (one side) + Circus Maximus (other, 150,000+ capacity). / Vistas: Fórum + Circo Máximo."],
tips:["📸 Forum view = iconic Rome photo. 🔗 'Palace' from 'Palatine' = 2,000-year brand identity. / Identidade de marca de 2.000 anos."]},
{id:"forum",name:"Roman Forum",pt:"Fórum Romano",date:"3/6 Fri 9:30AM",color:C.teal,icon:"🏛️",addr:"Via della Salara Vecchia, Roma",
facts:["Political/commercial/religious center for 1,000+ years. Drained 7th c. BC (Cloaca Maxima). / Centro político por 1.000+ anos.","Senate (Curia), law courts, temples (Saturn, Vesta), treasury, Rostra. Caesar's body brought here. / Senado, templos, tesouro. Corpo de César trazido aqui.","Key: Temple of Saturn (490s BC — housed treasury), Arch of Titus (Jerusalem sack), Via Sacra (oldest street), Temple of Romulus (original bronze doors still work!). / Portas de bronze originais ainda funcionam!","9th-c. earthquake destroyed most. Cattle pasture for centuries. World's largest inner-city archaeological area. / Maior área arqueológica urbana do mundo."],
tips:["⚠️ Exterior only. 🧠 Forum overloaded over 1,000 yrs (Caesar built new forums) = original 'platform overload' → compare platform economics. / Sobrecarga de plataforma original."]},
];

const IT_CATS=[
{id:"ess",l:"Essentials",p:"Essenciais",icon:"🗣️",items:[
{it:"Sì / No",pr:"see / noh",en:"Yes / No",pt:"Sim / Não"},
{it:"Per favore",pr:"pair fah-VOH-reh",en:"Please",pt:"Por favor"},
{it:"Grazie (mille)",pr:"GRAH-tsee-eh (MEE-leh)",en:"Thank you (very much)",pt:"Obrigado/a (muito obrigado/a)"},
{it:"Prego",pr:"PREH-goh",en:"You're welcome / Go ahead",pt:"De nada / Pode ir",n:"Also 'after you' / Também 'depois de você'"},
{it:"Mi scusi",pr:"mee SKOO-zee",en:"Excuse me (formal)",pt:"Com licença (formal)",n:"Use with strangers / Para desconhecidos"},
{it:"Mi dispiace",pr:"mee dee-SPYAH-cheh",en:"I'm sorry",pt:"Desculpe / Sinto muito"},
{it:"Non capisco",pr:"non kah-PEE-skoh",en:"I don't understand",pt:"Não entendo"},
{it:"Parla inglese?",pr:"PAR-lah een-GLEH-zeh",en:"Do you speak English?",pt:"Fala inglês?"},
{it:"Può ripetere?",pr:"pwoh ree-PEH-teh-reh",en:"Can you repeat?",pt:"Pode repetir?"},
{it:"Va bene / Perfetto",pr:"vah BEH-neh / pair-FET-toh",en:"OK / Perfect",pt:"OK / Perfeito"},
{it:"Non parlo italiano",pr:"non PAR-loh ee-tah-lee-AH-noh",en:"I don't speak Italian",pt:"Não falo italiano"},
]},
{id:"greet",l:"Greetings",p:"Cumprimentos",icon:"👋",items:[
{it:"Buongiorno",pr:"bwon-JOR-noh",en:"Good morning/day",pt:"Bom dia",n:"Until ~2-3 PM / Até ~14-15h"},
{it:"Buonasera",pr:"bwoh-nah-SEH-rah",en:"Good evening",pt:"Boa noite (cumprimento)",n:"From late afternoon / A partir do fim da tarde"},
{it:"Ciao",pr:"chow",en:"Hi/Bye (informal)",pt:"Oi/Tchau (informal)",n:"⚠️ Informal ONLY! / Apenas informal!"},
{it:"Salve",pr:"SAHL-veh",en:"Hello (neutral)",pt:"Olá (neutro)",n:"Safer than ciao / Mais seguro que ciao"},
{it:"Arrivederci",pr:"ah-ree-veh-DAIR-chee",en:"Goodbye (formal)",pt:"Até logo (formal)"},
{it:"Piacere",pr:"pyah-CHEH-reh",en:"Nice to meet you",pt:"Prazer em conhecê-lo/a",n:"Essential for visits / Essencial nas visitas"},
{it:"Mi chiamo...",pr:"mee KYAH-moh",en:"My name is...",pt:"Meu nome é..."},
]},
{id:"rest",l:"Restaurant",p:"Restaurante",icon:"🍝",items:[
{it:"Vorrei...",pr:"vor-RAY",en:"I would like...",pt:"Eu gostaria de...",n:"Most polite / Mais educado"},
{it:"Cosa consiglia?",pr:"KOH-zah kon-SEE-lyah",en:"What do you recommend?",pt:"O que recomenda?"},
{it:"Sono allergico/a a...",pr:"SOH-noh ah-LAIR-jee-koh/kah",en:"I'm allergic to...",pt:"Sou alérgico/a a..."},
{it:"Non mangio carne di maiale",pr:"non MAHN-joh KAR-neh dee mah-YAH-leh",en:"I don't eat pork",pt:"Não como carne de porco"},
{it:"Il conto, per favore",pr:"eel KON-toh",en:"The check, please",pt:"A conta, por favor"},
{it:"Posso pagare con carta?",pr:"POS-soh pah-GAH-reh kon KAR-tah",en:"Can I pay by card?",pt:"Posso pagar com cartão?"},
{it:"Un caffè",pr:"oon kaf-FEH",en:"An espresso",pt:"Um café (= espresso na Itália)",n:"Caffè = espresso always / Caffè = sempre espresso"},
{it:"Coperto",pr:"koh-PAIR-toh",en:"Cover charge (€1-5)",pt:"Taxa de cobertura (€1-5)",n:"Standard, not a tip / Padrão, não é gorjeta"},
{it:"Buonissimo!",pr:"bwoh-NEE-see-moh",en:"Delicious!",pt:"Delicioso!"},
]},
{id:"hotel",l:"Hotel",p:"Hotel",icon:"🏨",items:[
{it:"Ho una prenotazione a nome di...",pr:"oh OO-nah preh-noh-tah-TSYOH-neh",en:"I have a reservation under...",pt:"Tenho uma reserva no nome de..."},
{it:"Posso lasciare i bagagli?",pr:"POS-soh lah-SHAH-reh",en:"Can I leave my luggage?",pt:"Posso deixar minhas malas?",n:"Checkout days (3/3, 3/7) / Dias de check-out"},
{it:"Può chiamarmi un taxi?",pr:"pwoh kyah-MAR-mee",en:"Call me a taxi?",pt:"Pode chamar um táxi?"},
{it:"Che piano?",pr:"keh PYAH-noh",en:"Which floor?",pt:"Qual andar?",n:"Ground = piano terra (0). 1st = our 2nd / Térreo = 0"},
]},
{id:"trans",l:"Transport",p:"Transporte",icon:"🚄",items:[
{it:"Dov'è la stazione?",pr:"doh-VEH lah stah-TSYOH-neh",en:"Where is the station?",pt:"Onde é a estação?"},
{it:"A che binario?",pr:"ah keh bee-NAH-ryoh",en:"Which platform?",pt:"Qual plataforma?",n:"For Frecciarossa / Para o trem"},
{it:"Quanto costa un taxi per...?",pr:"KWAHN-toh KOH-stah",en:"How much is a taxi to...?",pt:"Quanto custa um táxi para...?"},
{it:"All'aeroporto (Fiumicino)",pr:"ah-lah-eh-roh-POR-toh",en:"To the airport",pt:"Para o aeroporto",n:"Departure Mar 7 / Partida 7/3"},
]},
{id:"emrg",l:"Emergency",p:"Emergência",icon:"🚨",items:[
{it:"Aiuto!",pr:"ah-YOO-toh",en:"Help!",pt:"Socorro!"},
{it:"Chiamate un'ambulanza!",pr:"kyah-MAH-teh",en:"Call an ambulance!",pt:"Chamem uma ambulância!"},
{it:"Ho bisogno di un medico",pr:"oh bee-ZOH-nyoh",en:"I need a doctor",pt:"Preciso de um médico"},
{it:"Dov'è la farmacia?",pr:"doh-VEH lah far-mah-CHEE-ah",en:"Where's the pharmacy?",pt:"Onde é a farmácia?",n:"Green cross / Cruz verde"},
{it:"Emergenza: 112",pr:"eh-mair-JEN-tsah",en:"Emergency: 112",pt:"Emergência: 112",n:"Europe-wide / Em toda a Europa"},
]},
{id:"food",l:"Food",p:"Comida",icon:"🧀",items:[
{it:"Antipasto / Primo / Secondo / Dolce",pr:"ahn-tee-PAH-stoh / PREE-moh / seh-KON-doh / DOHL-cheh",en:"Starter / 1st / 2nd / Dessert",pt:"Entrada / 1º prato / 2º prato / Sobremesa"},
{it:"Contorno",pr:"kon-TOR-noh",en:"Side dish (ordered separately!)",pt:"Acompanhamento (pedido à parte!)",n:"NOT included with mains / NÃO incluído no prato principal"},
{it:"Carne / Maiale / Manzo / Pollo / Pesce",pr:"KAR-neh...",en:"Meat / Pork / Beef / Chicken / Fish",pt:"Carne / Porco / Boi / Frango / Peixe"},
{it:"Olio d'oliva",pr:"OH-lyoh doh-LEE-vah",en:"Olive oil",pt:"Azeite de oliva",n:"You'll be expert after Olive Hill! / Especialista após Olive Hill!"},
{it:"Vino rosso/bianco / Gelato",pr:"VEE-noh ROS-soh / jeh-LAH-toh",en:"Red/White wine / Gelato",pt:"Vinho tinto/branco / Sorvete italiano"},
]},
{id:"biz",l:"Business",p:"Negócios",icon:"💼",items:[
{it:"Piacere di conoscerLa",pr:"pyah-CHEH-reh dee koh-NOH-sher-lah",en:"Pleased to meet you (very formal)",pt:"Prazer em conhecê-lo/a (muito formal)",n:"Use with CEOs / Para CEOs"},
{it:"Grazie per il Suo tempo",pr:"GRAH-tsee-eh pair eel SOO-oh TEM-poh",en:"Thank you for your time",pt:"Obrigado/a pelo seu tempo"},
{it:"È molto interessante",pr:"eh MOL-toh een-teh-reh-SAHN-teh",en:"Very interesting",pt:"Muito interessante"},
{it:"Posso fare una domanda?",pr:"POS-soh FAH-reh OO-nah doh-MAHN-dah",en:"May I ask a question?",pt:"Posso fazer uma pergunta?"},
{it:"Innovazione / Sostenibilità / Artigianato",pr:"een-noh-vah-TSYOH-neh / sos-teh-nee-bee-lee-TAH / ar-tee-jah-NAH-toh",en:"Innovation / Sustainability / Craftsmanship",pt:"Inovação / Sustentabilidade / Artesanato",n:"Core values — especially at Pagani / Valores centrais"},
{it:"Made in Italy",pr:"FAT-toh een ee-TAH-lyah",en:"Made in Italy",pt:"Feito na Itália",n:"Brand strategy, key at Casile / Estratégia de marca"},
]},
{id:"pron",l:"Pronunciation",p:"Pronúncia",icon:"📖",items:[
{it:"C+e/i → 'ch'",pr:"cena=CHEH-nah",en:"C before e/i = ch (church)",pt:"C antes de e/i = tch"},
{it:"C+a/o/u → 'k'",pr:"casa=KAH-zah",en:"C before a/o/u = k",pt:"C antes de a/o/u = k"},
{it:"G+e/i → 'j'",pr:"gelato=jeh-LAH-toh",en:"G before e/i = j (judge)",pt:"G antes de e/i = dj"},
{it:"GN → 'ny'",pr:"gnocchi=NYOH-kee",en:"GN = ny (canyon)",pt:"GN = nh (como português!)"},
{it:"Double consonants: hold longer",pr:"penne ≠ pene!",en:"Important distinction!",pt:"Distinção importante!"},
{it:"H is always silent",pr:"hotel=oh-TEL",en:"H never pronounced",pt:"H nunca pronunciado"},
]},
];

const KEELEY=[
{type:"Profit Model / Modelo de Lucro",cat:"Config",co:"Ferrari (scarcity / escassez), Olive Hill (premium), Pagani (bespoke)"},
{type:"Network / Rede",cat:"Config",co:"Casile (ecosystem / ecossistema), EIIS (cross-institutional / interinstitucional)"},
{type:"Structure / Estrutura",cat:"Config",co:"SHAPE (Accenture), Fifth Beat (embedding / incorporação)"},
{type:"Process / Processo",cat:"Config",co:"Pagani (carbon fiber), Olive Hill (regenerative / regenerativo), Ferrari (racing→road)"},
{type:"Product Performance / Desempenho",cat:"Offering",co:"Ferrari (engineering), Pagani (materials / materiais)"},
{type:"Product System / Sistema",cat:"Offering",co:"Ferrari (car+brand+racing), Casile (curation / curadoria)"},
{type:"Service / Serviço",cat:"Experience",co:"Fifth Beat (consulting), SHAPE (public service / serviço público)"},
{type:"Channel / Canal",cat:"Experience",co:"Casile (intermediary / intermediário), Olive Hill (DTC vs dist.)"},
{type:"Brand / Marca",cat:"Experience",co:"Ferrari (identity filter / filtro), Pagani (founder myth / mito), Casile (Made in Italy)"},
{type:"Engagement / Engajamento",cat:"Experience",co:"Ferrari (Fiorano theater / teatro), Pagani (co-creation / cocriação), EIIS (learning / aprendizagem)"},
];

const MAIN_TABS=[
{id:"ov",l:"Overview",z:"Visão Geral",icon:"📋"},
{id:"day",l:"Daily",z:"Dia a Dia",icon:"📅"},
{id:"co",l:"Companies",z:"Empresas",icon:"🏢"},
{id:"ve",l:"Venues",z:"Pontos Turísticos",icon:"🏛️"},
{id:"fw",l:"Frameworks",z:"Estruturas",icon:"🧠"},
{id:"it",l:"Italiano",z:"Italiano",icon:"🇮🇹"},
{id:"info",l:"Info",z:"Logística",icon:"🧳"},
];

export default function App(){
const[tab,setTab]=useState("ov");
const[dayI,setDayI]=useState(3);
const[coI,setCoI]=useState("pagani");
const[veI,setVeI]=useState("duomo");
const[itI,setItI]=useState("ess");
const[fwI,setFwI]=useState("keeley");

const renderOv=()=>(
<div>
<SH t="Trip at a Glance" z="Resumo da Viagem" icon="🇮🇹" accent={C.grn}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:16}}>
{[{l:"Duration / Duração",v:"10 Days / Dias",i:"📅"},{l:"Cities / Cidades",v:"Milan → Rome",i:"🏙️"},{l:"Companies / Empresas",v:"7 Visits / Visitas",i:"🏢"},{l:"Trip ID",v:"227138",i:"🔖"}].map((x,i)=>(
<Card key={i} style={{textAlign:"center",padding:12}}><div style={{fontSize:20}}>{x.i}</div><div style={{fontSize:15,fontWeight:700}}>{x.v}</div><div style={{fontSize:11,color:C.dm}}>{x.l}</div></Card>
))}
</div>
</SH>
<SH t="Timeline / Cronograma" z="" icon="🗓️" accent={C.pur}>
{DAYS.map((d,i)=>{const star=d.t.includes("⭐");return(
<div key={i} style={{display:"flex",gap:8,padding:"7px 10px",borderRadius:8,marginBottom:3,background:star?C.hi:"transparent",alignItems:"center"}}>
<span style={{minWidth:65,fontSize:12,fontWeight:700,color:star?C.gold:C.dm}}>{d.d}</span>
<span style={{flex:1,fontSize:13,color:C.tx,fontWeight:500}}>{d.t}</span>
<B color={C.grn} s={{fontSize:10}}>{d.meals}</B>
<B color={d.attire.includes("Biz")?C.gold:C.dm} s={{fontSize:10,minWidth:55,textAlign:"center"}}>{d.attire}</B>
</div>)})}
</SH>
<SH t="Key Alerts / Alertas" z="" icon="⚠️" accent={C.red}>
{[
{i:"⏰",t:"3/2: 6:15 AM breakfast — earliest / manhã mais cedo da viagem"},
{i:"🧳",t:"3/3: Check out Milan 8:30 AM — pack night before / arrume malas na noite anterior"},
{i:"🥾",t:"3/5: Comfortable shoes + jacket — 10-min uphill / sapatos + jaqueta"},
{i:"🌅",t:"3/7: Early group 3:30 AM — boxed breakfast / café em caixa na recepção"},
{i:"🛂",t:"Passport at both check-ins / Passaporte nos dois hotéis"},
{i:"💳",t:"Credit card per room / Cartão de crédito por quarto"},
{i:"🚇",t:"Rome transit: ROMA72H + ROMA24H via Stephanie"},
{i:"🏎️",t:"Ferrari production line RESTRICTED / Linha de produção restrita"},
{i:"🏛️",t:"Rome tour: exterior only, whispers mandatory / Apenas exterior, fones obrigatórios"},
].map((a,i)=><div key={i} style={{display:"flex",gap:8,padding:"5px 8px",fontSize:12}}><span style={{fontSize:14}}>{a.i}</span><span style={{color:C.tx}}>{a.t}</span></div>)}
</SH>
</div>
);

const renderDay=()=>{const d=DAYS[dayI];return(
<div>
<SubTab tabs={DAYS.map((x,i)=>({id:i,icon:"",label:x.d,sub:x.z}))} sel={dayI} onSel={setDayI}/>
<Card style={{borderLeft:`4px solid ${C.ac}`}}>
<h3 style={{margin:"0 0 4px",fontSize:17,fontWeight:700}}>{d.d} — {d.t}</h3>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
<B color={C.grn}>🍽️ {d.meals}</B><B color={C.pur}>🏨 {d.hotel}</B><B color={C.gold}>👔 {d.attire}</B>
</div>
{d.sched.map((s,i)=><TB key={i} {...s}/>) }
</Card>
</div>)};

const renderCo=()=>{const c=COMPANIES.find(x=>x.id===coI);return(
<div>
<SubTab tabs={COMPANIES.map(x=>({id:x.id,icon:x.icon,label:x.name,sub:x.pt.split(" ").slice(0,3).join(" ")}))} sel={coI} onSel={setCoI}/>
<Card style={{borderLeft:`5px solid ${c.color}`}}>
<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
<div><span style={{fontSize:24}}>{c.icon}</span><h3 style={{margin:"2px 0",fontSize:18,fontWeight:800}}>{c.name}</h3><div style={{fontSize:13,color:C.mt}}>{c.pt}</div></div>
<div style={{display:"flex",flexDirection:"column",gap:3,alignItems:"flex-end"}}><B color={c.color}>{c.date}</B><B color={c.attire.includes("Biz")?C.gold:C.grn}>{c.attire}</B></div>
</div>
<div style={{marginTop:12,background:C.alt,borderRadius:8,padding:10}}>
<IR icon="📍" l="Address" v={c.addr}/><IR icon="🔗" l="Web" v={c.web}/><IR icon="🎤" l="Speaker" v={c.speaker}/>
</div>
</Card>
<SH t="Background / Contexto" z="" icon="📋" accent={c.color}>
<Card>{c.bg.map((p,i)=><div key={i} style={{fontSize:12,lineHeight:1.6,color:C.tx,marginBottom:6,paddingBottom:5,borderBottom:`1px solid ${C.bd}`}}>{p}</div>)}</Card>
</SH>
<SH t="Academic Analysis / Análise Acadêmica" z="" icon="🧠" accent={C.pur}>
<Card>{c.analysis.map((a,i)=><div key={i} style={{fontSize:12,lineHeight:1.6,color:C.tx,marginBottom:8,paddingLeft:8,borderLeft:`3px solid ${c.color}`}}>{a}</div>)}</Card>
</SH>
</div>)};

const renderVe=()=>{const v=VENUES.find(x=>x.id===veI);return(
<div>
<SubTab tabs={VENUES.map(x=>({id:x.id,icon:x.icon,label:x.name.split("(")[0].split(" ").slice(0,2).join(" "),sub:x.pt}))} sel={veI} onSel={setVeI}/>
<Card style={{borderLeft:`5px solid ${v.color}`}}>
<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
<div><span style={{fontSize:24}}>{v.icon}</span><h3 style={{margin:"2px 0",fontSize:18,fontWeight:800}}>{v.name}</h3><div style={{fontSize:13,color:C.mt}}>{v.pt}</div></div>
<B color={v.color}>{v.date}</B>
</div>
<div style={{marginTop:10,background:C.alt,borderRadius:8,padding:10}}><IR icon="📍" l="Address / Endereço" v={v.addr}/></div>
</Card>
<SH t="History & Facts / História e Fatos" z="" icon="📜" accent={v.color}>
<Card>{v.facts.map((f,i)=><div key={i} style={{fontSize:12,lineHeight:1.65,color:C.tx,marginBottom:8,paddingBottom:6,borderBottom:`1px solid ${C.bd}`}}>{f}</div>)}</Card>
</SH>
<SH t="Tips & Connections / Dicas e Conexões" z="" icon="💡" accent={C.gold}>
<Card style={{background:C.hi,borderLeft:`3px solid ${C.gold}`}}>{v.tips.map((t,i)=><div key={i} style={{fontSize:12,color:C.tx,marginBottom:6,lineHeight:1.6}}>{t}</div>)}</Card>
</SH>
</div>)};

const renderFw=()=>(
<div>
<SubTab tabs={[{id:"keeley",icon:"🔟",label:"Keeley",sub:"Ten Types"},{id:"verganti",icon:"💡",label:"Verganti",sub:"Design-Driven"},{id:"filter",icon:"🔍",label:"Identity Filter",sub:"Filtro"}]} sel={fwI} onSel={setFwI}/>
{fwI==="keeley"&&<SH t="Keeley's Ten Types" z="Dez Tipos de Inovação" icon="🔟" accent={C.ac}>
{KEELEY.map((k,i)=><div key={i} style={{padding:"7px 10px",marginBottom:3,borderRadius:8,background:i%2?C.alt:"transparent",fontSize:12}}>
<div style={{display:"flex",gap:8,alignItems:"center",marginBottom:2}}>
<span style={{fontWeight:700,color:C.tx,minWidth:200}}>{k.type}</span>
<B color={k.cat==="Config"?C.ac:k.cat==="Offering"?C.grn:C.pur}>{k.cat}</B>
</div><div style={{color:C.mt,paddingLeft:4}}>{k.co}</div>
</div>)}
</SH>}
{fwI==="verganti"&&<SH t="Design-Driven Innovation" z="Inovação Orientada pelo Design" icon="💡" accent={C.gold}>
<Card style={{marginBottom:12}}>
<div style={{fontSize:12,color:C.mt,lineHeight:1.7}}>
<strong style={{color:C.tx}}>Three modes / Três modos:</strong><br/>
🔧 <strong>Technology-push</strong> — new tech / nova tecnologia<br/>
📊 <strong>Market-pull</strong> — customer needs / necessidades do cliente<br/>
🎨 <strong>Design-driven</strong> — new <em>meanings</em> / novos <em>significados</em>
</div>
</Card>
{[
{co:"Pagani",c:C.red,t:"Purest case. Horacio = visionary. Carbon fiber meaning = innovation. / Caso mais puro. Significado da fibra de carbono = inovação."},
{co:"Ferrari",c:C.red,t:"Design-driven core facing tech-push (electrification). Identity filter = mechanism. / Núcleo design-driven enfrentando pressão tecnológica."},
{co:"Casile",c:C.pnk,t:"'Meaning intermediary' — manages meaning for designers. / 'Intermediário de significado'."},
{co:"EIIS",c:C.grn,t:"Changing meaning of sustainability: compliance → opportunity. / Ressignificando sustentabilidade."},
{co:"SHAPE",c:C.teal,t:"Design-driven in public services — redefining what gov't means to citizens. / Redefinindo serviços públicos."},
{co:"Olive Hill",c:C.org,t:"Meaning in commodity market. Story = proposition. / Significado em mercado de commodities."},
{co:"Fifth Beat",c:C.pur,t:"Meta-case: methodology IS the innovation. / Metacaso: a metodologia é a inovação."},
].map((x,i)=><div key={i} style={{display:"flex",gap:10,padding:"7px 10px",marginBottom:5,borderRadius:8,borderLeft:`3px solid ${x.c}`,background:C.card}}>
<div style={{minWidth:80,fontWeight:700,fontSize:12,color:x.c}}>{x.co}</div>
<div style={{flex:1,fontSize:12,color:C.tx,lineHeight:1.5}}>{x.t}</div>
</div>)}
</SH>}
{fwI==="filter"&&<SH t="Identity Filter — Cross-Company" z="Filtro de Identidade" icon="🔍" accent={C.red}>
<Card style={{marginBottom:12}}><div style={{fontSize:12,color:C.mt,lineHeight:1.6}}>How a company evaluates new tech/trends against core identity → adopt, adapt, or reject.<br/>Como uma empresa avalia novas tecnologias/tendências contra sua identidade central → adotar, adaptar ou rejeitar.</div></Card>
{[
{co:"Pagani",c:C.red,t:"Horacio IS the filter. Key Q: succession. / Horacio É o filtro. Questão: sucessão."},
{co:"Ferrari",c:C.red,t:"How is the electric Ferrari being filtered? / Como a Ferrari elétrica está sendo filtrada?"},
{co:"Casile",c:C.pnk,t:"50+ years of curation = the filter. / 50+ anos de curadoria = o filtro."},
{co:"EIIS",c:C.grn,t:"Genuine sustainability or performative? / Sustentabilidade genuína ou performativa?"},
{co:"Olive Hill",c:C.org,t:"Founders' values = filter. What they turned down? / Valores dos fundadores = filtro."},
{co:"Fifth Beat",c:C.pur,t:"Two levels: own brand + clients' filters. / Dois níveis: marca própria + filtros dos clientes."},
].map((x,i)=><div key={i} style={{display:"flex",gap:10,padding:"7px 10px",marginBottom:5,borderRadius:8,borderLeft:`3px solid ${x.c}`,background:C.card}}>
<div style={{minWidth:80,fontWeight:700,fontSize:12,color:x.c}}>{x.co}</div>
<div style={{flex:1,fontSize:12,color:C.tx,lineHeight:1.5}}>{x.t}</div>
</div>)}
</SH>}
</div>);

const renderIt=()=>{const cat=IT_CATS.find(x=>x.id===itI);return(
<div>
<SubTab tabs={IT_CATS.map(x=>({id:x.id,icon:x.icon,label:x.l,sub:x.p}))} sel={itI} onSel={setItI}/>
<Card>
<div style={{fontSize:11,color:C.dm,marginBottom:10,display:"flex",gap:12}}><span><strong style={{color:C.tx}}>Bold</strong>=Italian</span><span><em style={{color:C.pur}}>Purple</em>=Pronúncia</span><span style={{color:C.mt}}>Gray=EN+PT</span></div>
{cat.items.map((p,i)=><div key={i} style={{padding:"7px 0",borderBottom:`1px solid ${C.bd}`}}>
<div style={{display:"flex",gap:8,alignItems:"baseline",flexWrap:"wrap"}}>
<span style={{fontSize:14,fontWeight:700,color:C.tx}}>{p.it}</span>
<span style={{fontSize:11,color:C.pur,fontStyle:"italic"}}>/{p.pr}/</span>
</div>
<div style={{fontSize:12,color:C.mt,marginTop:2}}>{p.en}</div>
<div style={{fontSize:12,color:C.dm}}>{p.pt}</div>
{p.n&&<div style={{fontSize:11,color:C.org,marginTop:2,fontStyle:"italic"}}>💡 {p.n}</div>}
</div>)}
</Card>
{itI==="ess"&&<Card style={{marginTop:12,background:C.hi,borderLeft:`3px solid ${C.gold}`}}>
<div style={{fontSize:13,fontWeight:700,color:C.gold,marginBottom:6}}>💡 Cultural Tips / Dicas Culturais</div>
<div style={{fontSize:12,color:C.tx,lineHeight:1.7}}>
<strong>Greetings:</strong> Always say Buongiorno entering shops/restaurants. / Sempre cumprimente ao entrar.<br/>
<strong>Formality:</strong> Use Lei (formal you), not tu. / Use Lei (você formal), não tu.<br/>
<strong>Coffee:</strong> Espresso at bar = cheaper. Cappuccino after 11 AM = tourist. / No balcão = mais barato. Cappuccino após 11h = turista.<br/>
<strong>Tipping:</strong> Not expected. Coperto is standard. / Gorjeta não esperada. Coperto é padrão.<br/>
<strong>Meals:</strong> Lunch 12:30-2:30, Dinner 7:30-10:00. / Almoço 12:30-14:30, Jantar 19:30-22:00.
</div>
</Card>}
</div>)};

const renderInfo=()=>(
<div>
<SH t="Emergency / Emergência" z="" icon="🚨" accent={C.red}>
<Card>
{[{i:"📞",l:"WorldAssist 24h",v:"+1-703-933-6143"},{i:"💬",l:"WhatsApp 24h",v:"+1-540-500-1987"},{i:"🔖",l:"Trip ID",v:"227138"},{i:"👤",l:"Account Mgr",v:"Jennifer Seymour · 434-951-5938"},{i:"🇮🇹",l:"Rome Asst.",v:"Christian De Cesare · +39 392 4426115"}].map((c,i)=><div key={i} style={{padding:"8px 0",borderBottom:`1px solid ${C.bd}`}}><IR icon={c.i} l={c.l} v={c.v}/></div>)}
</Card>
</SH>
<SH t="Hotels / Hotéis" z="" icon="🏨" accent={C.pur}>
{[{n:"Starhotels E.C.H.O. — Milan / Milão",a:"Viale Andrea Doria 4",d:"Feb 27–Mar 3 (3 nights / noites)",ci:"Feb 27/28",co:"Mar 3, 8:30 AM",note:"Pre-night pre-paid. Breakfast: ground floor. / Noite extra pré-paga. Café: térreo."},
{n:"Starhotels Michelangelo — Rome / Roma",a:"14 Via della Stazione di San Pietro",d:"Mar 3–7 (4 nights / noites)",ci:"Mar 3, 8:00 PM",co:"Mar 7, 11:00 AM",note:"Transit: ROMA72H + ROMA24H via Stephanie. / Passes via Stephanie."}
].map((h,i)=><Card key={i}><h4 style={{margin:"0 0 6px",fontSize:14,fontWeight:700}}>{h.n}</h4>
<IR icon="📍" l="Address" v={h.a}/><IR icon="📅" l="Dates" v={h.d}/><IR icon="🔑" l="Check-in" v={h.ci}/><IR icon="🚪" l="Check-out" v={h.co}/>
<div style={{marginTop:6,fontSize:11,color:C.dm,padding:"5px 8px",background:C.alt,borderRadius:6}}>📋 Passport + credit card / Passaporte + cartão. {h.note}</div>
</Card>)}
</SH>
<SH t="Train / Trem" z="" icon="🚄" accent={C.teal}>
<Card><h4 style={{margin:"0 0 6px",fontSize:14,fontWeight:700}}>Frecciarossa 9465 — Milan → Rome / Milão → Roma</h4>
<IR icon="📅" l="Date" v="Mar 3, 4:00 PM CET (3h)"/><IR icon="🚃" l="Coach / Vagão" v="#5"/><IR icon="💺" l="Seats / Assentos" v="6A-13C"/>
</Card>
</SH>
<SH t="Dress Code" z="" icon="👔" accent={C.gold}>
<Card>{[["3/2","Pagani & Ferrari","Casual",C.grn],["3/3","Casile e Casile","Biz Casual",C.gold],["3/4","EIIS & SHAPE","Biz Casual",C.gold],["3/5","Olive Hill","Casual+shoes+jacket",C.org],["3/6","Fifth Beat","Biz Casual",C.gold]].map(([d,c,a,col],i)=>
<div key={i} style={{display:"grid",gridTemplateColumns:"70px 1fr 1fr",gap:8,padding:"5px 0",borderBottom:`1px solid ${C.bd}`,fontSize:12,alignItems:"center"}}>
<span style={{fontWeight:700}}>{d}</span><span style={{color:C.mt}}>{c}</span><B color={col}>{a}</B>
</div>)}</Card>
</SH>
<SH t="Speakers & Staff / Palestrantes e Equipe" z="" icon="👤" accent={C.ac}>
<Card>
{[["Francesco Casile","CEO","Casile","3/3"],["Andrea Geremicca","Speaker","EIIS","3/4"],["Ivan Cardaci","CEO","SHAPE","3/4"],["Emma & Scott Notman","Owners","Olive Hill","3/5"],["Raffaele Boiano","CEO","Fifth Beat","3/6"]].map(([n,t,c,d],i)=>
<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 80px 90px 40px",gap:6,padding:"4px 0",borderBottom:`1px solid ${C.bd}`,fontSize:12,alignItems:"center"}}>
<span style={{fontWeight:600,color:C.tx}}>{n}</span><span style={{color:C.dm}}>{t}</span><span style={{color:C.mt}}>{c}</span><B color={C.ac}>{d}</B>
</div>)}
<div style={{marginTop:10,fontSize:11,color:C.dm,borderTop:`1px solid ${C.bd}`,paddingTop:6}}>
<strong>Staff / Equipe:</strong> Jack & Stephanie Adams (leaders / líderes, from 2/28) · Carlotta (Rome guide / guia, 3/6) · Christian De Cesare ♀ (Rome assistant / assistente, from 3/3) +39 392 4426115
</div>
</Card>
</SH>
<SH t="Medical & Links / Médico e Links" z="" icon="🏥" accent={C.grn}>
<Card>
<div style={{fontSize:12,color:C.tx,lineHeight:1.7}}>
• Medical: inform leaders + WorldAssist. Doctors on Call via WorldAssist. AXA Behavioral Health Hotline.<br/>
• 24h hospitals in Milan & Rome. Pharmacy: green cross. / Hospitais 24h. Farmácia: cruz verde.<br/>
• <strong>Emergency / Emergência: 112</strong> (Europe-wide / toda Europa)<br/><br/>
<strong>Links:</strong> starhotels.com · osteriamammarosa.it · duomomilano.it · frescocimmino.it · casileecasile.it · eiis.eu · intelleraconsulting.com · fifthbeat.com · olivehillsabina.com · tavernangelica.wixsite.com/taverna-angelica
</div>
</Card>
</SH>
</div>);

const renders={ov:renderOv,day:renderDay,co:renderCo,ve:renderVe,fw:renderFw,it:renderIt,info:renderInfo};

return(
<div style={{background:C.bg,minHeight:"100vh",color:C.tx,fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{background:"linear-gradient(135deg,#1e40af 0%,#7c3aed 100%)",padding:"18px 16px 12px"}}>
<div style={{display:"flex",alignItems:"center",gap:10}}>
<span style={{fontSize:26}}>🇮🇹</span>
<div><h1 style={{margin:0,fontSize:17,fontWeight:800,color:"#fff",letterSpacing:-.3}}>INTB 6230 Italy Field Study</h1>
<div style={{fontSize:11,color:"#e2e8f0"}}>Guia Completo EN/PT-BR | Feb 27 – Mar 8, 2026</div></div>
</div>
</div>
<div style={{display:"flex",gap:2,padding:"6px 6px 0",overflowX:"auto",borderBottom:`1px solid ${C.bd}`,background:C.alt}}>
{MAIN_TABS.map(t=>(
<button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"7px 10px",borderRadius:"8px 8px 0 0",border:"none",cursor:"pointer",fontSize:12,fontWeight:tab===t.id?700:400,background:tab===t.id?C.card:"transparent",color:tab===t.id?C.tx:C.dm,borderBottom:tab===t.id?`2px solid ${C.ac}`:"2px solid transparent",whiteSpace:"nowrap",transition:"all .15s"}}>
{t.icon} {t.l}<div style={{fontSize:9,opacity:.6}}>{t.z}</div>
</button>))}
</div>
<div style={{padding:14,maxWidth:780,margin:"0 auto"}}>{renders[tab]()}</div>
</div>);
}
