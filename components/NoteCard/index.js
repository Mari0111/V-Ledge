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
          image={item.img}
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
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={"/details/" + item.id}>
            <Button size="small" onClick={() => {}}>
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
