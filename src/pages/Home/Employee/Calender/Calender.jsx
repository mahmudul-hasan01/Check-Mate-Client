import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
import './Style.css'
const Calendars = () => {
  //   const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  //   const dates = [4, 5, 6, 7, 8, 9, 10];
  const tasks = [
    { day: 0, time: "10 am", task: "Driving a car" },
    { day: 1, time: "11 am", task: "Delivery foods" },
    { day: 2, time: "12 pm", task: "Delivery foods" },
    { day: 3, time: "01 pm", task: "Delivery foods" },
    { day: 4, time: "10 am", task: "Delivery foods" },
    { day: 5, time: "02 pm", task: "Delivery foods" },
    { day: 6, time: "11 am", task: "Delivery foods" },
  ];

  
  const events = [
    {
      title: 'Draving A Car',
      start: new Date(2024, 8, 14, 10, 0),
      end: new Date(2024, 8, 14, 11, 0),
    },
    {
      title: 'Lunch with Client',
      start: new Date(2024, 8, 15, 12, 0),
      end: new Date(2024, 8, 15, 13, 0),
    },
    {
      title: 'Lunch with Client',
      start: new Date(2024, 8, 11, 12, 0),
      end: new Date(2024, 8, 11, 13, 0),
    },
    {
      title: 'Lunch with Client',
      start: new Date(2024, 8, 12, 14, 0),
      end: new Date(2024, 8, 12, 15, 0),
    },
  ];


  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 h-screen overflow-hidden">
      
    <div className="p-8 h-full ">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
         defaultView="week"
        views={['day', 'week', 'month']}
        // toolbar={false}
        style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '8px', height: '600px' }}  

        min={new Date(2024, 8, 14, 10, 0)}  
        max={new Date(2024, 8, 14, 17, 0)} 
       
      
      />
    </div>
    </div>
  );
};

export default Calendars;
