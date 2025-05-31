import { useState } from "react";
import {
  Button,
  Autocomplete,
  AutocompleteItem,
  Badge,
  Modal,
  ModalContent,
  ModalHeader,
} from "@heroui/react";

const options = [
  { id: "ui", label: "UI" },
  { id: "ux", label: "UX" },
  { id: "industrial", label: "Industrial" },
  { id: "natural", label: "Natural resource jobs" },
  { id: "languages", label: "Languages" },
  { id: "office", label: "Office" },
];

const MultiSelectField = ({ label, selected, setSelected }: any) => {
  const handleChange = (key: string) => {
    setSelected(
      selected.includes(key)
        ? selected.filter((k:any) => k !== key)
        : [...selected, key],
    );
  };

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-white">{label} *</label>
      <Autocomplete
        label={`Choose ${label}`}
        multiple
        // selectedKeys={selected}
        onSelectionChange={(key) => handleChange(key as string)}
      >
        {options.map((opt) => (
          <AutocompleteItem key={opt.id}>{opt.label}</AutocompleteItem>
        ))}
      </Autocomplete>

      <div className="flex flex-wrap gap-2 mt-2">
        {selected.map((key: any) => {
          const label = options.find((o) => o.id === key)?.label || key;

          return (
            <Badge key={key} className="bg-blue-100 text-blue-800">
              {label}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default function EditHardSkillsModal() {
  const [open, setOpen] = useState(true);

  const [skills, setSkills] = useState<string[]>([]);
  const [industrials, setIndustrials] = useState<string[]>([]);
  const [fields, setFields] = useState<string[]>([]);

  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <ModalContent className="sm:max-w-2xl bg-gray-800 text-white">
        <ModalHeader>
          <span className="text-white text-lg flex items-center gap-2">
            💡 Edit Hard Skills
          </span>
        </ModalHeader>

        <div className="space-y-4 mt-4">
          <MultiSelectField
            label="Skills"
            selected={skills}
            setSelected={setSkills}
          />
          <MultiSelectField
            label="Industrial"
            selected={industrials}
            setSelected={setIndustrials}
          />
          <MultiSelectField
            label="Field"
            selected={fields}
            setSelected={setFields}
          />
        </div>

        <div className="flex justify-end mt-6 gap-2">
          <Button variant="ghost" onPress={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onPress={() => setOpen(false)}>Save Changes</Button>
        </div>
      </ModalContent>
    </Modal>
  );
}
