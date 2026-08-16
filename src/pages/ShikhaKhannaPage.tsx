import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Compass, HeartHandshake, Lightbulb, MapPin, Quote, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import MediaImage from '../components/MediaImage';
import SectionReveal from '../components/SectionReveal';

const sections = [
  { id: 'story', label: 'Our Story', icon: HeartHandshake },
  { id: 'shikha', label: 'Shikha Khanna', icon: BriefcaseBusiness },
  { id: 'raj', label: 'Raj Basu', icon: Compass },
  { id: 'journey', label: 'The Journey', icon: ArrowDownRight },
  { id: 'philosophy', label: 'Philosophy', icon: Lightbulb },
  { id: 'presence', label: 'Presence', icon: MapPin },
];

const journey = [
  { label: '21+', title: 'Years of industry experience', text: 'Experience spanning public relations, branding, marketing, sales and revenue-focused business thinking.' },
  { label: '01', title: 'One connected perspective', text: 'Bringing communication, brand, demand, conversion and commercial performance into the same conversation.' },
  { label: '2023', title: 'Market Magnet Solutions', text: 'Founded by Shikha Khanna as a strategic partner built around tailored business growth.' },
  { label: 'TODAY', title: 'Growth with a wider lens', text: 'Combining core business-growth capabilities with specialist services, training and destination expertise.' },
];

const philosophy = [
  { icon: HeartHandshake, title: 'Understand first', text: 'Start with the business, its context, its people and the problem that actually needs solving.' },
  { icon: Users, title: 'People matter', text: 'Strong relationships and collaborative thinking are part of sustainable business performance.' },
  { icon: Lightbulb, title: 'Connect the dots', text: 'PR, brand, marketing, sales and revenue work better when they are treated as a connected system.' },
  { icon: BriefcaseBusiness, title: 'Commercial thinking', text: 'Activity matters only when it contributes to stronger perception, demand, conversion or revenue.' },
];

export default function ShikhaKhannaPage() {
  return <div className="shikha-page">
    <section className="shikha-hero">
      <aside className="shikha-side-nav">
        <div className="shikha-side-label">THE PEOPLE BEHIND THE MAGNET</div>
        {sections.map(({ id, label, icon: Icon }, index) => <a href={`#${id}`} key={id} className={index === 1 ? 'current' : ''}><Icon size={17}/><span><b>{label}</b><small>{index === 1 ? 'Founder & Visionary' : id === 'raj' ? 'Advisory Board' : id === 'journey' ? 'Experience' : id === 'philosophy' ? 'How we work' : id === 'presence' ? 'Where we are' : 'Purpose & values'}</small></span></a>)}
      </aside>
      <div className="shikha-hero-image"><MediaImage priority src="/images/shikha-professional.jpg" alt="Professional portrait of Shikha Khanna"/></div>
      <div className="shikha-hero-overlay"/>
      <div className="shikha-hero-copy">
        <div className="section-kicker">FOUNDER & VISIONARY</div>
        <h1>Shikha<br/><em>Khanna.</em></h1>
        <div className="shikha-rule"/>
        <p className="shikha-experience">21+ Years of Experience.</p>
        <p>A career shaped by communication, commercial thinking and the belief that businesses grow faster when the right capabilities move together.</p>
        <a className="scroll-hint" href="#story"><ArrowDownRight/> Discover her story</a>
      </div>
    </section>

    <section id="story" className="shikha-story section-ivory">
      <SectionReveal><div className="section-kicker">OUR STORY</div><h2>Building a business around <em>what moves it forward.</em></h2><p>Market Magnet Solutions describes itself as more than a service provider: a strategic partner that understands a business's needs and tailors its capabilities around them. Shikha Khanna founded the company in 2023, bringing more than two decades of industry experience into that model.</p></SectionReveal>
    </section>

    <section id="shikha" className="shikha-profile section-green">
      <div className="shikha-profile-copy"><div className="section-kicker">SHIKHA KHANNA</div><h2>Experience that sees the <em>whole picture.</em></h2><p>Shikha's public professional positioning brings together five connected areas: public relations, branding, marketing, sales and revenue generation. The value is not simply having five services. It is being able to look at the gap between visibility, perception, demand, conversion and commercial performance as one business problem.</p><p>That perspective is the foundation of Market Magnet's approach: understand the challenge first, then assemble the right capability around it.</p><div className="shikha-stat"><strong>21+</strong><span>years of industry experience</span></div></div>
      <div className="shikha-profile-photo"><MediaImage src="/images/shikha-professional.jpg" alt="Shikha Khanna, founder of Market Magnet Solutions"/></div>
    </section>

    <section id="raj" className="shikha-raj">
      <div className="shikha-raj-copy section-dark"><div className="section-kicker">RAJ BASU · ADVISORY BOARD</div><h2>The destination side of the story has a <em>different kind of expertise.</em></h2><p>Raj Basu is presented on the company's public website as an advisory board member and as a tourism leader associated with the development of Northeast India's destination profile. His experience adds a strong destination, tourism and regional perspective to the DMC side of Market Magnet.</p><p>As you asked us to present it, Raj is Shikha Khanna's brother as well. That relationship gives the story a personal layer, while his tourism expertise complements Shikha's business-growth focus.</p><Link className="button button-orange" to="/dmc">Explore the DMC side <ArrowUpRight/></Link></div>
      <div className="shikha-raj-photo"><MediaImage src="/images/raj-basu.webp" alt="Raj Basu"/></div>
    </section>

    <section id="journey" className="shikha-journey section-ivory"><SectionReveal><div className="section-kicker">THE JOURNEY</div><h2>Turning experience into <em>impact.</em></h2></SectionReveal><div className="journey-line">{journey.map((item, index) => <article key={item.label}><span>{item.label}</span><div className="journey-dot"/><h3>{item.title}</h3><p>{item.text}</p>{index < journey.length - 1 && <div className="journey-connector"/>}</article>)}</div></section>

    <section id="philosophy" className="shikha-philosophy section-ivory"><SectionReveal><div className="section-kicker">LEADERSHIP PHILOSOPHY</div><h2>People. Purpose. Performance.<br/><em>That is how growth becomes sustainable.</em></h2></SectionReveal><div className="philosophy-grid">{philosophy.map(item => {const Icon=item.icon; return <article key={item.title}><Icon size={31}/><h3>{item.title}</h3><p>{item.text}</p></article>})}</div></section>

    <section id="presence" className="shikha-presence section-dark"><div><div className="section-kicker">PRESENCE</div><h2>Rooted in the region.<br/><em>Connected beyond it.</em></h2><p>Market Magnet's public presence spans Siliguri, New Delhi, Mumbai, Pune, Kathmandu and Guwahati. The DMC capability extends into Sikkim, Nepal, Northeast India and Bhutan.</p><Link className="text-link" to="/about#presence">See all locations <ArrowUpRight/></Link></div><div className="presence-mini-grid"><div><span>01</span><b>Siliguri</b></div><div><span>02</span><b>New Delhi</b></div><div><span>03</span><b>Mumbai</b></div><div><span>04</span><b>Pune</b></div><div><span>05</span><b>Kathmandu</b></div><div><span>06</span><b>Guwahati</b></div></div></section>

    <section className="shikha-quote"><Quote size={42}/><blockquote>“I believe in building not just brands or businesses, but belief, confidence and long-term value.”</blockquote><span>— Shikha Khanna</span><Link className="button button-orange" to="/contact">Let's build what's next <ArrowUpRight/></Link></section>
  </div>;
}
