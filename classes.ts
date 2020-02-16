class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('The honk of horns: beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('The roar of the engine: vroom');
  }

  public start(): void {
    console.log(`The color of the car: ${this.color}`);

    console.log(`The number of wheels: ${this.wheels}`);

    this.drive();
  }
}
