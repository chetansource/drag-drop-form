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

export function renderProptiyFields(component: Component) {
    if (!!component) {
        if (component.type === "Input") {
            return ["placeholder", "label", "type"];
        } else if (component.type === "Button") {
            return ["title", "style"];
        }
    }
    return [];
}
