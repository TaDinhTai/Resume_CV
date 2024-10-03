import React from "react";
import PersonalDetailPreview from "./PersonalDetailPreview";
import ProfessionalSummaryPreview from "./ProfessionSumaryPreview";
import EmploymentHistoryPreview from "./EmployeeHistoryPreview";
import EducationPreview from "./EducationPreview";
import WebsitesAndSocialLinksPreview from "./WebsitesAndSocialLinksPreview";
import SkillsPreview from "./SkillsPreview";

const ResumePreview = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="resume-container bg-white shadow-lg p-6">
        <PersonalDetailPreview />
        <ProfessionalSummaryPreview />
        <EmploymentHistoryPreview />
        <EducationPreview />
        <WebsitesAndSocialLinksPreview />
        <SkillsPreview />
      </div>
    </div>
  );
};

export default ResumePreview;
