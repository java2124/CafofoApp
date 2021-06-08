import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

type cidades = 'São Roque' | 'Guaruja' | 'Santos' | 'Rio de Janeiro' | 'Socorro' | 'Campos do Jordão'| 'Paraty' | 'São Sebastião'| 'Campinas';
type pets = 'Aceita Pet' | 'Não Aceita Pet';
type rua = 'Silenciosa' | 'Não Silenciosa';
type academia = 'Academia' | 'Sem Academia';
type garagem = 'Garagem' | 'Sem garagem';

export interface Reservas {
  nomeCasa: string;
  descricao: string;
  precoDia: number;
  cidade: string;
  name: string;
}

export interface Login {
  email: string;
  estaLogado: boolean;
}

export interface Acomodacao {
  id: number;
  name: string;
  descricao: string;
  nota: number;
  qtdCamas: number;
  qtdBanheiro: number;
  precoDia: number;
  locais: cidades;
  foto: string;
  descricaoProp: string;
  pet: pets;
  ruas: rua;
  academias: academia;
  dimensao: string;
  garagens: garagem;
}
@Injectable({
  providedIn: 'root'
})

export class CafofoHomeService {
  public cidades: Acomodacao [ ];
  public allReservas: Reservas [] = [];
  private isLogin = false;


  constructor(private storage: Storage) {
    this.cidades = [
      {
        id: 1,
        name: 'Casa Floresta Encantada',
        descricao: 'Casa na floresta em São Roque',
        nota: 4.86,
        qtdCamas: 6,
        qtdBanheiro: 3,
        precoDia: 70.00,
        locais: 'São Roque',
        foto: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descricaoProp: 'A casa possui uma excelente infraestrutura, com mobilias novas e modernas, os quartos são equipados com ar condicionado, além de aparelhos de ginástica. Com uma bela vista para a floresta. A casa está em um local privilegiado dentro de uma reserva segura e traquila.',
        pet: 'Aceita Pet',
        ruas: 'Silenciosa',
        academias: 'Academia',
        dimensao: '260 m²',
        garagens: 'Garagem'
      },
      {
        id: 2,
        name: 'Casa Rio Pequeno',
        descricao: 'Casa na praia em Rio Pequeno',
        nota: 4.90,
        qtdCamas: 5,
        qtdBanheiro: 2,
        precoDia: 55.00,
        locais: 'Guaruja',
        foto: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descricaoProp: 'A casa possui uma ótima infraestrutura.Os quartos têm com ar condicionado, além da casa contar com uma sala com equipamentos de academia. Com uma bela vista para a praia. A casa está em um local privilegiado.',
        pet: 'Não Aceita Pet',
        ruas: 'Silenciosa',
        academias: 'Academia',
        dimensao: '280 m²',
        garagens: 'Garagem'
      },
      {
        id: 3,
        name: 'Casa Bosque das Flores',
        descricao: 'Casa na praia em Santos',
        nota: 3.98,
        qtdCamas: 6,
        qtdBanheiro: 3,
        precoDia: 75.00,
        locais: 'Santos',
        foto: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descricaoProp: 'A casa fica em um local com bastante opções de lugares para se divertir, além disso aceita pet e conta com uma pequena área de academia. Por fim, temos garagem para dois carros.',
        pet: 'Aceita Pet',
        ruas: 'Não Silenciosa',
        academias: 'Academia',
        dimensao: '300 m²',
        garagens: 'Garagem'
      },
      {
        id: 4,
        name: 'Casa Alpes',
        descricao: 'Casa nas montanhas em campos do Jordão',
        nota: 5.00,
        qtdCamas: 4,
        qtdBanheiro: 3,
        precoDia: 105.00,
        locais: 'Campos do Jordão',
        foto: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descricaoProp: 'Casa nas montanhas, em uma área silenciosa, perfeita para quem quer relaxar. Além disso, conta com uma linda vista e garagem que acomoda 3 carros',
        pet: 'Aceita Pet',
        ruas: 'Silenciosa',
        academias: 'Academia',
        dimensao: '520 m²',
        garagens: 'Garagem'
      },
      {
        id: 5,
        name: 'Casa Prisma',
        descricao: 'Casa nas montanhas em Paraty',
        nota: 3.95,
        qtdCamas: 3,
        qtdBanheiro: 2,
        precoDia: 65.00,
        locais: 'Paraty',
        foto: 'https://images.pexels.com/photos/2985154/pexels-photo-2985154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descricaoProp: 'A casa possui  mobilias novas e modernas, os quartos são equipados com ar condicionado. Com uma bela vista para a praia mais linda do Brasil. A casa está em um local privilegiado ficando a poucos passos de distância da areia da praia',
        pet: 'Aceita Pet',
        ruas: 'Silenciosa',
        academias: 'Sem Academia',
        dimensao: '170 m²',
        garagens: 'Garagem'
      },
      {
        id: 6,
        name: 'Casa Rio Ipê',
        descricao: 'Casa no lago em Socorro',
        nota: 4.38,
        qtdCamas: 4,
        qtdBanheiro: 3,
        precoDia: 72.00,
        locais: 'Socorro',
        foto: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        descricaoProp: 'Casa com vista para um lago, com mobílias conservadas e ar condicionado em todos os quartos. Além disso, conta com uma pequena academia e uma área de lazer para os seus pets.',
        pet: 'Aceita Pet',
        ruas: 'Silenciosa',
        academias: 'Academia',
        dimensao: '225 m²',
        garagens: 'Garagem'
      },
      {
        id: 7,
        name: 'Casa Idade das Pedras',
        descricao: 'Casa no subúrbio em Socorro',
        nota: 4.15,
        qtdCamas: 2,
        qtdBanheiro: 1,
        precoDia: 52.00,
        locais: 'São Sebastião',
        foto: 'https://images.pexels.com/photos/2079437/pexels-photo-2079437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        descricaoProp: 'Grande oportunidade, um belíssima casa com 2 amplos quartos sendo um deles uma bela suíte, 2 banheiros para maior comodidade e mais conforto com as 2 vagas de garagem.',
        pet: 'Aceita Pet',
        ruas: 'Silenciosa',
        academias: 'Academia',
        dimensao: '260 m²',
        garagens: 'Garagem'
      },
      {
        id: 8,
        name: 'Casa Campos Verdes ',
        descricao: 'Casa no subúrbio em Campinas',
        nota: 4.75,
        qtdCamas: 4,
        qtdBanheiro: 2,
        precoDia: 68.00,
        locais: 'Campinas',
        foto: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940	',
        descricaoProp: 'Espaço aconchegante, novo e confortável. Equipado com utensílios domésticos e todas as facilidades para dias confortáveis, a passeio ou a trabalho. Internet ultra rápida e TV com 285 canais, filmes e series liberados.',
        pet: 'Aceita Pet',
        ruas: 'Não Silenciosa',
        academias: 'Academia',
        dimensao: '268 m²',
        garagens: 'Garagem'
      }
    ];

    this.loadFromStorage();
  }

