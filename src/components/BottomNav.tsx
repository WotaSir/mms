import { Building2, Compass, GraduationCap, House, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const items = [{label:'Home',path:'/',icon:House},{label:'Growth',path:'/growth',icon:Building2},{label:'Training',path:'/training',icon:GraduationCap},{label:'DMC',path:'/dmc',icon:Compass},{label:'Talk',path:'/contact',icon:MessageCircle}];
export default function BottomNav(){return <nav className="bottom-nav">{items.map(({label,path,icon:Icon})=><NavLink key={path} to={path} end={path==='/' } className={({isActive})=>isActive?'active':''}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>}
