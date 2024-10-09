import { ImageResponse } from 'next/og'
import React from 'react'


export const runtime = "edge"

export const size = {
    width: 56,
    height: 56,
}


export const contentType = "image/png"

export default function icon() {
    return new ImageResponse(
        (
        <div style={{
            fontSize: 32, 
            height: "100%", 
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
            backgroundColor: "%172554", 
            color: "#93c5fd",
            borderRadius: "10%",
        }}>
            FN
        </div>
        ),
        {
            ...size,
        }
    );
}
