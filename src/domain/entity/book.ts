import { EntityCommon } from './entity.common'
import { IBook } from '../interfaces/iBook'


export class Book extends EntityCommon implements IBook {
    constructor() {
        super()
        this.__type = '_book'
    }

    ativo : boolean = true
    dataInclusao : Date 
    dataExclusao : Date

    titulo : string = ''
    autor : string = ''
    categoria : string = ''
    dataAquisicao : string = ''
    dataInicioLeitura : string = ''
    dataTerminoLeitura : string = ''
    numeroPaginas : string = ''
    valor : string = ''
    resumo : string = ''
    imagem : string = ''
}