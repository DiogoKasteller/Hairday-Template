export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove class "hour-selected" from all li's
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Add the class in the selected li/schedule
      selected.target.classList.add("hour-selected")
    })
  })
}
