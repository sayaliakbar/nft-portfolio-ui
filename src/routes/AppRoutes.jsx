import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Contact, Home, NFT, Roadmap, ErrorPage } from "../pages";

import MainLayout from "../layouts/MainLayout.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
