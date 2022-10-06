import TitleSection from '../src/components/TitleSection';
import Paragraph from '../src/components/Paragraph';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
  'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg',
  'https://super.abril.com.br/wp-content/uploads/2016/11/gatinhos-filhotes-reconhecem-a-voz-da-prc3b3pria-mc3a3e.jpg?quality=70&strip=all',
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRUXFRUXFxgVFRcWFRYSFxUWFhgXGBUYHSggGBolHRUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mICU1LTUtKystLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADYQAAIBAgMGAwcDAwUAAAAAAAABAgMRBCExBRJBUWGBcZHwBhMiobHB0TJC8RSy4RUjUnKC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJBEBAAICAgICAgMBAAAAAAAAAAECAxESIQQxIkEyYRNRcVL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAR8ViFBdWJnREbSAUeH2nLeu9OX3LtO5Gton0lasx7egAkiAAAAAAAAAAAAAAAAAAAAAAAAAGNSdldgZAgraUL55dSZCaehyJiXZiYZAA64AAAAAABjOdlcDGtVUVdlDjsRfNv1+DPaGMve+iKHG45t20MuTK14sMpXvux02ya29TXTI4dVndHW+zs8pLuRwX3ZLyKartcAA2MQAAAAAAAAAAAAAAAAAAAAAAAAQ9py+AmEDbK/23ovEjf8ZSp+UKTe8LEmjjNzoUvvbNo1xxVnmYoyt84duywm0Yz45kxM41VXL403lxvb5MmYPbDWT/JdXPr8me2D/l04KN7fjF7sk72v43NNTbzd0sra+HNEp8jHH2hGC8/ToXJLVmueJitZLzONrbVlJu763IctpNXT118Y8XYonzP6hfHhz9y7evtKEU3vK3iVVfae+lJaO9vBHL4XFqo5RWavl2J29klfL8lU+Va/+Jx41af69jVlK6Vld3ve3NFXjEk771+115p2JGNq7ua/TkunHXpkU2N2zv8Awp3S6JLtq0ulxPdV+OJ30scJK9szsfZ2WvVHD7KqJtR04s7nYskrW8C3x41Kry560vAAbnmgAAAAAAAAAAAAAAAAAAAAAAABHx1Peg0SDySOTG407E6nbg9oZMqZ4i7sdTtfBPeyy+5yG0Ibk78fWTPLyUmsvZwWi1VzgqkrWuvBLQ9VPNtZcbetCko7Xqv4KcUrcla60vlrnkWOFrT/AHK1136prkStMTCNqTEpUm5W42K3aanD/ci3dIs6bseVo3T8Cm1NxtyttSiU5KcFNWWTuv8Ate3zMYxTqbv/AChZdGsvuVNHFtKpRle+sOzTMqGL/Q287v8Ata8rori29JzXW232d+HeV9JMvKkuxz/s9Tct+a/5O/g3+LeRcKXxdVp42+33LMcdIZJ+TRtTDOpD3fB5vPT1+SuxGw/d05TXxNJZXSV+du9//Jdbt9M/p/Bi6cn8Odn5cy2OnIvMOawG8/hTtfjy5s772bpuEUrt6O7+xzWA2dONV7yW6tNc/M7DY0G2rlmKPkj5N4mrokegHoPLAAAAAAAAAAAAAAAAAAAAAAAAAABWbWi0m42vwvpfxPne1sNVbe/rbedvFrXjoj6fi4XRzWNw2+91pWz8UjF5Ne2/xMvFyvs4krxet7q9tePcto0G3fr59uBuwGxVTlKTz4J8bdXxJ/uLGfjLRkyRM7hAlAxqNrhl9SfLDXV/qYyoNxa4/J/gnFJU84c77Q7Ntu1orPeV+qeX3KaOHarWvreaXi2mv7vM7z3W9RUZLo78MyrxGDipqSWmRTfFqdwtpl3GpeezWBSpyT4tp9r/AHuZ7Po70pxad03fnq8iXh5NSsuK+xVbU2q6VSdOgoOq4upNzkoxjG9uOrbehox0+MKMl+5W39HxtdcunJJHvubdOiu/M4LA+0mKqU3XhXTtJxcHFZtSays9Mmzr6ixSimnBtxTu7rNrkdvXjHpGs8vtPqVbaq3bMs9jVM+ZzEMbXzjVS8UvuXXs7iPjtchiyfOEsmP4y6xHp4j09JgAAAAAAAAAAAAAAAAeA9AAAAAAAAAHkkVOKpJNluQdoRyuirNHx2sxT8lHWqZmt7Up6Xz8DVi/0yk3bwIuDwrg99q9/oebF7RPT0OFddtPtHtOtCMFSSW+91Skv05Ph2+aOcxTnHE0qSrYmUp03Kc917sZJ3vv/ptZ6KJ2WMrUa0HSqXXJ8Yvg7lX/AKPWfwRxUNy1rqC37eP+DXS1Jj+2W8X310y9kvaL3sqmHqyTqU91p2tvQeja4NcUWFaHB8OPEp6ns/SwcoypNuUpLfm85Tbed39i0q4neb65WIXvEzpdTHOolhhavx55ZNnH4XZOJqYypiIOElN2UZrgssn5+Z0m0aqhaV+ho2RXlGTtfdfa3NeuRyMnGdO2xRNZY0NjbsoyrKnThF7yp0lrO97tvtkWc9ob7ssuS1/g1VoOT/N2/wDJ5CjJZ2k+iyRXfJa06h2lKxCb/SqcF7x348iZ7OYeKm91Zc3qUUYVqk7vKPLp2Ow2Jhd1E8McrR16QyzxrPftcoAHosAAAAAAAAAAAAAAAAAAAAAAAAAAABrrQurGwHJjZDlsRs347t5edvMwxtakrRcs+FtS72jht5ZHPywai38Nzzr04TxiG+l+cbmUCrJSet14erGeHotaZfMsqWGi9YJdvsTqODjqK+PM9u2zxHSrq4Xes5PTTp4lJjqTw89Lrg3dq/bTvyOxlQinkkv/ADd5/wCSNtBxcWnG+XGy4dCc4Oimfv8AThsfVlJRW7vOUmkkrJNZvefA6TCYTdjG0oxdlfK/DOy5lPg3GnWm7Pdy3ZfqSf7orjyzOhwOJjUlZTu+S+H/AChipH2s8m0/XpMw+DVk83/2sn8jKtSt6ZJVor68SHWnd2zL5iIhiiZmWMdbWzL7A0rRKvAwzLuGhLFX7RyT9MgAXKgAAAAAAAAAAAAAAAAAAAAAAAAAADxs9NdWVkckRa9XOxDxFK5hia2dzbTnfiYrZOUzDZFJrG0Ntx/PBflkijiVx+ZnOyNE4QfL1oTpMwhaIlJVW/EjYnAqpk9OXPxPFQtoeylu6yLd79oevTGOzYL9qNqpQhnlcrq+1bcfIr8RtST4LXW9yM2rCWrT7XFeve92rEKW0acXup59Tna+Nbk01a5tpReuvdGe2XtdGONL6ntHO6y5rqdLs7Eb0U7nAVcS1a+V8nln6/B03s3icrO/2JYcvz0jlxfDbpgeRZ6bmMAAAAAAAAAAAAAAAAAAAAAAAAAAAj4qWTJBExssiN/SVfajxMsm+XmR8Fjrv0iW4a34lNjMFKF3HNv6Hi25VnlD1qcbRxl0CrJmqVJPTncosPjnHJ55ZvREqO1Von9zRXPWY7U2w2iek+e8la5Ax1J7uuZmsY3ojJ3ebLf5In0q4THtBeDs11XzPamDtnr0Jk1Joi1K7S1Qm8R7disyizowa0IWKpRS+F28LfgkTlndSz5N/S5tw2C3vil8yi08uoW1jj3KvwGDlJpt37NHW7Iik7WtlwZCtCCyaRswFVb17vvZfJE8VYpKGS03h11LQzI+EndEg9KHnyAA6AAAAAAAAAAAAAADw9AAAAAAAAAFdj3yLFlbi2VZvxWYvyVdahf4tbGqnK+pOmRp4fO69dzzZpqdw3xfcalAxOzFUfJG3/SoqNrG+M2vEk0ncspjpP12jfJePtBpYSK4N9zKpdNK2V/VyXVnbokVuIxmaUdXp67HZiKdIxM27SKtNM0Swcb559zyVaS/UsnxJdHNar19RGrE7qhVMDT4JZeaMKs8rWy4Wfpm2vQV7/z2I9Km23r66CY16h2J37lFnht93tl3/JPw0VG1mYTfJ3fK9mZQpO13dEYjUuzO4dVs6omlYmnPbErcOB0CZ6GO3KrDkrqz0A8LEHoAAAAAAAAAAAAAAAAAAAAAAAMZvIqMTO8sy0rvIpa8W27ambyJ6X4I7Y1KqWVzTLEG2GFvqblhY8kY4rklqm1IQKuITWn8GPvZZJLdRMqUlwSIVWjLOzt64E+NkeVTdlK60X25mawcUr/Mxw1NrN/x2N1S7td6O78CdaRrco2tPqGMUpQaaSV2vmVdanGD/W1ysWE5NpW/dfLh6zIlKjdtPJr5i1NlbaR96V7xk5Lr+GY1qk1+xtdNUWFKNlku1jbGpLhEj/H+0v5P0pVX3uD75Mk08S7WZOqdUvJP5kb+m9aEOEx9pcolI2biN2VzrKE7o4fBrdnnnZna4Od4rwNXjTPcM/kRHUpAANTMAAAAAAAAAAAAAAAAAAAAAAAA0YvQppw43PQZc/ctGH09lVsszynWi+B6DLznlpo4Rx2zbXA0VPMA1V9KJ9s4R16s1btm1wd+3A8BKYRhqlDdzWi4GNWN+1mu+QA0baa9aMXe7TXK+ZpqY3e4uwBRe0wvpWJeRmm+v1Nz0y19ZAHKlo0jUVZ3Ot2bNOKPQW4PavN6TgAa2UAAAAAAAAAAAAAAAB//2Q==',
  'https://noticias.buscavoluntaria.com.br/wp-content/uploads/2019/03/kitten-solid-white-cat-motherless-child.jpg'
]

export default function Home() {
  return (
    <>
      <Box
        className='section'
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TitleSection text='Quem somos?'/>      
            <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>        
          </Grid>
          <Grid item xs={6}>
            <img src="https://site.amigonaosecompra.com.br/wp-content/uploads/2012/11/gato-e-menina1.jpg"/>
          </Grid>
        </Grid>
      </Box>

      <Box
        className='section'
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <TitleSection text='Propósito'/>      
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>        

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