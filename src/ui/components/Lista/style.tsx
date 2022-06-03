import { styled } from "@mui/material";

export const ListaStyled = styled("ul")`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ItemLista = styled("li")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  padding: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(1, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }

  :hover {
    border-radius: 10px;
    box-shadow: 0 0 1em ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const Foto = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Informacoes = styled("div")``;

export const Nome = styled("h2")``;

export const Descricao = styled("p")``;
