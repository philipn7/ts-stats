import { OutputTarget } from '../Summary';

export class ConsoleReports implements OutputTarget {
  constructor() {}

  print(report: string): void {
    console.log(report);
  }
}
