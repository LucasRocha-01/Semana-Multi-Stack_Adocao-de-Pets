import { Box, Link } from "@mui/material";
import NextLink from "next/link";
import { CabecalhoContainer, LinksContainer, Logo } from "./style";

export default function CabecalhoAdmin() {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={"/imagens/logo.svg"} alt={"adote um pet"} />
                <LinksContainer>
                    <Link component={NextLink} href={"/pets/cadastro"}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={"/pets/relatorio"}>
                        <a>
                            Relatório {''}
                            <Box
                                component={'span'}
                                sx={{ display: { sm: 'initial', xs: 'none' } }}>
                                de adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </CabecalhoContainer>
    );
}
