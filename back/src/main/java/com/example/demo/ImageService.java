package com.example.demo;


import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.InputStream;


@Service
public class ImageService {
    @Autowired
    private AmazonS3 amazonS3;

    @Value("${app.s3.bucket}")
    private String bucketName;

    public String uploadFile(byte[] bi, String type) {
        ObjectMetadata metadata = new ObjectMetadata();
        InputStream fis = new ByteArrayInputStream(bi);
        metadata.setContentLength(bi.length);
        metadata.setContentType(type);
        type = type.substring(type.indexOf("/") + 1);
        amazonS3.putObject(new PutObjectRequest(bucketName, "image." + type, fis, metadata));
        return amazonS3.getUrl(bucketName, "image." + type).toString();
    }

    public S3Object downloadFile(String fileName) {
        return amazonS3.getObject(new GetObjectRequest(bucketName, fileName));
    }

    public void deleteFile(String fileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucketName, fileName));
    }
}
