function alertTemplate(alert) {
    return `<div class="alert" style="background-color: ${alert.background}; color: ${alert.color};">
    <p>${alert.message}</p>
    </div>`;
}

export default class Alert {
  constructor() {
    this.path = "/json/alerts.json";
    this.mainElement = document.querySelector("main");
  }

  async init() {
    try {
      const response = await fetch(this.path);
      if (response.ok) {
        const alerts = await response.json();
        this.renderAlerts(alerts);
      }
    } catch (error) {
      console.error("Failed to load alerts:", error);
    }
  }

  renderAlerts(alerts) {
    if (alerts && alerts.length > 0 && this.mainElement) {
      const alertSection = document.createElement("section");
      alertSection.classList.add("alert-list");

      alerts.forEach((alert) => {
        alertSection.insertAdjacentHTML("beforeend", alertTemplate(alert));
      });

      this.mainElement.prepend(alertSection);
    }
  }
}