import { Grid } from "@mui/material";
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
import { mainServices } from "../../services";
import ReactPlayer from "react-player";

export default function Details(props) {
  const { data, lessons } = props;
  const [selectedLesson, setSelectedLesson] = useState();
  const [item, setItem] = useState(data);
  // console.log("kekw", cid);

  useEffect(() => {
    if (lessons !== undefined && lessons[0] !== undefined) {
      setSelectedLesson(lessons[0]);
    }
  }, [lessons]);
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

                  {lessons !== undefined &&
                    lessons.length > 0 &&
                    lessons.map((item) => (
                      <ListItem
                        key={`item-${sectionId}-${item}`}
                        onClick={() => {
                          setSelectedLesson(item);
                        }}
                      >
                        <ListItemText primary={`hicheel `} />
                        <PlayCircleOutline />
                      </ListItem>
                    ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
        {/* <Image src="/flutter_vid.png" width="1100" height="550" /> */}
        <div>
          {selectedLesson !== undefined &&
            selectedLesson.lesson !== undefined && (
              <ReactPlayer
                width={1100}
                height={550}
                controls
                url={selectedLesson.lesson}
              />
            )}
          {/* <ReactPlayer width={1100} height={550} controls url={selectedLesson.lesson} /> */}
        </div>
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
            <p>{item.courseDescription}</p>

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

            <p>{item.introduction}</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const pageId = params.cid;

  const temp = await mainServices.courseDetails(pageId);
  const temp2 = await mainServices.getLessonsById(pageId);
  console.log("temp2", temp2);

  return {
    props: {
      data: temp,
      lessons: temp2,
    },
  };
}
