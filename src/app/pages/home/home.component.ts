import { Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';
import { I18nService } from '../../services/i18n.service';

interface DayCell { n: number; label: string; today: boolean; }
interface MockTodo { title: string; priority: 'HIGH'|'MEDIUM'|'LOW'; done: boolean; }

const DOCS_BY_LANG: Record<string, string> = {
  es: 'https://github.com/Serwii01/ProCalendar/blob/master/docs/GUIA-DE-USUARIO.md',
  en: 'https://github.com/Serwii01/ProCalendar/blob/master/docs/USER-GUIDE.md',
  'zh-CN': 'https://github.com/Serwii01/ProCalendar/blob/master/docs/%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97.md'
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private i18n = inject(I18nService);

  docsUrl = computed(() => DOCS_BY_LANG[this.i18n.current()] ?? DOCS_BY_LANG['en']);

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
