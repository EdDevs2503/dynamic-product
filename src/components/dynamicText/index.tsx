import { CSSProperties, ReactElement, useMemo, } from "react";
import { texts, colors } from "../../common";

export interface props {
    weight: "normal" | "bold" | "extraBold",
    type: "h1" | "h2" | "normal" | "small" | "tiny",
    color?: string,
    content: string
}

const DynamicText = ({content, type, color, weight}: props): ReactElement => {

    if (type === "h1") {
        return(
            <h1 style={{color, fontSize: texts.textSize[type], fontWeight: texts.textWeight[weight]}}>{content}</h1>
        )
    }
    if (type === "h2") {
        return(
            <h2 style={{color, fontSize: texts.textSize[type], fontWeight: texts.textWeight[weight]}}>{content}</h2>
        )
    }
    return(
        <p style={{color, fontSize: texts.textSize[type], fontWeight: texts.textWeight[weight]}}>{content}</p>
    )
}

export default DynamicText