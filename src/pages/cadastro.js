import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, ScrollView, StyleSheet } from "react-native";
import {
  AuthContainer,
  AuthCard,
  AuthTitle,
  FieldInput,
  Button,
  ButtonText,
} from "../styles";

export default class Cadastro extends Component {
  state = {
    nome: "",
    telefone: "",
    cpf: "",
    curso: "",
    email: "",
    password: "",
  };

  handleCadastro = async () => {
    const { nome, telefone, cpf, curso, email, password } = this.state;
    if (!nome || !telefone || !cpf || !curso || !email || !password) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }
    const user = {
      nome,
      telefone,
      cpf,
      curso,
      email,
      password,
    };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <AuthContainer>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <AuthCard>
            <AuthTitle>Cadastro</AuthTitle>
            <FieldInput
              placeholder="Nome"
              value={this.state.nome}
              onChangeText={(nome) => this.setState({ nome })}
            />
            <FieldInput
              placeholder="Telefone"
              keyboardType="phone-pad"
              value={this.state.telefone}
              onChangeText={(telefone) => this.setState({ telefone })}
            />
            <FieldInput
              placeholder="CPF"
              keyboardType="numeric"
              value={this.state.cpf}
              onChangeText={(cpf) => this.setState({ cpf })}
            />
            <FieldInput
              placeholder="Curso"
              value={this.state.curso}
              onChangeText={(curso) => this.setState({ curso })}
            />
            <FieldInput
              placeholder="E-mail"
              value={this.state.email}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({ email })}
            />
            <FieldInput
              placeholder="Senha"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />

            <Button onPress={this.handleCadastro}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </AuthCard>
        </ScrollView>
      </AuthContainer>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 16,
  },
});
