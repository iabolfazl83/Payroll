import { Button, cn, Slider } from "@heroui/react";

const ResumeCompletion = () => {
  const completionPercentage = 50;

  return (
    <div className="h-full">
      <div className="bg-white dark:bg-info-1000 p-3 rounded-5 shadow-shadow-light-tight/1 h-full">
        <div className="border-b-1 border-netural-100 pb-2">
        <span className="text-base text-secondary-1000 dark:text-white font-semibold">
          Proportion Of Finished Resume
        </span>
        </div>
        <p className="text-secondary-1000 dark:text-white text-sm font-normal">
          Currently, {completionPercentage}% Of The Resumes Are Completed. We
          Encourage You To Take Action And Complete Your Resume To Enhance Your
          Opportunities. A Well-Prepared Resume Can Significantly Improve Your
          Chances Of Success In The Job Market.
        </p>

        <div className="flex items-end gap-6">
          <Slider
            classNames={{
              filler: "bg-tertiar-400",
            }}
            defaultValue={0.2}
            formatOptions={{ style: "percent" }}
            label="Select a value"
            marks={[
              {
                value: 0,
                label: "0%",
              },
              {
                value: 0.5,
                label: "50%",
              },
              {
                value: 1,
                label: "100%",
              },
            ]}
            maxValue={1}
            minValue={0}
            renderThumb={({ index, ...props }) => (
              <div
                {...props}
                className="group top-1/2 border-4 border-tertiar-400 rounded-full"
              >
              <span
                className={cn(
                  "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                )}
              />
              </div>
            )}
            showTooltip={true}
            step={0.0001}
          />

          <Button className="bg-secondary-400 text-white font-semibold py-1 px-2 rounded-lg shadow-shadow-light-tight/1 w-[144px] h-[30px]">
            Finalize Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCompletion;
