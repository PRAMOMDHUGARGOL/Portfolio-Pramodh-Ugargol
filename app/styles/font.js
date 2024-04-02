import { Poppins } from "next/font/google";

//👇 Configure our font object
export const poppinsStyle = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const poppins = poppinsStyle.style.fontFamily;
export const poppinsClass = poppinsStyle;
