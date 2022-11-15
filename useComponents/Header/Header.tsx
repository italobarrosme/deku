import { Banner } from "../../usePieces/Banner";
import { NavBar } from "../NavBar";
import { Presentation } from "../Presentation";
import { User } from "../../entities/user";

export type HeaderProps = {
  user?: User;
}

export const Header = ({user}: HeaderProps) => {
  
  return (
    <div>
      <NavBar />
      <Banner source="https://wallpaperaccess.com/full/796835.jpg" alt="pc_coffe_code" />
      <Presentation source={user?.picture} title={user?.name} subtitle={user?.description} />
    </div>
  );
};