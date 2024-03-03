"use client"

import {ArrowLeft, ArrowRight} from "@phosphor-icons/react";

export function PRightArrow(properties: { size?: number }) {
    return <ArrowRight size={properties.size} weight="bold"/>
}

export function PLeftArrow(properties: { size?: number }) {
    return <ArrowLeft weight="bold" size={properties.size}/>
}