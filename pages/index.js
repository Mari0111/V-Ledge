import React, {useEffect, useState} from "react";
import NoteCard from "../components/NoteCard";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import {mainServices} from "../services";


export default function home(props) {
  const [data, setData] = useState([])
  console.warn("props", props);
  useEffect(() => {
    mainServices.courses().then(function (response) {
      // handle success
      console.log("courses response",response);
      setData(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    mainServices.courseDetails("Bk4j9xWN5bsZs3ESWBD3").then(function (response) {
      // handle success
      console.log("lesson1 response",response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    console.log("-----");
  },[]);

  return (
    
    <div>
      {/* <h1>Online classes</h1> */}
      <Grid container paddingBottom={10}>
      <Image src="/elearning1.jpg" width="1519.2" height="500" />
      </Grid>
      <div>
        <Grid container px={35} spacing={4}>
          {data.map((elem, index) => (
            <Grid 
              item
              xs={4}
              display={"flex"}
              justifyContent={"center"}
              key={data.indexOf(elem)}
            >
              <NoteCard item={elem} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
