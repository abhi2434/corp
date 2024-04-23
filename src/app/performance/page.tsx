import performanceImg from '../../public/performance.jpg';
import Hero from '@/components/hero';

export default function Performance() {
  return (
   <Hero imgData={performanceImg} imgAlt='machine fire' title='We serve high performance applications'/>
  );
}
