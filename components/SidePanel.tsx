import React from 'react'
import { useDraggable } from "@dnd-kit/core";
import { COMPONENT } from '@/lib/utils';
import { useComponentContext } from '@/context/ComponentContext';
import { v4 as cuid } from 'uuid'


interface SidePanelProps {
    components: string[];
}

const Component = ({ title }: { title: string }) => {
    const { setNodeRef, transform, listeners, attributes } = useDraggable({
        id: `${COMPONENT}-${title}`, // COMPONENT-Button for button
        data: { type: title, id: cuid(), properties: {} },
    });
    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;
    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="component px-4 py-2 text-center text-white font-bold text-lg bg-blue-500 mx-6 mb-5 rounded-xl"
        >
            {title}
        </div>
    );
};

const SidePanel = ({ components }: SidePanelProps) => {
    const { components: draggedItems } = useComponentContext();

    return (
        <div className="w-3/12 bg-zinc-200 poppins-regular ">
            <div className="my-10">
                <p className="text-center px-2 mt-20 text-xl font-bold">
                    Drag and Drop the component to Control Panel to add to the form
                </p>
            </div>
            <div className="" id="componets">
                {components.map((component: string) => (
                    <Component key={component} title={component} />
                ))}
            </div>
            <div className="text-center">
                <a
                    className="text-black underline text-lg"
                    style={{ margin: 10 }}
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                        JSON.stringify(draggedItems)
                    )}`}
                    download="data.json"
                >
                    Download JSON
                </a>
            </div>
        </div>
    )
}

export default SidePanel