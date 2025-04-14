import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-checklist',
  imports: [MatCheckboxModule, 
            MatTableModule, 
            FormsModule, 
            MatFormFieldModule, 
            MatInputModule, 
            MatCardModule, 
            MatDatepickerModule,
            MatSelectModule,
            CommonModule, 
            MatRadioModule,
            MatButtonModule],
        
  changeDetection: ChangeDetectionStrategy.OnPush,          
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})


export class ChecklistComponent {
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);
  colunas: string[] = ['processo', 'c', 'nc', 'na', 'observacao'];



  dados = [
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
    { processo: 'Abastecer linha de montagem', opcaoSelecionada: '', observacao: '' },
  ];


    fabricas = [
      {valor: 1, descricao: 'Fábrica 1'},
      {valor: 2, descricao: 'Fábrica 2'},
      {valor: 3, descricao: 'Fábrica 3'},
      {valor: 4, descricao: 'Fábrica 6'},
      {valor: 5, descricao: 'Fábrica 8'},
      {valor: 6, descricao: 'Fábrica 11'},
    ];
  
  
  marcarUnico(item: any, campo: string): void {
    item.c = campo === 'c';
    item.nc = campo === 'nc';
    item.na = campo === 'na';
  }

  limparTabela() {
    this.dados = this.dados.map(item => ({
      ...item,
      opcaoSelecionada: '',
      observacao: ''
    }));
  }
}




