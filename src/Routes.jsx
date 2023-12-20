import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SummaryOperationTabOne = React.lazy(
  () => import("pages/SummaryOperationTabOne"),
);
const Copy = React.lazy(() => import("pages/Copy"));
const SiteSummaryTabTwo = React.lazy(() => import("pages/SiteSummaryTabTwo"));
const SummaryOperationTab = React.lazy(
  () => import("pages/SummaryOperationTab"),
);
const SiteSummaryTabOne = React.lazy(() => import("pages/SiteSummaryTabOne"));
const SiteSummaryTab = React.lazy(() => import("pages/SiteSummaryTab"));
const AddchargerTab = React.lazy(() => import("pages/AddchargerTab"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/addchargertab" element={<AddchargerTab />} />
          <Route path="/sitesummarytab" element={<SiteSummaryTab />} />
          <Route path="/sitesummarytabone" element={<SiteSummaryTabOne />} />
          <Route
            path="/summaryoperationtab"
            element={<SummaryOperationTab />}
          />
          <Route path="/sitesummarytabtwo" element={<SiteSummaryTabTwo />} />
          <Route path="/copy" element={<Copy />} />
          <Route
            path="/summaryoperationtabone"
            element={<SummaryOperationTabOne />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
