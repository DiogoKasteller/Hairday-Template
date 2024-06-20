import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Current date for input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Load current date as the default selected
selectedDate.value = inputToday

// Define min date as the current date
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // Get client name
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente.")
    }

    // Get selected schedule
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione o horário.")
    }

    // Get only hour
    const [hour] = hourSelected.innerText.split(":")

    // Insert hour on date
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Generates random ID
    const id = new Date().getTime()

    // Schedule
    await scheduleNew({
      id,
      name,
      when,
    })

    // Reload schedules
    await schedulesDay()

    // Clear client name input
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}
