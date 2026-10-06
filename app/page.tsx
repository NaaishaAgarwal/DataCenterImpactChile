'use client';

import { useEffect, useState } from 'react';

type Lang = 'es' | 'en';
type Perspective = 'company' | 'state' | 'community';

const t = {
  es: {
    cloud:'LA NUBE', why:'¿POR QUÉ CHILE?', physical:'EL COSTO FÍSICO', perspective:'ELIGE TU PERSPECTIVA', history:'¿UNA HISTORIA NUEVA?', price:'¿QUIÉN PAGA EL PRECIO?',
    title:'EL PRECIO DE LA INTELIGENCIA', subtitle:'Los costos ocultos de la infraestructura de IA en Chile',
    author:'por Naaisha Agarwal',
    discover:'DESCUBRE QUÉ HAY DETRÁS DE LA NUBE ↓', chain:'IA → SERVIDORES → ELECTRICIDAD → CALOR → REFRIGERACIÓN → AGUA + ENERGÍA → TERRITORIO',
    question:'¿Cómo se distribuyen los costos y beneficios económicos y ambientales de la expansión de los centros de datos en Chile entre las empresas tecnológicas, el Estado y las comunidades locales?',
    whyLead:'Los centros de datos no representan solamente un costo. Para Chile, también forman parte de una estrategia de inversión, empleo, infraestructura digital y desarrollo tecnológico.',
    chartTitle:'¿QUÉ PUEDE TRAER LA INVERSIÓN EXTRANJERA?', chartLead:'Basado en Modrego et al., un aumento del 1% en la IED se asocia aproximadamente con:', output:'Producción', unskilled:'Empleo no calificado', skilled:'Empleo calificado', fdiIncrease:'AUMENTO DE IED', moreFdi:'AUMENTAR IED +1%', reset:'REINICIAR',
    uneven:'Pero más inversión no significa que todos se beneficien de la misma manera.', unevenMore:'El estudio encuentra efectos positivos sobre la producción y el empleo, especialmente el empleo calificado, pero no encuentra un efecto significativo sobre los salarios.',
    other:'EL OTRO LADO DE LA NUBE', physicalLead:'Los centros de datos convierten una economía aparentemente digital en una cuestión física. Necesitan territorio, electricidad y sistemas de refrigeración, y sus impactos dependen de cómo se diseñan y dónde se construyen.',
    activate:'ACTIVAR', servers:'SERVIDORES', heat:'CALOR', cooling:'REFRIGERACIÓN', waterEnergy:'AGUA + ENERGÍA',
    notAll:'No todos los centros de datos tienen el mismo impacto.', tradeoff:'Karimi et al. muestran que diferentes sistemas de refrigeración crean intercambios entre el consumo de agua y de energía. Las decisiones tecnológicas pueden cambiar la magnitud del impacto ambiental.',
    chileContext:'En Chile, estos impactos tienen especial importancia porque los centros de datos se han expandido en territorios donde el agua, los humedales y el desarrollo urbano ya son fuentes de conflicto. Investigaciones sobre Quilicura y Cerrillos muestran que las comunidades locales experimentan estos impactos de una manera mucho más directa que los usuarios de la infraestructura digital.',
    three:'UN CENTRO DE DATOS. TRES REALIDADES.', threeLead:'El mismo proyecto puede representar cosas muy diferentes dependiendo de quién lo observa.',
    company:'EMPRESA', state:'ESTADO', stateVisual:'ESTADO DE CHILE', regulationVisual:'REGULACIÓN', community:'COMUNIDAD', benefits:'Beneficios', responsibilities:'Responsabilidades y costos', stateResp:'Responsabilidades', possible:'Beneficios posibles', costs:'Costos y riesgos',
    companyBenefits:['infraestructura computacional','expansión de servicios digitales','acceso a un mercado tecnológico en crecimiento'],
    companyCosts:['construcción y operación','consumo de recursos','medidas de mitigación ambiental'],
    companyQuote:'Desde esta perspectiva, el centro de datos representa principalmente infraestructura, capacidad tecnológica y oportunidad económica.',
    stateBenefits:['inversión extranjera','actividad económica y empleo','infraestructura digital','posicionamiento tecnológico de Chile'],
    stateCosts:['regulación ambiental','planificación territorial','manejo de conflictos entre desarrollo y protección ambiental'],
    stateQuote:'El Estado ocupa una posición contradictoria: busca atraer inversión y desarrollo tecnológico, pero también debe regular sus consecuencias.',
    communityBenefits:['algunas oportunidades de empleo y desarrollo local'],
    communityCosts:['presión sobre recursos hídricos','impactos sobre humedales y territorio','ruido e infraestructura local','necesidad de organizarse y exigir participación'],
    communityQuote:'Para las comunidades, los costos son especialmente visibles porque ocurren en el territorio donde viven. Los conflictos de Quilicura y Cerrillos muestran que la pregunta no es solamente cuánto desarrollo produce un proyecto, sino quién decide qué tipo de desarrollo es aceptable.',
    perspectiveEnd:'Un centro de datos puede tener muchos beneficios y costos diferentes para diferentes grupos de personas.',
    historyTitle:'¿UNA HISTORIA NUEVA?', tap:'SELECCIONA LAS TARJETAS', globalization:'GLOBALIZACIÓN', dependency:'NEOCOLONIALISMO',
    cardTexts:[
      'Empresas multinacionales conectan recursos, infraestructura y mercados a través de fronteras. Los centros de datos integran a Chile aún más profundamente en una economía digital global.',
      'La independencia política no elimina necesariamente las relaciones económicas desiguales. Valente y Grohmann utilizan perspectivas latinoamericanas como la teoría de la dependencia para analizar quién controla la tecnología y cómo se distribuyen su valor y sus costos.'
    ],
    shared:'UNA PREGUNTA EN COMÚN', sharedText:'Aunque estos casos pertenecen a contextos históricos diferentes, todos plantean preguntas sobre quién controla los recursos, quién se beneficia del desarrollo y cuánto poder tienen las comunidades afectadas para decidir su propio futuro.',
    finalTitle:'ENTONCES, ¿QUIÉN PAGA EL PRECIO DE LA INTELIGENCIA?', receives:'Reciben principalmente:', receivesState:'Recibe:', also:'También asume:', mayReceive:'Pueden recibir:', face:'Pero enfrentan directamente:',
    finalCompany:['infraestructura','capacidad tecnológica','oportunidades económicas'], finalState:['inversión','actividad económica y empleo','infraestructura digital'], finalStateCost:['regulación','planificación','manejo de conflictos'], finalCommunity:['algunas oportunidades económicas'], finalCommunityCost:['presión ambiental','impactos territoriales','conflictos sobre agua y ecosistemas'],
    conclusion:'La expansión de los centros de datos puede generar beneficios económicos y tecnológicos reales para Chile, pero estos beneficios y costos no se distribuyen de manera igual. Las empresas tecnológicas y la economía nacional capturan importantes beneficios de la inversión y de la infraestructura digital, mientras que muchos de los impactos ambientales y territoriales se concentran en las comunidades donde se ubican estas instalaciones. La magnitud de estos impactos también depende de las tecnologías utilizadas, la regulación estatal y la participación de las comunidades.',
    finalLine:'El problema no es solamente cuánto cuesta la inteligencia. Es quién paga ese precio.', sources:'FUENTES', source:'Fuente', primary:'Fuente primaria.', expand:'VER LAS OCHO FUENTES', close:'CERRAR FUENTES',
    cloudFinal:'NUBE', people:'PERSONAS', context:'CONTEXTO CHILENO'
  },
  en: {
    cloud:'THE CLOUD', why:'WHY CHILE?', physical:'THE PHYSICAL COST', perspective:'CHOOSE YOUR PERSPECTIVE', history:'A NEW STORY?', price:'WHO PAYS THE PRICE?',
    title:'THE PRICE OF INTELLIGENCE', subtitle:'The Hidden Costs of AI Infrastructure in Chile',
    author:'by Naaisha Agarwal',
    discover:"DISCOVER WHAT'S BEHIND THE CLOUD ↓", chain:'AI → SERVERS → ELECTRICITY → HEAT → COOLING → WATER + ENERGY → LAND',
    question:'How are the economic and environmental costs and benefits of data-center expansion in Chile distributed among technology companies, the state, and local communities?',
    whyLead:'Data centers do not represent only a cost. For Chile, they are also part of a strategy involving investment, employment, digital infrastructure, and technological development.',
    chartTitle:'WHAT CAN FOREIGN INVESTMENT BRING?', chartLead:'Based on Modrego et al., a 1% increase in FDI is associated with approximately:', output:'Output', unskilled:'Unskilled employment', skilled:'Skilled employment', fdiIncrease:'FDI INCREASE', moreFdi:'INCREASE FDI +1%', reset:'RESET',
    uneven:'But more investment does not mean that everyone benefits equally.', unevenMore:'The study finds positive effects on output and employment, particularly skilled employment, but does not find a significant effect on wages.',
    other:'THE OTHER SIDE OF THE CLOUD', physicalLead:'Data centers turn an apparently digital economy into a physical issue. They require land, electricity, and cooling systems, and their impacts depend on how they are designed and where they are built.',
    activate:'ACTIVATE', servers:'SERVERS', heat:'HEAT', cooling:'COOLING', waterEnergy:'WATER + ENERGY',
    notAll:'Not all data centers have the same impact.', tradeoff:'Karimi et al. show that different cooling systems create tradeoffs between water and energy consumption. Technological choices can change the scale of environmental impact.',
    chileContext:'In Chile, these impacts are especially important because data centers have expanded in territories where water, wetlands, and urban development are already sources of conflict. Research on Quilicura and Cerrillos shows that local communities experience these impacts much more directly than the users of digital infrastructure.',
    three:'ONE DATA CENTER. THREE REALITIES.', threeLead:'The same project can represent very different things depending on who is looking at it.',
    company:'COMPANY', state:'STATE', stateVisual:'STATE OF CHILE', regulationVisual:'REGULATION', community:'COMMUNITY', benefits:'Benefits', responsibilities:'Responsibilities and costs', stateResp:'Responsibilities', possible:'Possible benefits', costs:'Costs and risks',
    companyBenefits:['computing infrastructure','expansion of digital services','access to a growing technology market'],
    companyCosts:['construction and operation','resource consumption','environmental mitigation measures'],
    companyQuote:'From this perspective, the data center primarily represents infrastructure, technological capacity, and economic opportunity.',
    stateBenefits:['foreign investment','economic activity and employment','digital infrastructure',"Chile's technological positioning"],
    stateCosts:['environmental regulation','territorial planning','handling conflicts between development and environmental protection'],
    stateQuote:'The state occupies a contradictory position: it seeks investment and technological development while also having to regulate their consequences.',
    communityBenefits:['some employment and local development opportunities'],
    communityCosts:['pressure on water resources','impacts on wetlands and territory','noise and local infrastructure','need to organize and demand participation'],
    communityQuote:'For communities, the costs are especially visible because they occur in the places where people live. Conflicts in Quilicura and Cerrillos show that the question is not only how much development a project produces, but who gets to decide what kind of development is acceptable.',
    perspectiveEnd:'A data center can have many different benefits and costs for different groups of people.',
    historyTitle:'A NEW STORY?', tap:'SELECT THE CARDS', globalization:'GLOBALIZATION', dependency:'NEOCOLONIALISM',
    cardTexts:[
      'Multinational corporations connect resources, infrastructure, and markets across borders. Data centers integrate Chile even more deeply into a global digital economy.',
      'Political independence does not necessarily eliminate unequal economic relationships. Valente and Grohmann use Latin American perspectives such as dependency theory to analyze who controls technology and how its value and costs are distributed.'
    ],
    shared:'A SHARED QUESTION', sharedText:'Although these cases belong to different historical contexts, they all raise questions about who controls resources, who benefits from development, and how much power affected communities have to shape their own future.',
    finalTitle:'SO, WHO PAYS THE PRICE OF INTELLIGENCE?', receives:'Mainly receive:', receivesState:'Receives:', also:'Also assumes:', mayReceive:'May receive:', face:'But directly face:',
    finalCompany:['infrastructure','technological capacity','economic opportunities'], finalState:['investment','economic activity and employment','digital infrastructure'], finalStateCost:['regulation','planning','conflict handling'], finalCommunity:['some economic opportunities'], finalCommunityCost:['environmental pressure','territorial impacts','conflicts over water and ecosystems'],
    conclusion:'The expansion of data centers can generate real economic and technological benefits for Chile, but these benefits and costs are not distributed equally. Technology companies and the national economy capture important benefits from investment and digital infrastructure, while many environmental and territorial impacts are concentrated in the communities where these facilities are located. The scale of these impacts also depends on the technologies used, state regulation, and community participation.',
    finalLine:'The question is not only how much intelligence costs. It is who pays that price.', sources:'SOURCES', source:'Source', primary:'Primary source.', expand:'VIEW THE EIGHT SOURCES', close:'CLOSE SOURCES',
    cloudFinal:'CLOUD', people:'PEOPLE', context:'CHILEAN CONTEXT'
  }
} as const;

