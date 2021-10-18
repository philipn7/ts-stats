import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReports } from './reportTargets/ConsoleReport';

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
);
summary.buildAndPrintReport(reader.matches);
