import '../CSS/style.css'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ProfPic from '../images/ProfilePic.jpg'

export default function About() {
    return(
        <div id="about_section">
            <Typography variant="h4" style={{marginBottom: '20px'}}>
                About Me
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={3}>
                </Grid>
                <Grid item sm={6}>
                    <p id="intro">I am a software developer with a background in engineering and a passion for technology. Machine learning has become a great interest of mine lately, and I have created a simple animation of a neural network above to show my appreciation!<br/><br/>
                    I am always excited to learn something new and enjoy using technology to solve complex problems. If you want to reach out to me, add me on <a href="https://www.linkedin.com/in/youngkwon313" style={{textDecoration: 'none', color: '#01579b'}}>LinkedIn</a>  or contact me through my email: youngkwon313@gmail.com.
                    </p>
                </Grid>
                <Grid item sm={3}>
                    <img src={ProfPic} id="profile" />
                </Grid>
            </Grid>
            
            
            
        </div>
    );
}