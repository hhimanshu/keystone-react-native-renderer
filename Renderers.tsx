import { DocumentRendererProps } from '@keystone-6/document-renderer';
import {Text} from "react-native";

export const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
        bold: ({ children }) => {
            return <strong>{children}</strong>;
        },
    },
    block: {
        paragraph: ({ children, textAlign }) => {
            return <Text>{children}</Text>;
        },
    },
};