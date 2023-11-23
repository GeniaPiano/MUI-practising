import React, {useEffect, useState} from 'react'
import {Container, Grid, Paper} from "@mui/material";
import NoteCard from "../components/NoteCard.jsx";

export default function Notes() {
    const [notes, setNotes] = useState([])
    const handleDelete = async (id) => {
        await fetch('http://localhost:8800/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes);
    }

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:8800/notes`);
                const data = await res.json();
                await setNotes(data)
            } catch (err) {
                console.log(err)
            }
        })();
    }, [])




    return (
        <Container>

            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} sm={6} md={3}>
                        <NoteCard note={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}
            </Grid>

        </Container>
    )
}
