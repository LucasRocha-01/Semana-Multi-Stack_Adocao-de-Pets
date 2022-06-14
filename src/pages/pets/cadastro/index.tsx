import { Grid, Paper, TextField, Button, Snackbar } from '@mui/material';
import { NextPage } from 'next';
import { useCadastro } from '../../../data/hooks/pages/pets/useCadastro';
import Titulo from '../../../ui/components/Titulo';

const Cadastro: NextPage = () => {
    const {
        nome,
        historia,
        foto,
        setNome,
        setHistoria,
        setFoto,
        cadastrar,
        mensagem,
        setMensagem
    } = useCadastro()

    return (
        <>
            <Titulo
                titulo={'Cadastrp de Pets para Adoção'}
                subtitulo={'Preencha os dados do novo Pet'}
            />
            <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label={'Nome'}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={'Histótio do Pet'}
                            value={historia}
                            onChange={(e) => setHistoria(e.target.value)}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={'Foto'}
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{ mt: 2 }}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button
                            onClick={cadastrar}
                            variant={'contained'}
                            fullWidth
                            sx={{ maxWidth: { md: 200 }, mt: 4 }}
                        >
                            Cadastrar Pets
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={mensagem.length > 0}
                autoHideDuration={2500}
                onClose={() => setMensagem('')}
                message={mensagem}
            />
        </>
    )
}

export default Cadastro;