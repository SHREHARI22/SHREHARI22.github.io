import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { SKILLS } from '../../data/skills.data';
import { EXPERIENCE } from '../../data/experience.data';
import { ACHIEVEMENTS } from '../../data/education.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly projects = PROJECTS;
  readonly skills = SKILLS;
  readonly experience = EXPERIENCE;
  readonly achievements = ACHIEVEMENTS;
}
