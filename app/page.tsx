'use client'
import SidePanel from "@/components/SidePanel";
import { DndContext,DragEndEvent } from "@dnd-kit/core";
import { useComponentContext } from "@/context/ComponentContext";
import ControlPanel from "@/components/ControlPanel";
import PropertyPanel from "@/components/PropertyPanel";



export default function Home() {
   const { onDragEnd } = useComponentContext();
  return (
    <div className="w-screen h-screen flex">
      <DndContext onDragEnd={onDragEnd} id="unique-dnd-context-id">
        <SidePanel components={["Button", "Input", "Radio"]} />
        <ControlPanel />
        <PropertyPanel/>
      </DndContext>
    </div>
  );
}
