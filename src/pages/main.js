import React, { Component } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Content,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  Badge,
  BadgeText,
  ProfileButton,
  ProfileButtonText,
} from "../styles";
export default class Main extends Component {
  state = {
    newPokemon: "",
    pokemons: [],
    loading: false,
  };

  async componentDidMount() {
    const pokemons = await AsyncStorage.getItem("pokemons");
    if (pokemons) {
      this.setState({ pokemons: JSON.parse(pokemons) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { pokemons } = this.state;
    if (prevState.pokemons !== pokemons) {
      AsyncStorage.setItem("pokemons", JSON.stringify(pokemons));
    }
  }

  handleAddPokemon = async () => {
    try {
      const { pokemons, newPokemon } = this.state;
      const pokemonToSearch = newPokemon.trim().toLowerCase();

      if (!pokemonToSearch) {
        alert("Digite o nome ou ID do pokémon para adicionar.");
        return;
      }

      this.setState({ loading: true });
      const response = await api.get(`/pokemon/${pokemonToSearch}`);

      if (pokemons.find((pokemon) => pokemon.id === response.data.id)) {
        alert("Pokémon já adicionado!");
        this.setState({ loading: false });
        return;
      }

      const data = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
        mainType: response.data.types?.[0]?.type?.name || "desconhecido",
        height: response.data.height,
        weight: response.data.weight,
      };

      this.setState({
        pokemons: [...pokemons, data],
        newPokemon: "",
        loading: false,
      });
      Keyboard.dismiss();
    } catch (error) {
      if (error?.response?.status === 404) {
        alert("Pokémon não encontrado.");
      } else {
        alert("Falha ao buscar pokémon. Verifique sua conexão.");
      }
      this.setState({ loading: false });
    }
  };

  render() {
    const { pokemons, newPokemon, loading } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Pesquisar pokémon por nome ou ID"
              value={newPokemon}
              onChangeText={(text) => this.setState({ newPokemon: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleAddPokemon}
            />
            <SubmitButton loading={loading} onPress={this.handleAddPokemon}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Icon name="add" size={20} color="#fff" />
              )}
            </SubmitButton>
          </Form>

          <List
            data={pokemons}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => (
              <User>
                <Avatar source={{ uri: item.image }} />
                <Name>{item.name}</Name>
                <Bio>Pokédex #{item.id}</Bio>
                <Badge style={{ alignSelf: "center" }}>
                  <BadgeText>{item.mainType}</BadgeText>
                </Badge>
                <Bio>Altura: {item.height}</Bio>
                <Bio>Peso: {item.weight}</Bio>
                <ProfileButton
                  onPress={() =>
                    this.props.navigation.navigate("Pokemon", { pokemon: item })
                  }
                >
                  <ProfileButtonText>Ver Mais Detalhes</ProfileButtonText>
                </ProfileButton>
                <ProfileButton
                  variant="danger"
                  onPress={() => {
                    this.setState({
                      pokemons: this.state.pokemons.filter(
                        (pokemon) => pokemon.id !== item.id,
                      ),
                    });
                  }}
                >
                  <ProfileButtonText>Excluir</ProfileButtonText>
                </ProfileButton>
              </User>
            )}
          />
        </Content>
      </Container>
    );
  }
}