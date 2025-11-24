import type React from "react";
import { agentTemplates } from "@/lib/agent-templates";
import { SelectNative } from "@/components/ui/select-native";

interface AgentSelectorProps {
  onSelectTemplate: (prompt: string) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({ onSelectTemplate }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTemplateId = event.target.value;
    const selectedTemplate = agentTemplates.find((template) => template.id === selectedTemplateId);
    if (selectedTemplate) {
      onSelectTemplate(selectedTemplate.predefinedPrompt);
    }
  };

  return (
    <SelectNative onChange={handleChange} defaultValue="" className="rounded-sm px-2 py-2 pr-8 text-right text-xs outline-none">
      <option value="" disabled>
        Seleccionar Perfil de Agente
      </option>
      {agentTemplates.map((template) => (
        <option key={template.id} value={template.id}>
          {template.title}
        </option>
      ))}
    </SelectNative>
  );
};

export default AgentSelector;
