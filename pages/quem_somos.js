import TitleSection from '../src/components/TitleSection';
import Paragraph from '../src/components/Paragraph';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
  'gato1.png',
  'gato2.png',
  'gato3.png',
  'gato4.png'
]

export default function Home() {
  return (
    <>
      <Box
        className='section'
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Grid container>          
        <Grid item xs={3}>
            <img width="280" src="banner coletivo.png"/>
          </Grid>
        <Grid item xs={9}>
          <TitleSection text='Quem somos?'/>      
          <Paragraph text="O coletivo “Uma Casa para um Gato” é o serviço de adoção de animais de estimação do IFRN campus Natal/Central, ou seja, somos um coletivo de resgate, 
          castração e busca por adoções responsáveis para os felinos que atualmente “moram” no instituto. 
          Não temos abrigo, logo, prezamos pela boa alimentação, segurança e os devidos cuidados no ambiente mesmo."/>        
        </Grid>
        </Grid>
      </Box>

      <Box
        className='section'
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <TitleSection text='Propósito'/>      
        <Paragraph text="O principal objetivo do trabalho é garantir aos animais condições básicas de vida, como alimentação, segurança, castração entre outros. 
        Entendemos que os animais não falam mas também sentem frio, fome, sede e dor, então nos disponibilizamos para ser o principal porta-voz deles, lutando e garantindo uma vida digna e 
        sem maus-tratos."/>        

        {/*w=164&h=164&fit=crop&auto=format`*/}
        <ImageList cols={4} rowHeight={320}>
          {images.map((image) => (
            <ImageListItem key={image}>
              <img
                src={`${image}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}