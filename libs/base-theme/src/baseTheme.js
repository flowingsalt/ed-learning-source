import { createTheme } from '@mui/material/styles';
import createBaseThemeSettings from './createBaseThemeSettings';
export var defaultThemeSettings = createBaseThemeSettings();
export default createTheme(defaultThemeSettings);