import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import data from './data/portalData.json';
import './styles.css';

type Traffic = 'Grün' | 'Gelb' | 'Rot';
type Section = { id: string; label: string };
const sections: Section[] = [
  ['portfolio','Portfolio'],['akte','Projektakte'],['rollen','Rollenmatrix'],['phasen','Phasen'],['plan','Planprüfung'],['bvb','BVB-Freigabe'],['termine','Termine'],['verschiebung','Terminverschiebung'],['risiken','Risiken'],['budget','Budget'],['stunden','Stunden'],['dokumente','Dokumente'],['entscheidungen','Entscheidungen'],['wissen','Wissen']
].map(([id,label])=>({id,label}));

const money = (value: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
function Ampel({value}:{value: Traffic}) { return <span className={`ampel ${value.toLowerCase()}`}>{value}</span>; }
function Card({title, value, hint}:{title:string; value:string|number; hint:string}) { return <article className="card"><strong>{value}</strong><span>{title}</span><small>{hint}</small></article>; }
function Table({columns, rows}:{columns:string[]; rows:(React.ReactNode[])[]}) { return <div className="tableWrap"><table><thead><tr>{columns.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></div>; }

function App() {
  const [active, setActive] = useState('portfolio');
  const [projectId, setProjectId] = useState(data.projects[0].id);
  const [filters, setFilters] = useState({phase:'Alle', status:'Alle', manager:'Alle', criticality:'Alle'});
  const project = data.projects.find(p => p.id === projectId) ?? data.projects[0];
  const filtered = useMemo(() => data.projects.filter(p =>
    (filters.phase === 'Alle' || p.phase === filters.phase) &&
    (filters.status === 'Alle' || p.status === filters.status) &&
    (filters.manager === 'Alle' || p.manager === filters.manager) &&
    (filters.criticality === 'Alle' || p.criticality === filters.criticality)
  ), [filters]);
  const option = (name:keyof typeof filters, values:string[]) => <label>{name}<select value={filters[name]} onChange={e=>setFilters({...filters,[name]:e.target.value})}>{['Alle',...values].map(v=><option key={v}>{v}</option>)}</select></label>;

  return <>
    <header><div><p className="eyebrow">Klickbarer Fachprototyp · lokale JSON-Beispieldaten</p><h1>Zentrales Projektportal</h1></div><select value={projectId} onChange={e=>setProjectId(e.target.value)}>{data.projects.map(p=><option key={p.id} value={p.id}>{p.id} · {p.title}</option>)}</select></header>
    <nav>{sections.map(s=><button className={active===s.id?'active':''} onClick={()=>setActive(s.id)} key={s.id}>{s.label}</button>)}</nav>
    <main>
      {active==='portfolio' && <section><h2>Portfolio-Startseite</h2><div className="filters">{option('phase',[...new Set(data.projects.map(p=>p.phase))])}{option('status',['Grün','Gelb','Rot'])}{option('manager',[...new Set(data.projects.map(p=>p.manager))])}{option('criticality',['Hoch','Mittel','Niedrig'])}</div><div className="cards"><Card title="Rote Projekte" value={data.projects.filter(p=>p.status==='Rot').length} hint="Sofortige PMO-Sichtung"/><Card title="Überfällige Prüfungen" value={data.projects.reduce((s,p)=>s+p.overdueChecks,0)} hint="Planprüfung/BVB"/><Card title="Offene BVB-Auflagen" value={data.projects.reduce((s,p)=>s+p.openApprovals,0)} hint="Blockaden prüfen"/><Card title="Kritische Terminverschiebungen" value={data.projects.reduce((s,p)=>s+p.criticalShifts,0)} hint="Genehmigungspflichtig"/></div><Table columns={['Projekt','Phase','Manager','Kritikalität','Gesamt','Termin','Budget','Stunden','Risiko']} rows={filtered.map(p=>[<button className="link" onClick={()=>{setProjectId(p.id);setActive('akte')}}>{p.id} · {p.title}</button>,p.phase,p.manager,p.criticality,<Ampel value={p.traffic.overall as Traffic}/>,<Ampel value={p.traffic.schedule as Traffic}/>,<Ampel value={p.traffic.budget as Traffic}/>,<Ampel value={p.traffic.hours as Traffic}/>,<Ampel value={p.traffic.risk as Traffic}/>])}/></section>}
      {active==='akte' && <section><h2>Projektakte</h2><div className="grid"><Card title="Aktueller Status" value={project.status} hint={project.traffic.overall}/><Card title="Aktuelle Phase" value={project.phase} hint="Workflowstand"/><Card title="Inbetriebnahme" value={project.commissioningCurrent} hint={`Ziel: ${project.commissioningTarget}`}/></div><Table columns={['Stammdatum','Wert']} rows={Object.entries({Projekt:project.id,Titel:project.title,Projektart:project.type,Standort:project.site,Auftraggeber:project.client,Projektmanager:project.manager}).map(([k,v])=>[k,v])}/><h3>Top-Risiken, Aufgaben, Budget, Stunden, Dokumente, Entscheidungen</h3><div className="cards"><Card title="Top-Risiken" value={data.risks.length} hint={data.risks[0].title}/><Card title="Offene Aufgaben" value="5" hint="BVB-Auflage, Nachweise, Testfenster"/><Card title="Budget Forecast" value={money(data.budget.reduce((s,b)=>s+b.forecast,0))} hint="lokale Beispieldaten"/><Card title="Stunden Forecast" value={`${data.hours.reduce((s,h)=>s+h.forecast,0)} h`} hint="Überlastung sichtbar"/><Card title="Dokumentstatus" value="1 offen" hint="Pflichtdokument BVB"/><Card title="Letzte Entscheidung" value={data.decisions[0].decision} hint={data.decisions[0].title}/></div></section>}
      {active==='rollen' && <section><h2>Rollenmatrix</h2><Table columns={['Person','Rolle','RACI','Zeitraum','Stellvertretung','Zugriffsstufe']} rows={data.roles.map(r=>[r.person,r.role,r.raci,r.period,r.delegate,r.access])}/></section>}
      {active==='phasen' && <section><h2>Phasenübersicht</h2><Table columns={['Phase','Status','Pflichtfelder vollständig','Pflichtdokumente vollständig','Blockadegrund']} rows={data.phases.map(p=>[p.phase,p.status,p.fields?'Ja':'Nein',p.docs?'Ja':'Nein',p.blocker])}/></section>}
      {active==='plan' && <section><h2>Planprüfung</h2><Table columns={['Prüfgegenstand','Prüffrist','Prüfstatus','Offene Mängel','Prüfergebnis']} rows={[[data.planReview.subject,data.planReview.deadline,data.planReview.status,data.planReview.openDefects,data.planReview.result]]}/><h3>Mängelliste</h3><Table columns={['Mangel','Beschreibung','Verantwortlich','Fällig','Status']} rows={data.planReview.defects.map(d=>[d.id,d.title,d.owner,d.due,d.status])}/></section>}
      {active==='bvb' && <section><h2>BVB-Freigabe</h2><Table columns={['Freigabegegenstand','Freigabestatus','Auflagen','Freigabedatum','Entscheidung','Freigabedokument']} rows={[[data.bvb.subject,data.bvb.status,data.bvb.conditions.join('; '),data.bvb.date,data.bvb.decision,data.bvb.document]]}/></section>}
      {active==='termine' && <section><h2>Terminübersicht</h2><Table columns={['Meilenstein','Ursprüngliches Datum','Aktuelles Datum','Ist-Datum','Terminstatus','Kritisch']} rows={data.milestones.map(m=>[m.title,m.original,m.current,m.actual || 'offen',m.status,m.critical?'Ja':'Nein'])}/></section>}
      {active==='verschiebung' && <ShiftForm />}
      {active==='risiken' && <section><h2>Risikoübersicht</h2><Table columns={['Risikotitel','Wahrscheinlichkeit','Auswirkung','Risikowert','Maßnahme','Eigner','Status']} rows={data.risks.map(r=>[r.title,r.probability,r.impact,r.value,r.measure,r.owner,r.status])}/></section>}
      {active==='budget' && <section><h2>Budgetansicht</h2><Table columns={['Phase','Soll','Ist','Forecast','Gebunden','Restbudget','Abweichung','Status']} rows={data.budget.map(b=>[b.phase,money(b.planned),money(b.actual),money(b.forecast),money(b.committed),money(b.remaining),money(b.variance),b.status])}/></section>}
      {active==='stunden' && <section><h2>Stundenansicht</h2><Table columns={['Person','Rolle','Phase','Stundenbudget','Verbraucht','Forecast','Reststunden','Auslastung']} rows={data.hours.map(h=>[h.person,h.role,h.phase,h.budget,h.used,h.forecast,h.remaining,h.load])}/></section>}
      {active==='dokumente' && <section><h2>Dokumentenbereich</h2><Table columns={['Dokumenttyp','Phase','Status','Version','Verantwortlicher','Pflichtdokument','Link-Platzhalter']} rows={data.documents.map(d=>[d.type,d.phase,d.status,d.version,d.owner,d.mandatory?'Ja':'Nein',<a href={d.link}>Dokument öffnen</a>])}/></section>}
      {active==='entscheidungen' && <section><h2>Entscheidungslog</h2><Table columns={['Entscheidungstitel','Datum','Entscheider','Entscheidung','Begründung','Auswirkungen']} rows={data.decisions.map(d=>[d.title,d.date,d.decider,d.decision,d.reason,d.impact])}/></section>}
      {active==='wissen' && <section><h2>Wissensdatenbank</h2><div className="cards">{data.knowledge.map(k=><Card key={k.title} title={k.category} value={k.title} hint="Platzhalter für spätere Ablage" />)}</div></section>}
    </main>
  </>;
}
function ShiftForm(){const [status,setStatus]=useState('Entwurf'); return <section><h2>Terminverschiebungsformular</h2><div className="form">{['altes Datum','neues Datum','Grund','Ursache','Auswirkung auf Budget','Auswirkung auf Stunden','betroffene Rollen','betroffene Phasen','Genehmiger'].map((l,i)=><label key={l}>{l}<input defaultValue={['2026-11-30','2026-12-12','Zusätzliche Prüfpunkte und BVB-Auflage','Prüfrückfrage; BVB-Auflage','+24.000 EUR','+95 h','Planungsingenieur, BVB, Projektmanager','Planprüfung, BVB-Freigabe, Realisierung','Auftraggeber A'][i]} /></label>)}<label>Genehmigungsstatus<input value={status} readOnly /></label></div><div className="actions"><button onClick={()=>setStatus('Entwurf gespeichert')}>Entwurf speichern</button><button onClick={()=>setStatus('Eingereicht')}>Einreichen</button><button onClick={()=>setStatus('Genehmigt')}>Genehmigen</button><button onClick={()=>setStatus('Abgelehnt')}>Ablehnen</button></div></section>}
createRoot(document.getElementById('root')!).render(<App />);
