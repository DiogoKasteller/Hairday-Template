import { schedulesDay } from "../schedules/load.js"

// Select date input
const selectedDate = document.getElementById("date")

// Reload schedule list when the date input changes
selectedDate.onchange = () => schedulesDay()
