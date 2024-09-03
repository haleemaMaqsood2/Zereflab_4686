import { createSlice } from "@reduxjs/toolkit";

export const SET_EVENT_DATA="SET_EVENT_DATA";


const initialState = {
    eventData: {
      title:'',
      date: null,
      endDate: null,
      location:'',
      description:'',
      privacy: 'Public',
    },
  };
  
  const eventDataSlice = createSlice({
    name: 'eventData',
    initialState,
    reducers: {
      setEventData(state, action) {
        console.log('!!!!!!!!!!!!!!!!!!!', action.payload); // Log the data here

        state.eventData = action.payload;
      },
      // Other reducers can be added here if needed
    },
  });
  
  // Export the action
  export const { setEventData } = eventDataSlice.actions;
  
  // Export the reducer
  export default eventDataSlice.reducer;