import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';

// import history from '../../services/history';

// import api from '../../services/api';

// import {
//   signInRequest,
//   signUpRequest
// } from '../../store/modules/customer/actions';

import { Container, Form, Links } from './styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))(Tooltip);

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText('#0d730d'),
    backgroundColor: '#0d730d',
    '&:hover': {
      backgroundColor: '#006600'
    },
    width: '100%',
    height: '6vh'
  }
}))(Button);

export default function Login() {
  // const loading = useSelector(state => state.customer.loading);
  // const dispatch = useDispatch();
  const loading = false;
  const classes = useStyles();
  const [user, setUser] = useState({
    customer_type: '',
    customer_doc: '',
    customer_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    segment: '',
    zip_code: '',
    street: '',
    complement: '',
    neighborhood: '',
    state: '',
    city: '',
    phone: '',
    whatsapp: ''
  });
  const [login, setLogin] = useState({
    login: false,
    email: '',
    password: ''
  });

  const responseGoogle = response => {
    console.log(response);
  };
  const responseFacebook = response => {
    console.log(response);
  };

  function handleLogin() {
    const { email, password } = login;

    if (!email) {
      toast.error('Um email válido precisa ser informado!');
      return;
    }
    if (!password) {
      toast.error('A senha está em branco!');
    }

    // dispatch(signInRequest(email, password));
  }

  function handleCreate() {
    if (!user.customer_type) {
      toast.error('O Tipo do usuário precisa ser escolhido!');
      return;
    }
    if (!user.customer_name) {
      toast.error('O nome do usuário precisa ser informado!');
      return;
    }
    if (!user.email) {
      toast.error('Um email válido precisa ser informado!');
      return;
    }
    if (user.password === '') {
      toast.error('A senha precisa ser informada!');
      return;
    }
    if (user.confirmPassword === '') {
      toast.error('A confirmação da senha precisa ser informada!');
    }

    // const {
    //   customer_type,
    //   customer_doc,
    //   customer_name,
    //   email,
    //   password,
    //   confirmPassword,
    //   segment,
    //   zip_code,
    //   street,
    //   complement,
    //   neighborhood,
    //   state,
    //   city,
    //   phone,
    //   whatsapp,
    // } = user;

    // dispatch(
    //   signUpRequest(
    //     customer_type,
    //     customer_doc,
    //     customer_name,
    //     email,
    //     password,
    //     confirmPassword,
    //     segment,
    //     zip_code,
    //     street,
    //     complement,
    //     neighborhood,
    //     state,
    //     city,
    //     phone,
    //     whatsapp
    //   )
    // );
    // history.push('/login');
  }

  function handleValid() {
    const confirm = document.getElementById('confirme');

    if (user.password !== '' && confirm.value !== '') {
      if (confirm.value !== user.password) {
        toast.error('As senhas devem ser iguais!');
        confirm.value = '';
        confirm.focus();
      }
    }
  }

  return (
    <Container>
      <Form>
        <div className="side1">
          <h3>Já sou cadastrado</h3>
          <div className="email">
            <TextField
              autoFocus
              id="email"
              type="email"
              value={login.email}
              onChange={e => setLogin({ ...login, email: e.target.value })}
              required
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="senha">
            <TextField
              id="password"
              type="password"
              label="Senha"
              value={login.password}
              onChange={e => setLogin({ ...login, password: e.target.value })}
              required
              variant="outlined"
            />
          </div>
          <Links to="/forgotpass">Esqueci minha senha</Links>
          <ColorButton
            style={{ marginTop: '30px' }}
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={() => handleLogin()}
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </ColorButton>
        </div>
        <div className="vl" />
        <div className="side2">
          <h3>Quero me cadastrar</h3>
          <div className="nome">
            <TextField
              id="name"
              type="text"
              label="Nome Completo"
              value={user.customer_name}
              onChange={e =>
                setUser({ ...user, customer_name: e.target.value })
              }
              required
              variant="outlined"
            />
          </div>
          <div className="email">
            <TextField
              id="email"
              type="email"
              label="Email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
              required
              variant="outlined"
            />
          </div>
          <div className="group-1">
            <div className="senha">
              <TextField
                id="password"
                type="password"
                label="Senha"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                required
                variant="outlined"
                style={{ width: '190px' }}
              />
              <span>*Minimo de 6 caracteres!</span>
            </div>
            <div className="confirme">
              <TextField
                id="confirme"
                type="password"
                label="Confirme Senha"
                value={user.confirmPassword}
                onChange={e =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                onBlur={() => handleValid()}
                required
                variant="outlined"
                style={{ width: '190px' }}
              />
            </div>
          </div>
          <ColorButton
            style={{ marginTop: '10%' }}
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={() => handleCreate()}
          >
            Criar
          </ColorButton>
        </div>
      </Form>
    </Container>
  );
}
