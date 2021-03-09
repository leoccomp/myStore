import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import bcrypt from 'bcryptjs';

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
import * as UserActions from '../../store/modules/user/actions';

import { Container, Form, Links } from './styles';
import { UserContext } from '../../context/user';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

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
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = false;
  const classes = useStyles();
  const [user, setUser] = useState({
    customerName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [login, setLogin] = useState({
    login: false,
    name: '',
    email: '',
    password: ''
  });
  const { setName, setLogged } = useContext(UserContext);

  async function handleLogin() {
    const { email, password } = login;
    let userExist = false;
    let passwordStored = '';

    if (!email) {
      toast.error('Um email válido precisa ser informado!');
      return;
    }

    if (!password) {
      toast.error('A senha está em branco!');
    }

    users.forEach(item => {
      if (item.email === email) {
        userExist = true;
        passwordStored = item.password;
        setName(`Olá, ${item.name}`);
        setLogged(true);
      }
    });

    if (!userExist) {
      toast.error('Email não existe no cadastro!');
      return;
    }

    const passCorrect = await bcrypt.compare(password, passwordStored);

    if (passCorrect) {
      toast.success('Usuário autenticado com sucesso!');
      history.push('/');
    } else {
      toast.error('Senha inválida!');
    }
  }

  async function handleCreate() {
    let userExist = false;
    if (!user.customerName) {
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

    users.forEach(item => {
      if (item.email === user.email) {
        userExist = true;
      }
    });

    if (userExist) {
      toast.error('Email já existe!');
      return;
    }

    const passwordHash = await bcrypt.hash(user.password, 8);

    const { customerName, email } = user;

    dispatch(
      UserActions.userRequest({
        name: customerName,
        email,
        password: passwordHash
      })
    );

    setUser({
      customerName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
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
              value={user.customerName}
              onChange={e => setUser({ ...user, customerName: e.target.value })}
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
