class CarService {
  constructor(name, workingHours = { from: "9:00", till: "20:00" }) {
    (this.name = name),
      (this.DefaultWorkingHours = {
        from: workingHours["from"],
        till: workingHours["till"],
      });
  }
  repairCar(carName) {
    if (!carName) {
      console.error(
        "Вам необходимо указать название машины, чтобы ее отремонтировать"
      );
      return;
    }
    const now = new Date();
    const start = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parseInt(this.DefaultWorkingHours["from"].substring(0, 2)),
      parseInt(this.DefaultWorkingHours["from"].substring(3))
    );
    const end = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parseInt(this.DefaultWorkingHours["till"].substring(0, 2)),
      parseInt(this.DefaultWorkingHours["till"].substring(3))
    );
    console.log(start, now, end);
    if (start <= now && now < end) {
      alert(`Cейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`);

      console.log(now);
    } else {
      alert(`К сожалению, мы сейчас закрыты. Приходите завтра`);
    }
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});

carService.repairCar("BMW");
