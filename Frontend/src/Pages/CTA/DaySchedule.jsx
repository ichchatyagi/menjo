import React from 'react';
import { Calendar } from 'lucide-react';
// import 'dayschedule-widget/dist/dayschedule-popup.css';
import 'dayschedule-widget/dist/dayschedule-widget.js';

export default class DayScheduleButton extends React.Component {
  handleClick = () => {
    daySchedule.initPopupWidget({ url: 'https://meet.dayschedule.com' });
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="bg-green-500 flex flex-row items-center text-white my-5 py-2 px-4 text-lg rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-indigo-200"
      >
        <Calendar />
        Book an Appointment
      </button>
    );
  }
}