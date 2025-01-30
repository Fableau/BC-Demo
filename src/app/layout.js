import Header from "@/components/Header/Header";
import Wrapper from "@/components/Wrapper/Wrapper";

export const metadata = {
  title: "Motorhuis Laadpunt Samenstellen",
  description: "Beschrijving",
};

const FormLayout = ({ children }) => (
  <Wrapper>
    <Header />
    { children }
  </Wrapper>
)

export default FormLayout;