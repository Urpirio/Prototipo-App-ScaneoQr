import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
    container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Permiso_Style: {
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 20,
    width: '80%',
    boxShadow: '1px 5px 5px 1px gray',
    gap: 10,
    backgroundColor: '#fff',

  },
  TextPermisos:{
    fontSize: 20,
    textAlign: 'center'
  },
  BtnPermisoStyle: {
    borderWidth: 0,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor:'#1f7a8c',
  },
  TextBtnPermiso:{
    color: 'white',
    fontWeight: 500,

  }
})