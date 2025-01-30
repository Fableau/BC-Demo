import "@/styles/globals.scss";
import "@/styles/fonts.scss";

// Load FontAwesome CSS before icons are rendered, removing visual bug (e.g. movement / scaling after first render).
// AutoAddCSS should be off, since we don't need the CSS twice.
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout;