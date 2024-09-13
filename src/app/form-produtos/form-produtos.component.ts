import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = { id:0, nome:"", preco:0 };
  @Output() onSalvar = new EventEmitter<any>();
  
  cadastrar() {
    alert("Produto cadastrado com sucesso!")
    this.onSalvar.emit(this.produto);
    this.produto = { id:0, nome:"", preco:0 };
  }
}
