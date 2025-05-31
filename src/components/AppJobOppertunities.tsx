import { Buildings2, DocumentForward } from "iconsax-react";

const jobOpportunities = [
  { id: 1, company: "Nahira", sent: true },
  { id: 2, company: "Kungfu Federation", sent: true },
  { id: 3, company: "Orkid", sent: true },
  { id: 4, company: "ZAT", sent: true },
];

const AppJobOpportunities = () => {
  return (
    <div className="h-full">
      <div className="bg-white dark:bg-info-1000 p-3 rounded-5 shadow-shadow-light-tight/1 dark:shadow-shadow-dark-tight/1 h-full">
        <div className="pb-2 border-b-1 border-netural-100">
          <span className="text-base text-secondary-1000 dark:text-white font-semibold">
            Job Oppertunities Sent
          </span>
        </div>
        <div className="">
          {jobOpportunities.map((job) => (
            <div
              key={job.id}
              className="flex justify-between items-center py-2 border-b border-gray-100"
            >
              <div className="flex gap-2 items-center">
                <Buildings2
                  className="text-secondary-400 dark:text-white"
                  size="22"
                />
                <span className="font-semibold text-base text-secondary-1000 dark:text-white">
                  {job.company}
                </span>
              </div>
              {job.sent && (
                <div className="bg-secondary-400 dark:bg-surface-200 px-1 py-0.5 rounded-2 flex gap-1 items-center shadow-shadow-light-tight/1">
                  <span className="text-white text-xs">Has Been Sent</span>
                  <DocumentForward className="text-white" size="12" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppJobOpportunities;
