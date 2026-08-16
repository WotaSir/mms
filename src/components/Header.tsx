import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Compass, GraduationCap, House, Info, Mail, Menu, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const nav = [
  { label: 'Home', path: '/', icon: House },
  { label: 'Growth', path: '/growth', icon: BriefcaseBusiness, dropdown: true },
  { label: 'Specialities', path: '/specialities', icon: Sparkles, dropdown: true },
  { label: 'Training', path: '/training', icon: GraduationCap },
  { label: 'DMC', path: '/dmc', icon: Compass },
  { label: 'About', path: '/about', icon: Info },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn(); window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link to="/" className="brand"><img className="brand-logo brand-logo-primary" src="/images/logo1.png" alt="Market Magnet Solutions" /><img className="brand-logo brand-logo-scrolled" src="/images/logo1.png" alt="" aria-hidden="true" /></Link>
      <nav className="desktop-nav">
        {nav.map(item => <div className="nav-wrap" key={item.path}>
          {item.dropdown ? (
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${open === item.label ? 'menu-open' : ''}`}
              aria-expanded={open === item.label}
              aria-haspopup="menu"
              onClick={() => setOpen(open === item.label ? null : item.label)}
            >
              {item.icon && <item.icon size={15} />}{item.label}<ChevronDown className={open === item.label ? 'chevron-open' : ''} size={14} />
            </button>
          ) : (
            <NavLink to={item.path} end={item.path === '/'} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(null)}>
              {item.icon && <item.icon size={15} />}{item.label}
            </NavLink>
          )}
          {item.dropdown && open === item.label && <motion.div role="menu" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="mega-menu">
            <div className="mega-menu-heading">{item.label === 'Growth' ? 'Growth capabilities' : 'Specialities'}</div>
            {item.label === 'Growth' ? <><Link role="menuitem" to="/growth#public-relations" onClick={() => setOpen(null)}>Public Relations<span>Be seen for the right reasons.</span></Link><Link role="menuitem" to="/growth#branding" onClick={() => setOpen(null)}>Branding<span>Become remembered.</span></Link><Link role="menuitem" to="/growth#marketing" onClick={() => setOpen(null)}>Marketing<span>Create demand.</span></Link><Link role="menuitem" to="/growth#sales" onClick={() => setOpen(null)}>Sales<span>Turn opportunity into action.</span></Link><Link role="menuitem" to="/growth#revenue" onClick={() => setOpen(null)}>Revenue Generation<span>Turn growth into business.</span></Link></> : <><Link role="menuitem" to="/specialities#media" onClick={() => setOpen(null)}>Media Presence<span>Visibility beyond campaigns.</span></Link><Link role="menuitem" to="/specialities#photography" onClick={() => setOpen(null)}>Hotel Photography<span>Make the experience visible.</span></Link><Link role="menuitem" to="/specialities#manpower" onClick={() => setOpen(null)}>Manpower<span>People behind performance.</span></Link><Link role="menuitem" to="/specialities#digital" onClick={() => setOpen(null)}>Digital Ecosystem<span>Scale the growth plan digitally.</span></Link></>}
          </motion.div>}
        </div>)}
      </nav>
      <Link className="header-cta" to="/contact">Let's talk <ArrowUpRight size={17}/></Link>
      <button className="mobile-trigger" onClick={() => setMobile(true)} aria-label="Open navigation"><Menu /></button>
    </header>
    <AnimatePresence>{mobile && <motion.div className="mobile-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div className="mobile-menu" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}}>
        <div className="mobile-menu-head"><span>MARKET MAGNET</span><button onClick={() => setMobile(false)}><X/></button></div>
        <div className="mobile-menu-links">{nav.map(item => <Link key={item.path} to={item.path} onClick={() => setMobile(false)}>{item.label}<ArrowUpRight/></Link>)}</div>
        <Link className="mobile-talk" to="/contact" onClick={() => setMobile(false)}>Let's talk <ArrowUpRight/></Link>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </>;
}
