import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // Get date from input
  const date = selectedDate.value

  // Get schedules on API
  const dailySchedules = await scheduleFetchByDay({ date })

  // Show schedules
  scheduleShow({ dailySchedules })

  // Render available hours
  hoursLoad({ date, dailySchedules })
}
