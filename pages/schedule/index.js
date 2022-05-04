import * as React from "react";
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { styled, alpha } from '@mui/material/styles';
export default function Schedule() {
    
    const schedulerData = [
        { startDate: '2022-05-02T08:00', endDate: '2022-05-02T09:00', title: '201 Монгол хэл'},
        { startDate: '2022-05-02T09:10', endDate: '2022-05-02T10:10', title: '203 Математик'},
        { startDate: '2022-05-02T10:30', endDate: '2022-05-02T11:30', title: '206 Англи хэл'},
        { startDate: '2022-05-03T08:30', endDate: '2022-05-03T09:30', title: '201 Монгол хэл'},
        { startDate: '2022-05-03T09:40', endDate: '2022-05-03T10:40', title: '202 Мэдээлэл зүй'},
        { startDate: '2022-05-04T10:30', endDate: '2022-05-04T11:30', title: '203 Математик'},
        { startDate: '2022-05-04T11:40', endDate: '2022-05-04T12:40', title: '206 Англи хэл'},
        { startDate: '2022-05-05T08:00', endDate: '2022-05-05T09:00', title: '209 Биен тамир'},
        { startDate: '2022-05-05T09:10', endDate: '2022-05-05T10:10', title: '208 Эрүүл мэнд'},
        { startDate: '2022-05-06T09:00', endDate: '2022-05-06T10:00', title: '207 Япон хэл'},
        { startDate: '2022-05-06T10:10', endDate: '2022-05-06T11:10', title: '207 Япон хэл'},
    ]
    return (
      <div>
          <Scheduler data={schedulerData}>
              <ViewState/>
              <EditingState/>
              <IntegratedEditing/>
              <WeekView startDayHour={7} endDayHour={16}/>
              <Appointments/>
              <AppointmentForm/>
          </Scheduler>
      </div>
    );
}