const sources = [
  <>Diaz Bejarano, Nicolas, and Ana Valdivia. “Thirsty Forests and Expansive Droughts: The Environmental Impacts of Data Centers in Latin America.” <em>Environment and Planning E: Nature and Space</em>, 2025.</>,
  <>García Domínguez, Manuel. “Los Centros De Datos Como Centros De Conflictos: El Caso De Los Humedales En Quilicura Y Cerrillos (Chile).” <em>Revista Controversia</em>, 2025.</>,
  <>Karimi, Leila, et al. “Water-Energy Tradeoffs in Data Centers: A Case Study in Hot-Arid Climates.” <em>Resources, Conservation and Recycling</em>, 2022.</>,
  <>Heikkinen, Anna. “La Fiebre De La IA Y Los Centros De Datos Abre Un Nuevo Frente Por El Agua En Chile.” <em>El Salto</em>, 2026.</>,
  <>Modrego, Félix, et al. “Foreign Direct Investment Elasticities of Output, Labor, and Wages in Chile: A Simultaneous Equations Approach.” <em>Economies</em>, 2022.</>,
  <>Reyes, Paulina. “¿Potencia Tecnológica O Nueva Presión Ambiental? El Debate Detrás Del Auge De Los Data Centers En Chile.” <em>La Tercera</em>, 2026.</>,
  <>Tironi, Martin, and Camila Albornoz. “Divergent Futures in a Damaged Territory: The Rise of Data Centers and Water Conflicts in Santiago De Chile.” <em>Journal of Urban Technology</em>, 2025.</>,
  <>Valente, Jonas C. L., and Rafael Grohmann. “Critical Data Studies With Latin America: Theorizing Beyond Data Colonialism.” <em>Big Data & Society</em>, 2024.</>
];

