import { Typography } from '@mui/material';

const TitleSection = (props) => {
    return (
        <Typography sx={{
            fontFamily: 'Comfortaa',
            fontSize: 40,
            color: '#EC7E31'
        }}>
            {props.text}
        </Typography>
    );
}

export default TitleSection;