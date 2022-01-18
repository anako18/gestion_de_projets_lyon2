export default class Helper {
  afficherDate (dateStr) {
    const date = new Date(Date.parse(dateStr))
    const now = new Date()
    const time = `${this.zeroPad(date.getHours())}:${this.zeroPad(date.getMinutes())}`
    if (now.toDateString() == date.toDateString()) {
      return `Aujourd'hui à ${time}`
    } else {
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      if (tomorrow.toDateString() == date.toDateString()) {
        return `Demain à ${time}`
      } else {
        return `${this.jourDeSemaine(date)} ${this.zeroPad(date.getDate())}/${this.zeroPad(date.getMonth() + 1)} à ${time}`
      }
    }
  }

  jourDeSemaine (date) {
    switch (date.getDay()) {
      case 0:
        return "Lundi"
      case 1:
        return "Mardi"
      case 2:
        return "Mercredi"
      case 3:
        return "Jeudi"
      case 4:
        return "Vendredi"
      case 5:
        return "Samedi"
      default:
        return "Dimanche"
    }
  }

  zeroPad = (num) => String(num).padStart(2, "0")
}
