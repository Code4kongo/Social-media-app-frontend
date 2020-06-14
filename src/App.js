import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ApplyJobPage from "./pages/AppyJobPage";
import CommunityGuideLinePage from "./pages/CommunityGuideLinePage";
import AnyUserPage from './pages/AnyUserPage'
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilPage from "./pages/CompanyProfilPage";
import AnyCompanyProfilPage from "./pages/AnyCompanyProfilPage";
import ErrorPage from "./pages/ErrorPage";
import JobsPage from "./pages/JobsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignInPage from "./pages/SignIn";
import UserProfilPage from "./pages/UserProfilPage";
import UsersPage from "./pages/UsersPage";
import UserContextProvider from "./contexts/userContext";
import CompanyContextProvider from "./contexts/companyContext";
import JobContextProvider from "./contexts/jobContext";
import PostContextProvider from "./contexts/postContext";


function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Switch>
        <CompanyContextProvider>
        <UserContextProvider>
        <PostContextProvider>
        <JobContextProvider>
        
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route exact path="/company/:companyId" component={CompanyProfilPage}/>
          <Route exact path="/companies/:companyId" component={AnyCompanyProfilPage}/>
          <Route exact path="/users" component={UsersPage}/>
          <Route exact path="/users/:userId" component={AnyUserPage}/>
          <Route exact path="/jobs" component={JobsPage} />
          <Route exact path="/apply-job/:jobId" component={ApplyJobPage}/>
          <Route exact path="/my-profile" component={UserProfilPage}/>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route exact path="/community-guide-line" component={CommunityGuideLinePage}/>

        </JobContextProvider>  
        </PostContextProvider>
        </UserContextProvider>
        </CompanyContextProvider>
          <Route component={ErrorPage} />  
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
