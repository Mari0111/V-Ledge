import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { mainServices } from "../../services";

export default function Details(props) {
  const router = useRouter();
  const {data} = props;
  const { cid } = router.query;
  const [item, setItem] = useState(data);
  // console.log("kekw", cid);

  // useEffect(() => {
  //   const temp = mainServices.courseDetails(cid);
  //   setItem(temp);
  // }, [cid]);
  console.log("Selected item", item);
  return (
    <>
      <div>
        <Grid container justifyContent={"flex-end"}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: 415,
              bgcolor: "background.paper",
              position: "absolute",
              overflow: "auto",
              maxHeight: 550,
              "& ul": { padding: 0 },
              
            }}
            subheader={<li />}
          >
            {[1].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`Course content`}</ListSubheader>

                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`Хичээл ${item}`} />
                      <PlayCircleOutline />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
        <Image src="/flutter_vid.png" width="1100" height="550" />
      </div>
      <div>
        <Grid paddingLeft={6} paddingRight={16}>
          {/* {cid }  */}
          {/* <a>Back to home</a> */}

          <h2>About this course</h2>
          <p>{item.about}</p>

          <Divider />

          <p>Features</p>
          <Grid paddingLeft={30} marginTop={-4.5}>
            <p>{item.features}</p>
          </Grid>
          <Divider />

          <p>Description</p>
          <Grid paddingLeft={30} marginTop={-4.5} paddingRight={60}>
          
            <p>
            {item.courseDescription}
            </p>
           
            <h4>What you'll learn</h4>
            <p>{item.courseDescription2}</p>
          </Grid>
          <Divider />

          <p>Instructor</p>
          <Grid paddingLeft={30} marginTop={-4.5} paddingRight={60}> 
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src={item.InstructorImg}
                  sx={{ width: 60, height: 60 }}
                />
                <div>
                  <Grid marginTop={-2}>
                    <h3>{item.instructorName}</h3>
                    <p>{item.instructorInfo}</p>
                  </Grid>
                </div>
              </Stack>
            </div>

            <p>
              {item.introduction}
            </p>

            
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const pageId = params.cid;
  console.log("PageID", pageId);
  const temp = await mainServices.courseDetails(pageId);
  console.log("temp", temp);

  return {
    props: {
      data: temp,
    },
  };
}