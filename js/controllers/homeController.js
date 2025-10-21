import { Div, Heading, Paragraph } from "../views/atoms/index.js";

export const HomePage = () => {
  const div = Div();
  const heading = Heading();
  heading.innerHTML = "Hej verden";
  div.append(heading);
  return div;
};
