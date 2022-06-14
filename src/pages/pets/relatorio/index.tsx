import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { NextPage } from "next";
import Titulo from "../../../ui/components/Titulo";

import { useRelatorio } from "../../../data/hooks/pages/pets/useRelatorio";

const Relatorio: NextPage = () => {
    const { listaRelatorio } = useRelatorio();
    return (
        <>
            <Titulo
                titulo={'Relatorio de adoção'}
                subtitulo={'Veja a lista de pets adotados'}
            />
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'} >Valor Mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaRelatorio.map((relatorio) => (
                            <TableRow key={relatorio.id}>
                                <TableCell>{relatorio.pet.nome}</TableCell>
                                <TableCell>{relatorio.email}</TableCell>
                                <TableCell align={'right'} >{relatorio.valor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Relatorio;