import { Component } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  cards: { kredi: number|null, not: string }[] = [];
  gano: number | null = null;



  addCard() {
    this.cards.push({ kredi: null, not: '' });
  }

  handleChange(value: string, index: number): void {
    this.cards[index].not = value;
  }

  hesapla() {
    let toplamKredi=0;
    let toplamAno = 0;

    for(const element of this.cards){
      const card = element
      console.log(toplamKredi);

      if (card.kredi !== null || card.kredi !=='' && card.not !== 'Seçiniz') {
        const kredi = Number(card.kredi);
        const not = card.not
        console.log(not)

        toplamKredi += kredi;
        console.log(toplamKredi);
  
        console.log(toplamAno);
        toplamAno += kredi * this.harfNotuCevir(card.not);
        console.log(this.harfNotuCevir(card.not))
        console.log(toplamAno);
      }
      
    }
    this.gano = toplamKredi > 0 ? toplamAno / toplamKredi : null;
    console.log(this.gano);

    
  }

  harfNotuCevir(harfNotu:string):number{
    switch (harfNotu) {
      case "AA":
        return 4.0;
      case 'BA':
        return 3.5;
      case 'BB':
        return 3.0;
      case 'CB':
        return 2.5;
      case 'CC':
        return 2.0;
      case 'DC':
        return 1.5;
      case 'DD':
        return 1.0;
      default:
        return 0.0;
    }
  }
}