import { Button } from "@mui/material";
import {
  ListaStyled,
  ItemLista,
  Descricao,
  Foto,
  Nome,
  Informacoes,
} from "./style";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";

interface ListaProps {
  pets: Pet[];
}

export default function Lista(props: ListaProps) {
  const tamanhoMaximoTexto = 200;

  return (
    <ListaStyled>
      {props.pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.foto} />
          <Informacoes>
            <Nome>{pet.nome}</Nome>
            <Descricao>
              {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
            </Descricao>
            <Button variant={"contained"} fullWidth>
              Adotar
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
