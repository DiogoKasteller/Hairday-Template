import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
  try {
    // Requesting
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Convert to JSON
    const data = await response.json()

    // Filter schedules by selected date
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}
