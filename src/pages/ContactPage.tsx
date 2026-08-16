import { ArrowUpRight, Check } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const options = ['Visibility','Brand','Marketing','Sales','Revenue','People','Destination','Something else'];

export default function ContactPage(){
  const [params] = useSearchParams();
  const initial = params.get('focus') || '';
  const [focus,setFocus] = useState(initial);
  const [sent,setSent] = useState(false);
  const selected = useMemo(() => focus || 'Nothing selected yet', [focus]);
  return <div className="contact-page">
    <section className="contact-hero"><div className="section-kicker">LET'S START THERE</div><h1>What's holding<br/><em>you back?</em></h1><p>Tell us what needs to move. We'll start with the problem.</p></section>
    <section className="contact-form-wrap">
      <div className="contact-step"><span>01</span><div><div className="section-kicker">YOUR FOCUS</div><h2>What are you trying to improve?</h2><div className="focus-options">{options.map(o=><button key={o} className={focus===o?'selected':''} onClick={()=>setFocus(o)}>{focus===o&&<Check size={16}/>} {o}</button>)}</div></div></div>
      <div className="contact-step"><span>02</span><div><div className="section-kicker">THE CONTEXT</div><h2>Tell us a little about the situation.</h2><textarea placeholder="What is happening in the business, and what would you like to change?"/></div></div>
      <div className="contact-step"><span>03</span><div><div className="section-kicker">YOUR DETAILS</div><h2>How should we reach you?</h2><div className="contact-grid"><input placeholder="First name"/><input placeholder="Last name"/><input placeholder="Email*" type="email"/><input placeholder="Phone*" type="tel"/></div><div className="selected-focus">Your focus: <b>{selected}</b></div><button className="button button-orange submit" onClick={()=>setSent(true)}>Send enquiry <ArrowUpRight/></button>{sent&&<p className="success">Thank you. Your enquiry is ready to be connected to the right conversation.</p>}</div></div>
    </section>
  </div>
}
