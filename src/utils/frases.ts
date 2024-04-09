export function getGreeting() {
  const dateTime = new Date().getHours();

  if (dateTime >= 5 && dateTime < 12) {
    return "Bom dia!";
  } else if (dateTime >= 12 && dateTime < 18) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
  }
}
