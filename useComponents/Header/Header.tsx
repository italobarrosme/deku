import { Banner } from "../../usePieces/Banner";
import { NavBar } from "../NavBar";
import { Presentation } from "../Presentation";
import { User } from "../../entities/User";

export type HeaderProps = {
  user?: User;
}

export const Header = ({user}: HeaderProps) => {
  
  return (
    <div>
      <Presentation source={user?.picture} title={user?.name} subtitle={user?.description} />
    </div>
  );
};