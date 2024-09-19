'use server';

import { supabase } from "@/lib/supabase/client";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { redirect } from "next/navigation";

// Initialize the S3 client
const s3Client = new S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    }
});

// Function to upload a file to S3
async function uploadFileToS3(fileBuffer, fileName) {
    const params = {
        Bucket: "sithaana-web-storage",
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: "image/jpeg", // Adjust as necessary based on actual file type
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    // Return the file URL
    const fileUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
    return fileUrl;
}

// Function to add a product and upload its picture
export async function addProduct(formData) {
    const name = formData.get('name');
    const category = formData.get('category');
    const itemNumber = formData.get('itemno');
    const forSale = formData.get('forsale');
    const saleAmount = formData.get('saleamt');
    const picture = formData.get('picture'); // This should be a File object
    const price = formData.get('price');

        const buffer = Buffer.from(await picture.arrayBuffer());
        const fileUrl = await uploadFileToS3(buffer, picture.name);

        // Insert product details into Supabase table
        const { data, error } = await supabase
            .from('products')
            .insert([{
                name,
                category,
                itemNumber,
                forSale,
                saleAmount,
                picture: fileUrl, // Use the file URL returned
                price
            }]);

        redirect('/admin/products')
      
}
