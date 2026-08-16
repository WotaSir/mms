import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { agencyServices, partnershipServices } from '../data/site';

export default function AgencyPage() {
  return <div className="inner-page">
    <section className="page-hero agency-hero-rich">
      <div className="agency-hero-images" aria-hidden="true">
        {agencyServices.map((service) => <img key={service.number} src={service.image} alt="" />)}
      </div>
      <div className="agency-hero-shade" />
      <div className="content-wide page-hero-grid agency-hero-grid-rich">
        <div>
          <p className="eyebrow light">Agency</p>
          <h1>Strategy that<br /><em>creates movement.</em></h1>
          <p>From reputation and brand building to marketing, sales and revenue generation, we connect commercial thinking with market action so the business can move with intention.</p>
        </div>
        <div className="page-hero-stat"><span>01—05</span><strong>Five connected<br />growth levers</strong></div>
      </div>
    </section>

    <section className="section-space">
      <div className="content-wide">
        <div className="section-head">
          <div><p className="eyebrow">One system</p><h2>Five levers.<br /><em>One direction.</em></h2></div>
          <span className="head-note">Each capability addresses a different business problem. The value comes from how they work together.</span>
        </div>
        <div className="agency-lever-grid">
          {agencyServices.map((service, index) => <motion.article key={service.number} className="agency-lever-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
            <img src={service.image} alt={service.title} />
            <div className="agency-lever-overlay"><span>{service.number}</span><div><p>{service.label}</p><h3>{service.title}</h3></div></div>
          </motion.article>)}
        </div>
      </div>
    </section>

    <section className="section-space agency-detail-band">
      <div className="content-wide agency-service-list">
        {agencyServices.map((service, index) => <motion.article key={service.number} className="agency-service" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
          <div className="agency-service-image"><img src={service.image} alt={service.title}/><span>{service.number}</span></div>
          <div className="agency-service-body"><p className="eyebrow">{service.label}</p><h3>{service.title}</h3><p>{service.description}</p><Link to="/contact">Discuss this capability <ArrowUpRight size={16}/></Link></div>
        </motion.article>)}
      </div>
    </section>

    <section className="dark-section agency-partnership">
      <div className="content-wide partner-grid">
        <div>
          <p className="eyebrow light">Strategic partnership</p>
          <h2>Market Magnet Solutions<br /><em>× Internet Moguls.</em></h2>
          <p>The partnership expands digital delivery across performance, technology, creative and revenue-focused activity—bringing specialist capability into one connected commercial conversation.</p>
        </div>
        <div className="chip-cloud">
          {partnershipServices.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="content-wide why-grid">
        <SectionReveal><p className="eyebrow">Why choose us</p><h2>Experience.<br />Perspective.<br /><em>Execution.</em></h2></SectionReveal>
        <div className="why-list">
          <div><strong>Expertise and experience</strong><p>More than two decades of industry experience across communications, marketing, sales and commercial growth.</p></div>
          <div><strong>Comprehensive service offering</strong><p>One connected system instead of fragmented service providers, allowing the strategy to remain aligned from visibility through conversion.</p></div>
          <div><strong>Strategic partnerships</strong><p>Specialist relationships extend what can be delivered across digital, creative, technology and performance.</p></div>
          <div><strong>Tailored solutions</strong><p>Each engagement is shaped around the client’s context, audience, business objective and practical constraints.</p></div>
          <div><strong>Proven track record</strong><p>Experience built through years of industry engagement, relationships and real-world execution.</p></div>
        </div>
      </div>
    </section>

    <section className="cta-section section-space"><div className="content-wide"><p className="eyebrow light">Agency enquiries</p><h2>What needs<br /><em>to move?</em></h2><p className="cta-copy">Bring us the business challenge. We will start with the outcome, then work backwards into the right mix of PR, brand, marketing, sales and revenue activity.</p><Link className="button orange" to="/contact">Start a conversation <ArrowUpRight size={16}/></Link></div></section>
  </div>;
}
