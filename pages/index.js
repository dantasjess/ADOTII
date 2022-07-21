import TitleSection from '../src/components/TitleSection';
import AppBar from '../src/components/AppBar';

export default function Home() {
  return (
    <section>
      <AppBar />
      <TitleSection text='Conheça nossos gatinhos'/>
    </section>
  );
}