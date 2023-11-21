
import {Button, Container, FormControlLabel, Radio, RadioGroup, Typography, FormLabel, FormControl} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {TextField} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";



export default function Create() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');

const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
        setTitleError(true);
    }

    if (details === '') {
        setDetailsError(true);
    }

    if (title && details) {
        fetch('http://localhost:8800/notes', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({title, details, category})
        }).then(() => navigate('/'))
        }
    }



  return (
    <Container>
        <Typography
            style={{color: 'grey', marginTop: '1rem'}}
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Create a new note
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
           <TextField
           onChange={(e) => setTitle(e.target.value)}
           style={{marginTop: 40, marginBottom: 20, display: 'block'}}
           label='Note Title'
           variant='outlined'
           color='secondary'
           required
           fullWidth
           error={titleError}
           />

            <TextField
                onChange={(e) => setDetails(e.target.value)}
                style={{marginTop: 40, marginBottom: 20, display: 'block'}}
                label='Note Title'
                variant='outlined'
                color='secondary'
                multiline
                rows={4}
                required
                fullWidth
                error={detailsError}
            />
            <FormControl> 
                <FormLabel>Note category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                   <FormControlLabel  value="work" control={<Radio/>} label="work" />
                   <FormControlLabel  value="todos" control={<Radio/>} label="todos" />
                   <FormControlLabel  value="reminders" control={<Radio/>} label="reminders" />
                </RadioGroup>
            </FormControl>

            <Button
                style={{
                    padding: '2rem',
                    marginTop: '2rem',
                }}
                onClick={() => console.log('You clicked me')}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon/>}
            >
                Submit
            </Button>

        </form>

    </Container>
  )
}
