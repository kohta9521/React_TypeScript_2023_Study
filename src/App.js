import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecules/SearchInput";
import UserCard from "./components/organisms/user/UserCard";
import HeaderOnly from "./components/templates/HeaderOnly";

const user = {
  name: "sample name",
  image: "https://source.unsplash.com/%E5%86%99%E7%9C%9F/rDEOVtE7vOs",
  email: "wihadsfjh@gamil,com",
  phone: "000=0000-9999",
  company: {
    name: "sadadsk company",
  },
  website: "https://googla.com",
};

function App() {
  return (
    <HeaderOnly>
      <h1>Atomic Design</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}

export default App;
