import React,{ ChangeEvent, useEffect, useState} from "react";
import { Grid, Box, Typography,Button} from "@material-ui/core";
import './Login.css';
import { TextField } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";


function Login(){

    let history = useNavigate();
    const [token, setToken] = useLocalStorage("token");


    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto:"",
        token: ""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setUserLogin({
            ...userLogin, 
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        if(token != ""){
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try{

           await login(`/usuarios/logar`, userLogin,setToken)
              
              alert("Usuario logado com sucesso!")
        
            }catch(error){
           
            alert("Dados do usuário inconsistentes. Erro ao logar!!")

        }
        
    }

    return(
        <Grid container direction ='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component = 'h3' align = 'center' style={{fontWeight:'bold'}}>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id ='usuario' label = 'usuario' variant = 'outlined' name ='usuario' margin = 'normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) =>updatedModel(e)} id ='senha' label = 'senha' variant = 'outlined' name ='senha' margin = 'normal'  type = 'password'fullWidth />
                        <Box marginTop={2} textAlign = 'center'>
                            <Link to='/home' className="text-decorator-none">
                            <Button type='submit' variant ='contained' color='primary'>
                                Logar
                            </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' className="text-decorator-none">
                        <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight:"bold"}} >Cadastra-se</Typography>
                        </Link>
                    </Box>

                </Box>

            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://g4a2m4t8.rocketcdn.me/wp-content/uploads/2021/01/tulipan-blanco.jpg)`,
                backgroundRepeat: 'no-repeat', width: "100vw", minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center"
            }}>

            </Grid>

        </Grid>
        
           

    );

}


export default Login;