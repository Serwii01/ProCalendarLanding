import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';

interface DayCell { n: number; label: string; today: boolean; }
interface MockTodo { title: string; priority: 'HIGH'|'MEDIUM'|'LOW'; done: boolean; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  weekDays = signal<DayCell[]>([
    { n: 12, label: 'LUN', today: false },
    { n: 13, label: 'MAR', today: false },
    { n: 14, label: 'MIÉ', today: true  },
    { n: 15, label: 'JUE', today: false },
    { n: 16, label: 'VIE', today: false },
    { n: 17, label: 'SÁB', today: false },
    { n: 18, label: 'DOM', today: false }
  ]);

  hours = signal<string[]>(['09:00', '10:00', '11:00', '12:00']);

  mockTodos = signal<MockTodo[]>([
    { title: 'Revisar Q3',       priority: 'HIGH',   done: false },
    { title: 'Llamar a Ana',     priority: 'MEDIUM', done: false },
    { title: 'Email proveedor',  priority: 'LOW',    done: true  }
  ]);
}
