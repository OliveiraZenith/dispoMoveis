import React, { Component } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import api from "../services/api";
import {
  Container,
  Content,
  Header,
  AvatarPerfil,
  NamePerfil,
  BioPerfil,
  BlockCard,
  SectionTitle,
  ItemText,
  RowWrap,
  Badge,
  BadgeText,
} from "../styles.js";

export default class Pokemon extends Component {
  state = {
    pokemon: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { route } = this.props;
      const { pokemon } = route.params;

      const response = await api.get(`/pokemon/${pokemon.id || pokemon.name}`);
      this.setState({ pokemon: response.data, loading: false });
    } catch (error) {
      alert("Não foi possível carregar os detalhes do pokémon.");
      this.setState({ loading: false });
    }
  }

  getStatValue = (pokemon, statName) => {
    const stat = pokemon?.stats?.find((item) => item.stat.name === statName);
    return stat ? stat.base_stat : "-";
  };

  formatList = (items) => {
    return items.map((item) => item.name).join(", ");
  }

  render() {
    const { pokemon, loading } = this.state;

    if (loading) {
      return (
        <Container style={styles.centered}>
          <ActivityIndicator color="#9705f9c2" size="large" />
        </Container>
      );
    }

    if (!pokemon) {
      return (
        <Container style={styles.centered}>
          <Text style={styles.emptyText}>Detalhes não disponíveis.</Text>
        </Container>
      );
    }

    const imageUri =
      pokemon.sprites?.other?.["official-artwork"]?.front_default ||
      pokemon.sprites?.front_default;
    const tipos = this.formatList(pokemon.types.map((item) => item.type));
    const habilidades = this.formatList(
      pokemon.abilities.map((item) => item.ability),
    );
    const movimentos = this.formatList(
      pokemon.moves.slice(0, 8).map((item) => item.move),
    );

    return (
      <Container>
        <Content style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <Header>
              <AvatarPerfil source={{ uri: imageUri }} style={styles.bigAvatar} />
              <NamePerfil>{pokemon.name}</NamePerfil>
              <BioPerfil>Pokédex #{pokemon.id}</BioPerfil>
            </Header>

            <BlockCard>
              <SectionTitle>Informações básicas</SectionTitle>
              <RowWrap>
                {pokemon.types.map((item) => (
                  <Badge key={item.type.name}>
                    <BadgeText>{item.type.name}</BadgeText>
                  </Badge>
                ))}
              </RowWrap>
              <ItemText>Altura: {pokemon.height}</ItemText>
              <ItemText>Peso: {pokemon.weight}</ItemText>
              <ItemText>Experiência base: {pokemon.base_experience}</ItemText>
              <ItemText>Movimentos: {movimentos}</ItemText>
            </BlockCard>

            <BlockCard>
              <SectionTitle>Habilidades</SectionTitle>
              <ItemText>{habilidades}</ItemText>
            </BlockCard>

            <BlockCard>
              <SectionTitle>Status base</SectionTitle>
              <ItemText>HP: {this.getStatValue(pokemon, "hp")}</ItemText>
              <ItemText>Attack: {this.getStatValue(pokemon, "attack")}</ItemText>
              <ItemText>Defense: {this.getStatValue(pokemon, "defense")}</ItemText>
              <ItemText>Speed: {this.getStatValue(pokemon, "speed")}</ItemText>
            </BlockCard>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    paddingBottom: 24,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
  bigAvatar: {
    width: 190,
    height: 190,
    borderRadius: 95,
  },
});