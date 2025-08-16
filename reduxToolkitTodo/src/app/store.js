// Redux:  is a state management library for JavaScript apps (often used with React).
//Instead of passing props around many components (which can get messy), Redux puts all your app’s state in one global store.
// Any component can access or update that store.

//Redux Toolkit is the official, recommended way to use Redux.
//Makes Redux easier to learn and faster to use.

// Key Concepts in Redux Toolkit
//The store = the school office (central place for all records).
//A slice = a classroom (manages its own records).
//An action = a student request form (e.g., “increase marks”).
//A reducer = the teacher who updates the records when a request is made.
//dispatch = submitting the form to the teacher.
//useSelector = checking the records from the office.

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})