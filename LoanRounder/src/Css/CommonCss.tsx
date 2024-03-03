import {PixelRatio, StyleSheet} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: any) => size / fontScale;
export const CommonStyles = StyleSheet.create({
  heading: {
    fontSize: 28,
    color: '#000',
    fontWeight: '900',
  },
  headingsmall: {
    fontSize: 18,
    color: '#000',
    fontWeight: '900',
  },
  text: {
    fontSize: getFontSize(14),
    color: '#000',
  },
  colortext: {
    fontSize: getFontSize(14),
    color: '#7415C0',
  },
  maintextinput: {
    borderWidth: 0.5,
    borderColor: 'grey',
    marginVertical: 10,
  },
  main: {
    width: '90%',
  },
  textinput: {
    padding: 7,
  },
  center: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#7415C0',
    paddingVertical: 15,
  },
  btntext: {
    color: '#fff',
  },
  sidebarlist: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  sidebartext: {
    color: '#fff',
    fontSize: getFontSize(15),
  },
  padding: {
    padding: 15,
  },
});
