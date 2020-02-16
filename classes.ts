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
}
