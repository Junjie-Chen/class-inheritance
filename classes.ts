class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('The honk of horns: beep');
  }
}
