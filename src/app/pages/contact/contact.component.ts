import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/education.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly education = EDUCATION;
}
