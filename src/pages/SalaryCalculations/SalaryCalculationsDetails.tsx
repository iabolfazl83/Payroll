import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { SalaryCalculationsLayout } from "@/pages/SalaryCalculations/Layout.tsx";
import PageHeader from "@/components/PageHeader.tsx";
import SalaryDetailTabs from "@/pages/SalaryCalculations/SalaryDetailTabs.tsx";
import AppTable from "@/components/AppTable.tsx";

export default function SalaryCalculationsDetails() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isShowMode, setIsShowMode] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const DUMMY_EMPLOYEES = [
    {
      id: 1,
      label: "Alice Johnson",
      email: "alice.johnson@example.com",
      position: "Project Manager",
      department: "IT",
    },
    {
      id: 2,
      label: "Bob Smith",
      email: "bob.smith@example.com",
      position: "Software Engineer",
      department: "R&D",
    },
    {
      id: 3,
      label: "Carla Gomez",
      email: "carla.gomez@example.com",
      position: "HR Specialist",
      department: "Human Resources",
    },
    {
      id: 4,
      label: "Daniel Chen",
      email: "daniel.chen@example.com",
      position: "Finance Analyst",
      department: "Finance",
    },
    {
      id: 5,
      label: "Eva Thompson",
      email: "eva.thompson@example.com",
      position: "Marketing Lead",
      department: "Marketing",
    },
    {
      id: 6,
      label: "Faisal Ahmed",
      email: "faisal.ahmed@example.com",
      position: "Legal Advisor",
      department: "Legal Affairs",
    },
    {
      id: 7,
      label: "Grace Lee",
      email: "grace.lee@example.com",
      position: "UI/UX Designer",
      department: "Design",
    },
    {
      id: 8,
      label: "Hiro Tanaka",
      email: "hiro.tanaka@example.com",
      position: "Data Scientist",
      department: "R&D",
    },
    {
      id: 9,
      label: "Isabella Russo",
      email: "isabella.russo@example.com",
      position: "Operations Manager",
      department: "Operations",
    },
    {
      id: 10,
      label: "John Doe",
      email: "john.doe@example.com",
      position: "Support Engineer",
      department: "Customer Support",
    },
  ];
  const DUMMY_NAMELIST = [
    {
      id: 1,
      label: "Alice Johnson",
      email: "alice.johnson@example.com",
      position: "Project Manager",
      department: "IT",
    },
    {
      id: 2,
      label: "Bob Smith",
      email: "bob.smith@example.com",
      position: "Software Engineer",
      department: "R&D",
    },
    {
      id: 3,
      label: "Carla Gomez",
      email: "carla.gomez@example.com",
      position: "HR Specialist",
      department: "Human Resources",
    },
    {
      id: 4,
      label: "Daniel Chen",
      email: "daniel.chen@example.com",
      position: "Finance Analyst",
      department: "Finance",
    },
    {
      id: 5,
      label: "Eva Thompson",
      email: "eva.thompson@example.com",
      position: "Marketing Lead",
      department: "Marketing",
    },
    {
      id: 6,
      label: "Faisal Ahmed",
      email: "faisal.ahmed@example.com",
      position: "Legal Advisor",
      department: "Legal Affairs",
    },
    {
      id: 7,
      label: "Grace Lee",
      email: "grace.lee@example.com",
      position: "UI/UX Designer",
      department: "Design",
    },
    {
      id: 8,
      label: "Hiro Tanaka",
      email: "hiro.tanaka@example.com",
      position: "Data Scientist",
      department: "R&D",
    },
    {
      id: 9,
      label: "Isabella Russo",
      email: "isabella.russo@example.com",
      position: "Operations Manager",
      department: "Operations",
    },
    {
      id: 10,
      label: "John Doe",
      email: "john.doe@example.com",
      position: "Support Engineer",
      department: "Customer Support",
    },
  ];
  const DUMMY_SORTS = [
    { id: 1, label: "Newest First", value: "createdAt_desc" },
    { id: 2, label: "Oldest First", value: "createdAt_asc" },
    { id: 3, label: "Alphabetical (A–Z)", value: "label_asc" },
    { id: 4, label: "Alphabetical (Z–A)", value: "label_desc" },
    { id: 5, label: "Most Recently Updated", value: "updatedAt_desc" },
    { id: 6, label: "Least Recently Updated", value: "updatedAt_asc" },
    { id: 7, label: "Highest Priority", value: "priority_desc" },
    { id: 8, label: "Lowest Priority", value: "priority_asc" },
  ];
  const DUMMY_DATA = [
    {
      No: 1,
      Id: 1,
      EmployeeID: "E10234",
      FullName: "Reza Eftekhari",
      JobTitle: "CEO",
      DepartmentUnit: "Management",
      NoDays: "22 Days",
      EndOfYearBonus: "4,200,000",
      BonusesAndBenefits: "4,000,000",
      Status: "Pending",
    },
    {
      No: 2,
      Id: 2,
      EmployeeID: "E10456",
      FullName: "Sara Mohammadi",
      JobTitle: "Finance Manager",
      DepartmentUnit: "Finance",
      NoDays: "20 Days",
      EndOfYearBonus: "3,800,000",
      BonusesAndBenefits: "3,500,000",
      Status: "Approved",
    },
    {
      No: 3,
      Id: 3,
      EmployeeID: "E10987",
      FullName: "Ali Karimi",
      JobTitle: "Software Engineer",
      DepartmentUnit: "IT",
      NoDays: "18 Days",
      EndOfYearBonus: "3,500,000",
      BonusesAndBenefits: "3,000,000",
      Status: "Pending",
    },
    {
      No: 4,
      Id: 4,
      EmployeeID: "E10112",
      FullName: "Maryam Ahmadi",
      JobTitle: "HR Specialist",
      DepartmentUnit: "Human Resources",
      NoDays: "21 Days",
      EndOfYearBonus: "3,900,000",
      BonusesAndBenefits: "3,600,000",
      Status: "Approved",
    },
    {
      No: 5,
      Id: 5,
      EmployeeID: "E10678",
      FullName: "Hossein Farhadi",
      JobTitle: "Marketing Lead",
      DepartmentUnit: "Marketing",
      NoDays: "19 Days",
      EndOfYearBonus: "3,600,000",
      BonusesAndBenefits: "3,200,000",
      Status: "Pending",
    },
    {
      No: 6,
      Id: 6,
      EmployeeID: "E10543",
      FullName: "Leila Khosravi",
      JobTitle: "Operations Manager",
      DepartmentUnit: "Operations",
      NoDays: "23 Days",
      EndOfYearBonus: "4,000,000",
      BonusesAndBenefits: "3,900,000",
      Status: "Approved",
    },
    {
      No: 7,
      Id: 7,
      EmployeeID: "E10298",
      FullName: "Amir Hosseini",
      JobTitle: "UI/UX Designer",
      DepartmentUnit: "Design",
      NoDays: "20 Days",
      EndOfYearBonus: "3,700,000",
      BonusesAndBenefits: "3,300,000",
      Status: "Pending",
    },
    {
      No: 8,
      Id: 8,
      EmployeeID: "E10177",
      FullName: "Fatemeh Norouzi",
      JobTitle: "Project Manager",
      DepartmentUnit: "Projects",
      NoDays: "22 Days",
      EndOfYearBonus: "4,100,000",
      BonusesAndBenefits: "3,950,000",
      Status: "Approved",
    },
  ];
  const tableColumns = [
    { key: "people", label: "People" },
    { key: "jobTitle", label: "Job Title" },
    { key: "department", label: "Department" },
    { key: "organization", label: "Entire Organization" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];

  const tableProps = {
    data: DUMMY_DATA,
    columns: tableColumns,
    onOpenEditDialog: () => {
      setIsEditMode(true);
      setIsShowMode(false);
      onOpen();
    },
    onOpenShowDialog: () => {
      setIsEditMode(false);
      setIsShowMode(true);
      onOpen();
    },
    hasPagination: true,
    hasPadding: true,
    hasShadow: true,
    hasRowBorder: true,
    selectionMode: "multiple",
  };
  const { id } = useParams();
  const boxData = DUMMY_DATA.find((b) => b.Id === Number(id));

  if (!boxData) return <div>Box not found</div>;

  return (
    <SalaryCalculationsLayout
      props={{
        children: (
          <>
            <PageHeader
              props={{
                children: (
                  <SalaryDetailTabs
                    props={{
                      data: {
                        DUMMY_SORTS,
                        DUMMY_NAMELIST,
                        DUMMY_EMPLOYEES,
                      },
                    }}
                  />
                ),
              }}
            />
            <div className="w-full h-full rounded-4">
              <div className="h-full min-h-fit w-full">
                <div className="flex gap-4 h-full min-h-fit">
                  <div className={`relative w-full`}>
                    <AppTable props={tableProps} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      }}
    />
  );
}
