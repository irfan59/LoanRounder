import {PixelRatio, StyleSheet} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: any) => size / fontScale;
export const styles = StyleSheet.create({});
