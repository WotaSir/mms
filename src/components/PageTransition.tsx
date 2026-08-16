import { motion } from 'framer-motion';
export default function PageTransition({children}:{children:React.ReactNode}){return <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.45,ease:[.22,1,.36,1]}}>{children}</motion.main>}
