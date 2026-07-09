"use client";

import { useState, Dispatch, SetStateAction } from "react";
import {Upload,CheckCircle,FileSpreadsheet,} from "lucide-react";
import { PreviewResponse } from "../../types/import";
import { API_URL } from "../../lib/api";

interface UploadFormProps {
  setPreview: Dispatch<SetStateAction<PreviewResponse | null>>;
}

export default function UploadForm({
  setPreview,
}: UploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
       `${API_URL}/api/import/preview`,
       {
         method: "POST",
         body: formData,
       }
     );

      if (!response.ok) {
        throw new Error("Failed to upload CSV.");
      }

      const data: PreviewResponse = await response.json();

      setPreview(data);
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl rounded-2xl border border-gray-700 bg-neutral-900 p-8 shadow-2xl">

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">
          GrowEasy AI CSV Importer
        </h1>

        <p className="mt-2 text-gray-400">
          Upload your CSV and let AI convert it into CRM-ready leads.
        </p>
      </div>

      <input
        id="csv-upload"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];

          if (selectedFile) {
            setFile(selectedFile);
          }
        }}
      />

      <label
        htmlFor="csv-upload"
        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-600 bg-neutral-800 p-8 transition hover:border-blue-500 hover:bg-neutral-700"
      >
        <FileSpreadsheet
          size={40}
          className="text-blue-400"
        />

        <span className="text-lg font-semibold">
          Select CSV File
        </span>

        <span className="text-sm text-gray-400">
          Click here to browse your computer
        </span>
      </label>

      <div className="mt-5 min-h-[32px]">
        {file ? (
          <div className="flex items-center gap-2 rounded-lg border border-green-700 bg-green-900/20 px-4 py-3 text-green-400">
            <CheckCircle size={18} />

            <span className="truncate font-medium">
              {file.name}
            </span>
          </div>
        ) : (
          <div className="rounded-lg border border-gray-700 bg-neutral-800 px-4 py-3 text-center text-gray-400">
            No file selected
          </div>
        )}
      </div>

      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-500"
      >
        <Upload size={20} />

        {loading ? "Uploading..." : "Upload CSV"}
      </button>

    </div>
  );
}