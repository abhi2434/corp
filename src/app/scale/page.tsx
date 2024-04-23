import scaleImage from '../../public/scale.jpg';
import Hero from '@/components/hero';

export default function Scale() {
  return (
   <Hero imgData={scaleImage} imgAlt='manufacturing hub' title='Scale your app to infinity'/>
  );
}
