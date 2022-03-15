import React, {useEffect, useState} from "react";
import NoteCard from "../components/NoteCard";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import {mainServices} from "../services";


export default function home(props) {
  const [data, setData] = useState([])
  console.warn("props", props);
  useEffect(() => {
    mainServices.courses().then(function (response) {
      // handle success
      console.log(response.data);
      setData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    console.log("-----");
  },[]);
console.log(data);
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
