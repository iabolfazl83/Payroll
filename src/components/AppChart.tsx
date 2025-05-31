import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin,
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Rejected Resumes",
      data: [10, 14, 17, 19, 18, 22],
      borderColor: "#FF3B30",
      backgroundColor: "#fff",
      tension: 0.4,
    },
    {
      label: "Suggested",
      data: [18, 16, 15, 14, 13, 10],
      borderColor: "#FF9500",
      backgroundColor: "#fff",
      tension: 0.4,
    },
    {
      label: "Under Review",
      data: [15, 14, 16, 18, 19, 20],
      borderColor: "#34C759",
      backgroundColor: "#fff",
      tension: 0.4,
    },
    {
      label: "Interview Invitations",
      data: [20, 18, 22, 26, 30, 25],
      borderColor: "#32ADE6",
      backgroundColor: "#fff",
      tension: 0.4,
    },
    {
      label: "Employment",
      data: [14, 17, 20, 23, 24, 29],
      borderColor: "#222B45",
      backgroundColor: "#fff",
      tension: 0.4,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 20,
        usePointStyle: true,
      },
    },
    tooltip: {
      enabled: true,
      mode: "index" as const,
      intersect: false,
      padding: 10,
    },
    annotation: {
      annotations: {
        verticalLine: {
          type: "line" as const,
          scaleID: "x",
          value: "Apr",
          borderColor: "red",
          borderWidth: 2,
          borderDash: [5, 5],
        },
        highlightBox: {
          type: "box" as const,
          xMin: "Apr",
          xMax: "Apr",
          yMin: 26,
          yMax: 30,
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          borderColor: "red",
          borderWidth: 2,
          borderDash: [5, 5],
        },
        interviewLabel: {
          type: "label" as const,
          xValue: "Apr",
          yValue: 26,
          content: ["17 Resumes Invited To Interviews"],
          color: "black",
          font: {
            size: 12,
            weight: "bold" as const,
          },
        },
        rejectedLabel: {
          type: "label" as const,
          xValue: "Jun",
          yValue: 10,
          content: ["487"],
          color: "white",
          backgroundColor: "red",
          font: {
            size: 12,
            weight: "bold" as const,
          },
          padding: 5,
          borderRadius: 5,
        },
      },
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 35,
      ticks: {
        stepSize: 5,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function ResumeChart() {
  return (
    <div className="h-3/5">
      <div className="h-full w-full">
        <div className="bg-white dark:bg-info-1000 shadow-shadow-light-tight/1 p-3 rounded-5 h-full w-full dashboard-chart">
          <div className="border-b-1 border-netural-100 pb-1.5">
            <span className="text-secondary-1000 text-base font-semibold">
              Viewed Resumes
            </span>
          </div>
          <div className="h-[calc(100%-2rem)] w-full">
            <Line data={data} height="100%" options={options} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
