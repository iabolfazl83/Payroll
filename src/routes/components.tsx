import { lazy } from "react";

import { Loadable } from "./Loadable";

export const ResumeEmpty = Loadable(
  lazy(() => import("@/pages/Resume/empty.tsx")),
);

export const ResumeInfo = Loadable(
  lazy(() => import("@/pages/Resume/info.tsx")),
);

export const ResumeJobExperience = Loadable(
  lazy(() => import("@/pages/Resume/jobExperience.tsx")),
);

export const ResumeAcademicHistory = Loadable(
  lazy(() => import("@/pages/Resume/academicHistory.tsx")),
);

export const ResumeHardSkills = Loadable(
  lazy(() => import("@/pages/Resume/hardSkills.tsx")),
);

export const ResumeSoftSkills = Loadable(
  lazy(() => import("@/pages/Resume/softSkills.tsx")),
);

export const ResumeAchievementsAndAccolades = Loadable(
  lazy(() => import("@/pages/Resume/achievementsAndAccolades.tsx")),
);

export const ResumeCourses = Loadable(
  lazy(() => import("@/pages/Resume/courses.tsx")),
);

export const ResumeSelfKnown = Loadable(
  lazy(() => import("@/pages/Resume/selfKnown.tsx")),
);

export const ResumeSelfKnownDetail = Loadable(
  lazy(() => import("@/pages/Resume/selfKnownDetail.tsx")),
);


export const Dashboard = Loadable(
  lazy(() => import("@/pages/Dashboard/index.tsx")),
);

export const JobOffers = Loadable(
  lazy(() => import("@/pages/Jobs/offers.tsx")),
);

export const JobOppertunities = Loadable(
  lazy(() => import("@/pages/Jobs/oppertunities.tsx")),
);

export const JobDetails = Loadable(
  lazy(() => import("@/pages/Jobs/jobDetail.tsx")),
);

export const CompanyAllCompanies = Loadable(
  lazy(() => import("@/pages/Companies/allCompanies.tsx")),
);

export const CompanyRequested = Loadable(
  lazy(() => import("@/pages/Companies/requested.tsx")),
);

export const CompanyFavorites = Loadable(
  lazy(() => import("@/pages/Companies/favorites.tsx")),
);

export const CompanyGeneralInfo = Loadable(
  lazy(() => import("@/pages/Companies/generalInfo.tsx")),
);

export const CompanyJobOffers = Loadable(
  lazy(() => import("@/pages/Companies/offers.tsx")),
);

export const CompanyEvents = Loadable(
  lazy(() => import("@/pages/Companies/events.tsx")),
);

export const Setting = Loadable(
  lazy(() => import("@/pages/Setting/index.tsx")),
);
