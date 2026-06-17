export function curCalendarFormat() {
  const DATE = new Date();
  const year = DATE.getFullYear();
  const month = DATE.toLocaleDateString("en-us", { month: "long" });
  const day = DATE.toLocaleDateString("en-us", {
    weekday: "long",
  });
  const daysInMonth = new Date(
    DATE.getFullYear(),
    DATE.getMonth() + 1,
    0,
  ).getDate();
  return { year, month, day, daysInMonth };
}
