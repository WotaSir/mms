import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import GrowthPage from './pages/GrowthPage';
import SpecialitiesPage from './pages/SpecialitiesPage';
import TrainingPage from './pages/TrainingPage';
import DmcPage from './pages/DmcPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShikhaKhannaPage from './pages/ShikhaKhannaPage';
function ScrollReset(){
  const location=useLocation();
  useEffect(()=>{
    window.history.scrollRestoration='manual';
    const headerOffset=96;
    const scrollToHash=()=>{
      if(!location.hash){
        window.scrollTo({top:0,left:0,behavior:'instant'});
        return;
      }
      const rawId=location.hash.slice(1);
      const id=decodeURIComponent(rawId);
      const target=document.getElementById(id);
      if(target){
        const top=Math.max(0,target.getBoundingClientRect().top+window.scrollY-headerOffset);
        window.scrollTo({top,left:0,behavior:'smooth'});
      }else{
        window.scrollTo({top:0,left:0,behavior:'instant'});
      }
    };
    window.scrollTo({top:0,left:0,behavior:'instant'});
    const frame=requestAnimationFrame(()=>requestAnimationFrame(scrollToHash));
    const timer=setTimeout(scrollToHash,180);
    return()=>{cancelAnimationFrame(frame);clearTimeout(timer)};
  },[location.pathname,location.search,location.hash]);
  return null;
}
function SmoothScroll(){useEffect(()=>{const lenis=new Lenis({duration:1.05,smoothWheel:true,syncTouch:true});let raf=0;const loop=(t:number)=>{lenis.raf(t);raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop);return()=>{cancelAnimationFrame(raf);lenis.destroy()}},[]);return null}
export default function App(){return <><ScrollReset/><SmoothScroll/><Header/><PageTransition><Routes><Route path="/" element={<HomePage/>}/><Route path="/growth" element={<GrowthPage/>}/><Route path="/agency" element={<Navigate to="/growth" replace/>}/><Route path="/specialities" element={<SpecialitiesPage/>}/><Route path="/training" element={<TrainingPage/>}/><Route path="/dmc" element={<DmcPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/about/shikha-khanna" element={<ShikhaKhannaPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></PageTransition><Footer/><BottomNav/></>}
