import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { Edit, Trash } from "iconsax-react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

import { AppPagination } from "@/components/AppPagination.tsx";
import { CloseIcon } from "@/icons/CloseIcon.tsx";

const AddModalInnerTableIndividualOrder = ({ props }: { props: any }) => {
  const {
    data,
    columns,
    onOpenEditDialog,
    hasPagination = true,
    hasPadding = true,
    hasShadow = true,
    hasRowBorder = true,
  } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (!data.length) return <div className="p-4">No data available</div>;

  const autoColumns =
    columns ||
    Object.keys(data[0])
      .filter((key) => key !== "id")
      .map((key) => ({ key, label: key }));

  const renderActions = () => (
    <div className="relative flex items-center justify-center gap-2">
      <Tooltip content="Edit">
        <Button
          className="!min-w-fit !p-0 !w-4 !h-4 !rounded-0 !bg-transparent"
          onPress={onOpenEditDialog}
        >
          <span className="text-lg cursor-pointer">
            <Edit size="16" />
          </span>
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          className="!min-w-fit !p-0 !w-4 !h-4 !rounded-0 !bg-transparent"
          onPress={onOpen}
        >
          <span className="text-lg cursor-pointer">
            <Trash size="16" />
          </span>
        </Button>
      </Tooltip>
    </div>
  );

  return (
    <div
      className={`bg-white dark:bg-info-1000 pb-4 h-full !rounded-[14px] ${hasShadow && "shadow-shadow-light-tight/1"}`}
    >
      <Table
        aria-label="Customizable Table"
        className="!h-[95%]"
        classNames={{
          th: hasPadding && `first:pl-9 last:pr-9 px-7`,
        }}
      >
        <TableHeader className="!rounded-0">
          {autoColumns.map((col: any) => (
            <TableColumn
              key={col.key}
              className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] !rounded-0 text-center !h-12"
            >
              {col.label}
            </TableColumn>
          ))}
          <TableColumn className="text-secondary-1000 dark:text-white text-sm font-normal bg-primary-50 dark:bg-[rgba(4,66,92,0.60)] text-center">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow
              key={row.id ?? index}
              className={`${hasRowBorder && "border-b border-[#dcf0f966] dark:border-[#04425c66]"} hover:bg-surface dark:hover:bg-[#04425c66] !rounded-4 transition-colors !h-12`}
            >
              {autoColumns.map((col: any) => (
                <TableCell
                  key={col.key}
                  className="text-xs font-normal text-secondary-400 dark:text-secondary-0 text-center"
                >
                  {row[col.key] ??
                    (col.key.toLowerCase().includes("date") ? "Present" : "")}
                </TableCell>
              ))}
              <TableCell className="text-xs font-normal text-secondary-400 dark:text-secondary-0">
                {renderActions()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {hasPagination && (
        <div className="flex justify-end">
          <AppPagination
            props={{
              size: "md",
              total: data.length,
            }}
          />
        </div>
      )}
      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="rounded-[12px] bg-white/30 shadow-md backdrop-blur-[40px] p-12">
          {(onClose) => (
            <>
              <ModalHeader>
                <div className="flex justify-between items-center w-full">
                  <div className="bg-danger flex gap-2 !rounded-4 !px-3 !py-1.5 items-center">
                    <Trash className="text-white" size="18" />
                    <span className="text-xl text-white font-normal leading-normal">
                      Would it be acceptable for you to remove this?
                    </span>
                  </div>
                  <Button
                    className="!w-6 !h-6 !p-0 !min-w-fit !rounded-0"
                    variant="light"
                    onPress={onClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </ModalHeader>
              <ModalFooter>
                <Button
                  className="text-secondary-800 !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  color="default"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-danger text-white !px-3 !py-1.5 !rounded-4 !font-normal !min-w-fit"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddModalInnerTableIndividualOrder;

// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableColumn,
//   TableRow,
//   TableCell,
// } from "@heroui/table";
// import { Tooltip } from "@heroui/tooltip";
// import { Edit, Trash } from "iconsax-react";
// import {
//   Button, Checkbox, Input,
//   Modal,
//   ModalContent,
//   ModalFooter,
//   ModalHeader, Select, SelectItem,
//   useDisclosure
// } from "@heroui/react";
//
// import { AppPagination } from "@/components/AppPagination.tsx";
// import { CloseIcon } from "@/icons/CloseIcon.tsx";
// import { useRef } from "react";
//
// const AddModalInnerTable = ({ props }: { props: any }) => {
//   const formRef = useRef();
//
//   // This would come from your backend - static configuration
//   const tableConfig = {
//     columns: [
//       {
//         key: "no",
//         label: "No.",
//         type: "display"
//       },
//       {
//         key: "list",
//         label: "List",
//         type: "select",
//         options: [
//           { key: "123456", label: "123456" },
//           { key: "789012", label: "789012" },
//           { key: "345678", label: "345678" }
//         ],
//         placeholder: "Select list"
//       },
//       {
//         key: "primeNumber",
//         label: "Prime Number",
//         type: "input",
//         inputType: "text",
//         placeholder: "0.00"
//       },
//       {
//         key: "eleman",
//         label: "Eleman",
//         type: "select",
//         options: [
//           { key: "option1", label: "Option 1" },
//           { key: "option2", label: "Option 2" },
//           { key: "option3", label: "Option 3" }
//         ],
//         placeholder: "—"
//       },
//       {
//         key: "coefficient",
//         label: "Coefficient",
//         type: "input",
//         inputType: "number",
//         suffix: "%",
//         placeholder: "0"
//       },
//       {
//         key: "fixedNumber",
//         label: "Fixed Number",
//         type: "input",
//         inputType: "number",
//         placeholder: "0"
//       },
//       {
//         key: "calculationInEid",
//         label: "Calculation in Eid",
//         type: "checkbox"
//       },
//       {
//         key: "years",
//         label: "Years",
//         type: "checkbox"
//       },
//       {
//         key: "actions",
//         label: "Actions",
//         type: "actions"
//       }
//     ]
//   };
//
//   // Static initial data from backend
//   const initialTableData = [
//     {
//       id: 1,
//       no: 1,
//       list: '123456',
//       primeNumber: '10,000.00',
//       eleman: '',
//       coefficient: 20,
//       fixedNumber: 212,
//       calculationInEid: true,
//       years: true
//     },
//     {
//       id: 2,
//       no: 2,
//       list: '',
//       primeNumber: '',
//       eleman: '',
//       coefficient: 0,
//       fixedNumber: '',
//       calculationInEid: false,
//       years: false
//     }
//   ];
//
//   // Submit function to collect all form data
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(formRef.current);
//
//     // Process form data into structured format
//     const submissionData = [];
//
//     initialTableData.forEach((row) => {
//       const rowData = { id: row.id };
//
//       tableConfig.columns.forEach((column) => {
//         if (column.type !== 'display' && column.type !== 'actions') {
//           const fieldName = `${row.id}-${column.key}`;
//
//           if (column.type === 'checkbox') {
//             rowData[column.key] = formData.has(fieldName);
//           } else {
//             rowData[column.key] = formData.get(fieldName) || '';
//           }
//         } else if (column.type === 'display') {
//           rowData[column.key] = row[column.key];
//         }
//       });
//
//       submissionData.push(rowData);
//     });
//
//     console.log('Submitted Data:', submissionData);
//     // Here you would send submissionData to your backend
//   };
//
//   // Your existing actions function
//   const renderActions = () => (
//     <div className="flex gap-2">
//       <Button size="sm" variant="light" isIconOnly>
//         ✏️
//       </Button>
//       <Button size="sm" variant="light" isIconOnly color="danger">
//         🗑️
//       </Button>
//     </div>
//   );
//
//   // Dynamic cell renderer without state management
//   const renderCell = (item, column) => {
//     const value = item[column.key];
//     const fieldName = `${item.id}-${column.key}`;
//
//     switch (column.type) {
//       case 'display':
//         return <span className="text-sm">{value}</span>;
//
//       case 'input':
//         return (
//           <div className="flex items-center gap-1">
//             <Input
//               name={fieldName}
//               size="sm"
//               type={column.inputType || 'text'}
//               placeholder={column.placeholder || ''}
//               defaultValue={value?.toString() || ''}
//               className="min-w-[100px]"
//             />
//             {column.suffix && (
//               <span className="text-sm text-gray-500">{column.suffix}</span>
//             )}
//           </div>
//         );
//
//       case 'select':
//         return (
//           <Select
//             name={fieldName}
//             size="sm"
//             placeholder={column.placeholder || 'Select'}
//             defaultSelectedKeys={value ? [value] : []}
//             className="min-w-[120px]"
//           >
//             {column.options?.map((option) => (
//               <SelectItem key={option.key} value={option.key}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>
//         );
//
//       case 'checkbox':
//         return (
//           <Checkbox
//             name={fieldName}
//             defaultSelected={!!value}
//             size="sm"
//           />
//         );
//
//       case 'actions':
//         return (
//           <div className="text-xs font-normal text-secondary-400 dark:text-secondary-0">
//             {renderActions()}
//           </div>
//         );
//
//       default:
//         return <span className="text-sm">{value}</span>;
//     }
//   };
//
//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//
//       <form ref={formRef} onSubmit={handleSubmit}>
//         <Table
//           aria-label="Dynamic computational coefficients table"
//           className="min-w-full"
//         >
//           <TableHeader>
//             {tableConfig.columns.map((column) => (
//               <TableColumn key={column.key} className="text-xs font-semibold">
//                 {column.label}
//               </TableColumn>
//             ))}
//           </TableHeader>
//
//           <TableBody>
//             {initialTableData.map((item) => (
//               <TableRow key={item.id}>
//                 {tableConfig.columns.map((column) => (
//                   <TableCell key={`${item.id}-${column.key}`}>
//                     {renderCell(item, column)}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//
//       </form>
//     </div>
//   );
// };
//
// export default AddModalInnerTable;
