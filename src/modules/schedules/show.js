import dayjs from "dayjs"

// Select sections
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedules }) {
  try {
    // Clear period lists
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Render schedules by period
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Add schedule ID
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Create cancel schedule icon
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      // Add time, name and icon on item
      item.append(time, name, cancelIcon)

      // Get hour only
      const hour = dayjs(schedule.when).hour()

      // Render schedule by section
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível exibir os agendamentos.")
  }
}
