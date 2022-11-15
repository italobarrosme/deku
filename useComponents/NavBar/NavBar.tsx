import { Logo } from "../../usePieces/Logo";
import { SearchInput } from "../../usePieces/SearchInput";
import { ToggleInput } from "../../usePieces/ToggleInput/ToggleInput";

export const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-12 px-4">
        <Logo title="My Collection.TUBE" />
        <SearchInput />
        <ToggleInput />
      </nav> 
    </>
  );
};