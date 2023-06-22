import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent {
  @Input() balance: number | undefined;
  @Input() cardNumber: string | undefined;
  @Input() expirationDate: string | undefined;
}
