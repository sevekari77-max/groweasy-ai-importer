"use client";

import { useState } from "react";
import UploadForm from "./components/UploadForm";
import PreviewTable from "./components/PreviewTable";
import { PreviewResponse } from "../types/import";

export default function Home() {
  const [preview, setPreview] = useState<PreviewResponse | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold">
            GrowEasy AI CSV Importer
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Upload a CSV file and let AI transform it into CRM-ready leads in seconds.
          </p>
        </header>

        {/* Content */}
        <div className="flex flex-col items-center gap-10">
          <UploadForm setPreview={setPreview} />

          {preview && <PreviewTable preview={preview} />}
        </div>

      </div>
    </main>
  );
}