import * as React from "react";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import { styled, alpha } from "@mui/material/styles";
export default function Schedule() {
  const schedulerData = [
    {
      startDate: "2022-05-09T08:00",
      endDate: "2022-05-09T09:00",
      title: "201 Монгол хэл",
      notes: "Өнөөдөр өчигдөрийн хичээлийг үргэлжлүүлж үзнэ.",
    },
    {
      startDate: "2022-05-09T09:10",
      endDate: "2022-05-09T10:10",
      title: "203 Математик",
    },
    {
      startDate: "2022-05-09T10:30",
      endDate: "2022-05-09T11:30",
      title: "206 Англи хэл",
    },
    {
      startDate: "2022-05-10T08:30",
      endDate: "2022-05-10T09:30",
      title: "201 Монгол хэл",
    },
    {
      startDate: "2022-05-10T09:40",
      endDate: "2022-05-10T10:40",
      title: "202 Мэдээлэл зүй",
    },
    {
      startDate: "2022-05-11T10:30",
      endDate: "2022-05-11T11:30",
      title: "203 Математик",
    },
    {
      startDate: "2022-05-11T11:40",
      endDate: "2022-05-11T12:40",
      title: "206 Англи хэл",
    },
    {
      startDate: "2022-05-12T08:00",
      endDate: "2022-05-12T09:00",
      title: "209 Биен тамир",
    },
    {
      startDate: "2022-05-12T09:10",
      endDate: "2022-05-12T10:10",
      title: "208 Эрүүл мэнд",
    },
    {
      startDate: "2022-05-13T09:00",
      endDate: "2022-05-13T10:00",
      title: "207 Япон хэл",
    },
    {
      startDate: "2022-05-13T10:10",
      endDate: "2022-05-13T11:10",
      title: "207 Япон хэл",
    },
  ];
  return (
    <div>
        <h2 style={{ color: "black", textAlign: "center" }}>
        Хичээлийн хуваарь
      </h2>
      <Scheduler data={schedulerData}>
        <ViewState />
        <EditingState />
        <IntegratedEditing />
        <WeekView startDayHour={7} endDayHour={16} />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
}
