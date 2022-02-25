import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function NoteCard({ item }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://findstack.com/wp-content/uploads/2021/03/The-Ultimate-List-of-E-Learning-Statistics-1-800x450.jpg"
        />
        <CardContent>
          <Fragment>
            <Link href={"/details/" + item.id}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
            </Link>
          </Fragment>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link href={"/details/" + item.id}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
