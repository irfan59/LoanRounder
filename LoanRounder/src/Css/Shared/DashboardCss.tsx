import {PixelRatio, StyleSheet} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: any) => size / fontScale;
export const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    width: '100%',
    gap: 40,
  },
  midd: {
    height: '50%',
  },
  bottom: {},
  tcard: {
    width: '45%',
    height: 126,
  },
  tcardheading: {
    fontSize: getFontSize(15),
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  tcardtext: {},
  tcardamount: {
    color: '#7415C0',
    fontSize: getFontSize(20),
  },
  mheading: {
    fontSize: getFontSize(18),
    fontWeight: '600',
    color: '#000',
  },
  mlist: {},
  mlmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 5,
  },
  mlleft: {
    fontSize: getFontSize(14),
    color: '#000',
    width: '70%',
  },
  mlrigth: {
    color: '#7415C0',
    fontSize: getFontSize(14),
    width: '30%',
    textAlign: 'right',
  },
});
