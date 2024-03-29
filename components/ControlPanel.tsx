import React from "react";
import { useDroppable } from "@dnd-kit/core";
import Button from "./ui/button";
import Input from "./ui/input";
import { useComponentContext } from "@/context/ComponentContext";

declare interface Properties {
  title?: string;
  style?: string;
  placeholder?: string;
  label?: string;
}

declare interface Component {
  type: string;
  id: string;
  properties: Properties;
}


interface Props {
  component: Component;
}

const RenderComponent = ({ component }: Props) => {
  if (component.type.toLowerCase() === "button") {
    return <Button {...component.properties} />;
  } else if (component.type.toLowerCase() === "input") {
    return <Input {...component.properties} />;
  }
  return <Button title="button" />;
};

const ControlPanel = () => {
  const { components: draggedComponents, setSelectedComponent } =
    useComponentContext();
  const { isOver, setNodeRef } = useDroppable({ id: "drop-container" });
  return (
    <div
      ref={setNodeRef}
      className={
        isOver
          ? "w-6/12 bg-gray-600 overflow-y-scroll"
          : "w-6/12 bg-gray-800 overflow-y-scroll"
      }
    >
      <div className="list flex items-center justify-center mx-auto py-10 overflow-scroll w-9/12 space-y-6 flex-col text-red">
        {draggedComponents &&
          draggedComponents.length > 0 &&
          draggedComponents.map((component, index) => (
            <div
              key={index}
              onClick={(e) => setSelectedComponent(component)}
              className={"py-1 relative px-2 border-2 w-full"}
            >
              <div className="absolute top-0 left-0 opacity-5 z-50 w-full h-full bg-white" />
              <RenderComponent component={component} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ControlPanel;
