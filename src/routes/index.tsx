import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Page404 from "../pages/404";

import {
  ResumeEmpty,
  ResumeInfo,
  Dashboard,
  JobOffers,
  JobOppertunities,
  JobDetails,
  ResumeJobExperience,
  ResumeHardSkills,
  ResumeSoftSkills,
  ResumeAchievementsAndAccolades,
  ResumeCourses,
  CompanyAllCompanies,
  CompanyRequested,
  CompanyFavorites,
  CompanyGeneralInfo,
  ResumeAcademicHistory,
  CompanyJobOffers,
  CompanyEvents, Setting, ResumeSelfKnown, ResumeSelfKnownDetail
} from "@/routes/components.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate replace to="/dashboard" />,
  },
  {
    path: "company",
    children: [
      { path: "all-companies", element: <CompanyAllCompanies /> },
      { path: "requested", element: <CompanyRequested /> },
      { path: "favorites", element: <CompanyFavorites /> },
      { path: "general-info/:name", element: <CompanyGeneralInfo /> },
      { path: "job-offers", element: <CompanyJobOffers /> },
      { path: "events", element: <CompanyEvents /> },
    ],
  },
  {
    path: "resume",
    children: [
      { path: "empty", element: <ResumeEmpty /> },
      { path: "info", element: <ResumeInfo /> },
      { path: "job-experience", element: <ResumeJobExperience /> },
      { path: "academic-history", element: <ResumeAcademicHistory /> },
      { path: "hard-skills", element: <ResumeHardSkills /> },
      { path: "soft-skills", element: <ResumeSoftSkills /> },
      { path: "self-known", element: <ResumeSelfKnown /> },
      { path: "self-known/:name", element: <ResumeSelfKnownDetail /> },
      {
        path: "achievements-accolades",
        element: <ResumeAchievementsAndAccolades />,
      },
      { path: "courses", element: <ResumeCourses /> },
    ],
  },
  {
    path: "job",
    children: [
      { path: "offers", element: <JobOffers /> },
      { path: "oppertunities", element: <JobOppertunities /> },
      { path: "detail/:name", element: <JobDetails /> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
