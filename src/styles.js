import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const colors = {
  primary: "#EF5350",
  secondary: "#1E1E1E",
  background: "#F5F5F5",
  surface: "#FFFFFF",
  border: "#E3E3E3",
  muted: "#666666",
};

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  max-width: 420px;
  align-self: center;
`;

export const Card = styled.View`
  background: ${colors.surface};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  shadow-offset: 0px 4px;
  elevation: 4;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: ${colors.secondary};
  font-weight: 700;
  margin-bottom: 12px;
`;

export const FieldInput = styled.TextInput.attrs({
  placeholderTextColor: "#8F8F8F",
})`
  height: 48px;
  background: ${colors.surface};
  border-radius: 16px;
  padding: 0 16px;
  border: 1px solid ${colors.border};
  margin-bottom: 8px;
  color: ${colors.secondary};
`;

export const Button = styled(RectButton)`
  height: 48px;
  border-radius: 16px;
  background: ${(props) =>
    props.variant === "danger" ? "#F28B82" : colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Badge = styled.View`
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  background: #fde7e7;
  margin-top: 8px;
`;

export const BadgeText = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
`;

// Estilos da Pagina Main
export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Input = styled(FieldInput)`
  flex: 1;
  margin-bottom: 0;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
  margin-left: 8px;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  shadow-offset: 0px 3px;
  elevation: 3;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 24 },
})``;

export const User = styled(Card)`
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  background: #eee;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${colors.muted};
  margin-top: 4px;
  text-align: center;
`;

export const ProfileButton = styled(Button)`
  margin-top: 12px;
  align-self: stretch;
`;

export const ProfileButtonText = styled(ButtonText)``;

// Estilos da Pagina User
export const Header = styled(Card)`
  align-items: center;
`;

export const AvatarPerfil = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background: #eee;
`;

export const NamePerfil = styled.Text`
  font-size: 24px;
  color: ${colors.secondary};
  font-weight: 700;
  margin-top: 12px;
  text-transform: capitalize;
  text-align: center;
`;

export const BioPerfil = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${colors.muted};
  margin-top: 6px;
  text-align: center;
`;

export const BlockCard = styled(Card)``;

export const ItemText = styled.Text`
  font-size: 14px;
  color: ${colors.muted};
  margin-bottom: 8px;
  line-height: 20px;
`;

export const RowWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const AuthContainer = styled(Container)`
  justify-content: center;
`;

export const AuthCard = styled(Card)`
  width: 100%;
  max-width: 420px;
  align-self: center;
  margin-bottom: 0;
`;

export const AuthTitle = styled.Text`
  font-size: 24px;
  color: ${colors.secondary};
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;
