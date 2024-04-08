import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bin',
  standalone: true,
  imports: [],
  templateUrl: './bin.component.html',
  styleUrl: './bin.component.scss'
})
export class BinComponent {
  @Input() id!: number;
  @Input() full!: boolean;
  @Input() location!: string;
  @Input() recycled!: number;
}