function Cite({children}:{children:React.ReactNode}) { return <p className="cite">{children}</p> }
function List({items}:{items:readonly string[]}) { return <ul>{items.map(x=><li key={x}>{x}</li>)}</ul> }
function DataCenter({active=false}:{active?:boolean}) { return <div className={`data-center ${active?'lit':''}`} aria-hidden="true"><div className="roof"/><div className="rack"/><div className="rack"/><div className="rack"/><i/><i/><i/></div> }
function People(){ return <div className="people" aria-hidden="true"><i/><i/><i/><i/></div> }

export default function Home() {
  const [lang,setLang]=useState<Lang>('es');
  const [cloudOpen,setCloudOpen]=useState(false);
  const [bar,setBar]=useState(0);
  const [fdiStep,setFdiStep]=useState(1);
  const [activated,setActivated]=useState(false);
  const [perspective,setPerspective]=useState<Perspective>('company');
  const [seen,setSeen]=useState<Perspective[]>(['company']);
  const [cards,setCards]=useState<number[]>([]);
  const [sourcesOpen,setSourcesOpen]=useState(false);
  const c=t[lang];

  useEffect(()=>{ document.documentElement.lang=lang; },[lang]);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});
    document.querySelectorAll('.reveal-on-scroll').forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);
  const choosePerspective=(p:Perspective)=>{setPerspective(p);setSeen(v=>v.includes(p)?v:[...v,p])};
  const toggleCard=(i:number)=>setCards(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i]);
  const compound=(base:number)=>((1+base/100)**fdiStep-1)*100;
  const chart=[{label:c.output,value:compound(.054)},{label:c.unskilled,value:compound(.039)},{label:c.skilled,value:compound(.049)}];
  const chartMax=Math.max(...chart.map(d=>d.value));
  const perspectives={
    company:{title:c.company,a:c.benefits,b:c.responsibilities,one:c.companyBenefits,two:c.companyCosts,quote:c.companyQuote,cite:'Reyes (2026); Heikkinen (2026); Diaz Bejarano & Valdivia (2025).'},
    state:{title:c.state,a:c.benefits,b:c.stateResp,one:c.stateBenefits,two:c.stateCosts,quote:c.stateQuote,cite:'Reyes (2026); Modrego et al. (2022); Tironi & Albornoz (2025).'},
    community:{title:c.community,a:c.possible,b:c.costs,one:c.communityBenefits,two:c.communityCosts,quote:c.communityQuote,cite:'Heikkinen (2026); García Domínguez (2025); Tironi & Albornoz (2025).'}
  };
  const p=perspectives[perspective];
  const cardTitles=[c.globalization,c.dependency];

  return <main>
    <nav className="topbar" aria-label={lang==='es'?'Idioma':'Language'}>
      <a className="brand-mark" href="#la-nube" aria-label={c.title}>EPI</a>
      <div className="lang-toggle" role="group" aria-label={lang==='es'?'Cambiar idioma':'Switch language'}>
        <button className={lang==='es'?'active':''} onClick={()=>setLang('es')} aria-pressed={lang==='es'}>ES</button><span>/</span>
        <button className={lang==='en'?'active':''} onClick={()=>setLang('en')} aria-pressed={lang==='en'}>EN</button>
      </div>
    </nav>

    <section className={`hero ${cloudOpen?'is-open':''}`} id="la-nube">
      <div className="paper-grain" aria-hidden="true"/><div className="cloud cloud-a" aria-hidden="true"><i/><i/><i/><i/></div><div className="cloud cloud-b" aria-hidden="true"><i/><i/><i/></div><div className="cloud cloud-c" aria-hidden="true"><i/><i/><i/></div>
      <div className="hero-copy"><h1>{c.title}</h1><h2>{c.subtitle}</h2><p className="byline">{c.author}</p><button className="paper-button yellow" onClick={()=>setCloudOpen(true)}>{c.discover}</button></div>
      <div className="reveal-stage" aria-live="polite" aria-hidden={!cloudOpen}><div className="flow-card"><DataCenter active/><div className="chile-strip"/><p>{c.chain}</p></div><a className="next-arrow" href="#por-que-chile" aria-label={c.why}>↓</a></div>
    </section>
    {cloudOpen&&<div className="question-ribbon"><p>{c.question}</p></div>}

    <section className="chapter why reveal-on-scroll" id="por-que-chile">
      <div className="section-head"><h2>{c.why}</h2><p className="lead">{c.whyLead}</p><Cite>Reyes (2026); Modrego et al. (2022).</Cite></div>
      <div className="chile-scene" aria-hidden="true"><div className="andes"/><div className="city"/><div className="sun"/><People/></div>
      <div className="paper-panel chart-panel">
        <div className="chart-copy"><h3>{c.chartTitle}</h3><p>{c.chartLead}</p><Cite>Modrego et al. (2022).</Cite><div className="chart-controls"><span>{c.fdiIncrease}: <strong>{fdiStep}%</strong></span><button onClick={()=>setFdiStep(n=>Math.min(10,n+1))} disabled={fdiStep===10}>{c.moreFdi}</button>{fdiStep>1&&<button className="reset-chart" onClick={()=>setFdiStep(1)}>{c.reset}</button>}</div></div>
        <div className="paper-chart" role="img" aria-label={c.chartTitle}>
          {chart.map((d,i)=><button key={d.label} className={bar===i?'selected':''} onClick={()=>setBar(i)} aria-pressed={bar===i}>
            <span className="bar-value">+{d.value.toFixed(3)}%</span><span className="bar-track"><span className="bar" style={{height:`${d.value/chartMax*100}%`}}/></span><span className="bar-label">{d.label}</span>
          </button>)}
        </div>
        <div className="chart-selection" aria-live="polite">{chart[bar].label} <strong>+{chart[bar].value.toFixed(3)}%</strong></div>
      </div>
      <p className="pullquote"><strong>{c.uneven}</strong> {c.unevenMore}</p>
    </section>

    <section className="chapter physical reveal-on-scroll" id="costo-fisico">
      <div className="land-flap" aria-hidden="true"><span/><span/><span/></div>
      <div className="section-head light"><h2>{c.other}</h2><p className="lead">{c.physicalLead}</p><Cite>Karimi et al. (2022); García Domínguez (2025); Diaz Bejarano & Valdivia (2025).</Cite></div>
      <div className={`systems-scene ${activated?'active':''}`}>
        <div className="system-art"><DataCenter active={activated}/><div className="heat-waves" aria-hidden="true"><i/><i/><i/></div><div className="cooling" aria-hidden="true">✳</div><div className="water-drop" aria-hidden="true"/><div className="bolt" aria-hidden="true">ϟ</div></div>
        <div className="causal-labels"><span>{c.servers}</span><b>→</b><span>{c.heat}</span><b>→</b><span>{c.cooling}</span><b>→</b><span>{c.waterEnergy}</span></div>
        <button className="paper-button yellow" onClick={()=>setActivated(v=>!v)} aria-pressed={activated}>{c.activate}</button>
      </div>
      <div className="physical-notes">
        <div className="paper-note"><p><strong>{c.notAll}</strong> {c.tradeoff}</p><Cite>Karimi et al. (2022).</Cite></div>
        <div className="paper-note aqua"><h3>{c.context}</h3><p>{c.chileContext}</p><Cite>Heikkinen (2026); García Domínguez (2025); Tironi & Albornoz (2025).</Cite></div>
      </div>
    </section>

    <section className="chapter perspectives reveal-on-scroll" id="perspectiva">
      <div className="section-head centered"><h2>{c.three}</h2><p className="lead">{c.threeLead}</p></div>
      <div className="perspective-tabs" role="tablist">
        {(['company','state','community'] as Perspective[]).map(key=><button key={key} role="tab" aria-selected={perspective===key} onClick={()=>choosePerspective(key)}>{perspectives[key].title}</button>)}
      </div>
      <div className={`perspective-world view-${perspective}`}>
        <div className="world-sky"><div className="paper-cloud"/><div className="paper-cloud small"/></div>
        <div className="layer company-layer"><DataCenter active/><div className="server-stack"/></div>
        <div className="layer state-layer"><div className="chile-flag"><i>★</i></div><div className="state-building"><div className="state-roof"/><div className="state-columns"><i/><i/><i/><i/><i/></div></div><div className="chile-map-card"><div className="chile-shape"/></div><div className="regulation"><span>§</span></div></div>
        <div className="layer community-layer"><div className="houses"><i/><i/><i/></div><People/><div className="wetland"><i/><i/><i/></div></div>
      </div>
      <article className="perspective-copy" role="tabpanel" aria-live="polite">
        <div><p className="mini-label">{p.title}</p><h3>{p.a}</h3><List items={p.one}/></div>
        <div><h3>{p.b}</h3><List items={p.two}/></div>
        <blockquote>{p.quote}</blockquote><Cite>{p.cite}</Cite>
      </article>
      {seen.length===3&&<p className="perspective-reveal">{c.perspectiveEnd}</p>}
    </section>

    <section className="chapter history reveal-on-scroll" id="historia">
      <div className="section-head centered"><h2>{c.historyTitle}</h2><p className="tap-label">↘ {c.tap}</p></div>
      <div className="string-board">
        <div className="history-cards">
          {cardTitles.map((title,i)=><div className={`history-card-wrap thread-${i+1}`} key={title}><span className="thread" aria-hidden="true"/><button className={cards.includes(i)?'open':''} onClick={()=>toggleCard(i)} aria-expanded={cards.includes(i)}>
            <span className="pin"/><strong>{title}</strong><span className="card-plus">{cards.includes(i)?'−':'+'}</span>{cards.includes(i)&&<p>{c.cardTexts[i]}</p>}{i===1&&cards.includes(i)&&<Cite>Valente & Grohmann (2024).</Cite>}
          </button></div>)}
        </div>
        {cards.length===2&&<div className="shared-idea" aria-live="polite"><h3>{c.shared}</h3><p>{c.sharedText}</p></div>}
      </div>
    </section>

    <section className="chapter finale reveal-on-scroll" id="precio">
      <div className="transparent-cloud" aria-hidden="true"><div className="final-chain"><span>{c.cloudFinal}</span><b>→</b><span>{c.servers}</span><b>→</b><span>{c.waterEnergy}</span><b>→</b><span>CHILE</span><b>→</b><span>{c.people}</span></div></div>
      <div className="section-head centered light"><h2>{c.finalTitle}</h2></div>
      <div className="final-columns">
        <article><h3>{c.company}</h3><strong>{c.receives}</strong><List items={c.finalCompany}/></article>
        <article><h3>{c.state}</h3><strong>{c.receivesState}</strong><List items={c.finalState}/><strong>{c.also}</strong><List items={c.finalStateCost}/></article>
        <article><h3>{c.community}</h3><strong>{c.mayReceive}</strong><List items={c.finalCommunity}/><strong>{c.face}</strong><List items={c.finalCommunityCost}/></article>
      </div>
      <blockquote className="conclusion">{c.conclusion}</blockquote>
      <p className="final-line">{c.finalLine}</p>
    </section>

    <footer>
      <button className="sources-toggle" onClick={()=>setSourcesOpen(v=>!v)} aria-expanded={sourcesOpen}><span>{c.sources}</span>{sourcesOpen?c.close:c.expand} <b>{sourcesOpen?'−':'+'}</b></button>
      {sourcesOpen&&<ol className="sources-list">{sources.map((s,i)=><li key={i}>{s}{(i===3||i===5)&&<> <strong>{c.primary}</strong></>}</li>)}</ol>}
      <p className="footer-title">{c.title}</p>
    </footer>
  </main>
}
