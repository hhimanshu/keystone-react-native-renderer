import React from "react";

import {DocumentRendererProps} from '@keystone-6/document-renderer';
import {Text} from "react-native";

export const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
        bold: ({children}) => {
            return <Text style={{fontWeight: "bold"}}>{children}</Text>;
        },
        italic: ({children}) => {
            return <Text style={{fontStyle: "italic"}}>{children}</Text>;
        },
        underline: ({children}) => {
            return <Text style={{textDecorationLine: "underline"}}>{children}</Text>;
        },

    },
    block: {
        paragraph: ({children, textAlign}) => {
            return <Text style={{textAlign: "center"}}>{children}</Text>;
        },
        heading: ({level, children, textAlign}) => {
            if (level === 1) {
                return <Text style={{fontSize: 32}}>{children}</Text>
            }
            return <Text>{children}</Text>
        }
    },
};