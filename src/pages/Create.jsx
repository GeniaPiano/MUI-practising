
import {Button, Container, Typography} from "@mui/material";

export default function Create() {
  return (
    <Container>
        <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Create a new note
        </Typography>
        <Button
            onClick={() => console.log('You clicked me')}
            type="submit"
            color="secondary"
            variant="contained"
            //disableElevation
        >
            Submit
        </Button>

    </Container>
  )
}
