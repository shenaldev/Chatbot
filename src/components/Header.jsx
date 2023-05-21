import botIcon from "../assets/img/robot-icon.png";

function Header() {
  return (
    <div className="text-center">
      <img src={botIcon} alt="Bot Icon" className="w-16 mx-auto" />
      <h1 className="text-xl mt-4">Hi, I'm BotBank</h1>
    </div>
  );
}

export default Header;
