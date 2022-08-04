import { Typography } from '@mui/material';

const Paragraph = (props) => {
    return (
        <Typography sx={{ 
            fontFamily: 'Comfortaa', 
            fontSize: 20, 
            color: '#09237D' 
        }}>
            {props.text}
        </Typography>
    );
}

export default Paragraph;
