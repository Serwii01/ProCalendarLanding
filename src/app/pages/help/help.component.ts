import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {}
