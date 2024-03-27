
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  componentsInput: {  /*Estilização dos Inputs de Modo Geral*/
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#7DAA8A",
    marginHorizontal: '7.5%',
    justifyContent: 'center',
    paddingVertical: '1%',
    flexDirection: "row",
  },

  input: {         /*Estilização Interna dos Inputs Gerais*/
    fontSize: 16,
    color: "#065A1E",
    width: '80%',
    alignSelf: "center",
    aspectRatio: '7',
    fontWeight: '800',

  },

  repair_report_txt: {       /*Estilização da Header Geral das Screens*/
    backgroundColor: "#CDF4E1",
    color: "#09511D",
    fontSize: 25,
    textAlign: "center",
    paddingVertical: '3%',
    marginBottom: '1%'
  },

});

export default styles