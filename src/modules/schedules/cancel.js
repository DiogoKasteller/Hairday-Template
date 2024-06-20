import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Generate click event for every list (morning, afternoon, night)
periods.forEach((period) => {
  // Capture the click event on the list
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Get parent li of clicked element
      const item = event.target.closest("li")

      // Get schedule ID to remove
      const { id } = item.dataset

      // Confirms that ID was selected
      if (id) {
        // Confirms if user wants to cancel/remove schedule
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        )

        if (isConfirm) {
          // Request to API to cancel schedule
          await scheduleCancel({ id })

          // Reload schedules list
          schedulesDay()
        }
      }
    }
  })
})
