'use client'

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/dropzone'
import { useSupabaseUpload } from '@/hooks/use-supabase-upload'

const FileUploadDemo = () => {
    const props = useSupabaseUpload({
        bucketName: 'CV',
        path: '',
        allowedMimeTypes: ['application/pdf'],
        maxFiles: 1,
        maxFileSize: 1000 * 1000 * 0.5, // 10MB,
    })

    return (
        <div className="w-[500px]">
        <Dropzone {...props}>
            <DropzoneEmptyState />
            <DropzoneContent />
        </Dropzone>
        </div>
    )
}

export { FileUploadDemo }
