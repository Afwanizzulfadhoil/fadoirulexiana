"use client";

import { useState } from "react";
import Link from "next/link";

export default function Card() {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
            <p>This is a simple card component.</p>
        </div>
    );
}