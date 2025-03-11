import { Heading, Button } from "../../../components";

import "./header.css";

import sixfaces01 from "../../../assets/images/sixfaces01.png";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="yorfy__home-header section__margin">
      <div className="yorfy__home-header-leftcolumn">
        <Heading
          heading="Welcome to Yorfy"
          title="Now Available, Meet Yorfy NFT Collection ⭐️"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="yorfy__home-header-leftcolumn__milestones">
          <div>
            <h3>546</h3>
            <p>NFT Items</p>
          </div>
          <div className="yorfy__home-header-leftcolumn__milestones-divider" />
          <div>
            <h3>42</h3>
            <p>Owners</p>
          </div>
          <div className="yorfy__home-header-leftcolumn__milestones-divider" />
          <div>
            <h3>378</h3>
            <p>Items Sold</p>
          </div>
        </div>
      </div>
      <div className="yorfy__home-header-rightcolumn">
        <div className="yorfy__home-header-rightcolumn__image">
          <img src={sixfaces01} alt="Six Faces" />
        </div>
        <div className="yorfy__home-header-rightcolumn__content">
          <Button
            text="Buy an OpenSea"
            style="primary"
            size="large"
            onClick={() => navigate("/error")}
            disabled={false}
          />
          <Button
            text="Know More"
            style="secondary"
            size="large"
            onClick={() => navigate("/error")}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
