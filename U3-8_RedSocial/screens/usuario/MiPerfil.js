import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const MiPerfil = () => {
  const { logout } = useContext(AuthContext);
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: theme.textColor, fontSize: 24, marginBottom: 20 }}>Mi Perfil</Text>

      <TouchableOpacity onPress={logout} style={{ backgroundColor: "red", padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MiPerfil;
