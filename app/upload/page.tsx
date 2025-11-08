import { FileUploadDemo } from "./uploadform";

export default function UploadPage() {
    return (
        <div className="flex h-svh w-full flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">CV Upload</h1>
            <p>Upload your CV here, </p>
            <FileUploadDemo/>
        </div>
    )
}