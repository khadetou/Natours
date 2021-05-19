import { makeStyles } from '@material-ui/core/styles';
import hero from '../img/hero.jpg'

//Varibles
const colors = {
    LGhex:"#7ed56f",
    LGrgba: 'rgba(126, 213, 111, 0.8)',
    MGhex: "#55c57a",
    MGrgba:'rgb(85, 197, 122)',
    DGhex: '#28b485',
    DGrgba: 'rgba(40, 180, 133,0.8)'
};
const {LGrgba, DGrgba} = colors;


export const useStyle = makeStyles({
    header:{
        height: '95vh',
        position: 'relative',
        backgroundImage: `linear-gradient(to right bottom,${LGrgba}, ${DGrgba}),url(${hero})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        clipPath:'polygon(0 0, 100% 0%, 100% 75vh, 0 100%)'
    },
    logoBox:{
        position: 'absolute',
        top: '40px',
        left: '40px'
    },
    logo:{
        height: '2.1875rem'
    },
    textBox:{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    primaryHeading:{
        color: '#fff',
        textTransform:'uppercase'
    },
    primaryMain:{
        display: 'block',
        fontSize: '3.75rem',
        fontWeight: '400',
        letterSpacing: '35px'
    },
    primarySub:{
        display: 'block',
        fontSize: '20px',
        fontWeight: '400',
        letterSpacing: '17px'
    }
});