  private async loadFromStorage() {
    const reservas = await this.storage.get('reservas') as Reservas[];
    if (reservas) {
      this.allReservas.push(...reservas);
    }
  }

  public all(){
    return this.cidades;
  }

  public Reservas(){
    return this.allReservas;
  }

  public getId(id: number){
    return {...this.cidades.find(s => s.id === id)};
  }
  public get(local: string) {
    return { ...this.cidades.find(s => s.locais === local) };
  }

  public addReserva(casa: string, d: string, p: number, c: string, n: string){

    const contante = {
      nomeCasa: casa,
      descricao: d,
      precoDia: p,
      cidade: c,
      name: n
    };
    this.allReservas.push(contante);
    this.storage.set('reservas', this.allReservas);
  }

  public oklogin (email1){
    this.isLogin = true;
    const login : Login []= [{email: email1, estaLogado: this.isLogin}];
    this.storage.set('login', login);
    this.storage.set('logado', this.isLogin);
  }

  public okLogout (){
    this.isLogin = false;
    const login : Login []= [{email: null, estaLogado: this.isLogin}];
    this.storage.set('login', login);
    this.storage.set('logado', this.isLogin);
  }

  public async returnLogin(){
    const login = await this.storage.get('logado');
    if(login == false || login == null){
      return this.isLogin;
    }else{
      return login;
    }
  }
}