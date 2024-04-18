import {
  Inter,
  Pathway_Gothic_One,
  Ubuntu_Condensed,
  Yanone_Kaffeesatz,
  Fjalla_One,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeoCar Nantes",
  description: "Bienvenue sur le site internet de votre garage NeoCar Nantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
